<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { SERVICES } from '@/content/services'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.services')" />

    <div class="space-y-6">
      <article v-for="service in SERVICES" :key="service.id" class="surface-card p-6">
        <h2 class="font-display text-xl font-semibold text-paper">{{ pick(service.titles) }}</h2>
        <p class="mt-2 text-mist">{{ pick(service.summary) }}</p>
        <p class="mt-3 text-sm text-glow">{{ pick(service.audience) }}</p>
        <ul class="mt-4 space-y-2 text-sm text-mist">
          <li v-for="(outcome, idx) in service.outcomes" :key="idx" class="flex gap-2">
            <span class="text-accent">—</span>
            <span>{{ pick(outcome) }}</span>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
