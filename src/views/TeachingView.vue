<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import PageHero from '@/components/PageHero.vue'
import { EXPERIENCE } from '@/content/experience'

const { t } = useI18n()

const teaching = computed(() => EXPERIENCE.filter((e) => e.tags.includes('teaching')))
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.teaching')" />
    <ExperienceTimeline :entries="teaching" />
  </div>
</template>
