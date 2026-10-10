<script setup>
import { siteContent } from '../../data/content.js'
import SectionWrapper from '../SectionWrapper.vue'
</script>

<template>
  <SectionWrapper id="about" bgClass="bg-card">
    <!-- 区块标题 -->
    <div class="mb-12 md:mb-16">
      <h2 class="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
        {{ siteContent.about.title }}
      </h2>
      <p class="mt-3 text-base text-muted md:text-lg">
        技术背景 + 产品训练，习惯先定义问题与指标，再谈解决方案。
      </p>
    </div>

    <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <!-- 左侧：自述 -->
      <div>
        <div
          v-for="(paragraph, index) in siteContent.about.paragraphs"
          :key="index"
          class="mb-4 text-base leading-relaxed text-ink-soft last:mb-0 md:text-lg"
        >
          {{ paragraph }}
        </div>

        <!-- 教育经历 -->
        <div class="mt-8">
          <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-muted">
            教育经历
          </h3>
          <div
            v-for="edu in siteContent.about.education"
            :key="edu.school"
            class="rounded-2xl border border-line bg-surface p-5 md:p-6"
          >
            <div class="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <p class="text-base font-bold text-ink md:text-lg">{{ edu.school }}</p>
                <p class="mt-0.5 text-sm text-ink-soft">{{ edu.major }}</p>
              </div>
              <span class="text-sm font-medium text-muted">{{ edu.period }}</span>
            </div>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="honor in edu.honors"
                :key="honor"
                class="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                {{ honor }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 右侧：技能分组 -->
      <div>
        <h3 class="mb-4 text-sm font-bold uppercase tracking-wider text-muted">
          技能矩阵
        </h3>
        <div class="space-y-4">
          <div
            v-for="group in siteContent.about.skillGroups"
            :key="group.title"
            class="rounded-2xl border border-line bg-surface p-5"
          >
            <h4 class="text-sm font-bold text-ink">{{ group.title }}</h4>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li
                v-for="item in group.items"
                :key="item"
                class="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
