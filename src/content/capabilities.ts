import type { LocaleText } from './types'

export type Capability = {
  id: string
  titles: LocaleText
  headline: LocaleText
  /** Keyword clusters - presented as chips, never as self-rated scores. */
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
      en: 'Production features from database row to pixel: shipped, reviewed, and maintained on the stack the job needs.',
      bn: 'ডেটাবেস রো থেকে পিক্সেল পর্যন্ত প্রোডাকশন ফিচার: যে স্ট্যাক দরকার সেটাতে শিপ, রিভিউ ও মেইনটেইন।',
    },
    clusters: [
      {
        titles: { en: 'Service layer', bn: 'সার্ভিস স্তর' },
        items: [
          'Node.js, Express & NestJS',
          'Laravel / PHP',
          'FastAPI',
          'Spring Boot & .NET services',
          'Eloquent, Query Builder, SQL & ORM patterns',
          'Auth, sessions & RBAC',
          'Middleware, validation & errors',
          'Queues, jobs & events',
          'Third-party integrations',
        ],
      },
      {
        titles: { en: 'Application layer', bn: 'অ্যাপ্লিকেশন স্তর' },
        items: [
          'TypeScript & typed UI',
          'React, Vue & component systems',
          'Composition & Options API patterns',
          'Next.js, Nuxt & app routers',
          'Client state & SSR / hydration',
          'Vite / bundler pipelines',
          'Design-to-code (Figma)',
          'Accessibility & responsive UI',
        ],
      },
      {
        titles: { en: 'APIs, contracts & realtime', bn: 'API, কন্ট্রাক্ট ও রিয়েলটাইম' },
        items: [
          'REST',
          'GraphQL',
          'gRPC / RPC',
          'tRPC / JSON-RPC',
          'OpenAPI & AsyncAPI',
          'WebSockets',
          'Server-Sent Events (SSE)',
          'Short & long polling',
          'Webhooks',
          'Realtime chat & presence',
          'MQTT / pub-sub',
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
  },
  {
    id: 'architecture',
    titles: { en: 'System & solution architecture', bn: 'সিস্টেম ও সলিউশন আর্কিটেকচার' },
    headline: {
      en: 'Choosing the boring option on purpose, and knowing exactly what it costs.',
      bn: 'সচেতনভাবে সহজ সমাধান বেছে নেওয়া, এবং তার খরচ ঠিক জানা।',
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
      en: 'I ship AI that closes a customer job: RAG, agentic RAG, vector stores, evals, and a fallback when retrieval is empty. Not a model call with a UI on top.',
      bn: 'আমি এমন AI শিপ করি যা কাস্টমারের কাজ শেষ করে: RAG, agentic RAG, ভেক্টর স্টোর, ইভ্যাল, আর রিট্রিভাল খালি হলে ফলব্যাক। UI-সহ মডেল-কল নয়।',
    },
    clusters: [
      {
        titles: { en: 'Retrieval systems', bn: 'রিট্রিভাল সিস্টেম' },
        items: [
          'RAG pipelines',
          'Agentic RAG',
          'LangChain',
          'LangGraph',
          'Python',
          'FastAPI (AI services)',
          'Pinecone',
          'Vector indexes (pgvector)',
          'Chunking strategies',
          'Embeddings',
          'Hybrid search (BM25 + dense)',
          'Rerankers',
          'Citation grounding',
        ],
      },
      {
        titles: { en: 'Agents & tooling', bn: 'এজেন্ট ও টুলিং' },
        items: [
          'Tool / function calling',
          'Multi-step agent loops',
          'Cursor',
          'Claude',
          'Codex',
          'Antigravity',
          'Guardrails',
          'Prompt injection defense',
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
      bn: 'কন্টেইনার, প্রক্সি ও পাইপলাইন - যাতে ডিপ্লয় সাধারণ ঘটনা হয়।',
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
      en: 'If a pager fires, it should mean something - and the answer should already be on a dashboard.',
      bn: 'পেজার বাজলে তার অর্থ থাকতে হবে - এবং উত্তর ড্যাশবোর্ডে আগেই থাকতে হবে।',
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
  {
    id: 'software-to-business',
    titles: { en: 'Software to business', bn: 'সফটওয়্যার থেকে ব্যবসা' },
    headline: {
      en: 'I do not bolt marketing onto engineering. I already ran demand for 50+ brands, so the product I ship is the product a market can find.',
      bn: 'ইঞ্জিনিয়ারিংয়ের ওপর মার্কেটিং জোড়া লাগাই না। ৫০+ ব্র্যান্ডের চাহিদা আমি চালিয়েছি - তাই যে পণ্য শিপ করি, বাজার সেটা খুঁজে পায়।',
    },
    clusters: [
      {
        titles: { en: 'Demand systems', bn: 'চাহিদা সিস্টেম' },
        items: [
          'Multi-channel growth ops',
          'SEO as a product surface',
          'Social compounding (IG / Pinterest)',
          'Funnel wiring to real events',
          'Content that sells the feature',
          'Brand positioning for operators',
          'Paid vs organic allocation',
          'Lifecycle / email loops',
        ],
      },
      {
        titles: { en: 'Owner language', bn: 'মালিকের ভাষা' },
        items: [
          'CAC vs payback, not vanity views',
          'Roadmaps that protect revenue',
          'Tech Lead + Marketing Director seat',
          'Vendor-proof API storytelling',
          'Launch narratives engineers can keep',
          'Pricing pages that match the codebase',
          'Board-ready incident language',
          'Hiring briefs that do not split the room',
        ],
      },
      {
        titles: { en: 'Proof already in market', bn: 'বাজারে থাকা প্রমাণ' },
        items: [
          '50+ consulting clients',
          '1,700+ billed Upwork hours',
          '70+ social growth wins',
          'Roasty 1.5M views',
          'Jennifer 3.8M views',
          'ReneeRoaming 6.6M views',
          'Head of Marketing track record',
          'Cozy Cottage Tech Lead + growth',
        ],
      },
    ],
    proof: [
      {
        en: 'Owners hiring a Tech Lead usually still need a Marketing Director. I already sat in both chairs - Cozy Cottage, Enterprising Society, and 50+ independent retainers.',
        bn: 'টেক লিড নিয়োগ করলেও মার্কেটিং ডিরেক্টর লাগে। আমি দুই আসনেই বসেছি - Cozy Cottage, Enterprising Society, এবং ৫০+ ইন্ডিপেন্ডেন্ট রিটেইনার।',
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
    titles: { en: 'Ship the product', bn: 'পণ্য শিপ করুন' },
    outcome: {
      en: 'A founder walks in with a messy process. They walk out with a system their team actually uses.',
      bn: 'একজন ফাউন্ডার এলোমানা প্রক্রিয়া নিয়ে আসেন। বেরোনোর সময় টিম যে সিস্টেম ব্যবহার করে সেটি হাতে থাকে।',
    },
    bullets: [
      { en: 'Customer-facing apps, admin desks, and internal tools your team will actually open', bn: 'কাস্টমার অ্যাপ, অ্যাডমিন ডেস্ক ও ইন্টারনাল টুল — টিম সত্যি খুলবে' },
      { en: 'APIs other vendors can plug into without a war room', bn: 'অন্য ভেন্ডর সহজে প্লাগ করতে পারে এমন API' },
      { en: 'RAG, agentic RAG, and vector search that cite sources — from business brief to shipped feature', bn: 'RAG, agentic RAG ও ভেক্টর সার্চ যা উৎস দেখায় — বিজনেস ব্রিফ থেকে শিপ করা ফিচার' },
    ],
  },
  {
    id: 'improve',
    titles: { en: 'Take the Tech Lead seat', bn: 'টেক লিডের আসন' },
    outcome: {
      en: 'You keep the company. I keep the architecture honest, the pager quiet, and the roadmap real.',
      bn: 'কোম্পানি আপনার। আর্কিটেকচার, পেজার ও রোডম্যাপ আমি সৎ রাখি।',
    },
    bullets: [
      { en: 'Latency, data, and failure modes before they become a board slide', bn: 'লেটেন্সি, ডেটা ও ব্যর্থতা - বোর্ড স্লাইড হওয়ার আগে' },
      { en: 'A team that ships in slices, not in hero weekends', bn: 'হিরো উইকএন্ড নয়, স্লাইসে শিপ করা টিম' },
      { en: 'Observability that tells an owner what broke, in one screen', bn: 'এক স্ক্রিনে কী ভাঙল বলে দেয় এমন পর্যবেক্ষণ' },
    ],
  },
  {
    id: 'grow',
    titles: { en: 'Sit as Growth / Marketing Director', bn: 'গ্রোথ / মার্কেটিং ডিরেক্টর' },
    outcome: {
      en: 'The same person who understands the codebase also knows which channel actually pays for it.',
      bn: 'যিনি কোডবেস বোঝেন তিনিই জানেন কোন চ্যানেল আসলে বিল তোলে।',
    },
    bullets: [
      { en: 'Funnels wired to real product events, not vanity dashboards', bn: 'ভ্যানিটি ড্যাশবোর্ড নয়, আসল প্রোডাক্ট ইভেন্টে বাঁধা ফানেল' },
      { en: 'SEO, social, and paid as one system - 50+ brands of scar tissue', bn: 'SEO, সোশ্যাল ও পেইড এক সিস্টেম - ৫০+ ব্র্যান্ডের অভিজ্ঞতা' },
      { en: 'A growth engine that engineering can actually operate', bn: 'ইঞ্জিনিয়ারিং যে গ্রোথ ইঞ্জিন চালাতে পারে' },
    ],
  },
]

export const HIRE_SEATS = [
  {
    id: 'tech-lead',
    titles: { en: 'Tech Lead', bn: 'টেক লিড' },
    pitch: {
      en: 'Own delivery end to end: architecture calls, code quality, and the quiet production hours.',
      bn: 'ডেলিভারি এন্ড-টু-এন্ড: আর্কিটেকচার, কোড কোয়ালিটি ও শান্ত প্রোডাকশন।',
    },
  },
  {
    id: 'marketing-director',
    titles: { en: 'Marketing Director', bn: 'মার্কেটিং ডিরেক্টর' },
    pitch: {
      en: 'Own the story, the channels, and the number that lands in the bank - not the number that lands in a screenshot.',
      bn: 'গল্প, চ্যানেল ও ব্যাংকে আসা সংখ্যা - স্ক্রিনশটের সংখ্যা নয়।',
    },
  },
  {
    id: 'both',
    titles: { en: 'Both chairs at once', bn: 'দুই আসন একসাথে' },
    pitch: {
      en: 'The rare seat: someone who will not let engineering ship a product the market cannot find, or marketing promise a product engineering cannot keep.',
      bn: 'দুর্লভ আসন: ইঞ্জিনিয়ারিং এমন পণ্য শিপ করবে না যা বাজার খুঁজে পাবে না, মার্কেটিং এমন প্রতিশ্রুতি দেবে না যা ইঞ্জিনিয়ারিং রাখতে পারবে না।',
    },
  },
]
