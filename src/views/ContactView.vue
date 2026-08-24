<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE } from '@/content/profile'
import { UPWORK_METRICS } from '@/content/marketing-seed'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.contact')" :subtitle="pick(PROFILE.tagline)" />

    <div class="surface-card max-w-xl p-6">
      <p class="font-display text-xl text-paper">{{ PROFILE.name }}</p>
      <p class="mt-2 text-mist">{{ pick(PROFILE.location) }}</p>
      <a :href="`mailto:${PROFILE.email}`" class="mt-4 inline-block text-lg font-semibold">
        {{ PROFILE.email }}
      </a>
      <div class="mt-6 flex flex-wrap gap-3">
        <a
          :href="UPWORK_METRICS.hireUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          {{ t('common.hire') }}
        </a>
        <a
          href="https://www.linkedin.com/in/asif-hasan-tonmoy/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>
