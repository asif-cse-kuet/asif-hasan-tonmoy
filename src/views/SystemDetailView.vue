<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { SYSTEM_CONCEPTS } from '@/content/systems'

const route = useRoute()
const { t } = useI18n()
const { pick } = useLocaleText()

const concept = computed(() => SYSTEM_CONCEPTS.find((c) => c.slug === route.params.slug))
</script>

<template>
  <div class="page-wrap py-10">
    <RouterLink to="/systems" class="text-sm text-glow">{{ t('common.back') }}</RouterLink>

    <template v-if="concept">
      <PageHero :title="pick(concept.titles)" :subtitle="pick(concept.summary)" />
      <p class="text-sm text-mist">Related topics: {{ concept.relatedTopicSlugs.join(', ') }}</p>
      <RouterLink
        to="/problems/industry"
        class="mt-4 inline-block text-sm font-semibold text-accent"
      >
        {{ t('pages.industryHub') }} →
      </RouterLink>
    </template>

    <p v-else class="mt-8 text-mist">{{ t('common.comingSoon') }}</p>
  </div>
</template>
