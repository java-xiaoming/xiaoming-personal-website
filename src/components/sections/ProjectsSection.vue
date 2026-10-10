<script setup>
import { siteContent } from '../../data/content.js'
import SectionWrapper from '../SectionWrapper.vue'
</script>

<template>
  <SectionWrapper id="works" bgClass="bg-card">
    <!-- 区块标题 -->
    <div class="mb-12 md:mb-16">
      <h2 class="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">作品案例</h2>
      <p class="mt-3 text-base text-muted md:text-lg">
        每个案例均按「背景 → 问题 → 用户 → 方案 → 结果 → 复盘」完整呈现，指标附统计口径。
      </p>
    </div>

    <!-- 案例卡片 -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <router-link
        v-for="project in siteContent.projects"
        :key="project.slug"
        :to="`/project/${project.slug}`"
        class="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft-lg"
      >
        <!-- 封面 -->
        <div class="relative aspect-[16/9] overflow-hidden bg-surface">
          <img
            :src="project.cover"
            :alt="project.title + ' 封面（占位图）'"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span
            class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft-sm backdrop-blur"
          >
            {{ project.stage }}
          </span>
        </div>

        <!-- 内容 -->
        <div class="flex flex-1 flex-col p-6 md:p-7">
          <h3 class="text-xl font-bold text-ink transition-colors group-hover:text-brand-700">
            {{ project.title }}
          </h3>
          <p class="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
            {{ project.summary }}
          </p>

          <!-- 关键指标简表 -->
          <div class="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
            <div v-for="metric in project.metrics" :key="metric.label">
              <div class="text-sm font-bold text-teal-600 md:text-base">
                {{ metric.value }}
              </div>
              <div class="mt-0.5 line-clamp-2 text-xs leading-snug text-muted">
                {{ metric.label }}
              </div>
            </div>
          </div>

          <!-- 查看案例 -->
          <span
            class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
          >
            查看完整案例
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="transition-transform duration-200 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </router-link>
    </div>
  </SectionWrapper>
</template>
