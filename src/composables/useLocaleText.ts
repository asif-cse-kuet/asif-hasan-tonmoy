import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import type { LocaleText } from '@/content/types'

export function isEngineeringBlogRoute(path: string) {
  return path === '/systems' || path.startsWith('/systems/')
}

export function useLocaleText() {
  const { locale } = useI18n()
  const route = useRoute()

  const currentLocale = computed(() => (locale.value === 'bn' ? 'bn' : 'en') as 'en' | 'bn')
  const blogLocale = computed(() => (isEngineeringBlogRoute(route.path) ? currentLocale.value : 'en'))

  function pick(text: LocaleText): string {
    return text[blogLocale.value] ?? text.en
  }

  return { currentLocale, blogLocale, pick }
}
