import type { LocaleText, ProjectTier } from './types'

export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  slug: string
  tier: ProjectTier
  titles: LocaleText
  summary: LocaleText
  stack: string[]
  links: ProjectLink[]
  tags: string[]
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: 'ticketing-system',
    tier: 'T1',
    titles: {
      en: 'Ticketing System - Frontend & Backend',
      bn: 'টিকেটিং সিস্টেম - ফ্রন্টএন্ড ও ব্যাকএন্ড',
    },
    summary: {
      en: 'Full-stack support ticketing with Vue/Quasar frontend and Laravel backend - chat integration and role-aware workflows.',
      bn: 'Vue/Quasar ফ্রন্টএন্ড ও Laravel ব্যাকএন্ডে ফুলস্ট্যাক সাপোর্ট টিকেটিং - চ্যাট ইন্টিগ্রেশন ও রোল-অবগত ওয়ার্কফ্লো।',
    },
    stack: ['Vue 3', 'Quasar', 'Pinia', 'Laravel', 'MySQL'],
    links: [
      { label: 'Frontend repo', url: 'https://github.com/asif-cse-kuet/Ticketing_System_FE' },
    ],
    tags: ['fullstack', 'support', 'vue', 'laravel'],
    featured: true,
  },
  {
    slug: 'docker-gmail-registration-api',
    tier: 'T1',
    titles: {
      en: 'Dockerized Registration & Gmail Email API',
      bn: 'Dockerized রেজিস্ট্রেশন ও Gmail Email API',
    },
    summary: {
      en: 'Containerized user registration with scheduled Gmail API email delivery - production-ready DevOps path.',
      bn: 'Gmail API ইমেইল ডেলিভারির সাথে কন্টেইনারাইজড ইউজার রেজিস্ট্রেশন - প্রোডাকশন-রেডি DevOps পথ।',
    },
    stack: ['Laravel', 'Docker', 'Gmail API', 'MySQL'],
    links: [
      {
        label: 'Repo',
        url: 'https://github.com/asif-cse-kuet/Api-For-UserRegistration-and-EmailScheduling-Dockarized',
      },
    ],
    tags: ['docker', 'api', 'email', 'devops'],
    featured: true,
  },
  {
    slug: 'proficient-production',
    tier: 'T1',
    titles: {
      en: 'Proficient IS Production Platform',
      bn: 'Proficient IS প্রোডাকশন প্ল্যাটফর্ম',
    },
    summary: {
      en: 'Enterprise Vue/Laravel features: micro-packaging R&D, RBAC, realtime chat, ~10× API wins.',
      bn: 'এন্টারপ্রাইজ Vue/Laravel ফিচার: মাইক্রো-প্যাকেজিং R&D, RBAC, রিয়েলটাইম চ্যাট, ~১০× API উন্নতি।',
    },
    stack: ['Vue 3', 'Quasar', 'Pinia', 'Laravel', 'REST'],
    links: [],
    tags: ['production', 'realtime', 'rbac', 'micro-packaging'],
    featured: true,
  },
  {
    slug: 'tree-explorer',
    tier: 'T1',
    titles: {
      en: 'Tree Explorer',
      bn: 'Tree Explorer',
    },
    summary: {
      en: 'Interactive tree visualization app deployed on Vercel - algorithms meet polished UI.',
      bn: 'Vercel-এ ডিপ্লয় করা ইন্টারঅ্যাকটিভ ট্রি ভিজুয়ালাইজেশন - অ্যালগরিদম ও পরিশীলিত UI।',
    },
    stack: ['Vue', 'Vite', 'Vercel'],
    links: [{ label: 'Live demo', url: 'https://tree-explorer-coral.vercel.app/' }],
    tags: ['visualization', 'algorithms', 'frontend'],
    featured: true,
  },
  {
    slug: 'transmentalnet-research',
    tier: 'T1',
    titles: {
      en: 'TransMentalNet-6 - Bengali Mental Health NLP',
      bn: 'TransMentalNet-6 - বাংলা মানসিক স্বাস্থ্য NLP',
    },
    summary: {
      en: 'ICCIT 2025 paper: optimized transformer for imbalanced Bengali mental illness classification (F1 66.35%).',
      bn: 'ICCIT 2025 পেপার: imbalanced বাংলা মানসিক রোগ শ্রেণীবিভাগের জন্য অপ্টিমাইজড ট্রান্সফরমার (F1 ৬৬.৩৫%)।',
    },
    stack: ['Python', 'Transformers', 'BanglaBERT', 'PyTorch'],
    links: [
      {
        label: 'DOI',
        url: 'https://doi.org/10.1109/ICCIT68739.2025.11490477',
      },
    ],
    tags: ['research', 'nlp', 'ai', 'bengali'],
    featured: true,
  },
  {
    slug: 'quasar-dashboard',
    tier: 'T1',
    titles: {
      en: 'Quasar Admin Dashboard',
      bn: 'Quasar অ্যাডমিন ড্যাশবোর্ড',
    },
    summary: {
      en: 'Role-aware Quasar dashboard patterns reused across production modules.',
      bn: 'প্রোডাকশন মডিউল জুড়ে পুনঃব্যবহৃত রোল-অবগত Quasar ড্যাশবোর্ড প্যাটার্ন।',
    },
    stack: ['Vue 3', 'Quasar', 'Pinia', 'Chart.js'],
    links: [],
    tags: ['dashboard', 'quasar', 'rbac'],
  },
  {
    slug: 'marketing-growth-portfolio',
    tier: 'T1',
    titles: {
      en: 'Multi-Channel Growth Portfolio',
      bn: 'মাল্টি-চ্যানেল গ্রোথ পোর্টফোলিও',
    },
    summary: {
      en: '70+ social triumphs across Pinterest and Instagram - Roasty 1.5M views, Jennifer 3.8M, ReneeRoaming 6.6M.',
      bn: 'Pinterest ও Instagram-এ ৭০+ সোশ্যাল সাফল্য - Roasty ১.৫M, Jennifer ৩.৮M, ReneeRoaming ৬.৬M ভিউ।',
    },
    stack: ['Pinterest', 'Instagram', 'SEO', 'Content strategy'],
    links: [{ label: 'Legacy proof', url: 'https://sites.google.com/view/asifhasan/home' }],
    tags: ['marketing', 'growth', 'social'],
    featured: true,
  },
  {
    slug: 'pms',
    tier: 'T2',
    titles: { en: 'Project Management System', bn: 'প্রজেক্ট ম্যানেজমেন্ট সিস্টেম' },
    summary: {
      en: 'Full-stack PMS with task tracking, roles, and reporting.',
      bn: 'টাস্ক ট্র্যাকিং, রোল ও রিপোর্টিং সহ ফুলস্ট্যাক PMS।',
    },
    stack: ['Laravel', 'Vue', 'MySQL'],
    links: [{ label: 'Repo', url: 'https://github.com/asif-cse-kuet' }],
    tags: ['pms', 'fullstack'],
  },
  {
    slug: 'banking-api',
    tier: 'T2',
    titles: { en: 'Banking API', bn: 'ব্যাংকিং API' },
    summary: {
      en: 'REST banking API with authentication, transactions, and validation layers.',
      bn: 'অথেন্টিকেশন, ট্রানজেকশন ও ভ্যালিডেশন স্তরসহ REST ব্যাংকিং API।',
    },
    stack: ['Laravel', 'REST', 'MySQL'],
    links: [],
    tags: ['api', 'banking', 'backend'],
  },
  {
    slug: 'banking-cpp-oop',
    tier: 'T2',
    titles: { en: 'Banking System (C++ OOP)', bn: 'ব্যাংকিং সিস্টেম (C++ OOP)' },
    summary: {
      en: 'Object-oriented banking simulation demonstrating OOP design patterns.',
      bn: 'OOP ডিজাইন প্যাটার্ন প্রদর্শনকারী অবজেক্ট-ওরিয়েন্টেড ব্যাংকিং সিমুলেশন।',
    },
    stack: ['C++', 'OOP'],
    links: [],
    tags: ['cpp', 'oop', 'academic'],
  },
  {
    slug: 'seat-allocation',
    tier: 'T2',
    titles: { en: 'Seat Allocation System', bn: 'সিট বরাদ্দ সিস্টেম' },
    summary: {
      en: 'Algorithmic seat assignment with constraint handling.',
      bn: 'সীমাবদ্ধতা পরিচালনাসহ অ্যালগরিদমিক সিট বরাদ্দ।',
    },
    stack: ['C++', 'Algorithms'],
    links: [],
    tags: ['algorithms', 'cpp'],
  },
  {
    slug: 'employee-management',
    tier: 'T2',
    titles: { en: 'Employee Management (C#)', bn: 'এমপ্লয়ি ম্যানেজমেন্ট (C#)' },
    summary: {
      en: 'Desktop employee CRUD and reporting with C# WinForms patterns.',
      bn: 'C# WinForms প্যাটার্নে ডেস্কটপ এমপ্লয়ি CRUD ও রিপোর্টিং।',
    },
    stack: ['C#', '.NET', 'MySQL'],
    links: [],
    tags: ['csharp', 'desktop'],
  },
  {
    slug: 'harmonymatch',
    tier: 'T2',
    titles: { en: 'HarmonyMatch', bn: 'HarmonyMatch' },
    summary: {
      en: 'Matchmaking platform with profile, preference, and compatibility logic on a Laravel stack.',
      bn: 'Laravel স্ট্যাকে প্রোফাইল, পছন্দ ও সামঞ্জস্য লজিকসহ ম্যাচমেকিং প্ল্যাটফর্ম।',
    },
    stack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    links: [],
    tags: ['matching', 'prototype'],
  },
  {
    slug: 'font-uploader',
    tier: 'T2',
    titles: { en: 'FontUploader', bn: 'FontUploader' },
    summary: {
      en: 'Font grouping via JSON/AJAX - solved complex API query construction bugs.',
      bn: 'JSON/AJAX দিয়ে ফন্ট গ্রুপিং - জটিল API query construction বাগ সমাধান।',
    },
    stack: ['Laravel', 'AJAX', 'JSON'],
    links: [],
    tags: ['fonts', 'api', 'debugging'],
  },
  {
    slug: 'digital-classroom-opengl',
    tier: 'T2',
    titles: { en: 'Digital Classroom (OpenGL)', bn: 'ডিজিটাল ক্লাসরুম (OpenGL)' },
    summary: {
      en: 'Interactive 3D classroom visualization with OpenGL/GLUT.',
      bn: 'OpenGL/GLUT দিয়ে ইন্টারঅ্যাকটিভ 3D ক্লাসরুম ভিজুয়ালাইজেশন।',
    },
    stack: ['C++', 'OpenGL', 'GLUT'],
    links: [],
    tags: ['graphics', 'opengl', '3d'],
  },
  {
    slug: 'appointment-system',
    tier: 'archive',
    titles: { en: 'Appointment System', bn: 'অ্যাপয়েন্টমেন্ট সিস্টেম' },
    summary: {
      en: 'Early full-stack appointment booking prototype.',
      bn: 'প্রাথমিক ফুলস্ট্যাক অ্যাপয়েন্টমেন্ট বুকিং প্রোটোটাইপ।',
    },
    stack: ['PHP', 'MySQL'],
    links: [],
    tags: ['booking', 'archive'],
  },
  {
    slug: 'figma-to-html',
    tier: 'archive',
    titles: { en: 'Figma → HTML Conversion', bn: 'Figma → HTML রূপান্তর' },
    summary: {
      en: 'Pixel-faithful design-to-code delivery from Figma mockups.',
      bn: 'Figma মকআপ থেকে পিক্সেল-ফেইথফুল design-to-code ডেলিভারি।',
    },
    stack: ['HTML', 'CSS', 'Figma'],
    links: [],
    tags: ['design-to-code', 'frontend'],
  },
  {
    slug: 'task-management',
    tier: 'archive',
    titles: { en: 'Task Management App', bn: 'টাস্ক ম্যানেজমেন্ট অ্যাপ' },
    summary: {
      en: 'Kanban-style task board with local persistence.',
      bn: 'লোকাল persistence সহ Kanban-স্টাইল টাস্ক বোর্ড।',
    },
    stack: ['JavaScript', 'localStorage'],
    links: [],
    tags: ['tasks', 'kanban', 'archive'],
  },
  {
    slug: 'supercards',
    tier: 'T1',
    titles: { en: 'SuperCards', bn: 'SuperCards' },
    summary: {
      en: 'Production loyalty and gift-card platform: issuance, wallet top-up, and merchant operations. Live walkthrough landing next.',
      bn: 'প্রোডাকশন লয়্যালটি ও গিফট-কার্ড প্ল্যাটফর্ম: ইস্যুয়ান্স, ওয়ালেট টপ-আপ ও মার্চেন্ট অপারেশন। লাইভ ওয়াকথ্রু শীঘ্রই।',
    },
    stack: ['Vue 3', 'Laravel', 'MySQL', 'REST'],
    links: [],
    tags: ['production', 'cards', 'fintech'],
    featured: true,
  },
  {
    slug: 'brac-social',
    tier: 'T1',
    titles: { en: 'BRAC Social Project', bn: 'BRAC সোশ্যাল প্রজেক্ট' },
    summary: {
      en: 'Production social-impact build with BRAC - programme records, field reporting, and operator dashboards. Demo assets landing next.',
      bn: 'BRAC-এর সাথে প্রোডাকশন সোশ্যাল-ইমপ্যাক্ট বিল্ড - প্রোগ্রাম রেকর্ড, ফিল্ড রিপোর্টিং ও অপারেটর ড্যাশবোর্ড। ডেমো অ্যাসেট শীঘ্রই।',
    },
    stack: ['Laravel', 'Vue 3', 'MySQL'],
    links: [],
    tags: ['production', 'social', 'ngo'],
    featured: true,
  },
]

export function getProjectsByTier(tier: ProjectTier): Project[] {
  return PROJECTS.filter((project) => project.tier === tier)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}
