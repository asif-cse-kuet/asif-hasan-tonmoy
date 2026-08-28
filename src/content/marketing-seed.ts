import type { LocaleText } from './types'

export type MarketingMetric = {
  id: string
  platform: 'upwork' | 'pinterest' | 'instagram' | 'general'
  client?: string
  metric: string
  label: LocaleText
  note?: LocaleText
}

export type MarketingSkillGroup = {
  id: string
  titles: LocaleText
  items: string[]
}

export const UPWORK_METRICS = {
  status: 'Top Rated',
  hours: '1,700+',
  jobs: 25,
  successRate: '100%',
  triumphs: '70+',
  clientsFraming: '50+',
  pinterestCampaigns: '40+',
  instagramCampaigns: '50+',
  profileUrl: 'https://www.upwork.com/freelancers/~01a37597d55b982d60',
} as const

export const MARKETING_CASE_METRICS: MarketingMetric[] = [
  {
    id: 'roasty-coffee',
    platform: 'pinterest',
    client: 'Roasty Coffee',
    metric: '1.5M',
    label: { en: 'Pinterest views', bn: 'Pinterest ভিউ' },
  },
  {
    id: 'tasteaholics',
    platform: 'pinterest',
    client: 'Tasteaholics',
    metric: '515K',
    label: { en: 'Pinterest views', bn: 'Pinterest ভিউ' },
  },
  {
    id: 'jennifer',
    platform: 'pinterest',
    client: 'Jennifer',
    metric: '3.8M',
    label: { en: 'Pinterest views', bn: 'Pinterest ভিউ' },
  },
  {
    id: 'oh-creative-day',
    platform: 'pinterest',
    client: 'OhCreativeDay',
    metric: '48.8K',
    label: { en: 'Pinterest views', bn: 'Pinterest ভিউ' },
  },
  {
    id: 'renee-roaming',
    platform: 'pinterest',
    client: 'ReneeRoaming',
    metric: '6.6M',
    label: { en: 'Pinterest views', bn: 'Pinterest ভিউ' },
  },
  {
    id: 'fit-infusions',
    platform: 'instagram',
    client: 'FitInfusions',
    metric: '30K → 200K+',
    label: { en: 'Instagram follower growth', bn: 'Instagram ফলোয়ার গ্রোথ' },
  },
  {
    id: 'fitness-recipes',
    platform: 'instagram',
    client: 'FitnessRecipes',
    metric: '200K → 1M+',
    label: { en: 'Instagram follower growth', bn: 'Instagram ফলোয়ার গ্রোথ' },
  },
]

export const MARKETING_ROLES = [
  'Cozy Cottage - Tech Lead + Marketing',
  'Enterprising Society - Head of Marketing',
  'Tribus Technology - Software Developer',
  'Shabash Fakibaj - Web Coordinator',
] as const

export const MARKETING_SKILL_GROUPS: MarketingSkillGroup[] = [
  {
    id: 'channels',
    titles: { en: 'Channels', bn: 'চ্যানেল' },
    items: [
      'Facebook',
      'Instagram',
      'Pinterest',
      'LinkedIn',
      'TikTok',
      'X (Twitter)',
    ],
  },
  {
    id: 'disciplines',
    titles: { en: 'Disciplines', bn: 'বিষয়' },
    items: [
      'SEO',
      'SEM',
      'Content strategy',
      'Social media',
      'Paid / organic funnels',
      'Email marketing',
      'Inbound / outbound',
      'Video marketing',
      'ROI analytics',
    ],
  },
  {
    id: 'tools',
    titles: { en: 'Tools & platforms', bn: 'টুল ও প্ল্যাটফর্ম' },
    items: [
      'Hootsuite',
      'Buffer',
      'Shopify',
      'WordPress',
      'Kajabi',
      'Wix',
      'Amazon',
      'eBay',
      'Canva',
      'Adobe Creative Suite',
    ],
  },
]

export const MARKETING_SEED_NOTE: LocaleText = {
  en: 'Deep case studies and long-form growth narratives coming in a later content wave.',
  bn: 'গভীর কেস স্টাডি ও দীর্ঘ গ্রোথ ন্যারেটিভ পরবর্তী কনটেন্ট ওয়েভে আসছে।',
}
