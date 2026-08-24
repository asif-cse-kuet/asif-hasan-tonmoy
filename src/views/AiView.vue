<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import SkillMatrix from '@/components/SkillMatrix.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { RESEARCH_PUBLICATIONS } from '@/content/research'
import { SKILL_CATEGORIES } from '@/content/skills'

const { t } = useI18n()
const { pick } = useLocaleText()

const categories = computed(() => SKILL_CATEGORIES.filter((c) => c.id === 'ai'))
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.ai')" />
    <SkillMatrix :categories="categories" />

    <section class="mt-12">
      <h2 class="font-display text-xl font-semibold text-paper">{{ t('pages.research') }}</h2>
      <article
        v-for="pub in RESEARCH_PUBLICATIONS"
        :key="pub.id"
        class="surface-card mt-4 p-5"
      >
        <h3 class="font-display text-lg text-glow">{{ pick(pub.title) }}</h3>
        <p class="mt-1 text-sm text-mist">{{ pub.venue }} · {{ pub.year }}</p>
        <p class="mt-3 text-sm text-mist">{{ pick(pub.abstract) }}</p>
      </article>
      <RouterLink to="/research" class="mt-4 inline-block text-sm font-semibold text-accent">
        {{ t('common.viewAll') }} →
      </RouterLink>
    </section>
  </div>
</template>
