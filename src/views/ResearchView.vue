<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { RESEARCH_PUBLICATIONS } from '@/content/research'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.research')" />

    <article
      v-for="pub in RESEARCH_PUBLICATIONS"
      :key="pub.id"
      class="surface-card mb-6 p-6"
    >
      <h2 class="font-display text-xl font-semibold text-paper">{{ pick(pub.title) }}</h2>
      <p class="mt-1 text-sm text-glow">{{ pub.venue }} · {{ pub.year }} · {{ pub.model }}</p>
      <p class="mt-4 text-mist">{{ pick(pub.abstract) }}</p>
      <div class="mt-4 grid gap-2 sm:grid-cols-2">
        <div
          v-for="metric in pub.metrics"
          :key="metric.value + pick(metric.label)"
          class="rounded bg-ink px-3 py-2 text-sm"
        >
          <span class="text-glow">{{ metric.value }}</span>
          <span class="text-mist"> — {{ pick(metric.label) }}</span>
        </div>
      </div>
      <a :href="pub.doiUrl" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block text-sm">
        DOI: {{ pub.doi }}
      </a>
    </article>
  </div>
</template>
