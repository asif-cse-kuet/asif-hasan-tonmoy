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
    en: 'Software-to-Business Consultant | Fullstack (Backend+Frontend) Software Engineer',
    bn: 'সফটওয়্যার-টু-বিজনেস কনসালট্যান্ট | ফুলস্ট্যাক (ব্যাকএন্ড+ফ্রন্টএন্ড) সফটওয়্যার ইঞ্জিনিয়ার',
  } satisfies LocaleText,
  tagline: {
    en: 'I sit with owners, CEOs, and CTOs — turn business goals into architecture, then ship the product customers actually use.',
    bn: 'মালিক, CEO ও CTO-র সাথে বসি — ব্যবসার লক্ষ্যকে আর্কিটেকচারে আনি, তারপর গ্রাহকরা যে পণ্য ব্যবহার করে সেটা শিপ করি।',
  } satisfies LocaleText,
  designation: {
    en: 'Solution Architect & Software-to-Business Consultant — business problem → architecture → ship → scale',
    bn: 'সলিউশন আর্কিটেক্ট ও সফটওয়্যার-টু-বিজনেস কনসালট্যান্ট — ব্যবসার সমস্যা → আর্কিটেকচার → শিপ → স্কেল',
  } satisfies LocaleText,
  aboutLead: {
    en: 'AI, software, and business in one seat — I architect what to build, own the client conversation, and stay through production scale.',
    bn: 'AI, সফটওয়্যার ও ব্যবসা এক আসনে — কী বানাতে হবে আর্কিটেক্ট করি, ক্লায়েন্ট কথা সামলাই, প্রোডাকশন স্কেল পর্যন্ত থাকি।',
  } satisfies LocaleText,
  email: 'asifhasan.cse75@gmail.com',
  phone: '+880 1937-181793',
  telHref: 'tel:+8801937181793',
  location: {
    en: 'Dhaka, Bangladesh',
    bn: 'ঢাকা, বাংলাদেশ',
  } satisfies LocaleText,
  education: {
    en: 'Khulna University of Engineering & Technology (KUET), CSE, 2018–2023',
    bn: 'খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (কুয়েট), CSE, ২০১৮–২০২৩',
  } satisfies LocaleText,
  shortBio: {
    en: 'I handle clients, run projects, and architect solutions from the business problem — not from a framework checklist. Comfortable across stacks and languages; deepest shipping hours sit in Vue, Quasar, Pinia, Laravel, PHP, and JavaScript OOP. AI where it speeds delivery, then backend → frontend → deploy → scale → monitoring so the system stays honest in production. Eight years and 50+ brands means I already know what the market will ask for next.',
    bn: 'ক্লায়েন্ট হ্যান্ডেল, প্রজেক্ট ম্যানেজ, আর ব্যবসার সমস্যা থেকে সলিউশন আর্কিটেক্ট করি — ফ্রেমওয়ার্ক চেকলিস্ট থেকে নয়। সব স্ট্যাক ও ভাষায় কাজ করতে পারি; সবচেয়ে বেশি শিপ Vue, Quasar, Pinia, Laravel, PHP ও JavaScript OOP-এ। যেখানে AI ডেলিভারি ত্বরান্বিত করে সেখানে ব্যবহার, তারপর ব্যাকএন্ড → ফ্রন্টএন্ড → ডিপ্লয় → স্কেল → মনিটরিং যাতে প্রোডাকশনে সিস্টেম সৎ থাকে। ৮+ বছর ও ৫০+ ব্র্যান্ড মানে বাজার পরের ধাপে কী চাইবে সেটা আগেই জানি।',
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
