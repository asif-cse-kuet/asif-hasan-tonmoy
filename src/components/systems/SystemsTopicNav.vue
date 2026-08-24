<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { IndustryTopic } from '@/content/industry-topics/topics'
import { formatLesson } from '@/content/industry-topics'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  prev?: IndustryTopic
  next?: IndustryTopic
}>()

const { pick } = useLocaleText()
</script>

<template>
  <nav class="mt-10 flex w-full flex-col gap-3 border-t border-steel/60 pt-8 sm:flex-row sm:justify-between">
    <RouterLink
      v-if="prev"
      :to="`/systems/${prev.domain}/${prev.slug}`"
      class="surface-card min-h-11 flex-1 p-4 no-underline hover:border-glow/40"
    >
      <span class="text-xs uppercase tracking-wide text-mist">
        ← {{ pick({ en: 'Previous lesson', bn: 'আগের পাঠ' }) }}
      </span>
      <p class="mt-1 font-display text-paper">
        <span class="font-mono text-accent-soft">{{ formatLesson(prev.lesson) }}.</span>
        {{ pick(prev.titles) }}
      </p>
    </RouterLink>
    <div v-else class="flex-1" />

    <RouterLink
      v-if="next"
      :to="`/systems/${next.domain}/${next.slug}`"
      class="surface-card min-h-11 flex-1 p-4 text-right no-underline hover:border-glow/40"
    >
      <span class="text-xs uppercase tracking-wide text-mist">
        {{ pick({ en: 'Next lesson', bn: 'পরের পাঠ' }) }} →
      </span>
      <p class="mt-1 font-display text-paper">
        <span class="font-mono text-accent-soft">{{ formatLesson(next.lesson) }}.</span>
        {{ pick(next.titles) }}
      </p>
    </RouterLink>
  </nav>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
