<script setup>
// 全局背景装饰：极淡的渐变色块
// fixed 定位、pointer-events-none，不影响交互
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    aria-hidden="true"
  >
    <!-- 顶部偏 indigo 的极淡光晕 -->
    <div
      class="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-brand-100/50 blur-3xl"
    ></div>

    <!-- 中下部偏 teal 的极淡光晕 -->
    <div
      class="absolute bottom-[5%] left-[-12%] h-[28rem] w-[28rem] rounded-full bg-teal-100/40 blur-3xl"
    ></div>
  </div>
</template>
