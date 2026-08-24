import type { LocaleText } from './types'

export type ServiceOffering = {
  id: string
  slug: string
  titles: LocaleText
  summary: LocaleText
  outcomes: LocaleText[]
  audience: LocaleText
  tags: string[]
}

export const SERVICES: ServiceOffering[] = [
  {
    id: 'build',
    slug: 'build',
    titles: { en: 'Build', bn: 'Build' },
    summary: {
      en: 'Greenfield products, APIs, dashboards, and AI features — from architecture sketch to shipped Vue/Laravel systems.',
      bn: 'Greenfield product, API, dashboard, AI feature — architecture sketch থেকে shipped Vue/Laravel system।',
    },
    outcomes: [
      {
        en: 'MVP to production with RBAC, realtime, and observability hooks baked in.',
        bn: 'RBAC, realtime, observability hook সহ MVP থেকে production।',
      },
      {
        en: 'Modular frontends ready for micro-packaging and future low-code extensions.',
        bn: 'micro-packaging ও future low-code extension-র জন্য modular frontend।',
      },
    ],
    audience: {
      en: 'Founders and product teams who need a senior builder, not a ticket taker.',
      bn: 'founder ও product team যাদের ticket taker নয় senior builder দরকার।',
    },
    tags: ['product', 'fullstack', 'mvp'],
  },
  {
    id: 'improve',
    slug: 'improve',
    titles: { en: 'Improve', bn: 'Improve' },
    summary: {
      en: 'Performance wins, reliability fixes, and UX polish on systems that already exist but hurt.',
      bn: 'existing system-এ performance win, reliability fix, UX polish যা এখন ব্যথা দিচ্ছে।',
    },
    outcomes: [
      {
        en: 'API latency and database bottlenecks — proven ~10× wins in production.',
        bn: 'API latency ও database bottleneck — production-এ প্রমাণিত ~১০× win।',
      },
      {
        en: 'Realtime state, chat, and dashboard flows that stop drifting under load.',
        bn: 'load-এ drift বন্ধ realtime state, chat, dashboard flow।',
      },
    ],
    audience: {
      en: 'Teams with working software that fails under scale or complexity.',
      bn: 'scale বা complexity-তে fail করা কাজের software-এর team।',
    },
    tags: ['performance', 'refactor', 'reliability'],
  },
  {
    id: 'grow',
    slug: 'grow',
    titles: { en: 'Grow', bn: 'Grow' },
    summary: {
      en: 'Distribution engines — SEO, content, Pinterest/Instagram, and funnels backed by 1,700+ Upwork hours and 70+ social wins.',
      bn: 'distribution engine — SEO, content, Pinterest/Instagram, funnel; ১,৭০০+ Upwork hour ও ৭০+ social win-এর backing।',
    },
    outcomes: [
      {
        en: 'Channel strategy with measurable view and follower growth (1.5M–6.6M Pinterest proof).',
        bn: 'measurable view ও follower growth সহ channel strategy (১.৫M–৬.৬M Pinterest proof)।',
      },
      {
        en: 'Content systems that compound — not one-off posts.',
        bn: 'compound করা content system — one-off post নয়।',
      },
    ],
    audience: {
      en: 'CEOs and marketers who want engineering-minded growth, not vanity metrics alone.',
      bn: 'CEO ও marketer যারা vanity metric নয় engineering-minded growth চান।',
    },
    tags: ['marketing', 'growth', 'seo', 'social'],
  },
  {
    id: 'diagnose',
    slug: 'diagnose',
    titles: { en: 'Diagnose', bn: 'Diagnose' },
    summary: {
      en: 'Structured triage for production incidents, CSRF/auth bugs, migration pain, and growth plateaus.',
      bn: 'production incident, CSRF/auth bug, migration pain, growth plateau-র structured triage।',
    },
    outcomes: [
      {
        en: 'Root-cause reports with fix paths — chat-style clarity for tech and non-tech stakeholders.',
        bn: 'fix path সহ root-cause report — tech ও non-tech stakeholder-এর জন্য chat-style clarity।',
      },
      {
        en: 'Prioritized backlog ranked by risk, effort, and business impact.',
        bn: 'risk, effort, business impact-এ ranked prioritized backlog।',
      },
    ],
    audience: {
      en: 'Leaders stuck between “it works on my machine” and a pager that will not stop.',
      bn: '"it works on my machine" ও থামছে না এমন pager-এর মাঝে stuck leader।',
    },
    tags: ['debugging', 'incident', 'consulting'],
  },
  {
    id: 'automate',
    slug: 'automate',
    titles: { en: 'Automate', bn: 'Automate' },
    summary: {
      en: 'CI/CD, Docker paths, email/scheduling pipelines, and repetitive ops — boring deploys on purpose.',
      bn: 'CI/CD, Docker path, email/scheduling pipeline, repetitive ops — ইচ্ছাকৃত boring deploy।',
    },
    outcomes: [
      {
        en: 'Containerized services with Gmail/API integrations that survive prod parity checks.',
        bn: 'prod parity check টিকে Gmail/API integration সহ containerized service।',
      },
      {
        en: 'Scripts and pipelines that remove manual toil without hiding failure signals.',
        bn: 'manual toil কমায় এমন script/pipeline failure signal লুকায় না।',
      },
    ],
    audience: {
      en: 'Teams drowning in manual releases and env-specific hacks.',
      bn: 'manual release ও env-specific hack-এ ডুবে থাকা team।',
    },
    tags: ['devops', 'automation', 'docker', 'ci-cd'],
  },
  {
    id: 'architect-review',
    slug: 'architect-review',
    titles: { en: 'Architect review', bn: 'Architect review' },
    summary: {
      en: 'Tradeoff tables, ADR-lite decisions, and system design reviews before you commit to the wrong shape.',
      bn: 'tradeoff table, ADR-lite decision, system design review — ভুল shape-এ commit-এর আগে।',
    },
    outcomes: [
      {
        en: 'CAP/PACELC-aware recommendations for data, caching, messaging, and tenancy.',
        bn: 'data, caching, messaging, tenancy-তে CAP/PACELC-aware recommendation।',
      },
      {
        en: 'Micro-packaging and modular FE/BE boundaries for platforms that must evolve.',
        bn: 'evolve করতে হবে এমন platform-এ micro-packaging ও modular FE/BE boundary।',
      },
    ],
    audience: {
      en: 'CTOs and leads planning the next 12–24 months of platform decisions.',
      bn: 'platform decision-এর পরবর্তী ১২–২৪ মাস plan করা CTO ও lead।',
    },
    tags: ['architecture', 'system-design', 'review'],
  },
]

export function getServiceBySlug(slug: string): ServiceOffering | undefined {
  return SERVICES.find((service) => service.slug === slug)
}
