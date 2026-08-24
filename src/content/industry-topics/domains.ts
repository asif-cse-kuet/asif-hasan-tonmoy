export type LocaleText = {
  en: string
  bn: string
}

export type DomainSlug =
  | 'distributed-systems'
  | 'data-storage'
  | 'caching-cdn'
  | 'messaging-async'
  | 'api-integration'
  | 'auth-security'
  | 'frontend-architecture'
  | 'devops-containers'
  | 'networking-edge'
  | 'observability-sli'
  | 'reliability-edge-cases'
  | 'performance-capacity'
  | 'ai-rag-agents'
  | 'data-pipelines-ml'
  | 'product-platform'

export type IndustryDomain = {
  id: DomainSlug
  slug: DomainSlug
  titles: LocaleText
  summary: LocaleText
}

export const DOMAINS: IndustryDomain[] = [
  {
    id: 'distributed-systems',
    slug: 'distributed-systems',
    titles: {
      en: 'Distributed systems & consensus',
      bn: 'বিতরণকৃত সিস্টেম ও ঐকমত্য',
    },
    summary: {
      en: 'CAP, PACELC, consensus, clocks, split brain, and the failure modes that appear once a service spans more than one machine.',
      bn: 'ক্যাপ, প্যাসেলসি, ঐকমত্য, ঘড়ি, স্প্লিট ব্রেইন—একাধিক মেশিনে ছড়িয়ে পড়লে যে ব্যর্থতার ধরনগুলো দেখা যায়।',
    },
  },
  {
    id: 'data-storage',
    slug: 'data-storage',
    titles: {
      en: 'Data & storage',
      bn: 'ডেটা ও স্টোরেজ',
    },
    summary: {
      en: 'Sharding, locks, migrations, replication lag, and the storage choices that decide correctness under load.',
      bn: 'শার্ডিং, লক, মাইগ্রেশন, রিপ্লিকেশন ল্যাগ—লোডে সঠিকতা নির্ধারণ করে এমন স্টোরেজ সিদ্ধান্ত।',
    },
  },
  {
    id: 'caching-cdn',
    slug: 'caching-cdn',
    titles: {
      en: 'Caching & CDN',
      bn: 'ক্যাশিং ও সিডিএন',
    },
    summary: {
      en: 'Cache aside, stampedes, invalidation, edge TTL, and why “just cache it” creates new failure modes.',
      bn: 'ক্যাশ অ্যাসাইড, স্ট্যাম্পিড, ইনভ্যালিডেশন, এজ টিটিএল—শুধু ক্যাশ করলেই নতুন ব্যর্থতা তৈরি হয় কেন।',
    },
  },
  {
    id: 'messaging-async',
    slug: 'messaging-async',
    titles: {
      en: 'Messaging & async',
      bn: 'মেসেজিং ও অ্যাসিঙ্ক',
    },
    summary: {
      en: 'Queues, backpressure, poison pills, sagas, outbox, and the delivery guarantees teams think they have.',
      bn: 'কিউ, ব্যাকপ্রেশার, পয়জন পিল, সাগা, আউটবক্স—দল যে ডেলিভারি গ্যারান্টি আছে বলে মনে করে।',
    },
  },
  {
    id: 'api-integration',
    slug: 'api-integration',
    titles: {
      en: 'API & integration',
      bn: 'এপিআই ও ইন্টিগ্রেশন',
    },
    summary: {
      en: 'Retries, circuit breakers, rate limits, idempotency keys, webhooks, and timeout budgets across service boundaries.',
      bn: 'রিট্রাই, সার্কিট ব্রেকার, রেট লিমিট, আইডেমপোটেন্সি কী, ওয়েবহুক এবং সার্ভিস সীমানায় টাইমআউট বাজেট।',
    },
  },
  {
    id: 'auth-security',
    slug: 'auth-security',
    titles: {
      en: 'Auth, security & tenancy',
      bn: 'অথেন্টিকেশন, নিরাপত্তা ও টেন্যান্সি',
    },
    summary: {
      en: 'RBAC, OAuth, tokens, CSRF, tenant isolation, and the identity mistakes that turn into incidents.',
      bn: 'আরবিএসি, ওঅথ, টোকেন, সিএসআরএফ, টেন্যান্ট আইসোলেশন—পরিচয় সংক্রান্ত ভুল যেগুলো ইনসিডেন্টে পরিণত হয়।',
    },
  },
  {
    id: 'frontend-architecture',
    slug: 'frontend-architecture',
    titles: {
      en: 'Frontend architecture & micro-packaging',
      bn: 'ফ্রন্টএন্ড আর্কিটেকচার ও মাইক্রো-প্যাকেজিং',
    },
    summary: {
      en: 'Micro-frontends, micro-packaging, state at scale, WebSockets, hydration, and modular UI systems.',
      bn: 'মাইক্রো-ফ্রন্টএন্ড, মাইক্রো-প্যাকেজিং, স্কেলে স্টেট, ওয়েবসকেট, হাইড্রেশন এবং মডুলার ইউআই সিস্টেম।',
    },
  },
  {
    id: 'devops-containers',
    slug: 'devops-containers',
    titles: {
      en: 'DevOps, containers & Kubernetes',
      bn: 'ডেভঅপস, কন্টেইনার ও কুবারনেটিস',
    },
    summary: {
      en: 'Docker layers, rollouts, blue-green, canary, probes, OOM, and the deploy machinery that keeps production boring.',
      bn: 'ডকার লেয়ার, রোলআউট, ব্লু-গ্রিন, ক্যানারি, প্রোব, ওওএম—প্রোডাকশনকে স্থির রাখে এমন ডিপ্লয় যন্ত্রপাতি।',
    },
  },
  {
    id: 'networking-edge',
    slug: 'networking-edge',
    titles: {
      en: 'Networking & edge / nginx',
      bn: 'নেটওয়ার্কিং ও এজ / এনজিনেক্স',
    },
    summary: {
      en: 'Reverse proxies, TLS, HTTP/2–3, DNS failover, load balancing, and what actually happens at the edge.',
      bn: 'রিভার্স প্রক্সি, টিএলএস, এইচটিটিপি/২–৩, ডিএনএস ফেইলওভার, লোড ব্যালেন্সিং—এজে আসলে কী ঘটে।',
    },
  },
  {
    id: 'observability-sli',
    slug: 'observability-sli',
    titles: {
      en: 'Observability & SLI/SLO',
      bn: 'পর্যবেক্ষণযোগ্যতা ও এসএলআই/এসএলও',
    },
    summary: {
      en: 'SLIs, error budgets, golden signals, tracing, cardinality, and alerts that page a human for a reason.',
      bn: 'এসএলআই, এরর বাজেট, গোল্ডেন সিগন্যাল, ট্রেসিং, কার্ডিনালিটি—মানুষকে কারণসহ পেজ করে এমন অ্যালার্ট।',
    },
  },
  {
    id: 'reliability-edge-cases',
    slug: 'reliability-edge-cases',
    titles: {
      en: 'Reliability & edge cases',
      bn: 'নির্ভরযোগ্যতা ও এজ কেস',
    },
    summary: {
      en: 'Chaos, retry storms, partial failure, load shedding, and the ugly cases that only appear in production.',
      bn: 'কাওস, রিট্রাই স্টর্ম, আংশিক ব্যর্থতা, লোড শেডিং—শুধু প্রোডাকশনে দেখা যায় এমন কঠিন কেস।',
    },
  },
  {
    id: 'performance-capacity',
    slug: 'performance-capacity',
    titles: {
      en: 'Performance & capacity',
      bn: 'পারফরম্যান্স ও ক্যাপাসিটি',
    },
    summary: {
      en: 'Little’s Law, Amdahl, p99 tails, pools, GC, and planning throughput before the pager fires.',
      bn: 'লিটলস ল, আডাল, পি৯৯ টেইল, পুল, জিসি—পেজার বাজার আগে থ্রুপুট পরিকল্পনা।',
    },
  },
  {
    id: 'ai-rag-agents',
    slug: 'ai-rag-agents',
    titles: {
      en: 'AI systems, RAG & agents',
      bn: 'এআই সিস্টেম, আরএজি ও এজেন্ট',
    },
    summary: {
      en: 'RAG, agentic retrieval, vector stores, prompt injection, evals, and the production path for LLM products.',
      bn: 'আরএজি, এজেন্টিক রিট্রিভাল, ভেক্টর স্টোর, প্রম্পট ইনজেকশন, ইভ্যাল—এলএলএম পণ্যের প্রোডাকশন পথ।',
    },
  },
  {
    id: 'data-pipelines-ml',
    slug: 'data-pipelines-ml',
    titles: {
      en: 'Data pipelines & ML serving',
      bn: 'ডেটা পাইপলাইন ও এমএল সার্ভিং',
    },
    summary: {
      en: 'ETL/ELT, feature stores, backfills, training-serving skew, and contracts that keep models honest.',
      bn: 'ইটিএল/ইএলটি, ফিচার স্টোর, ব্যাকফিল, ট্রেনিং-সার্ভিং স্কিউ—মডেলকে সৎ রাখে এমন চুক্তি।',
    },
  },
  {
    id: 'product-platform',
    slug: 'product-platform',
    titles: {
      en: 'Product & platform engineering',
      bn: 'প্রোডাক্ট ও প্ল্যাটফর্ম ইঞ্জিনিয়ারিং',
    },
    summary: {
      en: 'Multi-region, tenancy, public contracts, kill switches, ADRs, and platform choices that compound over years.',
      bn: 'মাল্টি-রিজিয়ন, টেন্যান্সি, পাবলিক কন্ট্রাক্ট, কিল সুইচ, এডিআর—বছরজুড়ে জমা হয় এমন প্ল্যাটফর্ম সিদ্ধান্ত।',
    },
  },
]
