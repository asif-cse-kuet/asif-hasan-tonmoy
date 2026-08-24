<script setup lang="ts">
import { RouterLink } from 'vue-router'

import MarketingCaseGrid from '@/components/marketing/MarketingCaseGrid.vue'
import MarketingDisciplines from '@/components/marketing/MarketingDisciplines.vue'
import MarketingHero from '@/components/marketing/MarketingHero.vue'
import MarketingProcess from '@/components/marketing/MarketingProcess.vue'
import MarketingProofGrid from '@/components/marketing/MarketingProofGrid.vue'
import MarketingStackGrid from '@/components/marketing/MarketingStackGrid.vue'
import MarketingTimeline from '@/components/marketing/MarketingTimeline.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { MARKETING_SEED_NOTE } from '@/content/marketing-seed'
import { MARKETING_TIMELINE } from '@/content/marketing-timeline'

const { pick } = useLocaleText()
</script>

<template>
  <div class="page-wrap py-10">
    <MarketingHero />

    <div class="space-y-12">
      <MarketingProofGrid />
      <MarketingCaseGrid />
      <MarketingStackGrid />
      <MarketingDisciplines />
      <MarketingTimeline :entries="MARKETING_TIMELINE" />
      <MarketingProcess />

      <aside class="surface-card border-glow/20 p-5 text-sm text-mist italic">
        {{ pick(MARKETING_SEED_NOTE) }}
      </aside>
    </div>

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
