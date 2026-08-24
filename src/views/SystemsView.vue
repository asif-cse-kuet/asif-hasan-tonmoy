<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { DOMAINS, getTopicCountByDomain } from '@/content/industry-topics'
import { SYSTEM_CONCEPTS } from '@/content/systems'

const { pick } = useLocaleText()
const query = ref('')

const topicCounts = getTopicCountByDomain()

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

const filteredConcepts = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return SYSTEM_CONCEPTS
  return SYSTEM_CONCEPTS.filter((concept) => {
    const haystack = [concept.slug, concept.titles.en, concept.titles.bn, concept.summary.en, concept.summary.bn]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
})
</script>

<template>
  <div class="py-2">
    <PageHero
      :title="pick({ en: 'My Engineering Blog', bn: 'আমার ইঞ্জিনিয়ারিং ব্লগ' })"
      :subtitle="
        pick({
          en: 'Open the tree on the left. Every topic is a failure mode, a design, and the code that holds it — written like internal docs, not a pitch deck.',
          bn: 'বাঁদিকের ট্রি খুলুন। প্রতিটি টপিক একটি ব্যর্থতা, একটি ডিজাইন, আর যে কোড সেটি ধরে রাখে।',
        })
      "
    />

    <DisclaimerBanner />

    <label class="mb-8 block">
      <span class="sr-only">{{ pick({ en: 'Search domains and concepts', bn: 'domain ও concept খুঁজুন' }) }}</span>
      <input
        v-model="query"
        type="search"
        class="min-h-11 w-full rounded-md border border-steel/80 bg-ink-soft/80 px-4 py-2 text-paper placeholder:text-mist/60 focus:border-glow focus:outline-none"
        :placeholder="pick({ en: 'Search domains or concepts…', bn: 'domain বা concept খুঁজুন…' })"
      />
    </label>

    <section>
      <h2 class="font-display text-xl font-semibold text-paper">
        {{ pick({ en: 'Domains', bn: 'Domain' }) }}
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
              {{ pick({ en: 'topics', bn: 'topic' }) }}
            </span>
          </div>
          <p class="mt-2 text-sm text-mist">{{ pick(domain.summary) }}</p>
        </RouterLink>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="font-display text-xl font-semibold text-paper">
        {{ pick({ en: 'Core concepts', bn: 'Core concept' }) }}
      </h2>
      <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="concept in filteredConcepts"
          :key="concept.slug"
          :to="`/systems/concepts/${concept.slug}`"
          class="surface-card block min-h-11 p-5 no-underline hover:border-glow/40"
        >
          <h3 class="font-display text-lg text-paper">{{ pick(concept.titles) }}</h3>
          <p class="mt-2 text-sm text-mist">{{ pick(concept.summary) }}</p>
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
