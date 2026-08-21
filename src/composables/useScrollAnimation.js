import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 基于 Intersection Observer 的滚动入场动画
 * @param {Object} options
 * @param {number} options.threshold - 可见比例阈值，默认 0.15
 * @param {string} options.rootMargin - root 边距，默认 '0px 0px -50px 0px'
 * @param {boolean} options.once - 是否只触发一次，默认 true
 * @returns {{ target: import('vue').Ref<HTMLElement|null>, isVisible: import('vue').Ref<boolean> }}
 */
export function useScrollAnimation(options = {}) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    // 尊重减少动画偏好：直接显示
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) {
      isVisible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (options.once !== false) {
            observer.disconnect()
          }
        } else if (options.once === false) {
          isVisible.value = false
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -50px 0px',
      }
    )

    if (target.value) {
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { target, isVisible }
}
