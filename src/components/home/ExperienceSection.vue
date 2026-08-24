<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { EXPERIENCE } from '@/content/experience'

const { pick } = useLocaleText()

const MARKETING_ONLY = new Set([
  'cozy-cottage',
  'enterprising-society',
  'shabash-fakibaj',
  'tribus',
])

const entries = computed(() => EXPERIENCE.filter((entry) => !MARKETING_ONLY.has(entry.id)))
</script>

<template>
  <SectionShell
    id="experience"
    :eyebrow="pick({ en: 'Track record', bn: 'কর্মপথ' })"
    :title="pick({ en: 'Professional experience', bn: 'পেশাগত অভিজ্ঞতা' })"
    :lead="
      pick({
        en: 'Engineering, teaching, and consulting roles. Marketing leadership roles live on the marketing page.',
        bn: 'ইঞ্জিনিয়ারিং, শিক্ষা ও কনসাল্টিং ভূমিকা। মার্কেটিং নেতৃত্বের ভূমিকা মার্কেটিং পেজে।',
      })
    "
  >
    <ol class="relative space-y-5 border-l border-steel/70 pl-5 sm:pl-7">
      <li v-for="entry in entries" :key="entry.id" class="relative">
        <span
          class="absolute top-2 h-2.5 w-2.5 rounded-full border-2 border-glow"
          :class="entry.current ? 'bg-glow' : 'bg-ink'"
          style="left: -1.6rem"
        />
        <div class="surface-card p-4 sm:p-5">
          <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 class="font-display text-lg font-semibold text-paper sm:text-xl">
              {{ pick(entry.role) }}
            </h3>
            <span class="text-xs font-semibold text-accent-soft sm:text-sm">{{ entry.period }}</span>
          </div>
          <p class="mt-0.5 text-sm font-medium text-glow">{{ entry.organization }}</p>
          <p v-if="entry.location" class="text-xs text-mist/70">{{ pick(entry.location) }}</p>

          <ul class="mt-3 space-y-1.5">
            <li
              v-for="highlight in entry.highlights"
              :key="highlight.en"
              class="flex gap-2 text-sm text-mist"
            >
              <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {{ pick(highlight) }}
            </li>
          </ul>

          <ul class="mt-3 flex flex-wrap gap-1.5">
            <li
              v-for="tag in entry.tags"
              :key="tag"
              class="rounded border border-steel/60 px-2 py-0.5 text-[0.7rem] text-mist/80"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </li>
    </ol>

    <RouterLink to="/marketing" class="mt-6 inline-block text-sm font-semibold text-accent">
      {{ pick({ en: 'See the marketing timeline', bn: 'মার্কেটিং টাইমলাইন দেখুন' }) }} →
    </RouterLink>
  </SectionShell>
</template>
