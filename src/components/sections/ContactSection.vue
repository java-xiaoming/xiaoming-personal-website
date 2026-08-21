<script setup>
import { ref } from 'vue'
import { siteContent } from '../../data/content.js'
import SectionWrapper from '../SectionWrapper.vue'
import SocialLinks from '../SocialLinks.vue'

// 表单状态
const form = ref({
  name: '',
  email: '',
  message: '',
})
const showToast = ref(false)
const submitting = ref(false)

function handleSubmit() {
  // 纯前端展示：不实际发送
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    showToast.value = true
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      showToast.value = false
    }, 3500)
  }, 600)
}
</script>

<template>
  <SectionWrapper id="contact" bgClass="bg-gradient-to-br from-sky-100 via-sky-50 to-mint-100">
    <!-- 区块标题 -->
    <div class="mb-12 text-center md:mb-16">
      <h2
        class="font-display text-4xl font-bold text-ink sm:text-5xl md:text-6xl"
      >
        {{ siteContent.contact.title }}
      </h2>
      <div class="mx-auto mt-4 flex justify-center gap-2">
        <div class="h-2 w-3 rounded-full bg-coral"></div>
        <div class="h-2 w-6 rounded-full bg-sky-400"></div>
        <div class="h-2 w-12 rounded-full bg-mint-400"></div>
      </div>
      <p class="mx-auto mt-6 max-w-xl text-lg text-ink/70">
        {{ siteContent.contact.subtitle }}
      </p>
    </div>

    <div class="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
      <!-- 左侧：联系方式 -->
      <div class="flex flex-col items-center justify-center gap-8 text-center md:items-start md:text-left">
        <!-- 邮件大按钮 -->
        <a
          :href="`mailto:${siteContent.contact.email}`"
          class="group inline-flex items-center gap-3 rounded-full border-4 border-ink bg-coral px-8 py-4 font-display text-xl font-bold text-white shadow-cartoon transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="3" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {{ siteContent.contact.ctaButton }}
        </a>

        <!-- 邮箱显示 -->
        <div>
          <p class="font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
            邮箱
          </p>
          <p class="font-display text-lg font-semibold text-ink">
            {{ siteContent.contact.email }}
          </p>
        </div>

        <!-- 社交链接 -->
        <div>
          <p class="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-ink/50">
            也可以在这些地方找到我
          </p>
          <SocialLinks size="md" />
        </div>
      </div>

      <!-- 右侧：联系表单 -->
      <div class="rounded-3xl border-4 border-ink bg-white p-8 shadow-cartoon">
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label
              for="name"
              class="mb-2 block font-display font-semibold text-ink"
            >
              {{ siteContent.contact.form.nameLabel }}
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              :placeholder="siteContent.contact.form.namePlaceholder"
              class="w-full rounded-2xl border-4 border-ink bg-mint-50 px-4 py-3 font-body text-ink transition-all duration-200 placeholder:text-ink/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-mint-300"
            />
          </div>

          <div>
            <label
              for="email"
              class="mb-2 block font-display font-semibold text-ink"
            >
              {{ siteContent.contact.form.emailLabel }}
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              :placeholder="siteContent.contact.form.emailPlaceholder"
              class="w-full rounded-2xl border-4 border-ink bg-sky-50 px-4 py-3 font-body text-ink transition-all duration-200 placeholder:text-ink/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-300"
            />
          </div>

          <div>
            <label
              for="message"
              class="mb-2 block font-display font-semibold text-ink"
            >
              {{ siteContent.contact.form.messageLabel }}
            </label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              :placeholder="siteContent.contact.form.messagePlaceholder"
              class="w-full resize-none rounded-2xl border-4 border-ink bg-coral/10 px-4 py-3 font-body text-ink transition-all duration-200 placeholder:text-ink/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-coral/50"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="flex w-full items-center justify-center gap-2 rounded-full border-4 border-ink bg-mint-400 px-9 py-4 font-display text-lg font-semibold text-ink shadow-cartoon-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-mint-500 hover:shadow-none disabled:opacity-70"
          >
            <svg v-if="submitting" class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
            <span v-else>✈️</span>
            {{ submitting ? '发送中...' : siteContent.contact.form.submit }}
          </button>
        </form>
      </div>
    </div>

    <!-- 成功 Toast -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-90"
    >
      <div
        v-if="showToast"
        class="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-2xl border-4 border-ink bg-mint-400 px-6 py-4 font-display font-semibold text-ink shadow-cartoon"
        role="alert"
      >
        <div class="flex items-center gap-2">
          <span class="text-xl">🎉</span>
          {{ siteContent.contact.form.success }}
        </div>
      </div>
    </Transition>
  </SectionWrapper>
</template>
