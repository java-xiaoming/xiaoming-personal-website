/* ============================================================
   智小天高保真原型 - Mock 数据
   挂载到 window.ZXT_MOCK，按模块命名空间
   ============================================================ */
(function () {
  'use strict';

  // 头像生成器：内联 SVG 渐变剪影，完全离线，无需网络
  var AVATAR_PALETTE = [
    ['#24bab4', '#28b1e8'], ['#7c5cff', '#a78bff'], ['#f472b6', '#fb923c'],
    ['#22d3ee', '#3b82f6'], ['#34d399', '#24bab4'], ['#f59e0b', '#ef4444'],
    ['#a78bfa', '#ec4899'], ['#60a5fa', '#22d3ee']
  ];
  var AVATAR = function (n) {
    var c = AVATAR_PALETTE[n % AVATAR_PALETTE.length];
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + c[0] + '"/><stop offset="1" stop-color="' + c[1] + '"/>' +
      '</linearGradient></defs>' +
      '<rect width="200" height="200" fill="url(#g)"/>' +
      '<circle cx="100" cy="78" r="36" fill="rgba(255,255,255,.92)"/>' +
      '<path d="M34 184c0-36 30-60 66-60s66 24 66 60z" fill="rgba(255,255,255,.92)"/>' +
      '</svg>';
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  };
  // 封面生成器：picsum 在线图（加载失败时各页面有兜底样式）
  var COVER = function (seed, w, h) {
    return 'https://picsum.photos/seed/' + seed + '/' + (w || 320) + '/' + (h || 560);
  };

  window.ZXT_MOCK = {

    /* ============================================================
       数字人模块
       ============================================================ */
    digitalHuman: {
      // 我的形象
      avatars: [
        { id: 'dh-001', name: '林晓', nameEn: 'Lin Xiao', role: '商务主播', roleEn: 'Business Host',
          status: 'ready', createdAt: '2026-08-12', photoUrl: AVATAR(47),
          generatedCount: 12, authorized: true, provider: 'inhouse' },
        { id: 'dh-002', name: '陈默', role: '知识博主', status: 'training', progress: 64,
          createdAt: '2026-08-21', photoUrl: AVATAR(12), authorized: true },
        { id: 'dh-003', name: '苏晴', role: '带货主播', status: 'failed',
          failReason: '训练视频中人脸清晰度不足，请重新上传',
          createdAt: '2026-08-19', photoUrl: AVATAR(32), authorized: true },
        { id: 'dh-004', name: '周子航', role: '企业宣讲', status: 'pending',
          createdAt: '2026-08-22', photoUrl: AVATAR(68), authorized: true },
        { id: 'dh-005', name: '叶知秋', role: '情感博主', status: 'ready',
          createdAt: '2026-08-15', photoUrl: AVATAR(49),
          generatedCount: 28, authorized: true },
        { id: 'dh-006', name: '顾辰', role: '科技测评', status: 'ready',
          createdAt: '2026-08-10', photoUrl: AVATAR(15),
          generatedCount: 45, authorized: true },
        { id: 'dh-007', name: '夏晚', role: '教育讲师', status: 'training', progress: 28,
          createdAt: '2026-08-22', photoUrl: AVATAR(45), authorized: true },
        { id: 'dh-008', name: '陆星河', role: '新闻播报', status: 'ready',
          createdAt: '2026-08-08', photoUrl: AVATAR(33),
          generatedCount: 8, authorized: true }
      ],

      // 我的视频
      videos: [
        { id: 'v-001', title: '新品发布开场', avatarId: 'dh-001', durationSec: 48,
          createdAt: '2026-08-18', thumbnail: COVER('v1', 400, 600), platform: 'douyin' },
        { id: 'v-002', title: '企业文化宣讲·第三版', avatarId: 'dh-004', durationSec: 92,
          createdAt: '2026-08-17', thumbnail: COVER('v2', 400, 600), platform: 'shipinhao' },
        { id: 'v-003', title: '产品使用教程 01', avatarId: 'dh-006', durationSec: 65,
          createdAt: '2026-08-16', thumbnail: COVER('v3', 400, 600), platform: 'douyin' },
        { id: 'v-004', title: '教师节祝福', avatarId: 'dh-007', durationSec: 30,
          createdAt: '2026-08-15', thumbnail: COVER('v4', 400, 600), platform: 'xhs' },
        { id: 'v-005', title: '每周科技资讯', avatarId: 'dh-006', durationSec: 120,
          createdAt: '2026-08-14', thumbnail: COVER('v5', 400, 600), platform: 'bilibili' },
        { id: 'v-006', title: '品牌故事短片', avatarId: 'dh-005', durationSec: 78,
          createdAt: '2026-08-12', thumbnail: COVER('v6', 400, 600), platform: 'douyin' }
      ],

      // 音色：系统音色
      systemVoices: [
        { id: 'sv-1', name: '知性女声', gender: 'female', style: '沉稳', tags: ['播报', '解说'] },
        { id: 'sv-2', name: '磁性男声', gender: 'male', style: '浑厚', tags: ['广告', '宣传片'] },
        { id: 'sv-3', name: '活力少女', gender: 'female', style: '明快', tags: ['短视频', '种草'] },
        { id: 'sv-4', name: '温和中年', gender: 'male', style: '亲和', tags: ['知识', '课程'] }
      ],

      // 脚本智能体（12 个）
      scriptAgents: [
        { id: 'sa-1', name: '七天选题', shortDesc: '一周选题日历', intro: '根据行业关键词生成一周的短视频选题日历', placeholder: '输入行业关键词，如：美妆、3C、母婴...' },
        { id: 'sa-2', name: '热点仿写', shortDesc: '追热点改写', intro: '基于热点原文快速改写成你的风格脚本', placeholder: '粘贴热点原文或链接...' },
        { id: 'sa-3', name: '爆款改写', shortDesc: '高赞结构重组', intro: '分析爆款结构并生成你的版本', placeholder: '粘贴爆款链接或文案...' },
        { id: 'sa-4', name: '口播稿', shortDesc: '口语化表达', intro: '生成自然的口播稿，适合数字人播报', placeholder: '输入主题与核心信息...' },
        { id: 'sa-5', name: '种草文案', shortDesc: '种草式推荐', intro: '写有代入感的种草推荐文案', placeholder: '描述产品与目标人群...' },
        { id: 'sa-6', name: '带货脚本', shortDesc: '转化导向', intro: '生成强转化的直播/短视频带货脚本', placeholder: '产品名 + 卖点 + 优惠...' },
        { id: 'sa-7', name: '官宣文案', shortDesc: '正式通告', intro: '品牌/产品官宣通告稿', placeholder: '官宣的事件与关键信息...' },
        { id: 'sa-8', name: '科普脚本', shortDesc: '通俗易懂', intro: '把专业知识讲得通俗易懂', placeholder: '要科普的知识点...' },
        { id: 'sa-9', name: '故事脚本', shortDesc: '叙事感强', intro: '用故事结构吸引观众看完', placeholder: '故事主题或素材...' },
        { id: 'sa-10', name: '招聘文案', shortDesc: '吸引人才', intro: '有温度的招聘文案', placeholder: '岗位、亮点、要求...' },
        { id: 'sa-11', name: '课程大纲', shortDesc: '知识付费', intro: '课程/训练营的章节大纲', placeholder: '课程主题与目标学员...' },
        { id: 'sa-12', name: '节日营销', shortDesc: '节点借势', intro: '节日/节点营销文案', placeholder: '节日 + 品牌/产品...' }
      ],

      createSteps: ['确认规则', '上传视频', '生成中', '完成'],
      speakSteps: ['选音色', '写脚本', '选数字人', '确认', '生成', '完成'],

      createTasks: [
        { label: '上传训练视频', marker: 12 },
        { label: '人物检测与质量评估', marker: 32 },
        { label: '合规审核', marker: 54 },
        { label: '生成基础数字人形象', marker: 78 },
        { label: '同步预览结果', marker: 96 }
      ],
      speakTasks: [
        { label: '文本语义分析', marker: 15 },
        { label: '语音合成', marker: 38 },
        { label: '数字人口型驱动', marker: 62 },
        { label: '画面渲染', marker: 82 },
        { label: '合成与审核', marker: 96 }
      ]
    },

    /* ============================================================
       音色克隆模块
       ============================================================ */
    voiceClone: {
      minRecordSeconds: 30,
      genderOptions: [
        { value: 'male', label: '男生' },
        { value: 'female', label: '女生' },
        { value: 'neutral', label: '中性' }
      ],
      sceneOptions: ['视频旁白', '播客主播', '广告配音', '有声书', '企业客服', '教育培训', '新闻播报', '情感陪伴'],
      targetModels: [
        { id: 'cosyvoice-v3.5-flash', name: '基础版', tag: '快速克隆', desc: '30秒样本，秒级出音色，适合快速试错' },
        { id: 'cosyvoice-v3.5-plus', name: '高质量版', tag: '正式成片', desc: '更强表现力与稳定性，适合正式发布' }
      ],
      statusText: {
        Success: '已就绪',
        Training: '训练中',
        PreTraining: '待训练',
        Fail: '训练失败'
      },
      voices: [
        { id: 'vc-1', name: '品牌女声·小雨', gender: 'female',
          scenes: ['视频旁白', '广告配音'], status: 'Success',
          createdAt: '2026-08-10', targetModel: 'cosyvoice-v3.5-plus',
          description: '温柔知性，适合品牌故事与产品讲解' },
        { id: 'vc-2', name: '主播·阿哲', gender: 'male', scenes: ['播客主播'],
          status: 'Training', progress: 62, createdAt: '2026-08-22' },
        { id: 'vc-3', name: '客服·小诺', gender: 'female', scenes: ['企业客服'],
          status: 'PreTraining', progress: 0, createdAt: '2026-08-22' },
        { id: 'vc-4', name: '旁白·老周', gender: 'male', scenes: ['有声书', '新闻播报'],
          status: 'Fail', progress: 100, createdAt: '2026-08-19',
          description: '沉稳有故事感' },
        { id: 'vc-5', name: '讲师·林老师', gender: 'female', scenes: ['教育培训'],
          status: 'Success', createdAt: '2026-08-14',
          targetModel: 'cosyvoice-v3.5-plus',
          description: '清晰有亲和力，适合知识付费' },
        { id: 'vc-6', name: '情感陪伴·星星', gender: 'neutral', scenes: ['情感陪伴'],
          status: 'Success', createdAt: '2026-08-12',
          targetModel: 'cosyvoice-v3.5-plus',
          description: '温暖治愈，适合夜间陪伴内容' },
        { id: 'vc-7', name: '广告男声·大磊', gender: 'male', scenes: ['广告配音'],
          status: 'Training', progress: 88, createdAt: '2026-08-22' }
      ]
    },

    /* ============================================================
       视频混剪模块
       ============================================================ */
    videoMixer: {
      steps: [
        { id: 'create', label: '项目创建', number: '1', status: 'done' },
        { id: 'params', label: '视频设置', number: '2', status: 'done' },
        { id: 'script', label: '脚本生成', number: '3', status: 'pending' },
        { id: 'material', label: '素材上传', number: '4', status: 'active' },
        { id: 'generate', label: '视频生成', number: '5', status: 'locked' },
        { id: 'preview', label: '视频预览', number: '6', status: 'locked' }
      ],
      paramsSubTabs: [
        { id: 'template', label: '模板' },
        { id: 'params', label: '参数' },
        { id: 'title', label: '标题' },
        { id: 'subtitle', label: '字幕' },
        { id: 'voice', label: '音色' }
      ],
      ratioOptions: [
        { value: 'portrait', label: '竖版 9:16' },
        { value: 'landscape', label: '横版 16:9' }
      ],
      resolutionOptions: ['1080P', '720P', '4K'],

      templates: [
        { id: 't-0', title: '不使用模板', category: 'blank', ratio: 'portrait', uses: 0, blank: true },
        { id: 't-1', title: '产品种草·快闪', category: '带货', ratio: 'portrait', uses: 1283, cover: COVER('tpl1', 320, 560) },
        { id: 't-2', title: '知识口播·三分屏', category: '知识', ratio: 'portrait', uses: 892, cover: COVER('tpl2', 320, 560) },
        { id: 't-3', title: '横版企业宣传', category: '企业', ratio: 'landscape', uses: 412, cover: COVER('tpl3', 560, 320) },
        { id: 't-4', title: '探店Vlog', category: '生活', ratio: 'portrait', uses: 654, cover: COVER('tpl4', 320, 560) },
        { id: 't-5', title: '横版课程录屏', category: '知识', ratio: 'landscape', uses: 298, cover: COVER('tpl5', 560, 320) },
        { id: 't-6', title: '带货倒计时', category: '带货', ratio: 'portrait', uses: 1102, cover: COVER('tpl6', 320, 560) },
        { id: 't-7', title: '节日祝福', category: '节日', ratio: 'portrait', uses: 533, cover: COVER('tpl7', 320, 560) },
        { id: 't-8', title: '新闻播报', category: '资讯', ratio: 'landscape', uses: 367, cover: COVER('tpl8', 560, 320) }
      ],

      voices: [
        { id: 'mv-1', name: '知性女声', gender: 'female', tags: ['沉稳', '播报'] },
        { id: 'mv-2', name: '活力男声', gender: 'male', tags: ['明快', '带货'] },
        { id: 'mv-3', name: '温柔女声', gender: 'female', tags: ['情感', '种草'] },
        { id: 'mv-4', name: '磁性男声', gender: 'male', tags: ['浑厚', '宣传'] }
      ],

      scripts: [
        { id: 's-1', content: '今天给大家分享三个让效率翻倍的小工具。第一个是智能笔记，能自动整理会议纪要；第二个是批量剪辑，一键生成十条短视频；第三个是数字人播报，输入文案就能出片。赶紧收藏起来试试吧！', selected: true, warning: false },
        { id: 's-2', content: '你知道吗？每天喝够8杯水其实是个误区。正确的做法是根据体重和运动量来调整。这款智能水杯能提醒你定时补水，还能记录你的饮水数据，是养生达人的必备好物！', selected: false, warning: true, warningText: '含绝对化表述"必备"，建议修改' },
        { id: 's-3', content: '三秒教会你一个手机隐藏功能。打开设置，找到辅助功能，开启语音控制，你就能用声音操控手机了。是不是很实用？关注我，每天一个数码小技巧。', selected: false, warning: false }
      ],

      // 素材
      materials: {
        recommended: [
          { id: 'r-1', title: '城市夜景延时', durationSec: 12, cover: COVER('mat1', 320, 560) },
          { id: 'r-2', title: '办公场景·敲键盘', durationSec: 8, cover: COVER('mat2', 320, 560) },
          { id: 'r-3', title: '咖啡特写', durationSec: 15, cover: COVER('mat3', 320, 560) },
          { id: 'r-4', title: '数据图表动画', durationSec: 10, cover: COVER('mat4', 320, 560) },
          { id: 'r-5', title: '人物走路背影', durationSec: 11, cover: COVER('mat5', 320, 560) },
          { id: 'r-6', title: '科技感粒子背景', durationSec: 20, cover: COVER('mat6', 320, 560) },
          { id: 'r-7', title: '手机操作特写', durationSec: 9, cover: COVER('mat7', 320, 560) },
          { id: 'r-8', title: '团队会议讨论', durationSec: 14, cover: COVER('mat8', 320, 560) },
          { id: 'r-9', title: '城市街道航拍', durationSec: 18, cover: COVER('mat9', 320, 560) }
        ],
        uploaded: [
          { id: 'u-1', title: '产品展示_01.mp4', durationSec: 22, cover: COVER('up1', 320, 560) },
          { id: 'u-2', title: '创始人采访.mp4', durationSec: 45, cover: COVER('up2', 320, 560) },
          { id: 'u-3', title: '工厂实拍.mp4', durationSec: 30, cover: COVER('up3', 320, 560) },
          { id: 'u-4', title: '用户好评合集.mp4', durationSec: 18, cover: COVER('up4', 320, 560) }
        ],
        cloud: [
          { id: 'c-1', title: '品牌素材/Logo动画', durationSec: 6, cover: COVER('cl1', 320, 560) },
          { id: 'c-2', title: '品牌素材/产品白底', durationSec: 12, cover: COVER('cl2', 320, 560) },
          { id: 'c-3', title: '活动素材/发布会现场', durationSec: 28, cover: COVER('cl3', 320, 560) },
          { id: 'c-4', title: '活动素材/嘉宾合影', durationSec: 10, cover: COVER('cl4', 320, 560) }
        ],
        bgmLibrary: [
          { id: 'b-1', name: '轻快节拍', durationSec: 96, mood: '明快', isPurple: false },
          { id: 'b-2', name: '科技未来感', durationSec: 124, mood: '科技', isPurple: false },
          { id: 'b-3', name: '温暖钢琴', durationSec: 142, mood: '治愈', isPurple: true },
          { id: 'b-4', name: '动感电子', durationSec: 88, mood: '活力', isPurple: false },
          { id: 'b-5', name: '企业大气', durationSec: 156, mood: '商务', isPurple: false },
          { id: 'b-6', name: '国风悠扬', durationSec: 130, mood: '国风', isPurple: true },
          { id: 'b-7', name: '轻松日常', durationSec: 102, mood: '生活', isPurple: false },
          { id: 'b-8', name: '悬疑节奏', durationSec: 78, mood: '紧张', isPurple: false }
        ]
      },

      // 生成任务
      tasks: [
        { id: 'g-1', title: '效率工具·第1条', status: 'done',
          meta: '00:48 · 1080P · 竖版', cover: COVER('g1', 320, 560) },
        { id: 'g-2', title: '效率工具·第2条', status: 'running',
          meta: '合成字幕与画面 · 62%', cover: '' },
        { id: 'g-3', title: '效率工具·第3条', status: 'failed',
          meta: '素材校验未通过', errorMessage: '素材时长不足，请补充 5 秒以上视频', cover: '' },
        { id: 'g-4', title: '效率工具·第4条', status: 'timeout',
          meta: '生成超时，可重试', cover: '' }
      ],

      // 成片预览
      previewRows: [
        { id: 'p-1', title: '效率工具·第1条', status: '审核通过', note: '原创度 92%',
          cover: COVER('g1', 320, 560), durationText: '00:48', ratio: 'portrait' },
        { id: 'p-2', title: '效率工具·第2条', status: '审核中', note: '排队中',
          cover: '', durationText: '--', ratio: 'portrait' }
      ]
    }
  };
})();
