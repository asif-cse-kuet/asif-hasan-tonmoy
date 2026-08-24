<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import MetricStrip from '@/components/MetricStrip.vue'
import PageHero from '@/components/PageHero.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import {
  MARKETING_CASE_METRICS,
  MARKETING_SKILL_GROUPS,
  UPWORK_METRICS,
} from '@/content/marketing-seed'
import { PROOF_METRICS } from '@/content/profile'

const { t } = useI18n()
const { pick } = useLocaleText()

const marketingMetrics = PROOF_METRICS.filter((m) =>
  ['upwork-hours', 'social-wins', 'clients'].includes(m.id),
)
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.marketing')" />

    <div class="surface-card mb-8 p-6">
      <p class="text-2xl font-display font-semibold text-glow">{{ UPWORK_METRICS.status }}</p>
      <p class="mt-2 text-mist">
        {{ UPWORK_METRICS.hours }} hours · {{ UPWORK_METRICS.clientsFraming }} clients ·
        {{ UPWORK_METRICS.triumphs }} triumphs
      </p>
      <a
        :href="UPWORK_METRICS.hireUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary mt-4 inline-flex"
      >
        {{ t('common.hire') }}
      </a>
    </div>

    <MetricStrip :metrics="marketingMetrics" />

    <section class="mt-12">
      <h2 class="font-display text-xl font-semibold text-paper">Case metrics</h2>
      <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in MARKETING_CASE_METRICS"
          :key="item.id"
          class="surface-card p-4"
        >
          <p class="text-2xl font-display font-semibold text-accent">{{ item.metric }}</p>
          <p class="text-sm text-mist">{{ pick(item.label) }}</p>
          <p v-if="item.client" class="text-xs text-mist/80">{{ item.client }}</p>
        </div>
      </div>
      <p class="mt-6 text-sm text-mist italic">{{ t('common.deepCaseStudies') }}</p>
    </section>

    <section class="mt-12 space-y-6">
      <div v-for="group in MARKETING_SKILL_GROUPS" :key="group.id" class="surface-card p-5">
        <h3 class="font-display text-lg text-paper">{{ pick(group.titles) }}</h3>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded bg-steel/40 px-2 py-1 text-sm text-mist"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
