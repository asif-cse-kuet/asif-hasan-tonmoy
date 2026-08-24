<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import {
  CODING_NARRATIVE,
  CODING_PROFILES,
  FEATURED_REPOS,
} from '@/content/coding-profiles'

const { t } = useI18n()
const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.coding')" :subtitle="pick(CODING_NARRATIVE)" />

    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="profile in CODING_PROFILES"
        :key="profile.id"
        class="surface-card p-5"
      >
        <h3 class="font-display text-lg text-paper">{{ profile.platform }}</h3>
        <p class="text-sm text-glow">{{ profile.handle }}</p>
        <p class="mt-2 text-sm text-mist">{{ pick(profile.narrative) }}</p>
        <a
          :href="profile.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 inline-block text-sm font-semibold"
        >
          {{ $t('common.readMore') }} →
        </a>
      </article>
    </div>

    <section class="mt-12">
      <h2 class="font-display text-xl font-semibold text-paper">Featured repos</h2>
      <ul class="mt-4 space-y-3">
        <li v-for="repo in FEATURED_REPOS" :key="repo.url" class="surface-card p-4">
          <a :href="repo.url" target="_blank" rel="noopener noreferrer" class="font-semibold">
            {{ repo.name }}
          </a>
          <p class="mt-1 text-sm text-mist">{{ pick(repo.description) }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
