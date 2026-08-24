import type { LocaleText } from '../types'

export type SystemConcept = {
  slug: string
  titles: LocaleText
  summary: LocaleText
  relatedTopicSlugs: string[]
}

export const SYSTEM_CONCEPTS: SystemConcept[] = [
  {
    slug: 'cap-theorem',
    titles: {
      en: 'CAP theorem',
      bn: 'CAP theorem',
    },
    summary: {
      en: 'During a network partition you trade consistency against availability - there is no free lunch.',
      bn: 'network partition-এ consistency vs availability trade - free lunch নেই।',
    },
    relatedTopicSlugs: ['cap-theorem-tradeoffs', 'split-brain-recovery'],
  },
  {
    slug: 'split-brain',
    titles: {
      en: 'Split brain',
      bn: 'Split brain',
    },
    summary: {
      en: 'Two leaders believe they are primary - quorum design and fencing tokens prevent divergence.',
      bn: 'দুই leader primary মনে করে - quorum design ও fencing token divergence রোধ করে।',
    },
    relatedTopicSlugs: ['split-brain-recovery'],
  },
  {
    slug: 'message-queues',
    titles: {
      en: 'Message queues & delivery semantics',
      bn: 'Message queue ও delivery semantics',
    },
    summary: {
      en: 'At-most-once, at-least-once, and the marketing of exactly-once.',
      bn: 'at-most-once, at-least-once, এবং exactly-once-এর marketing।',
    },
    relatedTopicSlugs: ['exactly-once-delivery-illusion', 'backpressure-queue-design'],
  },
  {
    slug: 'exactly-once-illusion',
    titles: {
      en: 'Exactly-once illusion',
      bn: 'Exactly-once illusion',
    },
    summary: {
      en: 'End-to-end exactly-once requires idempotent consumers and dedup - brokers alone cannot guarantee it.',
      bn: 'end-to-end exactly-once-এ idempotent consumer ও dedup লাগে - broker একা guarantee দিতে পারে না।',
    },
    relatedTopicSlugs: ['exactly-once-delivery-illusion'],
  },
  {
    slug: 'thundering-herd',
    titles: {
      en: 'Thundering herd',
      bn: 'Thundering herd',
    },
    summary: {
      en: 'Many clients wake at once and hammer a cold cache or restarted service.',
      bn: 'অনেক client একসাথে জেগে cold cache বা restarted service hammer করে।',
    },
    relatedTopicSlugs: ['retry-storm-prevention', 'cache-invalidation-strategies'],
  },
  {
    slug: 'cache-stampede',
    titles: {
      en: 'Cache stampede',
      bn: 'Cache stampede',
    },
    summary: {
      en: 'Popular keys expire and every request misses together - locks, jitter, and early refresh help.',
      bn: 'popular key expire হলে সব request একসাথে miss - lock, jitter, early refresh সাহায্য করে।',
    },
    relatedTopicSlugs: ['cache-invalidation-strategies'],
  },
  {
    slug: 'hotspot-keys',
    titles: {
      en: 'Hotspot keys',
      bn: 'Hotspot key',
    },
    summary: {
      en: 'Uneven shard load from viral keys - salting, local caches, and write sharding patterns.',
      bn: 'viral key-এ uneven shard load - salting, local cache, write sharding pattern।',
    },
    relatedTopicSlugs: ['database-deadlocks-under-load'],
  },
  {
    slug: 'clock-skew',
    titles: {
      en: 'Clock skew & ordering',
      bn: 'Clock skew ও ordering',
    },
    summary: {
      en: 'Wall clocks lie - Lamport/vector clocks and hybrid logical time for ordering events.',
      bn: 'wall clock lie করে - event order-এ Lamport/vector clock ও hybrid logical time।',
    },
    relatedTopicSlugs: ['split-brain-recovery'],
  },
  {
    slug: 'poison-pills',
    titles: {
      en: 'Poison pill messages',
      bn: 'Poison pill message',
    },
    summary: {
      en: 'One bad message blocks a consumer forever - DLQ, retry caps, and schema validation.',
      bn: 'এক bad message consumer চিরকাল block - DLQ, retry cap, schema validation।',
    },
    relatedTopicSlugs: ['backpressure-queue-design'],
  },
  {
    slug: 'backpressure',
    titles: {
      en: 'Backpressure',
      bn: 'Backpressure',
    },
    summary: {
      en: 'Slow consumers must signal producers to stop - or queues become unbounded delay.',
      bn: 'slow consumer producer-কে stop signal দিতে হবে - নাহলে queue unbounded delay।',
    },
    relatedTopicSlugs: ['backpressure-queue-design', 'websocket-state-at-scale'],
  },
  {
    slug: 'multi-region',
    titles: {
      en: 'Multi-region design',
      bn: 'Multi-region design',
    },
    summary: {
      en: 'Latency, replication lag, and failover drills across geographic boundaries.',
      bn: 'geographic boundary-তে latency, replication lag, failover drill।',
    },
    relatedTopicSlugs: ['multi-region-failover'],
  },
  {
    slug: 'blue-green-canary',
    titles: {
      en: 'Blue-green & canary deploys',
      bn: 'Blue-green ও canary deploy',
    },
    summary: {
      en: 'Shift traffic gradually; roll back fast when golden signals burn error budget.',
      bn: 'traffic gradually shift; golden signal error budget burn হলে দ্রুত rollback।',
    },
    relatedTopicSlugs: ['k8s-rollout-failure-modes'],
  },
  {
    slug: 'feature-flags',
    titles: {
      en: 'Feature flags & kill switches',
      bn: 'Feature flag ও kill switch',
    },
    summary: {
      en: 'Decouple deploy from release - turn off bad behavior without redeploying.',
      bn: 'deploy release থেকে decouple - redeploy ছাড়া bad behavior বন্ধ।',
    },
    relatedTopicSlugs: ['micro-packaging-modules', 'prompt-injection-guardrails'],
  },
  {
    slug: 'chaos-engineering',
    titles: {
      en: 'Chaos engineering',
      bn: 'Chaos engineering',
    },
    summary: {
      en: 'Inject failure on purpose in controlled blast radius before production does it for you.',
      bn: 'controlled blast radius-এ ইচ্ছাকৃত failure inject - production-এর আগে।',
    },
    relatedTopicSlugs: ['retry-storm-prevention', 'multi-region-failover'],
  },
  {
    slug: 'rate-limiting',
    titles: {
      en: 'Rate limiting & fairness',
      bn: 'Rate limiting ও fairness',
    },
    summary: {
      en: 'Token buckets, leaky buckets, and per-tenant quotas at the edge and service mesh.',
      bn: 'token bucket, leaky bucket, edge ও service mesh-এ per-tenant quota।',
    },
    relatedTopicSlugs: ['oauth-token-lifecycle', 'nginx-edge-tls-termination'],
  },
  {
    slug: 'idempotency-keys',
    titles: {
      en: 'Idempotency keys',
      bn: 'Idempotency key',
    },
    summary: {
      en: 'Safe retries for POST - store intent, dedup by key, return same response on replay.',
      bn: 'POST-এ safe retry - intent store, key dedup, replay-এ same response।',
    },
    relatedTopicSlugs: ['database-deadlocks-under-load', 'exactly-once-delivery-illusion'],
  },
  {
    slug: 'outbox-pattern',
    titles: {
      en: 'Outbox pattern',
      bn: 'Outbox pattern',
    },
    summary: {
      en: 'Atomically write business data and outbound events - no dual-write races.',
      bn: 'atomically business data ও outbound event লিখুন - dual-write race নেই।',
    },
    relatedTopicSlugs: ['training-serving-skew', 'exactly-once-delivery-illusion'],
  },
  {
    slug: 'saga-pattern',
    titles: {
      en: 'Saga pattern',
      bn: 'Saga pattern',
    },
    summary: {
      en: 'Distributed transactions via compensating steps - choreography vs orchestration.',
      bn: 'compensating step-এ distributed transaction - choreography vs orchestration।',
    },
    relatedTopicSlugs: ['backpressure-queue-design'],
  },
  {
    slug: 'circuit-breaker',
    titles: {
      en: 'Circuit breaker',
      bn: 'Circuit breaker',
    },
    summary: {
      en: 'Fail fast when upstream is unhealthy - half-open probes for recovery.',
      bn: 'upstream unhealthy হলে fail fast - recovery-তে half-open probe।',
    },
    relatedTopicSlugs: ['circuit-breaker-cascades', 'retry-storm-prevention'],
  },
  {
    slug: 'golden-signals',
    titles: {
      en: 'Golden signals (USE/RED)',
      bn: 'Golden signal (USE/RED)',
    },
    summary: {
      en: 'Latency, traffic, errors, saturation - the minimum observability vocabulary.',
      bn: 'latency, traffic, error, saturation - minimum observability vocabulary।',
    },
    relatedTopicSlugs: ['slo-error-budget-burn'],
  },
  {
    slug: 'littles-law',
    titles: {
      en: "Little's Law",
      bn: "Little's Law",
    },
    summary: {
      en: 'Concurrency = throughput × latency - the capacity planning identity engineers forget.',
      bn: 'concurrency = throughput × latency - engineer-রা ভুলে যাওয়া capacity identity।',
    },
    relatedTopicSlugs: ['p99-tail-latency-planning'],
  },
  {
    slug: 'vector-retrieval',
    titles: {
      en: 'Vector retrieval & hybrid search',
      bn: 'Vector retrieval ও hybrid search',
    },
    summary: {
      en: 'Embeddings plus lexical filters - when ANN indexes lie and rerankers save you.',
      bn: 'embedding + lexical filter - ANN index lie করলে reranker বাঁচায়।',
    },
    relatedTopicSlugs: ['rag-chunking-evals'],
  },
]

export function getSystemConceptBySlug(slug: string): SystemConcept | undefined {
  return SYSTEM_CONCEPTS.find((concept) => concept.slug === slug)
}

export function getSystemConceptsForTopic(topicSlug: string): SystemConcept[] {
  return SYSTEM_CONCEPTS.filter((concept) => concept.relatedTopicSlugs.includes(topicSlug))
}
