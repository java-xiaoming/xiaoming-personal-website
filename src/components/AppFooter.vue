<script setup>
import { siteContent } from '../data/content.js'
</script>

<template>
  <footer class="border-t border-line bg-white">
    <div class="mx-auto max-w-6xl px-6 py-10">
      <div
        class="flex flex-col items-center justify-between gap-5 md:flex-row"
      >
        <!-- Logo + 名字 -->
        <router-link to="/" class="flex items-center gap-2.5">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white"
          >
            {{ siteContent.name.charAt(0) }}
          </span>
          <span class="text-base font-bold text-ink">{{
            siteContent.name
          }}</span>
        </router-link>

        <!-- 快捷联系方式 -->
        <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          <a
            :href="`mailto:${siteContent.contact.email}`"
            class="transition hover:text-brand-600"
          >
            {{ siteContent.contact.email }}
          </a>
          <a
            :href="`tel:${siteContent.contact.phone}`"
            class="transition hover:text-brand-600"
          >
            {{ siteContent.contact.phone }}
          </a>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="my-6 h-px bg-line"></div>

      <!-- 版权信息 -->
      <div
        class="flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row"
      >
        <p class="mx-auto sm:mx-0">{{ siteContent.footer.copyright }}</p>
      </div>
    </div>
  </footer>
</template>
