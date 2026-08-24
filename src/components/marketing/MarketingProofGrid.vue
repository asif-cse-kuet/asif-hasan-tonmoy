<script setup lang="ts">
import { useLocaleText } from '@/composables/useLocaleText'
import { UPWORK_METRICS } from '@/content/marketing-seed'

const { pick } = useLocaleText()

const metrics = [
  { value: UPWORK_METRICS.status, label: { en: 'Upwork status', bn: 'Upwork status' } },
  { value: UPWORK_METRICS.hours, label: { en: 'Hours logged', bn: 'ঘণ্টা logged' } },
  { value: String(UPWORK_METRICS.jobs), label: { en: 'Jobs completed', bn: 'Job সম্পন্ন' } },
  { value: UPWORK_METRICS.successRate, label: { en: 'Success rate', bn: 'Success rate' } },
  { value: UPWORK_METRICS.triumphs, label: { en: 'Triumphs', bn: 'Triumphs' } },
  { value: UPWORK_METRICS.clientsFraming, label: { en: 'Clients served', bn: 'Client served' } },
  {
    value: UPWORK_METRICS.pinterestCampaigns,
    label: { en: 'Pinterest campaigns', bn: 'Pinterest campaign' },
  },
  {
    value: UPWORK_METRICS.instagramCampaigns,
    label: { en: 'Instagram campaigns', bn: 'Instagram campaign' },
  },
]
</script>

<template>
  <section>
    <h2 class="font-display text-xl font-semibold text-paper">
      {{ pick({ en: 'Proof at a glance', bn: 'এক নজরে প্রমাণ' }) }}
    </h2>
    <div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
      <div
        v-for="(item, idx) in metrics"
        :key="idx"
        class="surface-card px-3 py-4 text-center"
      >
        <p class="font-display text-xl font-semibold text-glow sm:text-2xl">{{ item.value }}</p>
        <p class="mt-1 text-xs text-mist">{{ pick(item.label) }}</p>
      </div>
    </div>
  </section>
</template>
