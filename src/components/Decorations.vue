<script setup>
// 全局卡通装饰元素：云朵、星星、圆点等
// 使用 fixed 定位，pointer-events-none，不影响交互
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    aria-hidden="true"
  >
    <!-- 左上角云朵 -->
    <div class="animate-float absolute left-[5%] top-[12%] hidden md:block">
      <svg width="120" height="70" viewBox="0 0 120 70" fill="none">
        <ellipse cx="35" cy="45" rx="30" ry="22" fill="white" opacity="0.7" />
        <ellipse cx="60" cy="35" rx="28" ry="24" fill="white" opacity="0.8" />
        <ellipse cx="85" cy="45" rx="25" ry="20" fill="white" opacity="0.7" />
      </svg>
    </div>

    <!-- 右上角星星 -->
    <div class="animate-wiggle absolute right-[8%] top-[20%] hidden md:block">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path
          d="M25 2 L30 18 L47 18 L33 29 L38 46 L25 36 L12 46 L17 29 L3 18 L20 18 Z"
          fill="#fbbf24"
          stroke="#334155"
          stroke-width="3"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- 左侧圆点装饰 -->
    <div class="absolute left-[3%] top-[55%] hidden lg:block">
      <div class="flex flex-col gap-3">
        <div
          class="h-6 w-6 rounded-full border-3 border-ink bg-coral"
          style="border-width: 3px"
        ></div>
        <div
          class="h-4 w-4 rounded-full border-3 border-ink bg-sky-400"
          style="border-width: 3px"
        ></div>
        <div
          class="h-5 w-5 rounded-full border-3 border-ink bg-mint-400"
          style="border-width: 3px"
        ></div>
      </div>
    </div>

    <!-- 右下角小三角 -->
    <div class="absolute bottom-[15%] right-[5%] hidden md:block">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <polygon
          points="30,5 55,50 5,50"
          fill="#0ea5e9"
          stroke="#334155"
          stroke-width="4"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- 右上角小圆点组合 -->
    <div class="absolute right-[20%] top-[60%] hidden lg:block">
      <div class="flex gap-2">
        <div class="h-3 w-3 rounded-full bg-sunny"></div>
        <div class="h-3 w-3 rounded-full bg-mint-400"></div>
        <div class="h-3 w-3 rounded-full bg-coral"></div>
      </div>
    </div>

    <!-- 左下角波浪装饰 -->
    <div class="absolute bottom-[8%] left-[10%] hidden lg:block">
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
        <path
          d="M0 20 Q10 0 20 20 T40 20 T60 20 T80 20"
          stroke="#334155"
          stroke-width="4"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>
