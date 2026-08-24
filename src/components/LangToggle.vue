<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useLocaleStore } from '@/stores/locale'

const { locale } = useI18n()
const localeStore = useLocaleStore()

function select(next: 'en' | 'bn') {
  localeStore.setLocale(next)
}
</script>

<template>
  <div
    class="inline-flex rounded-md border border-steel/80 bg-ink-soft/80 p-0.5 text-xs font-semibold"
    role="group"
    aria-label="Language"
  >
    <button
      type="button"
      class="rounded px-2 py-1 transition-colors"
      :class="locale === 'en' ? 'bg-glow text-ink' : 'text-mist hover:text-paper'"
      @click="select('en')"
    >
      {{ $t('common.en') }}
    </button>
    <button
      type="button"
      class="rounded px-2 py-1 transition-colors"
      :class="locale === 'bn' ? 'bg-glow text-ink' : 'text-mist hover:text-paper'"
      @click="select('bn')"
    >
      {{ $t('common.bn') }}
    </button>
  </div>
</template>
