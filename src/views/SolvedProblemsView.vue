<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { SOLVED_PROBLEMS } from '@/content/solved-problems'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.solvedProblems')" />

    <div class="grid gap-4 md:grid-cols-2">
      <RouterLink
        v-for="problem in SOLVED_PROBLEMS"
        :key="problem.slug"
        :to="`/problems/solved/${problem.slug}`"
        class="surface-card block p-5 no-underline hover:border-glow/40"
      >
        <h3 class="font-display text-lg text-paper">{{ pick(problem.titles) }}</h3>
        <p class="mt-2 text-sm text-mist">{{ pick(problem.summary) }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tag in problem.tags.slice(0, 4)"
            :key="tag"
            class="rounded bg-steel/40 px-2 py-0.5 text-xs text-mist"
          >
            {{ tag }}
          </span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
