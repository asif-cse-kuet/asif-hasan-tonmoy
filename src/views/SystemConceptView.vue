<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { getDomainForTopic, getTopicBySlug } from '@/content/industry-topics'
import { SYSTEM_CONCEPTS } from '@/content/systems'

const route = useRoute()
const { pick } = useLocaleText()

const concept = computed(() => SYSTEM_CONCEPTS.find((c) => c.slug === route.params.slug))

const relatedLinks = computed(() => {
  if (!concept.value) return []
  return concept.value.relatedTopicSlugs
    .map((topicSlug) => {
      const topic = getTopicBySlug(topicSlug)
      const domain = getDomainForTopic(topicSlug)
      if (!topic || !domain) return null
      return {
        slug: topicSlug,
        title: topic.titles,
        domainSlug: domain.slug,
      }
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
})
</script>

<template>
  <div class="py-2">
    <RouterLink to="/systems" class="text-sm text-glow">
      {{ pick({ en: '← My Engineering Blog', bn: '← ইঞ্জিনিয়ারিং ব্লগ' }) }}
    </RouterLink>

    <template v-if="concept">
      <PageHero :title="pick(concept.titles)" :subtitle="pick(concept.summary)" />
      <DisclaimerBanner />

      <section v-if="relatedLinks.length" class="mt-8">
        <h2 class="font-display text-lg font-semibold text-paper">
          {{ pick({ en: 'Related topics', bn: 'Related topic' }) }}
        </h2>
        <ul class="mt-4 space-y-2">
          <li v-for="link in relatedLinks" :key="link.slug">
            <RouterLink
              :to="`/systems/${link.domainSlug}/${link.slug}`"
              class="surface-card block min-h-11 p-4 no-underline hover:border-glow/40"
            >
              {{ pick(link.title) }}
            </RouterLink>
          </li>
        </ul>
      </section>
    </template>

    <p v-else class="mt-8 text-mist">
      {{ pick({ en: 'Concept not found.', bn: 'Concept পাওয়া যায়নি।' }) }}
    </p>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
