<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { IndustryTopic } from '@/content/industry-topics/topics'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  topic: IndustryTopic
  domainSlug: string
}>()

const { pick } = useLocaleText()
</script>

<template>
  <RouterLink
    :to="`/systems/${domainSlug}/${topic.slug}`"
    class="surface-card block p-5 no-underline transition-colors hover:border-glow/50"
  >
    <div class="flex flex-wrap items-start justify-between gap-2">
      <h3 class="font-display text-lg font-semibold text-paper">{{ pick(topic.titles) }}</h3>
      <span
        class="rounded px-2 py-0.5 text-xs uppercase tracking-wide"
        :class="{
          'bg-steel/60 text-mist': topic.status === 'stub',
          'bg-accent/20 text-accent-soft': topic.status === 'partial',
          'bg-glow/20 text-glow': topic.status === 'full',
        }"
      >
        {{ topic.status }}
      </span>
    </div>
    <p class="mt-2 text-sm text-mist">{{ pick(topic.summary) }}</p>
    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="tag in topic.tags.slice(0, 4)"
        :key="tag"
        class="rounded bg-ink px-2 py-0.5 text-xs text-mist"
      >
        {{ tag }}
      </span>
    </div>
  </RouterLink>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
