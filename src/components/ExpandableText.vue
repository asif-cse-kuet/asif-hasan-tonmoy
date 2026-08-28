<script setup lang="ts">
import { computed, ref } from 'vue'

import { useLocaleText } from '@/composables/useLocaleText'

const props = withDefaults(
  defineProps<{
    text: string
    maxLines?: number
    minChars?: number
    class?: string
  }>(),
  {
    maxLines: 4,
    minChars: 140,
  },
)

const { pick } = useLocaleText()
const expanded = ref(false)

const collapsible = computed(() => props.text.trim().length >= props.minChars)
</script>

<template>
  <div>
    <p
      :class="[
        'expandable-text',
        collapsible && !expanded && 'expandable-text--clamped',
        props.class,
      ]"
      :style="collapsible && !expanded ? { '--expand-lines': maxLines } : undefined"
    >
      {{ text }}
    </p>
    <button
      v-if="collapsible"
      type="button"
      class="expandable-text__toggle mt-2 inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-glow sm:hidden"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      <span class="text-base leading-none" aria-hidden="true">{{ expanded ? '−' : '⋯' }}</span>
      {{ pick(expanded ? { en: 'Less', bn: 'কম' } : { en: 'More', bn: 'আরও' }) }}
    </button>
  </div>
</template>
