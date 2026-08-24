import { DOMAINS, type DomainSlug } from './domains'
import type { IndustryTopic } from './topic-types'

export type { IndustryTopic }

/**
 * Every file in ./topics/ default-exports an IndustryTopic[]. Content waves can add
 * a new domain file without touching this aggregator.
 */
const modules = import.meta.glob<IndustryTopic[]>('./topics/*.ts', {
  eager: true,
  import: 'default',
})

const DOMAIN_ORDER = new Map<DomainSlug, number>(
  DOMAINS.map((domain, index) => [domain.slug, index]),
)

function dedupe(topics: IndustryTopic[]): IndustryTopic[] {
  const seen = new Set<string>()
  const unique: IndustryTopic[] = []
  for (const topic of topics) {
    if (seen.has(topic.slug)) continue
    seen.add(topic.slug)
    unique.push(topic)
  }
  return unique
}

export const TOPICS: IndustryTopic[] = dedupe(
  Object.keys(modules)
    .sort()
    .flatMap((key) => modules[key] ?? []),
).sort((a, b) => {
  const domainDelta = (DOMAIN_ORDER.get(a.domain) ?? 0) - (DOMAIN_ORDER.get(b.domain) ?? 0)
  if (domainDelta !== 0) return domainDelta
  return a.titles.en.localeCompare(b.titles.en)
})

export function getTopicBySlug(slug: string): IndustryTopic | undefined {
  return TOPICS.find((topic) => topic.slug === slug)
}

export function getTopicsByDomain(domain: DomainSlug): IndustryTopic[] {
  return TOPICS.filter((topic) => topic.domain === domain)
}
