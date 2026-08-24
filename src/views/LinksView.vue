<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'
import { PROFILE_LINKS } from '@/content/profile'

const { t } = useI18n()
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero :title="t('pages.links')" />

    <ul class="space-y-3">
      <li v-for="link in PROFILE_LINKS" :key="link.id">
        <a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="surface-card flex items-center justify-between px-5 py-4 no-underline hover:border-glow/40"
        >
          <span class="font-medium text-paper">{{ link.label }}</span>
          <span class="text-xs uppercase text-mist">{{ link.kind }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
