<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { SYSTEM_CONCEPTS } from '@/content/systems'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.systems')" />

    <div class="grid gap-4 md:grid-cols-2">
      <RouterLink
        v-for="concept in SYSTEM_CONCEPTS"
        :key="concept.slug"
        :to="`/systems/${concept.slug}`"
        class="surface-card block p-5 no-underline hover:border-glow/40"
      >
        <h3 class="font-display text-lg text-paper">{{ pick(concept.titles) }}</h3>
        <p class="mt-2 text-sm text-mist">{{ pick(concept.summary) }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
