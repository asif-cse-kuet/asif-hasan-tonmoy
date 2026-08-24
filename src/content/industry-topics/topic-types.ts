import type { DomainSlug } from './domains'
import type { LocaleText, TopicDifficulty, TopicStatus } from '../types'

export type IndustryTopic = {
  id: string
  slug: string
  domain: DomainSlug
  titles: LocaleText
  summary: LocaleText
  tags: string[]
  difficulty: TopicDifficulty
  status: TopicStatus
  /** Slugs of sibling topics worth reading next. */
  related: string[]
  /** Slugs from src/content/systems (core concept atlas). */
  systemsLinks: string[]
}
