import type { LocaleText } from './types'

export type CodingProfile = {
  id: string
  platform: string
  handle: string
  url: string
  narrative: LocaleText
  highlights?: string[]
}

export type FeaturedRepo = {
  name: string
  url: string
  description: LocaleText
  language?: string
}

export const CODING_NARRATIVE: LocaleText = {
  en: 'Competitive programming sharpens the same muscles production engineering needs - tight complexity bounds, edge cases, and calm debugging under pressure.',
  bn: 'কম্পিটিটিভ প্রোগ্রামিং প্রোডাকশন ইঞ্জিনিয়ারিংয়ের মতো একই দক্ষতা ধরে - tight complexity, edge case, এবং চাপে শান্ত ডিবাগিং।',
}

export const CODING_PROFILES: CodingProfile[] = [
  {
    id: 'codeforces',
    platform: 'Codeforces',
    handle: 'asif.hasan.tonmoy',
    url: 'https://codeforces.com/profile/asif.hasan.tonmoy',
    narrative: {
      en: 'Contest participation and algorithmic problem solving on Codeforces.',
      bn: 'Codeforces-এ কনটেস্ট অংশগ্রহণ ও অ্যালগরিদমিক সমস্যা সমাধান।',
    },
  },
  {
    id: 'hackerrank',
    platform: 'HackerRank',
    handle: 'asifhasantonmoy1',
    url: 'https://www.hackerrank.com/asifhasantonmoy1',
    narrative: {
      en: 'Structured practice across data structures, algorithms, and language tracks.',
      bn: 'ডেটা স্ট্রাকচার, অ্যালগরিদম ও ভাষা ট্র্যাকে কাঠামোগত অনুশীলন।',
    },
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    handle: 'noooob_bot',
    url: 'https://leetcode.com/u/noooob_bot/',
    narrative: {
      en: 'Interview-style problem archive - bridging LeetCode patterns to shipped systems.',
      bn: 'ইন্টারভিউ-স্টাইল সমস্যা আর্কাইভ - LeetCode প্যাটার্ন থেকে শিপ করা সিস্টেমে সেতু।',
    },
  },
  {
    id: 'github',
    platform: 'GitHub',
    handle: 'asif-cse-kuet',
    url: 'https://github.com/asif-cse-kuet',
    narrative: {
      en: '26 public repositories spanning full-stack apps, research code, and interview solutions.',
      bn: '২৬টি পাবলিক রিপো - ফুলস্ট্যাক অ্যাপ, গবেষণা কোড ও ইন্টারভিউ সমাধান।',
    },
    highlights: ['26 public repos', 'Ticketing System FE/BE', 'Dockerized API'],
  },
]

export const FEATURED_REPOS: FeaturedRepo[] = [
  {
    name: '100-Top-Interview-LeetCode-Problem-Solution',
    url: 'https://github.com/asif-cse-kuet/100-Top-Interview-LeetCode-Problem-Solution',
    description: {
      en: 'Curated LeetCode solutions with explanations - algorithms archive.',
      bn: 'ব্যাখ্যাসহ কিউরেটেড LeetCode সমাধান - অ্যালগরিদম আর্কাইভ।',
    },
    language: 'C++ / Python',
  },
  {
    name: 'Ticketing_System_FE',
    url: 'https://github.com/asif-cse-kuet/Ticketing_System_FE',
    description: {
      en: 'Vue/Quasar frontend for the ticketing platform.',
      bn: 'টিকেটিং প্ল্যাটফর্মের Vue/Quasar ফ্রন্টএন্ড।',
    },
    language: 'Vue',
  },
  {
    name: 'Api-For-UserRegistration-and-EmailScheduling-Dockarized',
    url: 'https://github.com/asif-cse-kuet/Api-For-UserRegistration-and-EmailScheduling-Dockarized',
    description: {
      en: 'Dockerized Laravel registration API with Gmail scheduling.',
      bn: 'Gmail scheduling সহ Dockerized Laravel registration API।',
    },
    language: 'PHP',
  },
]

export const GITHUB_STATS = {
  publicRepos: 26,
  username: 'asif-cse-kuet',
} as const
