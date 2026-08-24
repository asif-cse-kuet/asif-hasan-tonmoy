<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { MARKETING_CASE_METRICS } from '@/content/marketing-seed'

const { pick } = useLocaleText()

const platformSlug: Record<string, string> = {
  pinterest: 'pinterest',
  instagram: 'instagram',
  upwork: 'upwork',
  general: 'upwork',
}
</script>

<template>
  <section>
    <h2 class="font-display text-xl font-semibold text-paper">
      {{ pick({ en: 'Client results', bn: 'ক্লায়েন্ট ফলাফল' }) }}
    </h2>
    <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in MARKETING_CASE_METRICS"
        :key="item.id"
        class="surface-card p-4"
      >
        <div class="flex items-center gap-2">
          <BrandIcon :name="item.platform" :slug="platformSlug[item.platform]" :size="22" />
          <p v-if="item.client" class="text-sm font-semibold text-paper">{{ item.client }}</p>
        </div>
        <p class="mt-2 font-display text-2xl font-semibold text-accent">{{ item.metric }}</p>
        <p class="text-sm text-mist">{{ pick(item.label) }}</p>
      </div>
    </div>
  </section>
</template>
