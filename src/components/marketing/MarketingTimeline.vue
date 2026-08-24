<script setup lang="ts">
import type { MarketingTimelineEntry } from '@/content/marketing-timeline'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  entries: MarketingTimelineEntry[]
}>()

const { pick } = useLocaleText()
</script>

<template>
  <section>
    <h2 class="font-display text-xl font-semibold text-paper">
      {{ pick({ en: 'Marketing career timeline', bn: 'মার্কেটিং ক্যারিয়ার টাইমলাইন' }) }}
    </h2>
    <ol class="relative mt-6 space-y-8 border-l border-steel/80 pl-6">
      <li v-for="entry in entries" :key="entry.id" class="relative">
        <span
          class="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-glow bg-ink"
          :class="entry.current ? 'bg-glow' : ''"
        />
        <div class="surface-card p-5">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="font-display text-lg font-semibold text-paper">{{ entry.organization }}</h3>
            <span class="text-sm text-mist">{{ entry.period }}</span>
          </div>
          <p class="mt-1 text-sm text-glow">{{ pick(entry.role) }}</p>
          <ul class="mt-4 space-y-2 text-sm text-mist">
            <li v-for="(highlight, idx) in entry.highlights" :key="idx" class="flex gap-2">
              <span class="text-accent">-</span>
              <span>{{ pick(highlight) }}</span>
            </li>
          </ul>
          <div v-if="entry.metrics?.length" class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="metric in entry.metrics"
              :key="metric"
              class="rounded bg-glow/15 px-2 py-0.5 text-xs font-semibold text-glow"
            >
              {{ metric }}
            </span>
          </div>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tag in entry.tags"
              :key="tag"
              class="rounded bg-steel/40 px-2 py-0.5 text-xs text-mist"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
