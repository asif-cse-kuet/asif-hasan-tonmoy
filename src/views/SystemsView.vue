<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import SearchField from '@/components/SearchField.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { DOMAINS, formatLesson, getTopicCountByDomain, TOPICS } from '@/content/industry-topics'
import type { TopicDifficulty } from '@/content/types'

const { pick } = useLocaleText()
const query = ref('')

const topicCounts = getTopicCountByDomain()

const tracks: { id: TopicDifficulty; titles: { en: string; bn: string }; lead: { en: string; bn: string } }[] = [
  {
    id: 'intro',
    titles: { en: '1. Beginner', bn: '১. শুরুর ধাপ' },
    lead: {
      en: 'Start here if you are new to production systems. Read top to bottom.',
      bn: 'প্রোডাকশন সিস্টেমে নতুন হলে এখান থেকে শুরু করুন। উপর থেকে নিচে পড়ুন।',
    },
  },
  {
    id: 'intermediate',
    titles: { en: '2. Intermediate', bn: '২. মাঝারি ধাপ' },
    lead: {
      en: 'After the beginner path: scale, failure, and the contracts between services.',
      bn: 'শুরুর ধাপ শেষ হলে: স্কেল, ব্যর্থতা, আর সার্ভিসের মাঝের চুক্তি।',
    },
  },
  {
    id: 'advanced',
    titles: { en: '3. Advanced', bn: '৩. উন্নত ধাপ' },
    lead: {
      en: 'Distributed failure, capacity, and the designs that stay correct under load.',
      bn: 'বিতরণকৃত ব্যর্থতা, ক্যাপাসিটি, আর লোডেও সঠিক থাকে এমন ডিজাইন।',
    },
  },
]

const filteredTracks = computed(() => {
  const q = query.value.trim().toLowerCase()
  return tracks.map((track) => ({
    track,
    topics: TOPICS.filter((topic) => {
      if (topic.difficulty !== track.id) return false
      if (!q) return true
      return `${formatLesson(topic.lesson)} ${topic.titles.en} ${topic.titles.bn} ${topic.summary.en} ${topic.slug}`
        .toLowerCase()
        .includes(q)
    }),
  }))
})

const filteredDomains = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return DOMAINS
  return DOMAINS.filter((domain) => {
    const haystack = [domain.slug, domain.titles.en, domain.titles.bn, domain.summary.en, domain.summary.bn]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
})
</script>

<template>
  <div class="w-full py-2">
    <PageHero
      :title="pick({ en: 'My Engineering Blog', bn: 'আমার ইঞ্জিনিয়ারিং ব্লগ' })"
      :subtitle="
        pick({
          en: 'A numbered path from beginner to advanced. Open a lesson, then use Previous / Next to keep the order.',
          bn: 'শুরু থেকে উন্নত পর্যন্ত নম্বর করা পথ। একটি পাঠ খুলুন, তারপর আগের / পরের দিয়ে ক্রম ধরে রাখুন।',
        })
      "
    />

    <DisclaimerBanner />

    <label class="mb-8 block">
      <span class="sr-only">{{ pick({ en: 'Search lessons', bn: 'পাঠ খুঁজুন' }) }}</span>
      <SearchField
        v-model="query"
        input-class="min-h-11 w-full rounded-md border border-steel/80 bg-ink-soft/80 px-4 py-2 text-paper placeholder:text-mist/60 focus:border-glow focus:outline-none"
        :placeholder="pick({ en: 'Search numbered lessons…', bn: 'নম্বর করা পাঠ খুঁজুন…' })"
      />
    </label>

    <section v-for="entry in filteredTracks" :key="entry.track.id" class="mb-12">
      <h2 class="font-display text-xl font-semibold text-paper">{{ pick(entry.track.titles) }}</h2>
      <p class="mt-1 text-sm text-mist">{{ pick(entry.track.lead) }}</p>
      <ol class="mt-4 grid gap-3 md:grid-cols-2">
        <li v-for="topic in entry.topics" :key="topic.slug">
          <RouterLink
            :to="`/systems/${topic.domain}/${topic.slug}`"
            class="surface-card flex h-full gap-3 p-4 no-underline hover:border-glow/40"
          >
            <span class="font-mono text-sm font-semibold text-accent-soft">{{ formatLesson(topic.lesson) }}</span>
            <span>
              <span class="block font-display text-base text-paper">{{ pick(topic.titles) }}</span>
              <span class="mt-1 block text-sm text-mist">{{ pick(topic.summary) }}</span>
            </span>
          </RouterLink>
        </li>
      </ol>
    </section>

    <section>
      <h2 class="font-display text-xl font-semibold text-paper">
        {{ pick({ en: 'Browse by domain', bn: 'ডোমেইন অনুযায়ী' }) }}
      </h2>
      <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="domain in filteredDomains"
          :key="domain.slug"
          :to="`/systems/${domain.slug}`"
          class="surface-card block min-h-11 p-5 no-underline hover:border-glow/40"
        >
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-display text-lg text-paper">{{ pick(domain.titles) }}</h3>
            <span class="shrink-0 rounded bg-glow/15 px-2 py-0.5 text-xs font-semibold text-glow">
              {{ topicCounts[domain.slug] ?? 0 }}
              {{ pick({ en: 'topics', bn: 'টপিক' }) }}
            </span>
          </div>
          <p class="mt-2 text-sm text-mist">{{ pick(domain.summary) }}</p>
        </RouterLink>
      </div>
    </section>

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
