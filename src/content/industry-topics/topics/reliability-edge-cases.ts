import type { IndustryTopic } from '../topic-types'

/** Reliability & edge cases wave. */
const topics: IndustryTopic[] = [
  {
    id: 'graceful-degradation-design',
    slug: 'graceful-degradation-design',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Graceful degradation by design',
      bn: 'ডিজাইন করেই graceful degradation',
    },
    summary: {
      en: 'Every dependency will be unavailable at some point; the only question is whether the product decided in advance what to show. Degradation is a product decision written as code, not a fallback someone improvises at 2am.',
      bn: 'প্রতিটি dependency কোনো এক সময় unavailable হবে; প্রশ্ন শুধু product আগেই ঠিক করেছিল কি না কী দেখাবে। Degradation রাত ২টার improvisation নয়, কোডে লেখা product সিদ্ধান্ত।',
    },
    tags: ['degradation', 'fallbacks', 'reliability', 'availability', 'ux'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'load-shedding-and-admission-control',
      'partial-failure-handling',
      'dependency-startup-ordering',
    ],
    systemsLinks: ['feature-flags', 'circuit-breaker'],
  },
  {
    id: 'load-shedding-and-admission-control',
    slug: 'load-shedding-and-admission-control',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Load shedding and admission control',
      bn: 'Load shedding ও admission control',
    },
    summary: {
      en: 'A server that accepts every request under overload serves none of them within the deadline. Dropping 20% of traffic fast is how the other 80% keeps its SLO.',
      bn: 'Overload-এ সব request accept করা server কোনোটাই deadline-এর ভেতর serve করে না। ২০% traffic দ্রুত drop করাই বাকি ৮০%-এর SLO বাঁচায়।',
    },
    tags: ['load-shedding', 'admission-control', 'queueing', 'capacity', 'overload'],
    difficulty: 'advanced',
    status: 'full',
    related: ['graceful-degradation-design', 'retry-storm-prevention', 'partial-failure-handling'],
    systemsLinks: ['rate-limiting', 'littles-law'],
  },
  {
    id: 'partial-failure-handling',
    slug: 'partial-failure-handling',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Partial failure in fan-out requests',
      bn: 'Fan-out request-এ partial failure',
    },
    summary: {
      en: 'One page calls nine services and two of them time out. Whether that renders a usable page or a 500 depends entirely on code you wrote before the incident.',
      bn: 'এক page নয়টা service ডাকে, দুইটা timeout করে। সেটা usable page না 500 হবে — তা incident-এর আগে লেখা কোডের উপর নির্ভর করে।',
    },
    tags: ['partial-failure', 'fan-out', 'timeouts', 'aggregation', 'resilience'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'graceful-degradation-design',
      'chaos-experiments-safely',
      'circuit-breaker-cascades',
    ],
    systemsLinks: ['circuit-breaker'],
  },
  {
    id: 'chaos-experiments-safely',
    slug: 'chaos-experiments-safely',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Running chaos experiments safely',
      bn: 'নিরাপদে chaos experiment চালানো',
    },
    summary: {
      en: 'Chaos engineering is a hypothesis test with a blast radius and an abort button, not an excuse to unplug servers. Without steady-state metrics first, you are just causing an outage.',
      bn: 'Chaos engineering হলো blast radius ও abort button-সহ hypothesis test, server unplug করার অজুহাত নয়। আগে steady-state metric না থাকলে আপনি শুধু outage বানাচ্ছেন।',
    },
    tags: ['chaos', 'game-days', 'blast-radius', 'experiments', 'reliability'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'partial-failure-handling',
      'dependency-startup-ordering',
      'graceful-degradation-design',
    ],
    systemsLinks: ['chaos-engineering', 'feature-flags'],
  },
  {
    id: 'timezone-and-dst-bugs',
    slug: 'timezone-and-dst-bugs',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Timezone and DST bugs that ship',
      bn: 'Production-এ যাওয়া timezone ও DST বাগ',
    },
    summary: {
      en: 'Storing local time, trusting a fixed +06:00 offset, or scheduling a job at 02:30 local are three different ways to lose an hour of data. IANA identifiers and UTC storage are not optional.',
      bn: 'Local time store করা, fixed +06:00 offset-এ ভরসা, বা 02:30 local-এ job schedule — এক ঘণ্টার ডেটা হারানোর তিনটি আলাদা উপায়। IANA identifier ও UTC storage optional নয়।',
    },
    tags: ['timezones', 'dst', 'datetime', 'scheduling', 'iana'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'leap-day-and-calendar-edge-cases',
      'long-running-job-recovery',
      'money-and-rounding-correctness',
    ],
    systemsLinks: ['clock-skew'],
  },
  {
    id: 'unicode-and-encoding-edge-cases',
    slug: 'unicode-and-encoding-edge-cases',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Unicode and encoding edge cases',
      bn: 'Unicode ও encoding edge case',
    },
    summary: {
      en: 'A Bengali name truncated at 20 bytes, an emoji that breaks a MySQL insert, and two visually identical usernames that are different byte strings. Text is the least tested part of most systems.',
      bn: '২০ byte-এ কাটা বাংলা নাম, MySQL insert ভাঙা emoji, দেখতে এক কিন্তু আলাদা byte string দুটো username। বেশিরভাগ সিস্টেমে text-ই সবচেয়ে কম tested অংশ।',
    },
    tags: ['unicode', 'utf8', 'normalization', 'grapheme-clusters', 'collation'],
    difficulty: 'intermediate',
    status: 'full',
    related: ['money-and-rounding-correctness', 'duplicate-submission-prevention'],
    systemsLinks: [],
  },
  {
    id: 'money-and-rounding-correctness',
    slug: 'money-and-rounding-correctness',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Money, rounding, and float traps',
      bn: 'অর্থ, rounding ও float-এর ফাঁদ',
    },
    summary: {
      en: '0.1 + 0.2 is not 0.3, a 15% VAT split across three line items does not sum back to the invoice total, and the difference lands in a reconciliation report someone has to explain.',
      bn: '0.1 + 0.2 মানে 0.3 নয়, তিন line item-এ ভাগ করা ১৫% VAT invoice total-এ ফেরে না, আর পার্থক্যটা কাউকে ব্যাখ্যা করতে হয় reconciliation report-এ।',
    },
    tags: ['money', 'rounding', 'decimals', 'floats', 'currency'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'unicode-and-encoding-edge-cases',
      'duplicate-submission-prevention',
      'leap-day-and-calendar-edge-cases',
    ],
    systemsLinks: [],
  },
  {
    id: 'duplicate-submission-prevention',
    slug: 'duplicate-submission-prevention',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Duplicate submission prevention',
      bn: 'Duplicate submission প্রতিরোধ',
    },
    summary: {
      en: 'Impatient users double-click, mobile networks retry silently, and load balancers replay timed-out POSTs. Disabling the button is a UX nicety; the server needs a uniqueness constraint.',
      bn: 'অধৈর্য user double-click করে, mobile network চুপচাপ retry করে, load balancer timed-out POST replay করে। Button disable করা UX; server-এ uniqueness constraint লাগে।',
    },
    tags: ['idempotency', 'double-submit', 'dedup', 'forms', 'payments'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'long-running-job-recovery',
      'retry-storm-prevention',
      'money-and-rounding-correctness',
    ],
    systemsLinks: ['idempotency-keys'],
  },
  {
    id: 'long-running-job-recovery',
    slug: 'long-running-job-recovery',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Long-running job recovery',
      bn: 'দীর্ঘ job-এর recovery',
    },
    summary: {
      en: 'A six-hour import killed at hour five by a rolling deploy either resumes from a checkpoint or starts over — and starting over is how you double-charge 40,000 rows.',
      bn: 'ছয় ঘণ্টার import পাঁচ ঘণ্টায় rolling deploy-এ মারা গেলে checkpoint থেকে resume করবে নাহলে শুরু থেকে — আর শুরু থেকে করলেই ৪০,০০০ row double-charge।',
    },
    tags: ['jobs', 'checkpointing', 'resumability', 'workers', 'batch'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'duplicate-submission-prevention',
      'dependency-startup-ordering',
      'partial-failure-handling',
    ],
    systemsLinks: ['idempotency-keys', 'poison-pills'],
  },
  {
    id: 'dependency-startup-ordering',
    slug: 'dependency-startup-ordering',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Dependency startup ordering',
      bn: 'Dependency startup ordering',
    },
    summary: {
      en: 'Services that crash-loop because Postgres is not up yet turn a 30-second database restart into a 20-minute cluster-wide outage. Startup order is a runtime property, not a deploy script.',
      bn: 'Postgres ওঠার আগেই crash-loop করা service ৩০ সেকেন্ডের database restart-কে ২০ মিনিটের cluster-wide outage বানায়। Startup order deploy script নয়, runtime property।',
    },
    tags: ['startup', 'health-checks', 'probes', 'bootstrap', 'kubernetes'],
    difficulty: 'intermediate',
    status: 'full',
    related: ['chaos-experiments-safely', 'graceful-degradation-design', 'retry-storm-prevention'],
    systemsLinks: ['thundering-herd'],
  },
  {
    id: 'leap-day-and-calendar-edge-cases',
    slug: 'leap-day-and-calendar-edge-cases',
    domain: 'reliability-edge-cases',
    titles: {
      en: 'Leap days and calendar edge cases',
      bn: 'Leap day ও calendar edge case',
    },
    summary: {
      en: 'A monthly subscription started on 31 January, an annual renewal on 2024-02-29, and a report that asks for "last month" on the 31st. Calendars are not arithmetic.',
      bn: '৩১ জানুয়ারিতে শুরু monthly subscription, 2024-02-29-এ annual renewal, আর ৩১ তারিখে "গত মাস" চাওয়া report। Calendar arithmetic নয়।',
    },
    tags: ['calendars', 'leap-year', 'dates', 'billing', 'recurrence'],
    difficulty: 'intermediate',
    status: 'full',
    related: ['timezone-and-dst-bugs', 'money-and-rounding-correctness'],
    systemsLinks: [],
  },
]

export default topics
