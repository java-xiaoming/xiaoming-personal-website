<script setup>
import { siteContent } from '../data/content.js'
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <footer class="relative z-10 bg-ink text-white">
    <!-- 顶部波浪分隔 -->
    <div class="absolute -top-1 left-0 right-0 leading-none">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        class="h-12 w-full md:h-16"
      >
        <path
          d="M0 80V40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z"
          fill="#334155"
        />
      </svg>
    </div>

    <div class="px-6 pb-10 pt-20 md:pt-24">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center"
      >
        <!-- Logo + 名字 -->
        <a href="#hero" class="group flex items-center gap-2">
          <span
            class="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-mint-400 font-display text-xl font-bold text-ink transition-transform group-hover:scale-110"
          >
            {{ siteContent.name.charAt(0) }}
          </span>
          <span class="font-display text-2xl font-bold">{{
            siteContent.name
          }}</span>
        </a>

        <!-- 社交链接 -->
        <SocialLinks size="sm" />

        <!-- 分隔线 -->
        <div class="h-1 w-24 rounded-full bg-white/20"></div>

        <!-- 版权信息 -->
        <div class="flex flex-col items-center gap-2 text-sm text-white/70">
          <p>{{ siteContent.footer.copyright }}</p>
          <p class="flex items-center gap-1">
            {{ siteContent.footer.madeWith }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
