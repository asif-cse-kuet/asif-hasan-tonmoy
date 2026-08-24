<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import ProjectTier from '@/components/ProjectTier.vue'
import { PROJECTS } from '@/content/projects'

const { t } = useI18n()

const tiers = ['T1', 'T2', 'archive'] as const

const byTier = computed(() =>
  tiers.map((tier) => ({
    tier,
    projects: PROJECTS.filter((p) => p.tier === tier),
  })),
)
</script>

<template>
  <div class="page-wrap space-y-10 py-10">
    <PageHero :title="t('pages.work')" />
    <ProjectTier
      v-for="group in byTier"
      :key="group.tier"
      :tier="group.tier"
      :projects="group.projects"
    />
  </div>
</template>
