<script setup>
import { useSeo } from '../composables/useSeo.js'

useSeo({
  title: '页面未找到 | 陈明智',
  description: '您访问的页面不存在。',
})
</script>

<template>
  <div
    class="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center"
  >
    <p class="text-7xl font-bold text-brand-600">404</p>
    <h1 class="mt-6 text-2xl font-bold text-ink">页面走丢了</h1>
    <p class="mt-3 text-muted">
      您访问的页面不存在或已被移动，不如回到首页继续了解我。
    </p>
    <router-link
      to="/"
      class="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 font-semibold text-white shadow-soft-md transition hover:bg-brand-700"
    >
      返回首页
    </router-link>
  </div>
</template>
