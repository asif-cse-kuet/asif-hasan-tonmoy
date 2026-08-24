import type { IndustryTopic } from '../topic-types'

/** Product & platform engineering wave - decisions that compound over years. */
const topics: IndustryTopic[] = [
  {
    id: 'multi-tenancy-isolation-models',
    slug: 'multi-tenancy-isolation-models',
    domain: 'product-platform',
    titles: {
      en: 'Multi-tenancy isolation models',
      bn: 'Multi-tenancy isolation model',
    },
    summary: {
      en: 'Shared table, schema-per-tenant, or database-per-tenant - the choice sets your migration cost, blast radius, and enterprise sales ceiling for the next five years.',
      bn: 'Shared table, schema-per-tenant না database-per-tenant - এই সিদ্ধান্তই পরের পাঁচ বছরের migration খরচ, blast radius আর enterprise sales ceiling ঠিক করে দেয়।',
    },
    tags: ['multi-tenancy', 'isolation', 'saas', 'postgres', 'rls'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'cost-attribution-and-showback',
      'public-api-contract-stability',
      'modular-monolith-vs-microservices',
    ],
    systemsLinks: ['rate-limiting', 'hotspot-keys'],
  },
  {
    id: 'feature-flags-and-kill-switches',
    slug: 'feature-flags-and-kill-switches',
    domain: 'product-platform',
    titles: {
      en: 'Feature flags and kill switches that stay clean',
      bn: 'পরিষ্কার থাকা feature flag ও kill switch',
    },
    summary: {
      en: 'Decoupling deploy from release is the easy half. The hard half is evaluation latency, flag debt, and a kill switch that still works when the flag service is the thing that is down.',
      bn: 'Deploy আর release আলাদা করা সহজ অংশ। কঠিন অংশ evaluation latency, flag debt, আর flag service নিজেই down থাকলেও কাজ করা kill switch।',
    },
    tags: ['feature-flags', 'kill-switch', 'release', 'flag-debt', 'rollout'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'strangler-fig-migration',
      'on-call-and-ownership-models',
      'architecture-decision-records',
    ],
    systemsLinks: ['feature-flags', 'blue-green-canary'],
  },
  {
    id: 'architecture-decision-records',
    slug: 'architecture-decision-records',
    domain: 'product-platform',
    titles: {
      en: 'Architecture decision records that get read',
      bn: 'পড়া হয় এমন architecture decision record',
    },
    summary: {
      en: 'Most ADR programmes die in month four. The ones that survive record rejected options and consequences, live next to the code, and are cheap enough to write during the decision.',
      bn: 'বেশিরভাগ ADR প্রোগ্রাম চতুর্থ মাসে মরে। যেগুলো টেকে সেগুলো rejected option ও consequence লেখে, কোডের পাশে থাকে, আর সিদ্ধান্তের সময়েই লেখা যায় এত সস্তা।',
    },
    tags: ['adr', 'documentation', 'governance', 'decisions'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'build-vs-buy-decisions',
      'modular-monolith-vs-microservices',
      'technical-debt-prioritization',
    ],
    systemsLinks: [],
  },
  {
    id: 'public-api-contract-stability',
    slug: 'public-api-contract-stability',
    domain: 'product-platform',
    titles: {
      en: 'Public API contract stability',
      bn: 'Public API contract-এর স্থায়িত্ব',
    },
    summary: {
      en: 'Once an integrator depends on your JSON, every field is a promise. Versioning strategy, deprecation clocks, and contract tests decide whether you can ever change anything again.',
      bn: 'একবার integrator আপনার JSON-এর উপর নির্ভর করলে প্রতিটি field একটি প্রতিশ্রুতি। Versioning strategy, deprecation clock আর contract test ঠিক করে আপনি আর কখনো কিছু বদলাতে পারবেন কি না।',
    },
    tags: ['api', 'versioning', 'deprecation', 'contract-testing', 'openapi'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'multi-tenancy-isolation-models',
      'feature-flags-and-kill-switches',
      'strangler-fig-migration',
    ],
    systemsLinks: ['idempotency-keys', 'rate-limiting'],
  },
  {
    id: 'modular-monolith-vs-microservices',
    slug: 'modular-monolith-vs-microservices',
    domain: 'product-platform',
    titles: {
      en: 'Modular monolith versus microservices',
      bn: 'Modular monolith বনাম microservices',
    },
    summary: {
      en: 'Service boundaries are organisational commitments, not code style. Splitting before the seams are known converts a refactor you can do in an afternoon into a distributed transaction.',
      bn: 'Service boundary কোড স্টাইল নয়, সাংগঠনিক প্রতিশ্রুতি। Seam জানার আগে ভাগ করলে একদিনের refactor distributed transaction হয়ে যায়।',
    },
    tags: ['architecture', 'microservices', 'monolith', 'boundaries', 'coupling'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'architecture-decision-records',
      'strangler-fig-migration',
      'internal-platform-as-product',
    ],
    systemsLinks: ['circuit-breaker', 'saga-pattern'],
  },
  {
    id: 'build-vs-buy-decisions',
    slug: 'build-vs-buy-decisions',
    domain: 'product-platform',
    titles: {
      en: 'Build versus buy without regret',
      bn: 'আফসোস ছাড়া build বনাম buy',
    },
    summary: {
      en: 'The sticker price is the smallest term. Integration cost, exit cost, and the on-call hours a vendor removes are what actually decide - and most teams never write the numbers down.',
      bn: 'Sticker price সবচেয়ে ছোট হিসাব। Integration cost, exit cost আর vendor যত on-call ঘণ্টা কমায় সেটাই আসল নির্ধারক - অথচ বেশিরভাগ দল সংখ্যাগুলো লিখেই রাখে না।',
    },
    tags: ['build-vs-buy', 'vendors', 'tco', 'lock-in', 'procurement'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'architecture-decision-records',
      'internal-platform-as-product',
      'cost-attribution-and-showback',
    ],
    systemsLinks: [],
  },
  {
    id: 'strangler-fig-migration',
    slug: 'strangler-fig-migration',
    domain: 'product-platform',
    titles: {
      en: 'Strangler fig migrations that finish',
      bn: 'শেষ হয় এমন strangler fig migration',
    },
    summary: {
      en: 'Incremental replacement fails when the facade becomes permanent and both systems own the same write. Sequencing, dual-read verification, and a deletion deadline are the whole job.',
      bn: 'Facade স্থায়ী হয়ে গেলে আর দুই সিস্টেম একই write-এর মালিক হলে incremental replacement ব্যর্থ হয়। Sequencing, dual-read verification আর deletion deadline-ই পুরো কাজ।',
    },
    tags: ['migration', 'legacy', 'strangler-fig', 'rollout', 'dual-write'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'modular-monolith-vs-microservices',
      'feature-flags-and-kill-switches',
      'public-api-contract-stability',
    ],
    systemsLinks: ['blue-green-canary', 'outbox-pattern'],
  },
  {
    id: 'internal-platform-as-product',
    slug: 'internal-platform-as-product',
    domain: 'product-platform',
    titles: {
      en: 'Running an internal platform as a product',
      bn: 'Internal platform-কে product হিসেবে চালানো',
    },
    summary: {
      en: 'A platform nobody adopts is a tax with a wiki page. Golden paths, opt-in adoption, and published SLOs are what separate a platform team from a gatekeeping team.',
      bn: 'কেউ ব্যবহার না করলে platform মানে wiki পাতাসহ একটা কর। Golden path, opt-in adoption আর published SLO-ই platform team আর gatekeeping team-এর পার্থক্য।',
    },
    tags: ['platform-engineering', 'golden-path', 'developer-experience', 'adoption'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'on-call-and-ownership-models',
      'build-vs-buy-decisions',
      'modular-monolith-vs-microservices',
    ],
    systemsLinks: ['golden-signals'],
  },
  {
    id: 'on-call-and-ownership-models',
    slug: 'on-call-and-ownership-models',
    domain: 'product-platform',
    titles: {
      en: 'On-call and service ownership models',
      bn: 'On-call ও service ownership model',
    },
    summary: {
      en: 'Ownership without paging authority is a spreadsheet. Rotation size, page budgets, and a written escalation path decide whether senior engineers stay or quietly leave.',
      bn: 'Paging authority ছাড়া ownership মানে একটা spreadsheet। Rotation size, page budget আর লেখা escalation path ঠিক করে senior engineer থাকবে না চুপচাপ চলে যাবে।',
    },
    tags: ['on-call', 'ownership', 'incident-response', 'escalation', 'burnout'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'internal-platform-as-product',
      'technical-debt-prioritization',
      'feature-flags-and-kill-switches',
    ],
    systemsLinks: ['golden-signals', 'chaos-engineering'],
  },
  {
    id: 'technical-debt-prioritization',
    slug: 'technical-debt-prioritization',
    domain: 'product-platform',
    titles: {
      en: 'Prioritising technical debt with evidence',
      bn: 'প্রমাণ দিয়ে technical debt prioritise করা',
    },
    summary: {
      en: '"We need a refactor quarter" loses every planning meeting. Debt that is tied to interest paid in incident hours, change lead time, and touched-file churn wins budget.',
      bn: '"আমাদের একটা refactor quarter দরকার" প্রতিটি planning meeting-এ হারে। Incident ঘণ্টা, change lead time আর touched-file churn-এ interest মাপা debt বাজেট পায়।',
    },
    tags: ['technical-debt', 'prioritization', 'metrics', 'planning', 'churn'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'architecture-decision-records',
      'on-call-and-ownership-models',
      'build-vs-buy-decisions',
    ],
    systemsLinks: [],
  },
  {
    id: 'cost-attribution-and-showback',
    slug: 'cost-attribution-and-showback',
    domain: 'product-platform',
    titles: {
      en: 'Cost attribution and showback',
      bn: 'Cost attribution ও showback',
    },
    summary: {
      en: 'An unallocated cloud bill is a bill nobody optimises. Tagging discipline, per-tenant unit economics, and showback before chargeback turn spend into an engineering signal.',
      bn: 'Unallocated cloud bill এমন bill যা কেউ optimise করে না। Tagging discipline, per-tenant unit economics আর chargeback-এর আগে showback খরচকে engineering signal-এ বদলায়।',
    },
    tags: ['finops', 'cost', 'showback', 'tagging', 'unit-economics'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'multi-tenancy-isolation-models',
      'internal-platform-as-product',
      'multi-region-failover',
    ],
    systemsLinks: ['multi-region', 'littles-law'],
  },
]

export default topics
