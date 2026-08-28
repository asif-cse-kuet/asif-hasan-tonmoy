import type { LocaleText } from './types'

export type LifeMoment = {
  id: string
  image: string
  title: LocaleText
  place: LocaleText
  caption: LocaleText
  /** Rough year or season for sorting */
  when: string
}

/** Travel & life moments — more photos will land here over time. */
export const LIFE_MOMENTS: LifeMoment[] = [
  {
    id: 'kuet-graduation',
    image: '/images/life/kuet-graduation.jpg',
    when: '2023',
    title: { en: 'CSE 2K17 — the last hurrah', bn: 'CSE 2K17 — শেষ উৎসব' },
    place: { en: 'KUET, Khulna', bn: 'কুয়েট, খুলনা' },
    caption: {
      en: 'Four years of systems, late labs, and the class that still ships together. The cake said what we all felt.',
      bn: 'চার বছর সিস্টেম, রাতের ল্যাব, আর ক্লাস যারা এখনও একসাথে শিপ করে। কেকটাই বলে দিয়েছিল।',
    },
  },
  {
    id: 'beach-cox',
    image: '/images/life/beach-cox.jpg',
    when: '2024',
    title: { en: 'Salt air reset', bn: 'লবণ বাতাসে রিসেট' },
    place: { en: "Cox's Bazar", bn: 'কক্সবাজার' },
    caption: {
      en: 'Beach days are where I stop optimizing queries and start noticing horizons again.',
      bn: 'সমুদ্রের দিনে কোয়েরি অপ্টিমাইজ বন্ধ, দিগন্ত দেখা শুরু।',
    },
  },
  {
    id: 'houseboat',
    image: '/images/life/houseboat.jpg',
    when: '2024',
    title: { en: 'Slow boat mornings', bn: 'ধীর নৌকার সকাল' },
    place: { en: 'Rural waterways, Bangladesh', bn: 'গ্রামীণ জলপথ, বাংলাদেশ' },
    caption: {
      en: 'No sprint planning — just water, wood, and time to think about the next build.',
      bn: 'স্প্রিন্ট প্ল্যানিং নয় — জল, কাঠ, আর পরের বিল্ড ভাবার সময়।',
    },
  },
  {
    id: 'safari-jeep',
    image: '/images/life/safari-jeep.jpg',
    when: '2023',
    title: { en: 'Open-road energy', bn: 'খোলা রোডের এনার্জি' },
    place: { en: 'Safari park route', bn: 'সাফারি পার্ক রুট' },
    caption: {
      en: 'Wind, sun, and the kind of distance that clears architecture decisions.',
      bn: 'বাতাস, রোদ, আর এমন দূরত্ব যা আর্কিটেকচার সিদ্ধান্ত পরিষ্কার করে।',
    },
  },
  {
    id: 'lalbagh-fort',
    image: '/images/life/lalbagh-fort.jpg',
    when: '2023',
    title: { en: 'History on brick', bn: 'ইটের ওপর ইতিহাস' },
    place: { en: 'Lalbagh Fort, Dhaka', bn: 'লালবাগ কেল্লা, ঢাকা' },
    caption: {
      en: 'Old walls, new questions — how systems outlive their builders.',
      bn: 'পুরোনো দেয়াল, নতুন প্রশ্ন — সিস্টেম কীভাবে নির্মাতার চেয়ে দীর্ঘজীবী হয়।',
    },
  },
  {
    id: 'scenic-lake',
    image: '/images/life/scenic-lake.jpg',
    when: '2024',
    title: { en: 'Highland pause', bn: 'উচ্চভূমির বিরতি' },
    place: { en: 'Hill tract viewpoint', bn: 'পাহাড়ি ভিউপয়েন্ট' },
    caption: {
      en: 'Mountains teach patience — the same muscle I use when a deploy waits on one stubborn test.',
      bn: 'পাহাড় ধৈর্য শেখায় — deploy যখন এক জিদ্দি টেস্টের ওপর আটকে, সেই একই muscle।',
    },
  },
  {
    id: 'roadside',
    image: '/images/life/roadside.jpg',
    when: '2022',
    title: { en: 'Between cities', bn: 'শহরের মাঝে' },
    place: { en: 'Highway stop, Bangladesh', bn: 'হাইওয়ে স্টপ, বাংলাদেশ' },
    caption: {
      en: 'Most of my best ideas showed up somewhere between point A and a client call.',
      bn: 'সেরা আইডিয়াগুলো অনেক সময় A আর ক্লায়েন্ট কলের মাঝখানে এসেছে।',
    },
  },
]

export const LIFE_INTRO = {
  title: { en: 'Life & travel', bn: 'জীবন ও ভ্রমণ' },
  lead: {
    en: 'I travel a lot — not for postcards, but for perspective. These are early moments; more routes and stories land here as the archive grows.',
    bn: 'আমি অনেক ঘোরি — পোস্টকার্ডের জন্য নয়, দৃষ্টিকোণের জন্য। এগুলো শুরুর মুহূর্ত; আরও রুট ও গল্প আসছে।',
  },
} as const satisfies Record<string, LocaleText>
