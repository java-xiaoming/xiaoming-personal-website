<script setup>
import { siteContent } from '../../data/content.js'
import SectionWrapper from '../SectionWrapper.vue'
</script>

<template>
  <SectionWrapper id="contact" bgClass="bg-surface">
    <!-- 区块标题 -->
    <div class="mb-12 text-center md:mb-14">
      <h2 class="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
        {{ siteContent.contact.title }}
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-base text-muted md:text-lg">
        {{ siteContent.contact.subtitle }}
      </p>
    </div>

    <!-- 联系卡片 -->
    <div class="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <!-- 邮箱 -->
      <a
        :href="`mailto:${siteContent.contact.email}`"
        class="group rounded-2xl border border-line bg-card p-6 shadow-soft-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <p class="mt-4 text-xs text-muted">邮箱</p>
        <p class="mt-1 break-all text-sm font-semibold text-ink">
          {{ siteContent.contact.email }}
        </p>
      </a>

      <!-- 电话 -->
      <a
        :href="`tel:${siteContent.contact.phone}`"
        class="group rounded-2xl border border-line bg-card p-6 shadow-soft-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
        </div>
        <p class="mt-4 text-xs text-muted">电话</p>
        <p class="mt-1 text-sm font-semibold text-ink">
          {{ siteContent.contact.phone }}
        </p>
      </a>

      <!-- 微信 -->
      <div
        class="rounded-2xl border border-dashed border-line bg-card p-6"
        :class="{ 'opacity-70': siteContent.contact.wechat === '待补充' }"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-muted"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <p class="mt-4 text-xs text-muted">微信</p>
        <p class="mt-1 text-sm font-semibold" :class="siteContent.contact.wechat === '待补充' ? 'text-muted' : 'text-ink'">
          {{ siteContent.contact.wechat }}
        </p>
      </div>

      <!-- 简历 -->
      <a
        :href="siteContent.contact.resumeUrl"
        download
        class="group rounded-2xl border border-line bg-card p-6 shadow-soft-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
        </div>
        <p class="mt-4 text-xs text-muted">简历</p>
        <p class="mt-1 text-sm font-semibold text-ink">下载 PDF 版本</p>
      </a>
    </div>
  </SectionWrapper>
</template>
