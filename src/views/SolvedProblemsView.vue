<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

import PageHero from '@/components/PageHero.vue'
import ProblemCard from '@/components/problems/ProblemCard.vue'
import ProblemFilters from '@/components/problems/ProblemFilters.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { getAllProblemTags, SOLVED_PROBLEMS } from '@/content/solved-problems'

const { pick } = useLocaleText()

const query = ref('')
const activeTag = ref<string | null>(null)
const tags = getAllProblemTags()

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return SOLVED_PROBLEMS.filter((problem) => {
    if (activeTag.value && !problem.tags.includes(activeTag.value)) return false
    if (!q) return true
    const haystack = [
      problem.slug,
      ...problem.tags,
      ...problem.stack,
      problem.titles.en,
      problem.titles.bn,
      problem.summary.en,
      problem.summary.bn,
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
})
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero
      :title="pick({ en: 'Problems I personally solved', bn: 'আমি ব্যক্তিগতভাবে সমাধান করা সমস্যা' })"
      :subtitle="
        pick({
          en: 'Real production and project issues - not hypotheticals. Each entry covers context, diagnosis, fix, and measurable impact.',
          bn: 'আসল production ও project issue - hypothetical নয়। প্রতিটিতে context, diagnosis, fix ও measurable impact।',
        })
      "
    />

    <ProblemFilters v-model:query="query" v-model:active-tag="activeTag" :tags="tags" />

    <p class="mt-4 text-sm text-mist">
      {{ filtered.length }} / {{ SOLVED_PROBLEMS.length }}
      {{ pick({ en: 'problems shown', bn: 'টি সমস্যা দেখানো হচ্ছে' }) }}
    </p>

    <div class="mt-6 grid gap-4 md:grid-cols-2">
      <RouterLink
        v-for="problem in filtered"
        :key="problem.slug"
        :to="`/problems/solved/${problem.slug}`"
        class="block no-underline"
      >
        <ProblemCard :problem="problem" />
      </RouterLink>
    </div>

    <p v-if="filtered.length === 0" class="mt-8 text-mist">
      {{ pick({ en: 'No problems match your filters.', bn: 'ফিল্টারে কোনো সমস্যা মেলেনি।' }) }}
    </p>

    <RouterLink to="/" class="btn-ghost mt-10 inline-flex min-h-11">
      {{ pick({ en: '← Back to home', bn: '← হোমে ফিরুন' }) }}
    </RouterLink>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
