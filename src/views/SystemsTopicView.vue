<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import ArticleRenderer from '@/components/ArticleRenderer.vue'
import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import SystemsTopicNav from '@/components/systems/SystemsTopicNav.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { hasArticle, loadArticle } from '@/content/articles/loadArticle'
import {
  getAdjacentTopicsInDomain,
  getDomainBySlug,
  getTopicBySlug,
} from '@/content/industry-topics'
import type { DomainSlug } from '@/content/industry-topics/domains'
import { getSystemConceptBySlug } from '@/content/systems'
import type { Locale } from '@/content/types'

const route = useRoute()
const { pick, currentLocale } = useLocaleText()

const articleLocale = ref<Locale>(currentLocale.value)
const markdown = ref('')
const loading = ref(false)

const domainSlug = computed(() => String(route.params.domain) as DomainSlug)
const slug = computed(() => String(route.params.slug))
const topic = computed(() => getTopicBySlug(slug.value))
const domain = computed(() => getDomainBySlug(domainSlug.value))
const adjacent = computed(() => getAdjacentTopicsInDomain(domainSlug.value, slug.value))

const concepts = computed(() =>
  (topic.value?.systemsLinks ?? [])
    .map((conceptSlug) => getSystemConceptBySlug(conceptSlug))
    .filter((concept): concept is NonNullable<typeof concept> => Boolean(concept)),
)

const relatedTopics = computed(() =>
  (topic.value?.related ?? [])
    .map((relatedSlug) => getTopicBySlug(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related)),
)

const localeOptions: { value: Locale; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'bn', label: 'বাংলা' },
]

const missingLocale = computed(
  () => Boolean(topic.value) && !hasArticle(slug.value, articleLocale.value),
)

async function loadContent() {
  if (!topic.value) return
  loading.value = true
  markdown.value = ''

  const requested = await loadArticle(slug.value, articleLocale.value)
  const fallback = requested ?? (await loadArticle(slug.value, 'en'))
  markdown.value = fallback ?? ''
  loading.value = false
}

watch([slug, articleLocale], loadContent, { immediate: true })
watch(currentLocale, (locale) => {
  articleLocale.value = locale
})
</script>

<template>
  <div class="page-wrap py-8 sm:py-10">
    <nav class="mb-5 flex flex-wrap items-center gap-2 text-sm text-mist/70">
      <RouterLink to="/systems" class="no-underline hover:text-glow">
        {{ pick({ en: 'System design guide', bn: 'সিস্টেম ডিজাইন গাইড' }) }}
      </RouterLink>
      <span aria-hidden="true">/</span>
      <RouterLink :to="`/systems/${domainSlug}`" class="text-glow no-underline">
        {{ domain ? pick(domain.titles) : domainSlug }}
      </RouterLink>
    </nav>

    <template v-if="topic">
      <PageHero :title="pick(topic.titles)" :subtitle="pick(topic.summary)" />

      <div class="mb-5 flex flex-wrap items-center gap-1.5">
        <span class="chip">{{ topic.difficulty }}</span>
        <span v-for="tag in topic.tags" :key="tag" class="chip">{{ tag }}</span>
      </div>

      <DisclaimerBanner />

      <div class="my-6 flex flex-wrap items-center gap-3">
        <span class="text-xs font-semibold uppercase tracking-[0.14em] text-mist/70">
          {{ pick({ en: 'Read in', bn: 'পড়ুন' }) }}
        </span>
        <div class="inline-flex overflow-hidden rounded-md border border-steel/70" role="group">
          <button
            v-for="option in localeOptions"
            :key="option.value"
            type="button"
            class="px-3.5 py-1.5 text-sm font-semibold transition-colors"
            :class="
              articleLocale === option.value
                ? 'bg-accent text-paper'
                : 'text-mist hover:bg-steel/40 hover:text-paper'
            "
            :aria-pressed="articleLocale === option.value"
            @click="articleLocale = option.value"
          >
            {{ option.label }}
          </button>
        </div>
        <span v-if="missingLocale && markdown" class="text-xs text-accent-soft">
          {{ pick({ en: 'Showing English — Bengali coming soon.', bn: 'ইংরেজি দেখানো হচ্ছে — বাংলা শীঘ্রই।' }) }}
        </span>
      </div>

      <p v-if="loading" class="text-mist">
        {{ pick({ en: 'Loading article…', bn: 'আর্টিকেল লোড হচ্ছে…' }) }}
      </p>

      <ArticleRenderer v-else-if="markdown" :markdown="markdown" />

      <div v-else class="max-w-3xl space-y-4">
        <p class="text-mist">{{ pick(topic.summary) }}</p>
        <p class="rounded-md border border-steel/60 bg-ink-soft/50 px-4 py-3 text-sm text-mist italic">
          {{
            pick({
              en: 'The full write-up for this topic lands in a later content wave.',
              bn: 'এই টপিকের পূর্ণ লেখা পরবর্তী কনটেন্ট ওয়েভে আসবে।',
            })
          }}
        </p>
      </div>

      <section v-if="concepts.length" class="mt-10 border-t border-steel/40 pt-6">
        <h2 class="font-display text-lg font-semibold text-paper">
          {{ pick({ en: 'Core concepts behind this', bn: 'এর পেছনের মূল ধারণা' }) }}
        </h2>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="concept in concepts" :key="concept.slug">
            <RouterLink :to="`/systems/concepts/${concept.slug}`" class="chip no-underline">
              {{ pick(concept.titles) }} →
            </RouterLink>
          </li>
        </ul>
      </section>

      <section v-if="relatedTopics.length" class="mt-8">
        <h2 class="font-display text-lg font-semibold text-paper">
          {{ pick({ en: 'Read next', bn: 'পরবর্তী পড়ুন' }) }}
        </h2>
        <ul class="mt-3 grid gap-3 sm:grid-cols-2">
          <li v-for="related in relatedTopics" :key="related.slug">
            <RouterLink
              :to="`/systems/${related.domain}/${related.slug}`"
              class="surface-card block p-4 no-underline transition-colors hover:border-glow/50"
            >
              <span class="block text-sm font-semibold text-paper">{{ pick(related.titles) }}</span>
              <span class="mt-1 block text-xs text-mist">{{ pick(related.summary) }}</span>
            </RouterLink>
          </li>
        </ul>
      </section>

      <SystemsTopicNav :domain-slug="domainSlug" :prev="adjacent.prev" :next="adjacent.next" />
    </template>

    <p v-else class="mt-8 text-mist">
      {{ pick({ en: 'Topic not found.', bn: 'টপিক পাওয়া যায়নি।' }) }}
    </p>
  </div>
</template>
