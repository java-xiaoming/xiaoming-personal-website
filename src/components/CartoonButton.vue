<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'accent'].includes(v),
  },
  href: { type: String, default: '' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
})

const variantClasses = {
  primary: 'bg-mint-400 hover:bg-mint-500',
  secondary: 'bg-sky-400 hover:bg-sky-500',
  accent: 'bg-coral hover:opacity-90',
}

const sizeClasses = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
}
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="cartoon-btn inline-flex items-center justify-center gap-2 rounded-full border-4 border-ink font-display font-semibold text-ink shadow-cartoon-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </a>
  <button
    v-else
    class="cartoon-btn inline-flex items-center justify-center gap-2 rounded-full border-4 border-ink font-display font-semibold text-ink shadow-cartoon-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </button>
</template>
