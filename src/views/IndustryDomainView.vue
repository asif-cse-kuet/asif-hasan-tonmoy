<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import TopicCard from '@/components/TopicCard.vue'
import { getDomainBySlug, getTopicsByDomain } from '@/content/industry-topics'
import type { DomainSlug } from '@/content/industry-topics/domains'
import { useLocaleText } from '@/composables/useLocaleText'

const route = useRoute()
const { t } = useI18n()
const { pick } = useLocaleText()

const domainSlug = computed(() => String(route.params.domain) as DomainSlug)
const domain = computed(() => getDomainBySlug(domainSlug.value))
const topics = computed(() => getTopicsByDomain(domainSlug.value))
</script>

<template>
  <div class="page-wrap py-10">
    <RouterLink to="/problems/industry" class="text-sm text-glow">{{ t('common.back') }}</RouterLink>

    <template v-if="domain">
      <PageHero :title="pick(domain.titles)" :subtitle="pick(domain.summary)" />
      <DisclaimerBanner />

      <div class="grid gap-4 md:grid-cols-2">
        <TopicCard
          v-for="topic in topics"
          :key="topic.slug"
          :topic="topic"
          :domain-slug="domainSlug"
        />
      </div>
    </template>

    <p v-else class="mt-8 text-mist">{{ t('common.comingSoon') }}</p>
  </div>
</template>
