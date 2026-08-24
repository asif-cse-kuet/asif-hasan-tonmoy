<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import HeroDecor from '@/components/HeroDecor.vue'
import MetricStrip from '@/components/MetricStrip.vue'
import SegmentPortal from '@/components/SegmentPortal.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE, PROOF_METRICS } from '@/content/profile'

const { t } = useI18n()
const { pick } = useLocaleText()

const portals = computed(() => [
  {
    title: pick({ en: 'Software & Architecture', bn: 'সফটওয়্যার ও আর্কিটেকচার' }),
    description: pick({
      en: 'Vue/Laravel systems, distributed design, and modular frontends.',
      bn: 'Vue/Laravel সিস্টেম, distributed design ও modular frontend।',
    }),
    to: '/architecture',
  },
  {
    title: pick({ en: 'AI Engineering', bn: 'এআই ইঞ্জিনিয়ারিং' }),
    description: pick({
      en: 'RAG pipelines, Bengali NLP research, and production LLM paths.',
      bn: 'RAG pipeline, বাংলা NLP গবেষণা ও production LLM path।',
    }),
    to: '/ai',
  },
  {
    title: pick({ en: 'Marketing Consultant', bn: 'মার্কেটিং কনসালট্যান্ট' }),
    description: pick({
      en: 'Growth engines for 50+ global clients — SEO, social, and funnels.',
      bn: '৫০+ global client-এর growth engine — SEO, social ও funnel।',
    }),
    to: '/marketing',
  },
])
</script>

<template>
  <section class="relative overflow-hidden pb-16 pt-8">
    <HeroDecor />

    <div class="page-wrap relative z-10">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-glow">
        {{ pick(PROFILE.brandLine) }}
      </p>
      <h1 class="mt-4 font-display text-5xl font-bold leading-tight text-paper sm:text-6xl lg:text-7xl">
        {{ PROFILE.name }}
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-mist sm:text-xl">
        {{ pick(PROFILE.tagline) }}
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <RouterLink to="/contact" class="btn-primary">{{ t('home.ctaContact') }}</RouterLink>
        <RouterLink to="/systems" class="btn-ghost">{{ t('home.ctaSystems') }}</RouterLink>
        <RouterLink to="/marketing" class="btn-ghost">{{ t('home.ctaMarketing') }}</RouterLink>
      </div>

      <div class="mt-14">
        <MetricStrip :metrics="PROOF_METRICS" />
      </div>

      <h2 class="mt-16 font-display text-2xl font-semibold text-paper">
        {{ t('home.portalsTitle') }}
      </h2>
      <div class="mt-6 grid gap-4 md:grid-cols-3">
        <SegmentPortal
          v-for="portal in portals"
          :key="portal.to"
          :title="portal.title"
          :description="portal.description"
          :to="portal.to"
        />
      </div>

      <h2 class="mt-16 font-display text-2xl font-semibold text-paper">
        {{ t('home.teasersTitle') }}
      </h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-3">
        <RouterLink to="/coding" class="surface-card block p-5 no-underline hover:border-glow/40">
          <h3 class="font-display text-lg text-paper">{{ t('home.teaserCoding') }}</h3>
        </RouterLink>
        <RouterLink to="/research" class="surface-card block p-5 no-underline hover:border-glow/40">
          <h3 class="font-display text-lg text-paper">{{ t('home.teaserResearch') }}</h3>
        </RouterLink>
        <RouterLink to="/systems" class="surface-card block p-5 no-underline hover:border-glow/40">
          <h3 class="font-display text-lg text-paper">{{ t('home.teaserSystems') }}</h3>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
a.surface-card {
  color: inherit;
}
</style>
