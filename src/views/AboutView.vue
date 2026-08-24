<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE } from '@/content/profile'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.about')" :subtitle="pick(PROFILE.shortBio)" />

    <dl class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2">
      <div>
        <dt class="text-xs uppercase tracking-wide text-mist">Location</dt>
        <dd class="text-paper">{{ pick(PROFILE.location) }}</dd>
      </div>
      <div>
        <dt class="text-xs uppercase tracking-wide text-mist">Education</dt>
        <dd class="text-paper">{{ pick(PROFILE.education) }}</dd>
      </div>
      <div class="sm:col-span-2">
        <dt class="text-xs uppercase tracking-wide text-mist">Brand line</dt>
        <dd class="text-paper">{{ pick(PROFILE.brandLine) }}</dd>
      </div>
    </dl>
  </div>
</template>
