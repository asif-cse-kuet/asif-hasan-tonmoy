<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { getSolvedProblemBySlug } from '@/content/solved-problems'

const route = useRoute()
const { t } = useI18n()
const { pick } = useLocaleText()

const chatMode = ref(true)

const problem = computed(() => getSolvedProblemBySlug(String(route.params.slug)))

const sections = computed(() => {
  if (!problem.value) return []
  const p = problem.value
  return [
    { key: 'problem', label: { en: 'Problem', bn: 'সমস্যা' }, text: p.problem },
    { key: 'context', label: { en: 'Context', bn: 'প্রসঙ্গ' }, text: p.context },
    { key: 'diagnosis', label: { en: 'Diagnosis', bn: 'নির্ণয়' }, text: p.diagnosis },
    { key: 'fix', label: { en: 'Fix', bn: 'সমাধান' }, text: p.fix },
    { key: 'impact', label: { en: 'Impact', bn: 'প্রভাব' }, text: p.impact },
  ]
})
</script>

<template>
  <div class="page-wrap py-10">
    <RouterLink to="/problems/solved" class="text-sm text-glow">{{ t('common.back') }}</RouterLink>

    <template v-if="problem">
      <PageHero :title="pick(problem.titles)" :subtitle="pick(problem.summary)" />

      <div class="mb-6 flex gap-2">
        <button
          type="button"
          class="rounded px-3 py-1.5 text-sm font-semibold"
          :class="chatMode ? 'bg-glow text-ink' : 'border border-steel text-mist'"
          @click="chatMode = true"
        >
          {{ t('common.chatView') }}
        </button>
        <button
          type="button"
          class="rounded px-3 py-1.5 text-sm font-semibold"
          :class="!chatMode ? 'bg-glow text-ink' : 'border border-steel text-mist'"
          @click="chatMode = false"
        >
          {{ t('common.blogView') }}
        </button>
      </div>

      <div v-if="chatMode && problem.chat?.length" class="space-y-4">
        <div
          v-for="(turn, idx) in problem.chat"
          :key="idx"
          class="flex"
          :class="turn.role === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-[85%] rounded-lg px-4 py-3 text-sm"
            :class="
              turn.role === 'user'
                ? 'bg-accent/20 text-paper'
                : 'surface-card text-mist'
            "
          >
            <p class="text-xs uppercase tracking-wide text-mist/70">{{ turn.role }}</p>
            <p class="mt-1">{{ pick(turn.content) }}</p>
          </div>
        </div>
      </div>

      <article v-else class="prose-invert max-w-3xl space-y-6">
        <section v-for="section in sections" :key="section.key">
          <h2 class="font-display text-lg font-semibold text-glow">{{ pick(section.label) }}</h2>
          <p class="mt-2 text-mist">{{ pick(section.text) }}</p>
        </section>
        <div class="flex flex-wrap gap-2 pt-4">
          <span
            v-for="tag in problem.stack"
            :key="tag"
            class="rounded bg-steel/40 px-2 py-1 text-xs text-mist"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </template>

    <p v-else class="mt-8 text-mist">{{ t('common.comingSoon') }}</p>
  </div>
</template>
