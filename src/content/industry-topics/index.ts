export { DOMAINS, type DomainSlug, type IndustryDomain } from './domains'
export {
  TOPICS,
  getTopicBySlug,
  getTopicsByDomain,
  type IndustryTopic,
} from './topics'

import { DOMAINS, type DomainSlug } from './domains'
import { TOPICS, getTopicBySlug, getTopicsByDomain } from './topics'

export function getDomainBySlug(slug: DomainSlug) {
  return DOMAINS.find((domain) => domain.slug === slug)
}

export function getTopicCount(): number {
  return TOPICS.length
}

export function getTopicsByStatus(status: 'stub' | 'partial' | 'full') {
  return TOPICS.filter((topic) => topic.status === status)
}

export const industryTopicsIndex = {
  domains: DOMAINS,
  topics: TOPICS,
  getDomainBySlug,
  getTopicBySlug,
  getTopicsByDomain,
  getTopicCount,
  getTopicsByStatus,
} as const
