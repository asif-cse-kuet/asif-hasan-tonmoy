<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import TopicCard from '@/components/TopicCard.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { getDomainBySlug, getTopicsByDomain } from '@/content/industry-topics'
import type { DomainSlug } from '@/content/industry-topics/domains'

const PAGE_SIZE = 24

const route = useRoute()
const { pick } = useLocaleText()
const page = ref(1)

const domainSlug = computed(() => String(route.params.domain) as DomainSlug)
const domain = computed(() => getDomainBySlug(domainSlug.value))
const allTopics = computed(() => getTopicsByDomain(domainSlug.value))

const totalPages = computed(() => Math.max(1, Math.ceil(allTopics.value.length / PAGE_SIZE)))

const topics = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return allTopics.value.slice(start, start + PAGE_SIZE)
})
</script>

<template>
  <div class="py-2">
    <RouterLink to="/systems" class="text-sm text-glow">
      {{ pick({ en: '← My Engineering Blog', bn: '← ইঞ্জিনিয়ারিং ব্লগ' }) }}
    </RouterLink>

    <template v-if="domain">
      <PageHero :title="pick(domain.titles)" :subtitle="pick(domain.summary)" />
      <DisclaimerBanner />

      <p class="mb-6 text-sm text-mist">
        {{ allTopics.length }} {{ pick({ en: 'topics in this domain', bn: 'topic এই domain-এ' }) }}
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <TopicCard
          v-for="topic in topics"
          :key="topic.slug"
          :topic="topic"
          :domain-slug="domainSlug"
        />
      </div>

      <div v-if="totalPages > 1" class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          class="btn-ghost min-h-10 disabled:opacity-40"
          :disabled="page <= 1"
          @click="page--"
        >
          {{ pick({ en: 'Previous', bn: 'আগের' }) }}
        </button>
        <span class="text-sm text-mist">{{ page }} / {{ totalPages }}</span>
        <button
          type="button"
          class="btn-ghost min-h-10 disabled:opacity-40"
          :disabled="page >= totalPages"
          @click="page++"
        >
          {{ pick({ en: 'Next', bn: 'পরের' }) }}
        </button>
      </div>
    </template>

    <p v-else class="mt-8 text-mist">
      {{ pick({ en: 'Domain not found.', bn: 'Domain পাওয়া যায়নি।' }) }}
    </p>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
