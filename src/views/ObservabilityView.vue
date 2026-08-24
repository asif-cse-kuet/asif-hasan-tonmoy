<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import SkillMatrix from '@/components/SkillMatrix.vue'
import { SKILL_CATEGORIES } from '@/content/skills'

const { t } = useI18n()

const categories = computed(() => SKILL_CATEGORIES.filter((c) => c.id === 'observability'))
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.observability')" />
    <SkillMatrix :categories="categories" />
  </div>
</template>
