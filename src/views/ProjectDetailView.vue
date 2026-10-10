<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { siteContent } from '../data/content.js'
import { useSeo } from '../composables/useSeo.js'

const route = useRoute()

// 根据路由 slug 查找项目
const project = computed(
  () =>
    siteContent.projects.find((p) => p.slug === route.params.slug) || null
)

// 案例六小节的标题与字段映射
const caseSections = computed(() => {
  if (!project.value) return []
  const s = project.value.sections
  return [
    { title: '背景', body: s.context },
    { title: '问题与目标', body: s.problem },
    { title: '用户与场景', body: s.users },
    {
      title: '方案、决策与权衡',
      body: s.solution,
      image: s.flowImage,
    },
    { title: '结果', body: s.outcome },
    { title: '复盘', body: s.reflection },
  ]
})

// 详情页 SEO + CreativeWork 结构化数据
useSeo({
  title: project.value
    ? `${project.value.title} | 陈明智`
    : '作品未找到 | 陈明智',
  description: project.value
    ? project.value.summary
    : '该作品案例不存在。',
  url: project.value
    ? `${siteContent.siteUrl}/project/${project.value.slug}`
    : undefined,
  type: 'article',
  jsonLd: project.value
    ? {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.value.title,
        headline: project.value.summary,
        dateCreated: project.value.period,
        author: {
          '@type': 'Person',
          name: siteContent.name,
          jobTitle: siteContent.role,
        },
      }
    : undefined,
})
</script>

<template>
  <!-- 未找到项目 -->
  <div
    v-if="!project"
    class="mx-auto flex max-w-2xl flex-col items-center px-6 pb-32 pt-40 text-center"
  >
    <h1 class="text-3xl font-bold text-ink">没有找到这个作品案例</h1>
    <p class="mt-4 text-muted">它可能已被移动或删除。</p>
    <router-link
      to="/#works"
      class="mt-8 inline-flex items-center rounded-full bg-brand-600 px-7 py-3 font-semibold text-white shadow-soft-md transition hover:bg-brand-700"
    >
      返回作品列表
    </router-link>
  </div>

  <!-- 作品详情 -->
  <article v-else class="pb-24 pt-28 md:pt-32">
    <div class="mx-auto max-w-4xl px-6">
      <!-- 返回链接 -->
      <router-link
        to="/#works"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:text-brand-700"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        返回作品列表
      </router-link>

      <!-- 头部 -->
      <header class="mt-6">
        <span
          class="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-200"
        >
          {{ project.stage }}
        </span>
        <h1
          class="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[2.75rem]"
        >
          {{ project.title }}
        </h1>
        <p class="mt-4 text-lg leading-relaxed text-ink-soft">
          {{ project.summary }}
        </p>

        <!-- 角色 / 周期 meta -->
        <dl
          class="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-4 text-sm"
        >
          <div class="flex items-center gap-2">
            <dt class="text-muted">角色</dt>
            <dd class="font-medium text-ink">{{ project.role }}</dd>
          </div>
          <div class="flex items-center gap-2">
            <dt class="text-muted">周期</dt>
            <dd class="font-medium text-ink">{{ project.period }}</dd>
          </div>
        </dl>
      </header>

      <!-- 核心指标卡 -->
      <section class="mt-10">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            v-for="metric in project.metrics"
            :key="metric.label"
            class="rounded-2xl border border-line bg-card p-5 shadow-soft-sm"
          >
            <p class="text-2xl font-bold text-teal-600">{{ metric.value }}</p>
            <p class="mt-1 text-sm font-medium text-ink">{{ metric.label }}</p>
            <p class="mt-2 text-xs leading-relaxed text-muted">
              {{ metric.note }}
            </p>
          </div>
        </div>
      </section>

      <!-- 案例正文六小节 -->
      <div class="mt-12 space-y-10">
        <section v-for="section in caseSections" :key="section.title">
          <h2
            class="flex items-center gap-3 text-xl font-bold text-ink"
          >
            <span
              class="h-6 w-1.5 rounded-full bg-brand-600"
              aria-hidden="true"
            ></span>
            {{ section.title }}
          </h2>
          <p class="mt-4 text-base leading-8 text-ink-soft">
            {{ section.body }}
          </p>
          <!-- 流程 / 原型占位图 -->
          <div
            v-if="section.image"
            class="mt-6 overflow-hidden rounded-2xl border border-line bg-card shadow-soft-sm"
          >
            <img
              :src="section.image"
              :alt="project.title + '流程示意图（占位）'"
              class="h-auto w-full"
              loading="lazy"
            />
          </div>
        </section>
      </div>

      <!-- 口径与免责声明 -->
      <aside
        class="mt-14 rounded-2xl border border-line bg-surface p-6 text-sm leading-7 text-muted"
      >
        <p class="font-semibold text-ink-soft">数据口径与说明</p>
        <p class="mt-2">
          本案例数据来自实习 / 项目期间的真实实测与客户试点，客户名称已做脱敏处理；各指标的具体口径见对应卡片说明。如需更详细的评测集规模、统计周期等信息，欢迎邮件沟通。
        </p>
      </aside>

      <!-- 底部 CTA -->
      <div
        class="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-line bg-card p-8 shadow-soft-sm sm:flex-row"
      >
        <div>
          <p class="text-lg font-semibold text-ink">想进一步了解我的产品经历？</p>
          <p class="mt-1 text-sm text-muted">
            可下载完整简历，或直接通过邮件与我联系。
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <a
            :href="siteContent.contact.resumeUrl"
            :download="siteContent.contact.resumeDownloadName"
            class="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft-md transition hover:bg-brand-700"
          >
            下载简历
          </a>
          <router-link
            to="/#contact"
            class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface"
          >
            联系我
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>
