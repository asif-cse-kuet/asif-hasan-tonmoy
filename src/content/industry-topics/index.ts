export { DOMAINS, type DomainSlug, type IndustryDomain } from './domains'
export {
  TOPICS,
  getTopicBySlug,
  getTopicsByDomain,
  getTopicsByDifficulty,
  getAdjacentInCurriculum,
  formatLesson,
  type IndustryTopic,
} from './topics'

import { DOMAINS, type DomainSlug } from './domains'
import { TOPICS, getTopicBySlug, getTopicsByDomain, getAdjacentInCurriculum } from './topics'

export function getDomainBySlug(slug: DomainSlug) {
  return DOMAINS.find((domain) => domain.slug === slug)
}

export function getTopicCount(): number {
  return TOPICS.length
}

export function getTopicsByStatus(status: 'stub' | 'partial' | 'full') {
  return TOPICS.filter((topic) => topic.status === status)
}

export function getDomainForTopic(slug: string) {
  const topic = getTopicBySlug(slug)
  if (!topic) return undefined
  return getDomainBySlug(topic.domain)
}

export function getTopicCountByDomain(): Record<DomainSlug, number> {
  const counts = {} as Record<DomainSlug, number>
  for (const domain of DOMAINS) {
    counts[domain.slug] = 0
  }
  for (const topic of TOPICS) {
    counts[topic.domain] = (counts[topic.domain] ?? 0) + 1
  }
  return counts
}

export function getAdjacentTopicsInDomain(_domain: DomainSlug, slug: string) {
  return getAdjacentInCurriculum(slug)
}

export const industryTopicsIndex = {
  domains: DOMAINS,
  topics: TOPICS,
  getDomainBySlug,
  getTopicBySlug,
  getTopicsByDomain,
  getTopicCount,
  getTopicsByStatus,
  getAdjacentInCurriculum,
} as const
