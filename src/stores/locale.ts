import { watch } from 'vue'
import { defineStore } from 'pinia'

import i18n, { type AppLocale } from '@/i18n'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale(): AppLocale {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'bn' ? 'bn' : 'en'
}

export const useLocaleStore = defineStore('locale', () => {
  function init() {
    i18n.global.locale.value = readStoredLocale()
    watch(
      () => i18n.global.locale.value,
      (value) => {
        localStorage.setItem(STORAGE_KEY, value)
        document.documentElement.lang = value === 'bn' ? 'bn' : 'en'
      },
      { immediate: true },
    )
  }

  function setLocale(next: AppLocale) {
    i18n.global.locale.value = next
  }

  function toggleLocale() {
    i18n.global.locale.value = i18n.global.locale.value === 'en' ? 'bn' : 'en'
  }

  return { init, setLocale, toggleLocale }
})
