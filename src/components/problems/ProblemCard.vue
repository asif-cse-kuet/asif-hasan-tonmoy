<script setup lang="ts">
import type { SolvedProblem } from '@/content/solved-problems'
import { useLocaleText } from '@/composables/useLocaleText'

defineProps<{
  problem: SolvedProblem
}>()

const { pick } = useLocaleText()

function impactSnippet(text: string): string {
  const trimmed = text.trim()
  if (trimmed.length <= 72) return trimmed
  return `${trimmed.slice(0, 69)}…`
}
</script>

<template>
  <article class="surface-card flex h-full flex-col p-5 transition-colors hover:border-glow/40">
    <div class="flex flex-wrap items-start justify-between gap-2">
      <h3 class="font-display text-lg font-semibold text-paper">{{ pick(problem.titles) }}</h3>
      <span
        class="shrink-0 rounded bg-glow/15 px-2 py-0.5 text-xs font-semibold text-glow"
        :title="pick(problem.impact)"
      >
        {{ impactSnippet(pick(problem.impact)) }}
      </span>
    </div>
    <p class="mt-2 flex-1 text-sm text-mist">{{ pick(problem.summary) }}</p>
    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="tech in problem.stack.slice(0, 4)"
        :key="tech"
        class="rounded bg-steel/40 px-2 py-0.5 text-xs text-mist"
      >
        {{ tech }}
      </span>
    </div>
    <div class="mt-3 flex flex-wrap gap-2">
      <span
        v-for="tag in problem.tags.slice(0, 3)"
        :key="tag"
        class="rounded bg-ink px-2 py-0.5 text-xs text-mist/80"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
