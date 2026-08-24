<script setup lang="ts">
import type { LocaleText } from '@/content/types'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  sections: { key: string; label: LocaleText; text: LocaleText }[]
}>()

const { pick } = useLocaleText()
</script>

<template>
  <article class="max-w-3xl space-y-6">
    <section v-for="section in sections" :key="section.key">
      <h2 class="font-display text-lg font-semibold text-glow">{{ pick(section.label) }}</h2>
      <p class="mt-2 text-mist">{{ pick(section.text) }}</p>
    </section>
  </article>
</template>
