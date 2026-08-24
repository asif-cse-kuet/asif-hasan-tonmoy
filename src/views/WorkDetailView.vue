<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROJECTS } from '@/content/projects'

const route = useRoute()
const { t } = useI18n()
const { pick } = useLocaleText()

const project = computed(() => PROJECTS.find((p) => p.slug === route.params.slug))
</script>

<template>
  <div class="page-wrap py-10">
    <RouterLink to="/work" class="text-sm text-glow">{{ t('common.back') }}</RouterLink>

    <template v-if="project">
      <PageHero :title="pick(project.titles)" :subtitle="project.tier" />
      <p class="max-w-3xl text-mist">{{ pick(project.summary) }}</p>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="rounded bg-steel/40 px-2 py-1 text-sm text-mist"
        >
          {{ tech }}
        </span>
      </div>
      <ul v-if="project.links.length" class="mt-6 space-y-2">
        <li v-for="link in project.links" :key="link.url">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }}</a>
        </li>
      </ul>
    </template>

    <p v-else class="mt-8 text-mist">{{ t('common.comingSoon') }}</p>
  </div>
</template>
