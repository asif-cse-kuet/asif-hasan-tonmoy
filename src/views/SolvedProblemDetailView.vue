<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import PageHero from '@/components/PageHero.vue'
import ProblemChatView from '@/components/problems/ProblemChatView.vue'
import ProblemDetailSections from '@/components/problems/ProblemDetailSections.vue'
import ProblemNav from '@/components/problems/ProblemNav.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { getAdjacentProblems, getSolvedProblemBySlug } from '@/content/solved-problems'

const route = useRoute()
const { pick } = useLocaleText()

const chatMode = ref(true)

const slug = computed(() => String(route.params.slug))
const problem = computed(() => getSolvedProblemBySlug(slug.value))
const adjacent = computed(() => getAdjacentProblems(slug.value))

const hasChat = computed(() => Boolean(problem.value?.chat?.length))

const sections = computed(() => {
  if (!problem.value) return []
  const p = problem.value
  return [
    { key: 'context', label: { en: 'Context', bn: 'প্রসঙ্গ' }, text: p.context },
    { key: 'constraints', label: { en: 'Constraints', bn: 'সীমাবদ্ধতা' }, text: p.problem },
    { key: 'diagnosis', label: { en: 'Diagnosis', bn: 'নির্ণয়' }, text: p.diagnosis },
    { key: 'fix', label: { en: 'Fix', bn: 'সমাধান' }, text: p.fix },
    { key: 'impact', label: { en: 'Impact', bn: 'প্রভাব' }, text: p.impact },
  ]
})

watch(
  () => problem.value,
  (p) => {
    chatMode.value = Boolean(p?.chat?.length)
  },
  { immediate: true },
)
</script>

<template>
  <div class="page-wrap py-10">
    <nav class="mb-6 text-sm">
      <RouterLink to="/problems/solved" class="text-glow">
        {{ pick({ en: '← All solved problems', bn: '← সব solved problem' }) }}
      </RouterLink>
    </nav>

    <template v-if="problem">
      <PageHero :title="pick(problem.titles)" :subtitle="pick(problem.summary)" />

      <div class="mb-6 flex flex-wrap gap-2">
        <span
          v-for="tech in problem.stack"
          :key="tech"
          class="rounded bg-steel/40 px-2 py-1 text-xs text-mist"
        >
          {{ tech }}
        </span>
      </div>

      <div v-if="hasChat" class="mb-6 flex gap-2">
        <button
          type="button"
          class="min-h-10 rounded px-3 py-1.5 text-sm font-semibold"
          :class="chatMode ? 'bg-glow text-ink' : 'border border-steel text-mist'"
          @click="chatMode = true"
        >
          {{ pick({ en: 'Chat transcript', bn: 'Chat transcript' }) }}
        </button>
        <button
          type="button"
          class="min-h-10 rounded px-3 py-1.5 text-sm font-semibold"
          :class="!chatMode ? 'bg-glow text-ink' : 'border border-steel text-mist'"
          @click="chatMode = false"
        >
          {{ pick({ en: 'Article view', bn: 'Article view' }) }}
        </button>
      </div>

      <ProblemChatView v-if="chatMode && hasChat" :turns="problem.chat!" />
      <ProblemDetailSections v-else :sections="sections" />

      <ProblemNav :prev="adjacent.prev" :next="adjacent.next" />
    </template>

    <p v-else class="mt-8 text-mist">
      {{ pick({ en: 'Problem not found.', bn: 'সমস্যা পাওয়া যায়নি।' }) }}
    </p>
  </div>
</template>
