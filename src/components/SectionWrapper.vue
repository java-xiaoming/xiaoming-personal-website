<script setup>
import { useScrollAnimation } from '../composables/useScrollAnimation.js'

const props = defineProps({
  id: { type: String, default: '' },
  bgClass: { type: String, default: '' },
})

const { target, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    :id="id"
    class="relative scroll-mt-20"
    :class="bgClass"
  >
    <div
      ref="target"
      class="reveal mx-auto max-w-6xl px-6 py-20 md:py-28"
      :class="{ 'reveal-visible': isVisible }"
    >
      <slot />
    </div>
  </section>
</template>
