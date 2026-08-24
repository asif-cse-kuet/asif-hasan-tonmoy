<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { DOMAINS } from '@/content/industry-topics'
import { TOPICS } from '@/content/industry-topics/topics'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.industryHub')" />
    <DisclaimerBanner />

    <p class="mb-6 text-sm text-mist">
      {{ TOPICS.length }} topics across {{ DOMAINS.length }} domains
    </p>

    <div class="grid gap-4 md:grid-cols-2">
      <RouterLink
        v-for="domain in DOMAINS"
        :key="domain.slug"
        :to="`/problems/industry/${domain.slug}`"
        class="surface-card block p-5 no-underline hover:border-glow/40"
      >
        <h3 class="font-display text-lg text-paper">{{ pick(domain.titles) }}</h3>
        <p class="mt-2 text-sm text-mist">{{ pick(domain.summary) }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
