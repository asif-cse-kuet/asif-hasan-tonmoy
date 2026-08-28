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
      en: 'Production features from MySQL row to Quasar pixel on Vue, Pinia, Laravel, and PHP.',
      bn: 'MySQL সারি থেকে Quasar পিক্সেল: Vue, Pinia, Laravel ও PHP-তে প্রোডাকশন ফিচার।',
    },
    clusters: [
      {
        titles: { en: 'Laravel service layer', bn: 'Laravel সার্ভিস স্তর' },
        items: [
          'Laravel / PHP services',
          'Eloquent query design',
          'Auth, session, RBAC',
          'Middleware, validation, errors',
          'Queues and jobs',
          'REST JSON APIs',
          'File uploads',
          'Mail and notifications',
          'Third-party integrations',
        ],
      },
      {
        titles: { en: 'Vue application layer', bn: 'Vue অ্যাপ্লিকেশন স্তর' },
        items: [
          'Vue 3 composition API',
          'Quasar component systems',
          'Pinia stores',
          'Vue Router lazy routes',
          'Axios + CSRF cookies',
          'Vite build pipelines',
          'Form validation in SPA',
          'Accessibility in components',
          'Responsive Quasar layouts',
        ],
      },
      {
        titles: { en: 'APIs, contracts & realtime', bn: 'API, কন্ট্রাক্ট ও রিয়েলটাইম' },
        items: [
          'REST resource design',
          'Idempotent writes',
          'Webhooks',
          'WebSockets / broadcasting',
          'Polling fallbacks',
          'API versioning',
          'Pagination',
          'Realtime chat & presence',
          'Request timeouts',
        ],
      },
      {
        titles: { en: 'JavaScript OOP craft', bn: 'JavaScript OOP ক্রাফট' },
        items: [
          'JavaScript OOP',
          'SOLID in PHP and JS',
          'Refactoring legacy Laravel',
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
      en: 'Choosing the boring option on purpose, and knowing exactly what it costs.',
      bn: 'সচেতনভাবে সহজ সমাধান বেছে নেওয়া, এবং তার খরচ ঠিক জানা।',
    },
    clusters: [
      {
        titles: { en: 'Structural patterns', bn: 'স্ট্রাকচারাল প্যাটার্ন' },
        items: [
          'Modular Laravel vs extra services',
          'Quasar module boundaries',
          'Micro-packaging / low-code extensibility',
          'Bounded contexts in PHP',
          'Form request contracts',
          'Jobs and listeners',
          'API versioning',
          'Anti-corruption at HTTP edges',
        ],
      },
      {
        titles: { en: 'Vue + Laravel foundations', bn: 'Vue + Laravel ভিত্তি' },
        items: [
          'Modular Laravel apps',
          'Quasar layout systems',
          'Pinia store ownership',
          'Session vs token auth',
          'Redis cache aside',
          'Queue-backed writes',
          'Tenant-aware queries',
          'Idempotent HTTP posts',
          'SPA and API contracts',
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
          'PHP-FPM workers',
          'Health checks',
          'Resource limits',
          'Rolling deploys',
          'Secrets & .env discipline',
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
      { en: 'Customer-facing apps, admin desks, and internal tools', bn: 'কাস্টমার অ্যাপ, অ্যাডমিন ডেস্ক ও ইন্টারনাল টুল' },
      { en: 'APIs that other vendors can plug into without a war room', bn: 'অন্য ভেন্ডর সহজে প্লাগ করতে পারে এমন API' },
      { en: 'Vue, Quasar, Pinia, Laravel, and PHP features with tests and a clean deploy path', bn: 'Vue, Quasar, Pinia, Laravel ও PHP ফিচার — টেস্ট ও পরিষ্কার ডিপ্লয় পথসহ' },
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
