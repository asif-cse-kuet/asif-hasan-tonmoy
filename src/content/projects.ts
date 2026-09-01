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
  /** Optional compact capability bullets (business-value / edge cases). */
  highlights?: LocaleText[]
  /** Extra UI screenshots shown under the cover card. */
  gallery?: string[]
  stack: string[]
  links: ProjectLink[]
  tags: string[]
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: 'supercards',
    tier: 'T1',
    titles: { en: 'SuperCards', bn: 'SuperCards' },
    summary: {
      en: 'Enterprise multi-tenant platform I ship on at TeamSlice — RBAC across tenants, CMS, visual site builder, and Jira-style project management in one product. Tenants publish sites on custom domains; our backend resolves the host and renders the right site.',
      bn: 'TeamSlice-এ শিপ করা এন্টারপ্রাইজ মাল্টি-টেন্যান্ট প্ল্যাটফর্ম — RBAC, CMS, ভিজুয়াল সাইট বিল্ডার ও Jira-স্টাইল প্রজেক্ট ম্যানেজমেন্ট এক পণ্যে। টেন্যান্ট কাস্টম ডোমেইনে সাইট প্রকাশ করে; ব্যাকএন্ড হোস্ট রিজলভ করে সঠিক সাইট রেন্ডার করে।',
    },
    highlights: [
      {
        en: 'Multi-tenant RBAC — workspace roles, project tags, custom permissions, and tenant-scoped data isolation',
        bn: 'মাল্টি-টেন্যান্ট RBAC — ওয়ার্কস্পেস রোল, প্রজেক্ট ট্যাগ, কাস্টম পারমিশন ও টেন্যান্ট-স্কোপড ডেটা আইসোলেশন',
      },
      {
        en: 'CMS + site builder — drag-and-drop pages, preview, publish; map a custom domain and serve from our backend',
        bn: 'CMS + সাইট বিল্ডার — ড্র্যাগ-অ্যান্ড-ড্রপ পেজ, প্রিভিউ, পাবলিশ; কাস্টম ডোমেইন ম্যাপ করে ব্যাকএন্ড থেকে সার্ভ',
      },
      {
        en: 'Agile PM — cards table, sprints, epics, priorities, starred/watching tasks, time entries, release planning',
        bn: 'Agile PM — কার্ড টেবিল, স্প্রিন্ট, এপিক, প্রায়োরিটি, starred/watching টাস্ক, টাইম এন্ট্রি, রিলিজ প্ল্যানিং',
      },
      {
        en: 'Ops modules — attendance & day logs, service desk, e-commerce, customers, chat, inbox, files, quiz',
        bn: 'অপস মডিউল — অ্যাটেনড্যান্স ও ডে লগ, সার্ভিস ডেস্ক, ই-কমার্স, কাস্টমার, চ্যাট, ইনবক্স, ফাইল, কুইজ',
      },
      {
        en: 'SSO-ready login — email/password plus Google, Facebook, GitLab, Apple, and Microsoft sign-in',
        bn: 'SSO-রেডি লগইন — ইমেইল/পাসওয়ার্ড এবং Google, Facebook, GitLab, Apple, Microsoft সাইন-ইন',
      },
    ],
    gallery: [
      '/images/projects/supercards-login.png',
      '/images/projects/supercards-dashboard.png',
      '/images/projects/supercards-cards-table.png',
      '/images/projects/supercards-sites.png',
    ],
    stack: ['Vue 3', 'Quasar', 'Pinia', 'Laravel', 'MySQL', 'Redis', 'REST'],
    links: [
      { label: 'Live app', url: 'https://app.supercards.ca/' },
      { label: 'CMS / v5', url: 'https://v5.supercards.ca/' },
    ],
    tags: ['production', 'multi-tenant', 'cms', 'rbac', 'site-builder'],
    featured: true,
  },
  {
    slug: 'ticketing-system',
    tier: 'T1',
    titles: {
      en: 'SupportPro — Multi-tenant Support Desk',
      bn: 'SupportPro — মাল্টি-টেন্যান্ট সাপোর্ট ডেস্ক',
    },
    summary: {
      en: 'Production-shaped help desk for SaaS and agencies: each workspace owns its projects, staff, and customer queue — so one product can sell many isolated support desks without data bleed.',
      bn: 'SaaS ও এজেন্সির জন্য প্রোডাকশন-রেডি হেল্প ডেস্ক: প্রতি ওয়ার্কস্পেস নিজের প্রজেক্ট, স্টাফ ও কাস্টমার কিউ রাখে — এক পণ্যে অনেক আইসোলেটেড সাপোর্ট ডেস্ক, ডেটা লিক ছাড়াই।',
    },
    highlights: [
      {
        en: 'Roles: Superadmin · Workspace Admin · Project Owner/Admin · Agents (custom perms) · Customer',
        bn: 'রোল: Superadmin · Workspace Admin · Project Owner/Admin · Agents (কাস্টম পারমিশন) · Customer',
      },
      {
        en: 'Hard tenant isolation — admins never see another workspace’s projects or tickets',
        bn: 'কঠোর টেন্যান্ট আইসোলেশন — এক অ্যাডমিন অন্য ওয়ার্কস্পেসের প্রজেক্ট/টিকেট দেখে না',
      },
      {
        en: 'Project RBAC + custom roles; invite by email or role-bound join codes',
        bn: 'প্রজেক্ট RBAC + কাস্টম রোল; ইমেইল ইনভাইট বা রোল-বাউন্ড জয়েন কোড',
      },
      {
        en: 'Branded /{slug}/support pages — customers register and only see their own cases',
        bn: 'ব্র্যান্ডেড /{slug}/support — কাস্টমার রেজিস্টার করে শুধু নিজের টিকেট দেখে',
      },
      {
        en: 'Full ticket lifecycle: status, priority, assign, watchers, visibility, comments, attachments',
        bn: 'পূর্ণ টিকেট লাইফসাইকেল: স্ট্যাটাস, প্রায়োরিটি, অ্যাসাইন, ওয়াচার, ভিজিবিলিটি, কমেন্ট, অ্যাটাচমেন্ট',
      },
      {
        en: 'Soft-delete trash + Superadmin purge; retention jobs (tickets ~6mo, tenants ~2yr)',
        bn: 'সফট-ডিলিট ট্র্যাশ + Superadmin purge; রিটেনশন (টিকেট ~৬ মাস, টেন্যান্ট ~২ বছর)',
      },
      {
        en: 'Leadership dashboard + on-demand analytics (search after filters — no accidental load)',
        bn: 'লিডারশিপ ড্যাশবোর্ড + অন-ডিমান্ড অ্যানালিটিক্স (ফিল্টারের পর Search — অপ্রয়োজনীয় লোড নেই)',
      },
      {
        en: 'Safety caps: owned/joined project limits; demo sandboxes can’t invite and wipe session projects on logout',
        bn: 'সেফটি ক্যাপ: owned/joined প্রজেক্ট সীমা; ডেমো স্যান্ডবক্সে ইনভাইট বন্ধ, লগআউটে সেশন প্রজেক্ট মুছে যায়',
      },
      {
        en: 'Hidden Superadmin portal (/superad) separate from main login — platform ops without staff confusion',
        bn: 'আলাদা Superadmin পোর্টাল (/superad) — প্ল্যাটফর্ম অপস, স্টাফ লগইন থেকে আলাদা',
      },
    ],
    stack: ['Vue 3', 'Quasar', 'Pinia', 'Laravel', 'MySQL', 'Redis', 'Elasticsearch'],
    links: [
      { label: 'Live demo', url: 'https://ticketing-system-fe-eight.vercel.app/' },
      { label: 'Frontend (GitHub)', url: 'https://github.com/asif-cse-kuet/Ticketing_System_FE' },
      { label: 'Backend (GitHub)', url: 'https://github.com/asif-cse-kuet/Ticketing_System_BE' },
    ],
    tags: ['fullstack', 'support', 'rbac', 'multi-tenant', 'vue', 'laravel'],
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
