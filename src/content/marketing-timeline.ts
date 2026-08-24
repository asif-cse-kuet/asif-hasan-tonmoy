import type { LocaleText } from './types'

export type MarketingTimelineEntry = {
  id: string
  organization: string
  role: LocaleText
  period: string
  highlights: LocaleText[]
  metrics?: string[]
  tags: string[]
  current?: boolean
}

export const MARKETING_TIMELINE: MarketingTimelineEntry[] = [
  {
    id: 'upwork',
    organization: 'Upwork',
    role: {
      en: 'Marketing Strategist & Consultant (Top Rated)',
      bn: 'মার্কেটিং স্ট্রategist ও কনসালট্যান্ট (Top Rated)',
    },
    period: '2019 – 2024',
    highlights: [
      {
        en: 'Delivered growth campaigns for 50+ clients across USA, Canada, and Australia.',
        bn: 'USA, Canada ও Australia-এ ৫০+ ক্লায়েন্টের গ্রোথ ক্যাম্পেইন।',
      },
      {
        en: 'Led a distributed team of 8 specialists across content, ads, and analytics.',
        bn: 'কনটেন্ট, ads ও analytics-এ ৮ জনের distributed team নেতৃত্ব।',
      },
      {
        en: 'Ran 70+ social projects, 40+ Pinterest campaigns, and 50+ Instagram growth programs.',
        bn: '৭০+ social project, ৪০+ Pinterest campaign, ৫০+ Instagram growth program।',
      },
    ],
    metrics: ['1,700+ hours', '25 jobs', '100% success', '50+ clients'],
    tags: ['upwork', 'consulting', 'social', 'pinterest', 'instagram'],
  },
  {
    id: 'cozy-cottage',
    organization: 'Cozy Cottage LLC (USA)',
    role: {
      en: 'Tech Lead & Marketing Maestro',
      bn: 'Tech Lead ও Marketing Maestro',
    },
    period: '~2021 – 2023',
    highlights: [
      {
        en: 'Drove e-commerce growth through funnel optimization and campaign operations.',
        bn: 'funnel optimization ও campaign ops দিয়ে e-commerce growth।',
      },
      {
        en: 'Bridged product, tech, and marketing for Shopify-led storefront performance.',
        bn: 'Shopify storefront performance-এ product, tech ও marketing সেতু।',
      },
    ],
    tags: ['e-commerce', 'funnels', 'shopify', 'usa'],
  },
  {
    id: 'enterprising-society',
    organization: 'Enterprising Society LLC (USA)',
    role: {
      en: 'Social Media & Digital Marketing Head',
      bn: 'Social Media ও Digital Marketing Head',
    },
    period: '~2020 – 2021',
    highlights: [
      {
        en: 'Owned brand positioning and multi-channel content strategy.',
        bn: 'brand positioning ও multi-channel content strategy।',
      },
      {
        en: 'Aligned organic and paid channels for consistent audience growth.',
        bn: 'consistent audience growth-এর জন্য organic ও paid channel align।',
      },
    ],
    tags: ['brand', 'content', 'social', 'usa'],
  },
  {
    id: 'shabash-fakibaj',
    organization: 'Shabash Fakibaj (multinational non-profit)',
    role: {
      en: 'Web Development Team Coordinator',
      bn: 'Web Development Team Coordinator',
    },
    period: '~2019 – 2020',
    highlights: [
      {
        en: 'Built web presence and campaign landing pages for outreach programs.',
        bn: 'outreach program-এর web presence ও campaign landing page।',
      },
      {
        en: 'Coordinated dev and content teams for timely campaign launches.',
        bn: 'সময়মতো campaign launch-এর dev ও content team coordination।',
      },
    ],
    tags: ['web', 'campaigns', 'non-profit'],
  },
  {
    id: 'tribus',
    organization: 'Tribus Limited',
    role: {
      en: 'Marketing Executive',
      bn: 'Marketing Executive',
    },
    period: 'Apr 2018 – Jun 2019',
    highlights: [
      {
        en: 'Ran growth and automation campaigns for 8–10 international clients.',
        bn: '৮–১০ international client-এর growth ও automation campaign।',
      },
      {
        en: 'Delivered ~30–60% reach and engagement lifts across SEO, brand, and audience programs.',
        bn: 'SEO, brand ও audience program-এ ~৩০–৬০% reach ও engagement lift।',
      },
      {
        en: 'Shipped 4 client projects spanning SEO, brand positioning, and audience growth.',
        bn: 'SEO, brand positioning ও audience growth-এ ৪টি client project।',
      },
    ],
    metrics: ['8–10 clients', '30–60% lift', '4 projects'],
    tags: ['seo', 'automation', 'international'],
  },
]
