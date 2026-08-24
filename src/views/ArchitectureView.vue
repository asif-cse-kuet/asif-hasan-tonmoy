<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import SkillMatrix from '@/components/SkillMatrix.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { SKILL_CATEGORIES } from '@/content/skills'
import { SYSTEM_CONCEPTS } from '@/content/systems'

const { t } = useI18n()
const { pick } = useLocaleText()

const categories = computed(() =>
  SKILL_CATEGORIES.filter((c) => ['architecture', 'networking', 'realtime'].includes(c.id)),
)

const featured = computed(() => SYSTEM_CONCEPTS.slice(0, 6))
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero
      :title="t('pages.architecture')"
      :subtitle="
        pick({
          en: 'Tradeoffs, micro-packaging, failure modes, and the systems lens behind production decisions.',
          bn: 'ট্রেডঅফ, মাইক্রো-প্যাকেজিং, ব্যর্থতার ধরন এবং প্রোডাকশন সিদ্ধান্তের পেছনের সিস্টেমস দৃষ্টিভঙ্গি।',
        })
      "
    />
    <SkillMatrix :categories="categories" />

    <section class="mt-12">
      <div class="flex items-end justify-between gap-4">
        <h2 class="font-display text-xl font-semibold text-paper">{{ t('pages.systems') }}</h2>
        <RouterLink to="/systems" class="text-sm font-semibold text-accent">
          {{ t('common.viewAll') }} →
        </RouterLink>
      </div>
      <ul class="mt-4 grid gap-3 sm:grid-cols-2">
        <li v-for="concept in featured" :key="concept.slug">
          <RouterLink
            :to="`/systems/${concept.slug}`"
            class="surface-card block p-4 transition hover:border-glow/50"
          >
            <h3 class="font-display text-lg text-glow">{{ pick(concept.titles) }}</h3>
            <p class="mt-1 text-sm text-mist">{{ pick(concept.summary) }}</p>
          </RouterLink>
        </li>
      </ul>
      <RouterLink
        to="/problems/industry"
        class="mt-6 inline-block text-sm font-semibold text-glow"
      >
        {{ t('nav.industry') }} →
      </RouterLink>
    </section>
  </div>
</template>
