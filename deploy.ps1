# ============================================================
#  Personal website one-click deploy script (Windows PowerShell)
#  Usage:  .\deploy.ps1
#
#  Steps:
#    1. npm run build locally
#    2. upload dist/ to the remote server via scp
#    3. verify the live URL returns HTTP 200
#
#  Server config is read from deploy.config.json (NOT committed).
#  First time: copy deploy.config.example.json to deploy.config.json
#  and fill in your server details.
# ============================================================

[CmdletBinding()]
param(
    [string]$ConfigPath = ""
)

$ErrorActionPreference = "Continue"

# ---------- locate project root ----------
$ScriptDir   = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = $ScriptDir
Set-Location $ProjectRoot

function Write-Step($msg) { Write-Host "`n==> $msg" -ForegroundColor Cyan }
function Write-Ok($msg)   { Write-Host "  [OK] $msg" -ForegroundColor Green }
function Write-Warn2($msg){ Write-Host "  [!]  $msg" -ForegroundColor Yellow }
function Die($msg)        { Write-Host "`n[ERROR] $msg`n" -ForegroundColor Red; exit 1 }

# ---------- load config ----------
if (-not $ConfigPath) { $ConfigPath = Join-Path $ProjectRoot "deploy.config.json" }

if (-not (Test-Path $ConfigPath)) {
    Die "Config file not found: $ConfigPath`nCopy deploy.config.example.json to deploy.config.json and fill in your server info."
}

$Config = Get-Content $ConfigPath -Raw -Encoding UTF8 | ConvertFrom-Json
$ServerUser = $Config.serverUser
$ServerHost = $Config.serverHost
$RemoteDir  = $Config.remoteDir
$SiteUrl    = $Config.siteUrl
$SshPort    = if ($Config.sshPort) { $Config.sshPort } else { 22 }

if (-not $ServerUser -or -not $ServerHost -or -not $RemoteDir -or -not $SiteUrl) {
    Die "Config is missing required fields (serverUser / serverHost / remoteDir / siteUrl)."
}

$Password = $Config.password
if (-not $Password) { $Password = $env:DEPLOY_PASSWORD }
if (-not $Password) {
    $sec = Read-Host "Enter server password" -AsSecureString
    $Password = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec))
}

# ---------- build remote command (runs in bash on the server) ----------
$RemoteCmd = "mkdir -p '$RemoteDir' && rm -rf '$RemoteDir'/* && echo ready"

# ---------- create a temporary askpass helper ----------
$TempDir = Join-Path $env:TEMP ("xiaoming-deploy-" + (Get-Random))
New-Item -ItemType Directory -Path $TempDir -Force | Out-Null
$AskPass = Join-Path $TempDir "askpass.cmd"
Set-Content -Path $AskPass -Encoding ASCII -Value ("@echo off`r`necho " + $Password)

$SshOpts = @(
    "-o", "StrictHostKeyChecking=no",
    "-o", "UserKnownHostsFile=NUL",
    "-o", "ConnectTimeout=15"
)
$ScpOpts = $SshOpts + @("-P", $SshPort)
$SshExe  = @("-p", $SshPort) + $SshOpts

$env:SSH_ASKPASS = $AskPass
$env:SSH_ASKPASS_REQUIRE = "force"
$env:DISPLAY = ":0"

try {
    # ---------- 1. build ----------
    Write-Step "Building project (npm run build)..."
    # Redirect npm cache to temp to avoid permission issues in restricted environments
    $env:npm_config_cache = Join-Path $env:TEMP "npm-cache-deploy"
    $buildOutput = & npm run build 2>&1
    $buildOutput | ForEach-Object { Write-Host "  $_" -ForegroundColor DarkGray }

    $DistIndex = Join-Path $ProjectRoot "dist\index.html"
    if (-not (Test-Path $DistIndex)) { Die "Build failed: dist/index.html was not produced." }
    Write-Ok "Build complete"

    # ---------- 2. connect ----------
    Write-Step "Connecting to $ServerUser@$ServerHost ..."
    $HostName = & ssh @SshExe "$ServerUser@$ServerHost" "hostname" 2>&1
    if ($LASTEXITCODE -ne 0) { Die "SSH connection failed: $HostName" }
    Write-Ok "Connected: $HostName"

    # ---------- 3. prepare remote dir ----------
    Write-Step "Preparing remote directory $RemoteDir ..."
    $prep = & ssh @SshExe "$ServerUser@$ServerHost" $RemoteCmd 2>&1
    $prep | ForEach-Object { Write-Host "  $_" }
    if ($LASTEXITCODE -ne 0) { Die "Failed to prepare remote directory." }
    Write-Ok "Remote directory ready"

    # ---------- 4. upload ----------
    Write-Step "Uploading dist/ to server..."
    $DistGlob = (Join-Path $ProjectRoot "dist") + "\*"
    $upload = & scp @ScpOpts -r $DistGlob "${ServerUser}@${ServerHost}:$RemoteDir/" 2>&1
    $upload | ForEach-Object { Write-Host "  $_" }
    if ($LASTEXITCODE -ne 0) { Die "Upload failed." }
    Write-Ok "Upload complete"

    # ---------- 5. remote verify ----------
    Write-Step "Verifying on server..."
    $remoteCheck = & ssh @SshExe "$ServerUser@$ServerHost" "ls -la '$RemoteDir/'; echo '---'; curl -s -k -o /dev/null -w 'local HTTP: %{http_code}\n' '$SiteUrl'" 2>&1
    $remoteCheck | ForEach-Object { Write-Host "  $_" }

    # ---------- 6. public verify ----------
    Write-Step "Verifying public access $SiteUrl ..."
    try {
        # Use WebClient with UTF-8 so Chinese characters in <title> render correctly
        $wc = New-Object System.Net.WebClient
        $wc.Encoding = [System.Text.Encoding]::UTF8
        $html = $wc.DownloadString($SiteUrl)
        Write-Ok "Public access OK (content fetched)"
        if ($html -match "<title>(.*?)</title>") {
            Write-Host "  Page title: $($Matches[1])" -ForegroundColor DarkGray
        }
    } catch {
        Write-Warn2 "Public verification request failed: $($_.Exception.Message)"
        Write-Warn2 "Files were uploaded. Please open $SiteUrl in your browser."
    }

    Write-Host ""
    Write-Host "Deploy finished! Visit $SiteUrl" -ForegroundColor Green
    Write-Host ""
}
finally {
    Remove-Item -Recurse -Force $TempDir -ErrorAction SilentlyContinue
    $env:SSH_ASKPASS = $null
    $env:SSH_ASKPASS_REQUIRE = $null
    $env:DISPLAY = $null
}
