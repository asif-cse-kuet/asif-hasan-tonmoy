<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

defineProps<{
  title: string
  description: string
  to: string
}>()

const { prefersReducedMotion } = usePrefersReducedMotion()
</script>

<template>
  <RouterLink
    :to="to"
    class="group surface-card block p-6 no-underline transition-transform duration-300"
    :class="prefersReducedMotion ? '' : 'hover:-translate-y-1'"
  >
    <h3 class="font-display text-xl font-semibold text-paper group-hover:text-glow">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm text-mist">{{ description }}</p>
    <span class="mt-4 inline-block text-sm font-semibold text-accent group-hover:text-accent-soft">
      {{ $t('common.readMore') }} →
    </span>
  </RouterLink>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
