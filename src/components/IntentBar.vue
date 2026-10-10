<script setup>
import { siteContent, resumeUrl } from '../data/content.js'
</script>

<template>
  <section class="relative z-10 -mt-6 px-6 pb-4 md:-mt-10">
    <div
      class="mx-auto flex max-w-6xl flex-col gap-6 rounded-2xl border border-line bg-card p-6 shadow-soft-md md:flex-row md:items-center md:justify-between md:gap-8 md:p-7"
    >
      <!-- 求职意向信息 -->
      <div class="min-w-0 flex-1">
        <h2 class="mb-4 text-sm font-bold uppercase tracking-wider text-brand-600">
          {{ siteContent.intent.title }}
        </h2>
        <dl class="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3 lg:grid-cols-5">
          <div v-for="item in siteContent.intent.items" :key="item.label">
            <dt class="text-xs text-muted">{{ item.label }}</dt>
            <dd
              class="mt-0.5 truncate text-sm font-semibold text-ink"
              :class="{ 'text-muted': item.value === '待补充' }"
              :title="item.value"
            >
              {{ item.value }}
            </dd>
          </div>
        </dl>
      </div>

      <!-- 简历下载 -->
      <a
        :href="resumeUrl"
        download
        class="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-soft"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        下载简历 PDF
      </a>
    </div>
  </section>
</template>
