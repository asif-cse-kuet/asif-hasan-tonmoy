<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import PageHero from '@/components/PageHero.vue'

const { t } = useI18n()

const legacyUrl = 'https://sites.google.com/view/asifhasan/home'
</script>

<template>
  <div class="page-wrap py-10">
    <PageHero
      :title="t('pages.legacy')"
      subtitle="Previous Google Sites portfolio — archived for reference."
    />

    <div class="surface-card max-w-xl p-6">
      <p class="text-mist">
        The legacy site contains earlier project write-ups, marketing triumphs, and academic notes.
      </p>
      <a
        :href="legacyUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary mt-6 inline-flex"
      >
        Visit legacy site →
      </a>
    </div>
  </div>
</template>
