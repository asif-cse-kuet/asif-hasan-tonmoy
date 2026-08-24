import type { LocaleText } from './types'

export type ExperienceEntry = {
  id: string
  organization: string
  role: LocaleText
  period: string
  location?: LocaleText
  highlights: LocaleText[]
  tags: string[]
  current?: boolean
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'proficient-is',
    organization: 'Proficient Information System',
    role: {
      en: 'Junior Software Engineer',
      bn: 'জুনিয়র সফটওয়্যার ইঞ্জিনিয়ার',
    },
    period: 'Nov 2024 – Present',
    location: { en: 'Dhaka, Bangladesh', bn: 'ঢাকা, বাংলাদেশ' },
    highlights: [
      {
        en: 'Vue 3 / Quasar / Pinia / Laravel production features: realtime chat, RBAC dashboards, ticketing.',
        bn: 'Vue 3 / Quasar / Pinia / Laravel প্রোডাকশন ফিচার: রিয়েলটাইম চ্যাট, RBAC ড্যাশবোর্ড, টিকেটিং।',
      },
      {
        en: 'Micro-packaging R&D: decoupled frontend modules for low-code extensibility.',
        bn: 'মাইক্রো-প্যাকেজিং R&D: লো-কোড এক্সটেনসিবিলিটির জন্য ডিকপ্লড ফ্রন্টএন্ড মডিউল।',
      },
      {
        en: 'Delivered ~10× API latency improvements and realtime chat for 200+ concurrent users.',
        bn: '~১০× API লেটেন্সি উন্নতি এবং ২০০+ একযোগী রিয়েলটাইম চ্যাট ব্যবহারকারী।',
      },
    ],
    tags: ['vue', 'laravel', 'realtime', 'rbac', 'micro-packaging'],
    current: true,
  },
  {
    id: 'timedoor',
    organization: 'Timedoor Academy',
    role: {
      en: 'Programming Instructor',
      bn: 'প্রোগ্রামিং ইন্সট্রাক্টর',
    },
    period: 'Aug 2023 – Nov 2024',
    highlights: [
      {
        en: 'Taught JavaScript, Python, and C++ to students — bridging algorithms to practical engineering.',
        bn: 'JavaScript, Python ও C++ শেখানো — অ্যালগরিদম থেকে ব্যবহারিক ইঞ্জিনিয়ারিংয়ে সেতু।',
      },
      {
        en: 'Mentored debugging habits, code structure, and problem-solving communication.',
        bn: 'ডিবাগিং অভ্যাস, কোড স্ট্রাকচার ও সমস্যা সমাধানের যোগাযোগ দক্ষতা গড়ে তোলা।',
      },
    ],
    tags: ['teaching', 'javascript', 'python', 'cpp'],
  },
  {
    id: 'upwork',
    organization: 'Upwork (Independent Consultant)',
    role: {
      en: 'Top Rated Freelancer — Software & Marketing',
      bn: 'টপ রেটেড ফ্রিল্যান্সার — সফটওয়্যার ও মার্কেটিং',
    },
    period: '2019 – 2024',
    highlights: [
      {
        en: '1,700+ billable hours across 25+ jobs for 50+ global clients.',
        bn: '৫০+ বিশ্বব্যাপী ক্লায়েন্টের জন্য ২৫+ জবে ১,৭০০+ বিলযোগ্য ঘণ্টা।',
      },
      {
        en: 'Full-stack delivery, growth consulting, and social channel wins (Pinterest / Instagram).',
        bn: 'ফুলস্ট্যাক ডেলিভারি, গ্রোথ কনসাল্টিং ও সোশ্যাল চ্যানেল সাফল্য (Pinterest / Instagram)।',
      },
    ],
    tags: ['upwork', 'consulting', 'marketing', 'fullstack'],
  },
  {
    id: 'cozy-cottage',
    organization: 'Cozy Cottage',
    role: {
      en: 'Tech Lead + Marketing',
      bn: 'টেক লিড + মার্কেটিং',
    },
    period: '2021 – 2023',
    highlights: [
      {
        en: 'Led technical direction and marketing strategy for e-commerce growth.',
        bn: 'ই-কমার্স গ্রোথের জন্য প্রযুক্তিগত দিকনির্দেশনা ও মার্কেটিং কৌশল নেতৃত্ব।',
      },
    ],
    tags: ['ecommerce', 'marketing', 'leadership'],
  },
  {
    id: 'enterprising-society',
    organization: 'Enterprising Society',
    role: {
      en: 'Head of Marketing',
      bn: 'হেড অফ মার্কেটিং',
    },
    period: '2020 – 2021',
    highlights: [
      {
        en: 'Owned brand positioning, content strategy, and multi-channel campaigns.',
        bn: 'ব্র্যান্ড পজিশনিং, কনটেন্ট কৌশল ও মাল্টি-চ্যানেল ক্যাম্পেইনের দায়িত্ব।',
      },
    ],
    tags: ['marketing', 'brand', 'content'],
  },
  {
    id: 'tribus',
    organization: 'Tribus Limited',
    role: {
      en: 'Marketing Executive',
      bn: 'মার্কেটিং এক্সিকিউটিভ',
    },
    period: 'Apr 2018 – Jun 2019',
    highlights: [
      {
        en: 'Growth and automation campaigns for 8–10 international clients across SEO, brand, and audience growth.',
        bn: '৮–১০টি আন্তর্জাতিক ক্লায়েন্টের জন্য SEO, ব্র্যান্ড ও অডিয়েন্স গ্রোথ ক্যাম্পেইন।',
      },
    ],
    tags: ['marketing', 'seo', 'early-career'],
  },
  {
    id: 'shabash-fakibaj',
    organization: 'Shabash Fakibaj',
    role: {
      en: 'Web Coordinator',
      bn: 'ওয়েব কোঅর্ডিনেটর',
    },
    period: '2019 – 2020',
    highlights: [
      {
        en: 'Coordinated web presence, content updates, and campaign landing pages.',
        bn: 'ওয়েব উপস্থিতি, কনটেন্ট আপডেট ও ক্যাম্পেইন ল্যান্ডিং পেজ সমন্বয়।',
      },
    ],
    tags: ['web', 'content', 'coordination'],
  },
  {
    id: 'interaid',
    organization: 'Interaid',
    role: {
      en: 'Head of Physics',
      bn: 'হেড অফ ফিজিক্স',
    },
    period: '2017 – 2018',
    highlights: [
      {
        en: 'Led physics curriculum delivery — foundation for teaching complex systems simply.',
        bn: 'ফিজিক্স কারিকুলাম ডেলিভারি — জটিল সিস্টেম সহজে ব্যাখ্যার ভিত্তি।',
      },
    ],
    tags: ['teaching', 'physics', 'communication'],
  },
  {
    id: 'kuet',
    organization: 'KUET — Computer Science & Engineering',
    role: {
      en: 'B.Sc. in CSE',
      bn: 'CSE-তে B.Sc.',
    },
    period: '2018 – 2023',
    location: { en: 'Khulna, Bangladesh', bn: 'খুলনা, বাংলাদেশ' },
    highlights: [
      {
        en: 'Thesis: Bengali mental health sign recognition with deep learning (TransMentalNet-6).',
        bn: 'থিসিস: ডিপ লার্নিং দিয়ে বাংলা মানসিক স্বাস্থ্য চিহ্ন শনাক্তকরণ (TransMentalNet-6)।',
      },
      {
        en: 'ICCIT 2025 publication — imbalanced classification on 27k+ samples, 12 classes.',
        bn: 'ICCIT 2025 প্রকাশনা — ২৭k+ নমুনায় imbalanced classification, ১২ ক্লাস।',
      },
    ],
    tags: ['kuet', 'research', 'nlp', 'thesis'],
  },
]
