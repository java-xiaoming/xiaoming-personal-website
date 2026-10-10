<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { siteContent } from '../data/content.js'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-all duration-300"
    :class="
      scrolled
        ? 'border-line bg-white/90 shadow-soft-sm'
        : 'border-transparent bg-white/60'
    "
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-2.5 text-lg font-bold text-ink transition-opacity hover:opacity-80"
        @click="closeMobileMenu"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white shadow-soft-sm"
        >
          {{ siteContent.name.charAt(0) }}
        </span>
        <span class="hidden sm:inline">{{ siteContent.name }} · AI PM</span>
      </router-link>

      <!-- 桌面端导航链接 -->
      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in siteContent.nav.links" :key="link.to">
          <router-link
            :to="link.to"
            class="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-all duration-200 hover:bg-brand-50 hover:text-brand-700"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <!-- 移动端汉堡按钮 -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-ink transition hover:bg-surface md:hidden"
        :aria-label="mobileMenuOpen ? '关闭菜单' : '打开菜单'"
        :aria-expanded="mobileMenuOpen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          v-if="!mobileMenuOpen"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          v-else
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
    </div>

    <!-- 移动端展开菜单 -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="border-t border-line bg-white/95 px-6 py-4 backdrop-blur-md md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in siteContent.nav.links" :key="link.to">
            <router-link
              :to="link.to"
              class="block rounded-xl px-5 py-3 text-base font-medium text-ink-soft transition hover:bg-brand-50 hover:text-brand-700"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
