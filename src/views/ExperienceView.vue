<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import PageHero from '@/components/PageHero.vue'
import { EXPERIENCE } from '@/content/experience'

const { t } = useI18n()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.experience')" />
    <ExperienceTimeline :entries="EXPERIENCE" />
  </div>
</template>
