<script setup lang="ts">
import type { ProofMetric } from '@/content/profile'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  metrics: ProofMetric[]
}>()

const { pick } = useLocaleText()
</script>

<template>
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
    <div
      v-for="metric in metrics"
      :key="metric.id"
      class="surface-card px-3 py-4 text-center"
    >
      <p class="font-display text-2xl font-semibold text-glow">{{ metric.value }}</p>
      <p class="mt-1 text-xs text-mist">{{ pick(metric.label) }}</p>
    </div>
  </div>
</template>
