<script setup lang="ts">
import { computed, ref } from 'vue'

import BrandIcon from '@/components/BrandIcon.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROJECTS } from '@/content/projects'
import { resolveTechIcon } from '@/content/tech-stack'
import type { ProjectTier } from '@/content/types'

const { pick } = useLocaleText()

type Filter = 'featured' | ProjectTier | 'all'

const filters = computed<{ id: Filter; label: string }[]>(() => [
  { id: 'featured', label: pick({ en: 'Featured', bn: 'নির্বাচিত' }) },
  { id: 'T1', label: pick({ en: 'Flagship', bn: 'প্রধান' }) },
  { id: 'T2', label: pick({ en: 'Supporting', bn: 'সহায়ক' }) },
  { id: 'archive', label: pick({ en: 'Archive', bn: 'আর্কাইভ' }) },
  { id: 'all', label: pick({ en: 'All', bn: 'সব' }) },
])

const active = ref<Filter>('featured')

const visible = computed(() => {
  if (active.value === 'all') return PROJECTS
  if (active.value === 'featured') return PROJECTS.filter((project) => project.featured)
  return PROJECTS.filter((project) => project.tier === active.value)
})
</script>

<template>
  <SectionShell
    id="work"
    :eyebrow="pick({ en: 'Portfolio', bn: 'পোর্টফোলিও' })"
    :title="pick({ en: 'Selected work', bn: 'নির্বাচিত কাজ' })"
    :lead="
      pick({
        en: 'Production platforms, research code, and shipped side projects — with repos and live demos where they exist.',
        bn: 'প্রোডাকশন প্ল্যাটফর্ম, গবেষণা কোড ও শিপ করা প্রজেক্ট — যেখানে আছে সেখানে রিপো ও লাইভ ডেমো সহ।',
      })
    "
  >
    <div class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
      <button
        v-for="filter in filters"
        :key="filter.id"
        type="button"
        class="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
        :class="
          active === filter.id
            ? 'border-accent bg-accent/15 text-accent-soft'
            : 'border-steel/70 text-mist hover:border-glow/50 hover:text-paper'
        "
        @click="active = filter.id"
      >
        {{ filter.label }}
      </button>
    </div>

    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in visible"
        :key="project.slug"
        class="surface-card flex flex-col p-5 transition-colors hover:border-glow/40"
      >
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-display text-lg font-semibold leading-snug text-paper">
            {{ pick(project.titles) }}
          </h3>
          <span
            class="shrink-0 rounded border border-steel/60 px-1.5 py-0.5 text-[0.75rem] uppercase tracking-wide text-mist/70"
          >
            {{ project.tier }}
          </span>
        </div>

        <p class="mt-2.5 flex-1 text-sm leading-relaxed text-mist">{{ pick(project.summary) }}</p>

        <ul class="mt-4 flex flex-wrap gap-1.5">
          <li
            v-for="tech in project.stack"
            :key="tech"
            class="flex items-center gap-1 rounded border border-steel/60 bg-ink/40 px-2 py-1 text-[0.75rem] text-paper/85"
          >
            <span class="text-mist"><BrandIcon :name="tech" :slug="resolveTechIcon(tech)" :size="12" /></span>
            {{ tech }}
          </li>
        </ul>

        <div v-if="project.links.length" class="mt-4 flex flex-wrap gap-3">
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold"
          >
            {{ link.label }} ↗
          </a>
        </div>
      </article>
    </div>
  </SectionShell>
</template>
