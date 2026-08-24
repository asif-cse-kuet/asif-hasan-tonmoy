<script setup lang="ts">
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { RESEARCH_PUBLICATIONS, THESIS_LINEAGE } from '@/content/research'

const { pick } = useLocaleText()
</script>

<template>
  <SectionShell
    id="research"
    :eyebrow="pick({ en: 'Research', bn: 'গবেষণা' })"
    :title="pick({ en: 'Published AI research', bn: 'প্রকাশিত এআই গবেষণা' })"
    :lead="pick(THESIS_LINEAGE)"
  >
    <article
      v-for="paper in RESEARCH_PUBLICATIONS"
      :key="paper.id"
      class="surface-card p-5 sm:p-7"
    >
      <div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
        <span class="rounded bg-accent/20 px-2 py-1 text-accent-soft">{{ paper.venue }}</span>
        <span class="text-mist/70">{{ paper.year }}</span>
        <span class="text-mist/70">{{ paper.model }}</span>
      </div>

      <h3 class="mt-3 font-display text-xl font-semibold leading-snug text-paper sm:text-2xl">
        {{ pick(paper.title) }}
      </h3>

      <p class="mt-3 text-sm leading-relaxed text-mist sm:text-base">{{ pick(paper.abstract) }}</p>

      <dl class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div v-for="metric in paper.metrics" :key="metric.label.en" class="rounded-md bg-ink/50 px-3 py-2.5">
          <dt class="font-display text-lg font-bold text-glow">{{ metric.value }}</dt>
          <dd class="text-[0.7rem] leading-snug text-mist/80">{{ pick(metric.label) }}</dd>
        </div>
      </dl>

      <a
        :href="paper.doiUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-5 inline-block text-sm font-semibold"
      >
        DOI {{ paper.doi }} ↗
      </a>
    </article>
  </SectionShell>
</template>
