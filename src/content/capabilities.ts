import type { LocaleText } from './types'

export type Capability = {
  id: string
  titles: LocaleText
  headline: LocaleText
  /** Keyword clusters — presented as chips, never as self-rated scores. */
  clusters: {
    titles: LocaleText
    items: string[]
  }[]
  proof?: LocaleText[]
}

export const CAPABILITIES: Capability[] = [
  {
    id: 'software-engineering',
    titles: { en: 'Software engineering', bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং' },
    headline: {
      en: 'Production features from database row to pixel — shipped, reviewed, and maintained.',
      bn: 'ডেটাবেস রো থেকে পিক্সেল পর্যন্ত প্রোডাকশন ফিচার — শিপড, রিভিউড ও মেইনটেইনড।',
    },
    clusters: [
      {
        titles: { en: 'Application layer', bn: 'অ্যাপ্লিকেশন স্তর' },
        items: [
          'Vue 3 composition API',
          'Quasar component systems',
          'Pinia state design',
          'Vite build pipelines',
          'Server-driven UI',
          'Design-to-code (Figma)',
          'Accessibility basics',
          'Responsive layout systems',
        ],
      },
      {
        titles: { en: 'Service layer', bn: 'সার্ভিস স্তর' },
        items: [
          'Laravel 11 modules',
          'REST contract design',
          'Middleware pipelines',
          'Auth & session flows',
          'RBAC (user/admin/super-admin)',
          'Validation & error shaping',
          'File upload handling',
          'Third-party API integration',
        ],
      },
      {
        titles: { en: 'Engineering craft', bn: 'ইঞ্জিনিয়ারিং দক্ষতা' },
        items: [
          'Data structures & algorithms',
          'OOP & SOLID',
          'Refactoring legacy code',
          'Query optimization',
          'N+1 elimination',
          'Edge-case analysis',
          'Code review',
          'Agile / Scrum delivery',
        ],
      },
    ],
    proof: [
      {
        en: '~10× latency reduction on critical endpoints at Proficient Information System.',
        bn: 'Proficient Information System-এ ক্রিটিক্যাল এন্ডপয়েন্টে ~১০× লেটেন্সি হ্রাস।',
      },
      {
        en: 'Realtime chat with read/unread and favorites for 200+ active users.',
        bn: '২০০+ সক্রিয় ব্যবহারকারীর জন্য read/unread ও favorites সহ রিয়েলটাইম চ্যাট।',
      },
    ],
  },
  {
    id: 'architecture',
    titles: { en: 'System & solution architecture', bn: 'সিস্টেম ও সলিউশন আর্কিটেকচার' },
    headline: {
      en: 'Choosing the boring option on purpose — and knowing exactly what it costs.',
      bn: 'সচেতনভাবে সহজ সমাধান বেছে নেওয়া — এবং তার খরচ ঠিক জানা।',
    },
    clusters: [
      {
        titles: { en: 'Distributed foundations', bn: 'ডিস্ট্রিবিউটেড ভিত্তি' },
        items: [
          'CAP theorem',
          'PACELC',
          'Consistency models',
          'Consensus & quorums',
          'Lamport clocks',
          'Consistent hashing',
          'FLP impossibility',
          'Byzantine & Two Generals',
          'Fallacies of distributed computing',
        ],
      },
      {
        titles: { en: 'Structural patterns', bn: 'স্ট্রাকচারাল প্যাটার্ন' },
        items: [
          'Modular monolith vs microservices',
          'Micro-frontends',
          'Micro-packaging / low-code extensibility',
          'Bounded contexts',
          'CQRS & event sourcing',
          'Saga & outbox',
          'API versioning',
          'Anti-corruption layers',
        ],
      },
      {
        titles: { en: 'Resilience & scale', bn: 'রেজিলিয়েন্স ও স্কেল' },
        items: [
          'Idempotency keys',
          'Retries with jitter',
          'Circuit breakers',
          'Bulkheads',
          'Backpressure',
          'Rate limiting',
          'Sharding & partitioning',
          'Caching layers & CDN',
          'Multi-region failover',
          "Little's Law & Amdahl's Law",
        ],
      },
    ],
    proof: [
      {
        en: 'Micro-packaging R&D: decoupled frontend modules enabling low-code extensibility.',
        bn: 'মাইক্রো-প্যাকেজিং R&D: লো-কোড এক্সটেনসিবিলিটির জন্য ডিকপল্ড ফ্রন্টএন্ড মডিউল।',
      },
    ],
  },
  {
    id: 'ai-engineering',
    titles: { en: 'AI engineering', bn: 'এআই ইঞ্জিনিয়ারিং' },
    headline: {
      en: 'Published transformer research plus the production plumbing that makes LLM features usable.',
      bn: 'প্রকাশিত ট্রান্সফরমার গবেষণা এবং LLM ফিচার ব্যবহারযোগ্য করার প্রোডাকশন কারিগরি।',
    },
    clusters: [
      {
        titles: { en: 'Retrieval systems', bn: 'রিট্রিভাল সিস্টেম' },
        items: [
          'RAG pipelines',
          'Agentic RAG',
          'Chunking strategies',
          'Embeddings',
          'Vector databases',
          'Hybrid search (BM25 + dense)',
          'Rerankers',
          'Context window budgeting',
          'Citation grounding',
        ],
      },
      {
        titles: { en: 'Agents & tooling', bn: 'এজেন্ট ও টুলিং' },
        items: [
          'Tool / function calling',
          'Multi-step planning',
          'Streaming UX',
          'Structured output',
          'Guardrails',
          'Prompt injection defense',
          'Cost & token budgeting',
          'Fallback model routing',
        ],
      },
      {
        titles: { en: 'Modeling & evaluation', bn: 'মডেলিং ও ইভ্যালুয়েশন' },
        items: [
          'Transformer architectures',
          'BanglaBERT / mBERT',
          'Imbalanced classification',
          'Fine-tuning & hyperparameter tuning',
          'Offline & online evals',
          'Golden datasets',
          'Training-serving skew',
          'Model monitoring',
        ],
      },
    ],
    proof: [
      {
        en: 'ICCIT 2025: TransMentalNet-6 six-stacked transformer, 27,031 samples, 12 classes, F1 66.35% (beat BanglaBERT 58.01%).',
        bn: 'ICCIT 2025: TransMentalNet-6 ছয়-স্তর ট্রান্সফরমার, ২৭,০৩১ নমুনা, ১২ ক্লাস, F1 ৬৬.৩৫% (BanglaBERT ৫৮.০১% ছাড়িয়ে)।',
      },
    ],
  },
  {
    id: 'devops',
    titles: { en: 'DevOps & platform', bn: 'ডেভঅপস ও প্ল্যাটফর্ম' },
    headline: {
      en: 'Containers, proxies, and pipelines that make deploys unremarkable.',
      bn: 'কন্টেইনার, প্রক্সি ও পাইপলাইন — যাতে ডিপ্লয় সাধারণ ঘটনা হয়।',
    },
    clusters: [
      {
        titles: { en: 'Containers & orchestration', bn: 'কন্টেইনার ও অর্কেস্ট্রেশন' },
        items: [
          'Docker multi-stage builds',
          'Layer caching',
          'Compose environments',
          'Kubernetes deployments',
          'Probes & health checks',
          'Resource limits / OOM',
          'Rolling, blue-green, canary',
          'Secrets & config management',
        ],
      },
      {
        titles: { en: 'Edge & delivery', bn: 'এজ ও ডেলিভারি' },
        items: [
          'Nginx reverse proxy',
          'Apache configuration',
          'TLS termination',
          'HTTP/2 & HTTP/3',
          'Load balancing',
          'DNS failover',
          'CDN caching rules',
          'Static asset strategy',
        ],
      },
      {
        titles: { en: 'Automation', bn: 'অটোমেশন' },
        items: [
          'CI/CD pipelines',
          'Git branching workflows',
          'GitHub & GitLab',
          'Automated tests in CI',
          'Environment parity',
          'Linux administration',
          'Shell scripting',
          'Release rollback',
        ],
      },
    ],
  },
  {
    id: 'observability',
    titles: { en: 'Observability & reliability', bn: 'পর্যবেক্ষণযোগ্যতা ও নির্ভরযোগ্যতা' },
    headline: {
      en: 'If a pager fires, it should mean something — and the answer should already be on a dashboard.',
      bn: 'পেজার বাজলে তার অর্থ থাকতে হবে — এবং উত্তর ড্যাশবোর্ডে আগেই থাকতে হবে।',
    },
    clusters: [
      {
        titles: { en: 'Signals', bn: 'সিগন্যাল' },
        items: [
          'Structured logging',
          'Metrics & histograms',
          'Distributed tracing',
          'Golden signals',
          'RED & USE methods',
          'Cardinality control',
          'Correlation IDs',
        ],
      },
      {
        titles: { en: 'Service levels', bn: 'সার্ভিস লেভেল' },
        items: [
          'SLI definition',
          'SLO targets',
          'Error budgets',
          'Burn-rate alerts',
          'p95 / p99 tail latency',
          'Capacity planning',
          'Incident review',
        ],
      },
      {
        titles: { en: 'Failure handling', bn: 'ব্যর্থতা ব্যবস্থাপনা' },
        items: [
          'Graceful degradation',
          'Load shedding',
          'Retry storm prevention',
          'Chaos thinking',
          'Runbooks',
          'Postmortems',
          'On-call hygiene',
        ],
      },
    ],
  },
]

export type ServicePitch = {
  id: string
  titles: LocaleText
  outcome: LocaleText
  bullets: LocaleText[]
}

/** Business-owner framing: Build / Improve / Grow. */
export const SERVICE_PITCHES: ServicePitch[] = [
  {
    id: 'build',
    titles: { en: 'Build', bn: 'তৈরি' },
    outcome: {
      en: 'Turn a manual process or an idea into a working system.',
      bn: 'ম্যানুয়াল প্রক্রিয়া বা আইডিয়াকে কার্যকর সিস্টেমে রূপ দেওয়া।',
    },
    bullets: [
      { en: 'Web applications & dashboards', bn: 'ওয়েব অ্যাপ্লিকেশন ও ড্যাশবোর্ড' },
      { en: 'REST APIs & integrations', bn: 'REST API ও ইন্টিগ্রেশন' },
      { en: 'Internal tools & admin panels', bn: 'ইন্টারনাল টুল ও অ্যাডমিন প্যানেল' },
      { en: 'AI features (RAG, assistants)', bn: 'এআই ফিচার (RAG, অ্যাসিস্ট্যান্ট)' },
    ],
  },
  {
    id: 'improve',
    titles: { en: 'Improve', bn: 'উন্নয়ন' },
    outcome: {
      en: 'Make the thing you already have faster, safer, and cheaper to run.',
      bn: 'বিদ্যমান সিস্টেমকে দ্রুত, নিরাপদ ও সাশ্রয়ী করা।',
    },
    bullets: [
      { en: 'Performance & database tuning', bn: 'পারফরম্যান্স ও ডেটাবেস টিউনিং' },
      { en: 'Architecture review & roadmap', bn: 'আর্কিটেকচার রিভিউ ও রোডম্যাপ' },
      { en: 'Observability & alerting setup', bn: 'পর্যবেক্ষণ ও অ্যালার্টিং সেটআপ' },
      { en: 'Refactoring & technical debt', bn: 'রিফ্যাক্টরিং ও টেকনিক্যাল ডেট' },
    ],
  },
  {
    id: 'grow',
    titles: { en: 'Grow', bn: 'বৃদ্ধি' },
    outcome: {
      en: 'Get the product in front of the right people, repeatedly.',
      bn: 'সঠিক মানুষের কাছে পণ্য বারবার পৌঁছে দেওয়া।',
    },
    bullets: [
      { en: 'SEO & content systems', bn: 'SEO ও কনটেন্ট সিস্টেম' },
      { en: 'Social growth strategy', bn: 'সোশ্যাল গ্রোথ কৌশল' },
      { en: 'Paid & organic funnels', bn: 'পেইড ও অর্গানিক ফানেল' },
      { en: 'Analytics & ROI reporting', bn: 'অ্যানালিটিকস ও ROI রিপোর্টিং' },
    ],
  },
]
