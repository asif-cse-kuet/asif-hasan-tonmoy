import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { LocaleText } from '@/content/types'

export function useLocaleText() {
  const { locale } = useI18n()

  const currentLocale = computed(() => (locale.value === 'bn' ? 'bn' : 'en') as 'en' | 'bn')

  function pick(text: LocaleText): string {
    return text[currentLocale.value] ?? text.en
  }

  return { currentLocale, pick }
}
