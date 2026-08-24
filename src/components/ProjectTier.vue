<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { Project } from '@/content/projects'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  tier: 'T1' | 'T2' | 'archive'
  projects: Project[]
}>()

const { pick } = useLocaleText()

const tierLabels = {
  T1: { en: 'Tier 1 — Flagship', bn: 'টিয়ার ১ — ফ্ল্যাগশিপ' },
  T2: { en: 'Tier 2 — Supporting', bn: 'টিয়ার ২ — সাপোর্টিং' },
  archive: { en: 'Archive', bn: 'আর্কাইভ' },
}
</script>

<template>
  <section v-if="projects.length" class="space-y-4">
    <h3 class="font-display text-xl font-semibold text-accent-soft">
      {{ pick(tierLabels[tier]) }}
    </h3>
    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="project in projects"
        :key="project.slug"
        class="surface-card flex flex-col p-5"
      >
        <h4 class="font-display text-lg font-semibold text-paper">
          <RouterLink :to="`/work/${project.slug}`" class="hover:text-glow">
            {{ pick(project.titles) }}
          </RouterLink>
        </h4>
        <p class="mt-2 flex-1 text-sm text-mist">{{ pick(project.summary) }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="rounded bg-steel/40 px-2 py-0.5 text-xs text-mist"
          >
            {{ tech }}
          </span>
        </div>
        <RouterLink
          :to="`/work/${project.slug}`"
          class="mt-4 text-sm font-semibold text-accent no-underline hover:text-accent-soft"
        >
          {{ $t('common.readMore') }} →
        </RouterLink>
      </article>
    </div>
  </section>
</template>
