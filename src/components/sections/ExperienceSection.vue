<script setup>
import { siteContent } from '../../data/content.js'
import SectionWrapper from '../SectionWrapper.vue'
</script>

<template>
  <SectionWrapper id="experience" bgClass="bg-surface">
    <!-- 区块标题 -->
    <div class="mb-12 md:mb-16">
      <h2 class="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">实习经历</h2>
      <p class="mt-3 text-base text-muted md:text-lg">
        在真实业务中把 AI 能力从调研推进到上线与迭代。
      </p>
    </div>

    <!-- 时间线 -->
    <div class="relative">
      <!-- 竖线 -->
      <div
        class="absolute left-[7px] top-2 h-full w-px bg-line md:left-[9px]"
        aria-hidden="true"
      ></div>

      <div
        v-for="exp in siteContent.experience"
        :key="exp.company"
        class="relative pl-8 md:pl-12"
      >
        <!-- 节点 -->
        <span
          class="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-600 bg-card md:h-5 md:w-5"
          aria-hidden="true"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand-600"></span>
        </span>

        <div class="rounded-2xl border border-line bg-card p-6 shadow-soft-sm md:p-8">
          <div
            class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between"
          >
            <div>
              <h3 class="text-xl font-bold text-ink md:text-2xl">
                {{ exp.role }}
              </h3>
              <p class="mt-1 text-base font-semibold text-brand-700">
                {{ exp.company }}
              </p>
            </div>
            <span
              class="inline-flex w-fit shrink-0 items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
            >
              {{ exp.period }}
            </span>
          </div>

          <p class="mt-4 leading-relaxed text-ink-soft">{{ exp.summary }}</p>

          <ul class="mt-5 space-y-3">
            <li
              v-for="(highlight, index) in exp.highlights"
              :key="index"
              class="flex gap-3 text-sm leading-relaxed text-ink-soft md:text-base"
            >
              <svg
                class="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{{ highlight }}</span>
            </li>
          </ul>

          <a
            v-if="exp.relatedProjectExternal"
            :href="exp.relatedProjectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            {{ exp.relatedProjectLabel || '查看对应作品案例' }}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <router-link
            v-else-if="exp.relatedProjectSlug"
            :to="`/project/${exp.relatedProjectSlug}`"
            class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            查看对应作品案例
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
