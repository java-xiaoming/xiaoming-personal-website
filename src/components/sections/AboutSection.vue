<script setup>
import { siteContent } from '../../data/content.js'
import SectionWrapper from '../SectionWrapper.vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation.js'
import { ref, computed } from 'vue'

const { target: skillRef, isVisible: skillsVisible } = useScrollAnimation({
  threshold: 0.2,
})
const { target: statsRef, isVisible: statsVisible } = useScrollAnimation({
  threshold: 0.3,
})

// 技能条颜色映射
const barColorMap = {
  mint: 'bg-mint-400',
  sky: 'bg-sky-400',
  coral: 'bg-coral',
  sunny: 'bg-sunny',
}

// 趣味统计数字计数动画
const animatedStats = ref(siteContent.about.stats.map(() => 0))

function animateStats() {
  siteContent.about.stats.forEach((stat, index) => {
    const duration = 1500
    const startTime = performance.now()
    const target = stat.value

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      animatedStats.value[index] = Math.round(eased * target)
      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }
    requestAnimationFrame(update)
  })
}

// 监听 statsVisible 触发计数
import { watch } from 'vue'
watch(statsVisible, (val) => {
  if (val) animateStats()
})
</script>

<template>
  <SectionWrapper id="about" bgClass="bg-cream">
    <!-- 区块标题 -->
    <div class="mb-12 text-center md:mb-16">
      <h2
        class="font-display text-4xl font-bold text-ink sm:text-5xl md:text-6xl"
      >
        {{ siteContent.about.title }}
      </h2>
      <div class="mx-auto mt-4 flex justify-center gap-2">
        <div class="h-2 w-12 rounded-full bg-mint-400"></div>
        <div class="h-2 w-6 rounded-full bg-sky-400"></div>
        <div class="h-2 w-3 rounded-full bg-coral"></div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <!-- 左侧：自我介绍 + 兴趣 -->
      <div>
        <!-- 自我介绍卡片 -->
        <div
          class="rounded-3xl border-4 border-ink bg-white p-8 shadow-cartoon"
        >
          <div
            v-for="(paragraph, index) in siteContent.about.paragraphs"
            :key="index"
            class="mb-4 last:mb-0 text-lg leading-relaxed text-ink/80"
          >
            {{ paragraph }}
          </div>
        </div>

        <!-- 兴趣标签 -->
        <div class="mt-8">
          <h3 class="mb-4 font-display text-xl font-semibold text-ink">
            我的兴趣 🎯
          </h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="interest in siteContent.about.interests"
              :key="interest.label"
              class="inline-flex items-center gap-2 rounded-full border-4 border-ink bg-white px-4 py-2 font-display font-semibold shadow-cartoon-sm transition-all duration-200 hover:-translate-y-1 hover:bg-mint-200"
            >
              <span class="text-xl">{{ interest.emoji }}</span>
              {{ interest.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- 右侧：技能条 -->
      <div>
        <div
          ref="skillRef"
          class="rounded-3xl border-4 border-ink bg-white p-8 shadow-cartoon"
        >
          <h3 class="mb-6 font-display text-xl font-semibold text-ink">
            技能栈 💪
          </h3>
          <div class="space-y-5">
            <div v-for="skill in siteContent.about.skills" :key="skill.name">
              <div
                class="mb-2 flex items-center justify-between font-display font-semibold"
              >
                <span class="text-ink">{{ skill.name }}</span>
                <span class="text-ink/60">{{ skill.level }}%</span>
              </div>
              <div
                class="h-6 w-full overflow-hidden rounded-full border-4 border-ink bg-mint-50"
              >
                <div
                  class="skill-bar-fill h-full rounded-full"
                  :class="barColorMap[skill.color] || 'bg-mint-400'"
                  :style="{
                    width: skillsVisible ? skill.level + '%' : '0%',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 趣味数据统计 -->
    <div ref="statsRef" class="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
      <div
        v-for="(stat, index) in siteContent.about.stats"
        :key="stat.label"
        class="rounded-3xl border-4 border-ink bg-white p-6 text-center shadow-cartoon-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-cartoon"
        :class="[
          index % 4 === 0 ? 'bg-mint-100' : '',
          index % 4 === 1 ? 'bg-sky-100' : '',
          index % 4 === 2 ? 'bg-coral/20' : '',
          index % 4 === 3 ? 'bg-sunny/20' : '',
        ]"
      >
        <div class="font-display text-3xl font-bold text-ink md:text-4xl">
          {{ animatedStats[index] }}{{ stat.suffix }}
        </div>
        <div class="mt-2 font-display text-sm font-semibold text-ink/60">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
