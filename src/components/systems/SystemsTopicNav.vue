<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { IndustryTopic } from '@/content/industry-topics/topics'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  domainSlug: string
  prev?: IndustryTopic
  next?: IndustryTopic
}>()

const { pick } = useLocaleText()
</script>

<template>
  <nav class="mt-10 flex flex-col gap-3 border-t border-steel/60 pt-8 sm:flex-row sm:justify-between">
    <RouterLink
      v-if="prev"
      :to="`/systems/${domainSlug}/${prev.slug}`"
      class="surface-card min-h-11 flex-1 p-4 no-underline hover:border-glow/40"
    >
      <span class="text-xs uppercase tracking-wide text-mist">← {{ pick({ en: 'Previous', bn: 'আগের' }) }}</span>
      <p class="mt-1 font-display text-paper">{{ pick(prev.titles) }}</p>
    </RouterLink>
    <div v-else class="flex-1" />

    <RouterLink
      v-if="next"
      :to="`/systems/${domainSlug}/${next.slug}`"
      class="surface-card min-h-11 flex-1 p-4 text-right no-underline hover:border-glow/40"
    >
      <span class="text-xs uppercase tracking-wide text-mist">{{ pick({ en: 'Next', bn: 'পরের' }) }} →</span>
      <p class="mt-1 font-display text-paper">{{ pick(next.titles) }}</p>
    </RouterLink>
  </nav>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
