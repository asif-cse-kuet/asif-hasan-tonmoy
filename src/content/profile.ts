import type { LocaleText } from './types'

export type ProfileLink = {
  id: string
  label: string
  url: string
  kind: 'github' | 'linkedin' | 'upwork' | 'coding' | 'site' | 'email' | 'other'
  /** simple-icons slug; null renders a monogram chip */
  icon?: string | null
  handle?: string
  /** show in the hero link strip */
  primary?: boolean
}

export type ProofMetric = {
  id: string
  value: string
  label: LocaleText
  source?: string
}

export const PROFILE = {
  name: 'Asif Hasan Tonmoy',
  brandLine: {
    en: 'Fullstack AI Engineer · System / Software Architect · Marketing Consultant',
    bn: 'ফুলস্ট্যাক এআই ইঞ্জিনিয়ার · সিস্টেম / সফটওয়্যার আর্কিটেক্ট · মার্কেটিং কনসালট্যান্ট',
  } satisfies LocaleText,
  tagline: {
    en: 'I design systems, ship software & AI products, and build the growth engines that make them win.',
    bn: 'আমি সিস্টেম ডিজাইন করি, সফটওয়্যার ও এআই পণ্য বানাই, এবং সেগুলোকে জয়ী করতে গ্রোথ ইঞ্জিন তৈরি করি।',
  } satisfies LocaleText,
  email: 'asifhasan.cse75@gmail.com',
  location: {
    en: 'Dhaka, Bangladesh',
    bn: 'ঢাকা, বাংলাদেশ',
  } satisfies LocaleText,
  education: {
    en: 'Khulna University of Engineering & Technology (KUET) — CSE, 2018–2023',
    bn: 'খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (কুয়েট) — CSE, ২০১৮–২০২৩',
  } satisfies LocaleText,
  shortBio: {
    en: 'Engineer-architect who ships production Vue/Laravel systems, publishes Bengali NLP research, and has spent 8+ years growing brands for 50+ clients worldwide.',
    bn: 'প্রোডাকশন Vue/Laravel সিস্টেম বানান, বাংলা NLP গবেষণা প্রকাশ করেন, এবং ৮+ বছরে ৫০+ আন্তর্জাতিক ক্লায়েন্টের ব্র্যান্ড বৃদ্ধি করেছেন।',
  } satisfies LocaleText,
} as const

export const PROFILE_LINKS: ProfileLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'asif-cse-kuet',
    url: 'https://github.com/asif-cse-kuet',
    kind: 'github',
    icon: 'github',
    primary: true,
  },
  {
    id: 'codeforces',
    label: 'Codeforces',
    handle: 'asif.hasan.tonmoy',
    url: 'https://codeforces.com/profile/asif.hasan.tonmoy',
    kind: 'coding',
    icon: 'codeforces',
    primary: true,
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    handle: 'noooob_bot',
    url: 'https://leetcode.com/u/noooob_bot/',
    kind: 'coding',
    icon: 'leetcode',
    primary: true,
  },
  {
    id: 'hackerrank',
    label: 'HackerRank',
    handle: 'asifhasantonmoy1',
    url: 'https://www.hackerrank.com/asifhasantonmoy1',
    kind: 'coding',
    icon: 'hackerrank',
    primary: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'asif-hasan-tonmoy',
    url: 'https://www.linkedin.com/in/asif-hasan-tonmoy/',
    kind: 'linkedin',
    icon: null,
    primary: true,
  },
  {
    id: 'upwork',
    label: 'Upwork',
    handle: 'Top Rated',
    url: 'https://www.upwork.com/freelancers/~01a37597d55b982d60',
    kind: 'upwork',
    icon: 'upwork',
    primary: true,
  },
  {
    id: 'gitlab',
    label: 'GitLab',
    url: 'https://gitlab.com/',
    kind: 'other',
    icon: 'gitlab',
  },
  {
    id: 'upwork-direct',
    label: 'Work with me (Upwork)',
    url: 'https://www.upwork.com/workwith/asifhasantonmoy',
    kind: 'upwork',
    icon: 'upwork',
  },
  {
    id: 'google-site',
    label: 'Legacy marketing site',
    url: 'https://sites.google.com/view/asifhasan/home',
    kind: 'site',
    icon: null,
  },
  {
    id: 'tree-explorer',
    label: 'Tree Explorer (live demo)',
    url: 'https://tree-explorer-coral.vercel.app/',
    kind: 'site',
    icon: 'vercel',
  },
  {
    id: 'research-doi',
    label: 'ICCIT 2025 paper (DOI)',
    url: 'https://doi.org/10.1109/ICCIT68739.2025.11490477',
    kind: 'other',
    icon: null,
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'asifhasan.cse75@gmail.com',
    url: 'mailto:asifhasan.cse75@gmail.com',
    kind: 'email',
    icon: null,
  },
]

export const PRIMARY_LINKS = PROFILE_LINKS.filter((link) => link.primary)

export const PROOF_METRICS: ProofMetric[] = [
  {
    id: 'upwork-hours',
    value: '1,700+',
    label: { en: 'Upwork hours', bn: 'আপওয়ার্ক ঘণ্টা' },
    source: 'Upwork',
  },
  {
    id: 'upwork-rated',
    value: 'Top Rated',
    label: { en: 'Freelance proof', bn: 'ফ্রিল্যান্স প্রমাণ' },
    source: 'Upwork',
  },
  {
    id: 'iccit',
    value: 'ICCIT 2025',
    label: { en: 'Published NLP research', bn: 'প্রকাশিত NLP গবেষণা' },
    source: 'IEEE',
  },
  {
    id: 'api-speed',
    value: '~10×',
    label: { en: 'API latency win (Proficient)', bn: 'API লেটেন্সি উন্নতি' },
    source: 'Proficient IS',
  },
  {
    id: 'realtime-users',
    value: '200+',
    label: { en: 'Concurrent realtime chat users', bn: 'রিয়েলটাইম চ্যাট ব্যবহারকারী' },
    source: 'Proficient IS',
  },
  {
    id: 'social-wins',
    value: '70+',
    label: { en: 'Social growth triumphs', bn: 'সোশ্যাল গ্রোথ সাফল্য' },
    source: 'Upwork / Google Site',
  },
  {
    id: 'github-repos',
    value: '26',
    label: { en: 'Public GitHub repos', bn: 'পাবলিক GitHub রিপো' },
    source: 'GitHub',
  },
  {
    id: 'clients',
    value: '50+',
    label: { en: 'Global consulting clients', bn: 'বিশ্বব্যাপী কনসালটিং ক্লায়েন্ট' },
    source: 'Upwork / marketing',
  },
]
