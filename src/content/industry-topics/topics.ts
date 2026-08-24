import { DOMAINS, type DomainSlug } from './domains'
import type { IndustryTopic } from './topic-types'
import type { TopicDifficulty } from '../types'

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

const DIFFICULTY_ORDER: Record<TopicDifficulty, number> = {
  intro: 0,
  intermediate: 1,
  advanced: 2,
}

/** Foundation lessons a new engineer should read before the rest of the path. */
const BEGINNER_SLUGS = new Set([
  'n-plus-one-query-elimination',
  'index-design-and-query-plans',
  'pagination-at-scale',
  'soft-delete-and-audit-trails',
  'connection-pool-exhaustion',
  'timezone-and-dst-bugs',
  'unicode-and-encoding-edge-cases',
  'duplicate-submission-prevention',
  'money-and-rounding-correctness',
  'form-validation-architecture',
  'code-splitting-and-lazy-routes',
  'rendering-strategy-selection',
  'accessibility-in-component-systems',
  'api-versioning-without-breakage',
  'timeout-budget-propagation',
  'idempotency-keys-for-payments',
  'webhook-delivery-reliability',
  'retry-with-jitter-strategy',
  'session-fixation-and-csrf',
  'jwt-revocation-problem',
  'password-reset-flow-attacks',
  'file-upload-security',
  'injection-and-orm-escapes',
  'cache-aside-vs-write-through',
  'ttl-and-jitter-design',
  'cache-invalidation-strategies',
  'structured-logging-standards',
  'correlation-ids-across-services',
  'golden-signals-instrumentation',
  'docker-image-layer-optimization',
  'ci-cd-pipeline-safety-gates',
  'feature-flags-and-kill-switches',
  'architecture-decision-records',
  'build-vs-buy-decisions',
  'delayed-and-scheduled-jobs',
  'idempotent-consumers',
])

function applyCurriculumDifficulty(topic: IndustryTopic): IndustryTopic {
  if (BEGINNER_SLUGS.has(topic.slug)) {
    return { ...topic, difficulty: 'intro' }
  }
  return topic
}

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

function sortCurriculum(topics: IndustryTopic[]): IndustryTopic[] {
  return [...topics].sort((a, b) => {
    const difficultyDelta = DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]
    if (difficultyDelta !== 0) return difficultyDelta
    const domainDelta = (DOMAIN_ORDER.get(a.domain) ?? 0) - (DOMAIN_ORDER.get(b.domain) ?? 0)
    if (domainDelta !== 0) return domainDelta
    return a.titles.en.localeCompare(b.titles.en)
  })
}

export const TOPICS: IndustryTopic[] = sortCurriculum(
  dedupe(
    Object.keys(modules)
      .sort()
      .flatMap((key) => modules[key] ?? []),
  ).map(applyCurriculumDifficulty),
).map((topic, index) => ({ ...topic, lesson: index + 1, status: 'full' }))

export function getTopicBySlug(slug: string): IndustryTopic | undefined {
  return TOPICS.find((topic) => topic.slug === slug)
}

export function getTopicsByDomain(domain: DomainSlug): IndustryTopic[] {
  return TOPICS.filter((topic) => topic.domain === domain)
}

export function getTopicsByDifficulty(difficulty: TopicDifficulty): IndustryTopic[] {
  return TOPICS.filter((topic) => topic.difficulty === difficulty)
}

export function getAdjacentInCurriculum(slug: string) {
  const index = TOPICS.findIndex((topic) => topic.slug === slug)
  if (index === -1) return { prev: undefined, next: undefined }
  return {
    prev: index > 0 ? TOPICS[index - 1] : undefined,
    next: index < TOPICS.length - 1 ? TOPICS[index + 1] : undefined,
  }
}

export function formatLesson(lesson?: number): string {
  return String(lesson ?? 0).padStart(2, '0')
}
