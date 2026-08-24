<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROJECTS } from '@/content/projects'

const { t } = useI18n()
const { pick } = useLocaleText()

const labProjects = computed(() =>
  PROJECTS.filter((p) => p.tags.includes('experiment') || p.slug === 'tree-explorer'),
)
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.lab')" />
    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="project in labProjects"
        :key="project.slug"
        class="surface-card p-5"
      >
        <h3 class="font-display text-lg text-paper">{{ pick(project.titles) }}</h3>
        <p class="mt-2 text-sm text-mist">{{ pick(project.summary) }}</p>
        <a
          v-for="link in project.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 inline-block text-sm"
        >
          {{ link.label }}
        </a>
      </article>
    </div>
    <p v-if="!labProjects.length" class="text-mist">{{ t('common.comingSoon') }}</p>
  </div>
</template>
