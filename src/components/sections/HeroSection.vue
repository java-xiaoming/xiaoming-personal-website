<script setup>
import { siteContent } from '../../data/content.js'
</script>

<template>
  <header
    id="hero"
    class="relative scroll-mt-20 overflow-hidden pt-28 md:pt-36"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div
        class="grid items-center gap-12 pb-20 md:grid-cols-[1.15fr_0.85fr] md:pb-28"
      >
        <!-- 左侧：文案 -->
        <div class="animate-fade-up">
          <!-- 状态徽章 -->
          <span
            class="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
          >
            <span
              class="relative flex h-2 w-2"
              aria-hidden="true"
            >
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex h-2 w-2 rounded-full bg-teal-500"
              ></span>
            </span>
            {{ siteContent.hero.badge }}
          </span>

          <h1
            class="mt-6 text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-[3.5rem] md:leading-[1.15]"
          >
            你好，我是
            <span class="text-brand-600">{{ siteContent.hero.name }}</span>
          </h1>

          <p
            class="mt-4 text-xl font-semibold text-ink-soft sm:text-2xl"
          >
            {{ siteContent.hero.tagline }}
          </p>

          <p
            class="mt-5 max-w-xl text-base leading-8 text-muted"
          >
            {{ siteContent.hero.description }}
          </p>

          <!-- CTA -->
          <div class="mt-9 flex flex-wrap items-center gap-4">
            <router-link
              :to="siteContent.hero.ctaPrimary.to"
              class="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-soft-md transition-all duration-200 hover:bg-brand-700 hover:shadow-soft-lg"
            >
              {{ siteContent.hero.ctaPrimary.label }}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </router-link>
            <a
              :href="siteContent.hero.ctaSecondary.href"
              :download="siteContent.hero.ctaSecondary.download"
              class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-base font-semibold text-ink transition-all duration-200 hover:bg-surface"
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
              {{ siteContent.hero.ctaSecondary.label }}
            </a>
          </div>
        </div>

        <!-- 右侧：职业照占位 -->
        <div class="animate-float-soft mx-auto w-full max-w-sm">
          <div
            class="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-brand-50 via-white to-teal-50 shadow-soft-lg"
          >
            <!-- 头像占位图标 -->
            <div
              class="flex h-full w-full flex-col items-center justify-center gap-4 text-muted"
            >
              <span
                class="flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-3xl font-bold text-brand-600"
              >
                {{ siteContent.hero.name.charAt(0) }}
              </span>
            </div>

            <!-- 角落装饰小标签 -->
            <span
              class="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-brand-700 shadow-soft-sm backdrop-blur"
            >
              AI Product Manager
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
