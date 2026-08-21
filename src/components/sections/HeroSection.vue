<script setup>
import { siteContent } from '../../data/content.js'
import CartoonButton from '../CartoonButton.vue'
</script>

<template>
  <section
    id="hero"
    class="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-mint-100 via-mint-50 to-sky-100 pt-20"
  >
    <!-- 背景装饰圆点 -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute left-[10%] top-[25%] h-8 w-8 rounded-full bg-sunny/40"></div>
      <div class="absolute right-[15%] top-[30%] h-6 w-6 rounded-full bg-coral/40"></div>
      <div class="absolute left-[20%] bottom-[25%] h-5 w-5 rounded-full bg-sky-400/40"></div>
      <div class="absolute right-[25%] bottom-[20%] h-10 w-10 rounded-full bg-mint-400/30"></div>
    </div>

    <!-- 浮动云朵（Hero 专属） -->
    <div class="animate-float pointer-events-none absolute left-[8%] top-[18%] hidden md:block" aria-hidden="true" style="animation-delay: 0s;">
      <svg width="100" height="55" viewBox="0 0 100 55" fill="none">
        <ellipse cx="30" cy="38" rx="25" ry="18" fill="white" opacity="0.8" />
        <ellipse cx="52" cy="28" rx="24" ry="20" fill="white" opacity="0.9" />
        <ellipse cx="72" cy="38" rx="22" ry="16" fill="white" opacity="0.8" />
      </svg>
    </div>
    <div class="animate-float pointer-events-none absolute right-[10%] top-[15%] hidden lg:block" aria-hidden="true" style="animation-delay: 2s;">
      <svg width="80" height="45" viewBox="0 0 80 45" fill="none">
        <ellipse cx="25" cy="30" rx="20" ry="15" fill="white" opacity="0.7" />
        <ellipse cx="42" cy="22" rx="20" ry="17" fill="white" opacity="0.8" />
        <ellipse cx="58" cy="30" rx="18" ry="14" fill="white" opacity="0.7" />
      </svg>
    </div>

    <div class="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-8">
      <!-- 左侧文字 -->
      <div class="order-2 text-center md:order-1 md:text-left">
        <p
          class="animate-fade-up mb-4 inline-block rounded-full border-4 border-ink bg-white px-5 py-2 font-display text-lg font-semibold shadow-cartoon-sm"
          style="animation-delay: 0.1s; opacity: 0;"
        >
          {{ siteContent.hero.greeting }}
        </p>

        <h1
          class="animate-fade-up font-display text-6xl font-bold leading-tight text-ink sm:text-7xl md:text-8xl"
          style="animation-delay: 0.3s; opacity: 0;"
        >
          <span
            class="bg-gradient-to-r from-mint-500 to-sky-500 bg-clip-text text-transparent"
          >
            {{ siteContent.hero.name }}
          </span>
        </h1>

        <h2
          class="animate-fade-up mt-4 font-display text-2xl font-semibold text-ink/80 sm:text-3xl"
          style="animation-delay: 0.5s; opacity: 0;"
        >
          {{ siteContent.hero.tagline }}
        </h2>

        <p
          class="animate-fade-up mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink/70 md:mx-0"
          style="animation-delay: 0.7s; opacity: 0;"
        >
          {{ siteContent.hero.description }}
        </p>

        <div
          class="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          style="animation-delay: 0.9s; opacity: 0;"
        >
          <CartoonButton href="#about" variant="primary" size="lg">
            {{ siteContent.hero.ctaPrimary }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </CartoonButton>
          <CartoonButton href="#contact" variant="accent" size="lg">
            {{ siteContent.hero.ctaSecondary }}
          </CartoonButton>
        </div>
      </div>

      <!-- 右侧卡通头像 -->
      <div class="order-1 flex justify-center md:order-2">
        <div
          class="animate-pop relative"
          style="animation-delay: 0.4s; opacity: 0;"
        >
          <!-- 头像背景圆 -->
          <div
            class="flex h-64 w-64 items-center justify-center rounded-full border-4 border-ink bg-gradient-to-br from-mint-300 to-sky-300 shadow-cartoon-lg sm:h-72 sm:w-72 md:h-80 md:w-80"
          >
            <!-- 卡通头像 SVG -->
            <svg
              viewBox="0 0 200 200"
              class="h-48 w-48 sm:h-56 sm:w-56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- 脸 -->
              <circle cx="100" cy="105" r="65" fill="#FFE0B2" stroke="#334155" stroke-width="4" />
              <!-- 头发 -->
              <path
                d="M40 95 C40 55 70 35 100 35 C130 35 160 55 160 95 L160 75 C150 55 130 45 100 45 C70 45 50 55 40 75 Z"
                fill="#334155"
              />
              <!-- 眼睛 -->
              <circle cx="78" cy="100" r="7" fill="#334155" />
              <circle cx="122" cy="100" r="7" fill="#334155" />
              <!-- 眼睛高光 -->
              <circle cx="80" cy="97" r="2.5" fill="white" />
              <circle cx="124" cy="97" r="2.5" fill="white" />
              <!-- 腮红 -->
              <ellipse cx="68" cy="120" rx="10" ry="6" fill="#fb7185" opacity="0.5" />
              <ellipse cx="132" cy="120" rx="10" ry="6" fill="#fb7185" opacity="0.5" />
              <!-- 嘴巴 -->
              <path
                d="M82 128 Q100 145 118 128"
                stroke="#334155"
                stroke-width="4"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>

          <!-- 装饰小元素 -->
          <div class="animate-wiggle absolute -right-4 -top-4">
            <svg width="45" height="45" viewBox="0 0 50 50">
              <path
                d="M25 2 L30 18 L47 18 L33 29 L38 46 L25 36 L12 46 L17 29 L3 18 L20 18 Z"
                fill="#fbbf24"
                stroke="#334155"
                stroke-width="3"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="animate-float absolute -bottom-2 -left-6">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" fill="#fb7185" stroke="#334155" stroke-width="3" />
              <text x="20" y="27" text-anchor="middle" font-size="18" fill="white" font-family="Fredoka">✦</text>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- 向下滚动指示箭头 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <a
        href="#about"
        aria-label="向下滚动"
        class="flex flex-col items-center gap-2 text-ink/50 transition-colors hover:text-ink"
      >
        <span class="font-display text-sm font-semibold">向下滚动</span>
        <div class="animate-bounce-slow">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </a>
    </div>

    <!-- 底部波浪分隔 -->
    <div class="absolute bottom-0 left-0 right-0 leading-none">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        class="h-12 w-full md:h-16"
      >
        <path
          d="M0 80V50C360 10 720 90 1080 50C1260 30 1380 40 1440 50V80H0Z"
          fill="#fffbeb"
        />
      </svg>
    </div>
  </section>
</template>
