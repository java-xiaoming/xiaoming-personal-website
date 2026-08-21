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
    class="fixed left-0 right-0 top-0 z-50 border-b-4 border-ink/10 backdrop-blur-md transition-all duration-300"
    :class="
      scrolled
        ? 'bg-cream/90 shadow-cartoon-sm'
        : 'bg-cream/60'
    "
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <!-- Logo -->
      <a
        href="#hero"
        class="flex items-center gap-2 font-display text-2xl font-bold text-ink transition-transform hover:scale-105"
        @click="closeMobileMenu"
      >
        <span
          class="flex h-10 w-10 items-center justify-center rounded-full border-4 border-ink bg-mint-400 text-lg shadow-cartoon-sm"
        >
          {{ siteContent.name.charAt(0) }}
        </span>
        <span class="hidden sm:inline">{{ siteContent.name }}</span>
      </a>

      <!-- 桌面端导航链接 -->
      <ul class="hidden items-center gap-2 md:flex">
        <li v-for="link in siteContent.nav.links" :key="link.href">
          <a
            :href="link.href"
            class="rounded-full px-5 py-2 font-display font-semibold text-ink transition-all duration-200 hover:bg-mint-300 hover:shadow-cartoon-sm"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- 移动端汉堡按钮 -->
      <button
        class="flex h-11 w-11 items-center justify-center rounded-full border-4 border-ink bg-mint-400 shadow-cartoon-sm transition-all duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none md:hidden"
        :aria-label="mobileMenuOpen ? '关闭菜单' : '打开菜单'"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          v-if="!mobileMenuOpen"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#334155"
          stroke-width="3"
          stroke-linecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          v-else
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#334155"
          stroke-width="3"
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
        class="border-t-4 border-ink/10 bg-cream/95 px-6 py-4 backdrop-blur-md md:hidden"
      >
        <ul class="flex flex-col gap-3">
          <li v-for="link in siteContent.nav.links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-full border-4 border-ink bg-white px-5 py-3 text-center font-display text-lg font-semibold text-ink shadow-cartoon-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:bg-mint-300 hover:shadow-none"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
