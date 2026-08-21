<script setup>
import Decorations from './components/Decorations.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-cream font-body text-ink"
  >
    <!-- 全局卡通装饰 -->
    <Decorations />

    <!-- 导航栏 -->
    <AppNavbar />

    <!-- 主内容 -->
    <main class="relative z-10">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>

    <!-- 页脚 -->
    <AppFooter />
  </div>
</template>
