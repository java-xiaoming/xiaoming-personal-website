<script setup>
import Decorations from './components/Decorations.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-surface text-ink">
    <!-- 全局背景装饰 -->
    <Decorations />

    <!-- 导航栏 -->
    <AppNavbar />

    <!-- 路由视图 -->
    <main class="relative z-10">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition-opacity duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>
