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
    en: 'I sit with owners, CEOs, and CTOs — turn business goals into architecture, then ship systems that scale in production.',
    bn: 'মালিক, CEO ও CTO-র সাথে বসি — ব্যবসার লক্ষ্যকে আর্কিটেকচারে আনি, তারপর প্রোডাকশনে স্কেল হয় এমন সিস্টেম শিপ করি।',
  } satisfies LocaleText,
  designation: {
    en: 'Solution Architect & Software-to-Business Consultant — business problem → architecture → ship → scale',
    bn: 'সলিউশন আর্কিটেক্ট ও সফটওয়্যার-টু-বিজনেস কনসালট্যান্ট — ব্যবসার সমস্যা → আর্কিটেকচার → শিপ → স্কেল',
  } satisfies LocaleText,
  aboutLead: {
    en: 'AI, software, and business in one seat — I architect platforms end to end, own the client conversation, and stay through production scale.',
    bn: 'AI, সফটওয়্যার ও ব্যবসা এক আসনে — প্ল্যাটফর্ম এন্ড-টু-এন্ড আর্কিটেক্ট করি, ক্লায়েন্ট কথা সামলাই, প্রোডাকশন স্কেল পর্যন্ত থাকি।',
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
    en: 'I handle clients, run projects, and architect from the business problem — not from a framework checklist. I design the system a company can operate: platforms, APIs, data paths, and the failure modes between them. The stack follows the problem: typed UI on React, Next, Vue, or Nuxt; services on Node, Express, Nest, Laravel, Spring Boot, .NET, Python, or FastAPI. I watch production where it actually hurts (metrics, traces, the pitfalls that hide in p99) and I design the CI/CD path so a change leaves the laptop without a war room. I have trained multiple software-engineering teams to work that way, which makes deployment smoother and deliverables faster. When AI is on the brief I ship a pipeline you can measure: Python, FastAPI, LangChain, LangGraph, RAG, agentic RAG, vector stores such as Pinecone, evals, and a fallback when retrieval is empty. I do that work in Cursor, Claude, Codex, and Antigravity as part of the engineering loop, not as a party trick. Eight years growing 50+ brands means the architecture already knows what the market will demand of it.',
    bn: 'ক্লায়েন্ট হ্যান্ডেল, প্রজেক্ট ম্যানেজ, আর ব্যবসার সমস্যা থেকে আর্কিটেক্ট করি — ফ্রেমওয়ার্ক চেকলিস্ট থেকে নয়। আমি এমন সিস্টেম ডিজাইন করি যা কোম্পানি চালাতে পারে: প্ল্যাটফর্ম, API, ডেটা পথ, আর মাঝখানের ব্যর্থতাগুলো। স্ট্যাক সমস্যাকে অনুসরণ করে: React, Next, Vue বা Nuxt-এ টাইপড UI; Node, Express, Nest, Laravel, Spring Boot, .NET, Python বা FastAPI-তে সার্ভিস। প্রোডাকশন যেখানে আসলে ব্যথা করে সেখানে দেখি (মেট্রিক্স, ট্রেস, p99-এ লুকানো ফাঁদ) এবং এমন CI/CD ডিজাইন করি যাতে চেঞ্জ ওয়ার-রুম ছাড়াই ল্যাপটপ ছাড়ে। একাধিক সফটওয়্যার ইঞ্জিনিয়ারিং টিমকে সেই পথে ট্রেইন করেছি, যাতে ডিপ্লয়মেন্ট মসৃণ হয় এবং ডেলিভারেবল দ্রুত আসে। ব্রিফে AI থাকলে মাপযোগ্য পাইপলাইন শিপ করি: Python, FastAPI, LangChain, LangGraph, RAG, agentic RAG, Pinecone-এর মতো ভেক্টর স্টোর, ইভ্যাল, আর রিট্রিভাল খালি হলে ফলব্যাক। সেই কাজ Cursor, Claude, Codex ও Antigravity-তে ইঞ্জিনিয়ারিং লুপের অংশ হিসেবে করি, শোপিস হিসেবে নয়। ৮+ বছরে ৫০+ ব্র্যান্ড বাড়ানোর অর্থ: আর্কিটেকচার আগেই জানে বাজার কী চাইবে।',
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
