export type Locale = 'en' | 'bn'

export type LocaleText = {
  en: string
  bn: string
}

export type Proficiency = 'expert' | 'strong' | 'working' | 'familiar'

export type ProjectTier = 'T1' | 'T2' | 'archive'

export type TopicStatus = 'stub' | 'partial' | 'full'

export type TopicDifficulty = 'intro' | 'intermediate' | 'advanced'

export function pickLocale(text: LocaleText, locale: Locale): string {
  return text[locale] ?? text.en
}

export function hasLocale(text: Partial<LocaleText>, locale: Locale): boolean {
  return Boolean(text[locale]?.trim())
}

export function localeOrFallback(
  text: Partial<LocaleText>,
  locale: Locale,
  fallback: Locale = 'en',
): string {
  return text[locale]?.trim() || text[fallback]?.trim() || ''
}
