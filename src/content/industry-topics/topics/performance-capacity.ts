import type { IndustryTopic } from '../topic-types'

const topics: IndustryTopic[] = [
  {
    id: 'littles-law-capacity-planning',
    slug: 'littles-law-capacity-planning',
    domain: 'performance-capacity',
    titles: {
      en: "Little's Law as a capacity planning tool",
      bn: "Capacity planning-এর হাতিয়ার হিসেবে Little's Law",
    },
    summary: {
      en: 'L = λW worked through with real numbers: how many in-flight requests your service must hold before queues turn into timeouts.',
      bn: 'L = λW আসল সংখ্যা দিয়ে হিসাব: queue timeout হওয়ার আগে কত in-flight request ধরে রাখতে হবে।',
    },
    tags: ['littles-law', 'capacity', 'concurrency', 'queueing', 'throughput'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'thread-and-connection-pool-sizing',
      'p99-tail-latency-planning',
      'load-testing-that-reflects-reality',
    ],
    systemsLinks: ['littles-law'],
  },
  {
    id: 'amdahl-and-parallel-limits',
    slug: 'amdahl-and-parallel-limits',
    domain: 'performance-capacity',
    titles: {
      en: 'Amdahl, Gunther, and the ceiling on parallel speedup',
      bn: 'Amdahl, Gunther এবং parallel speedup-এর ছাদ',
    },
    summary: {
      en: 'Why doubling workers stops helping at 8 cores, and how the serial fraction plus coherency cost predicts the retrograde curve.',
      bn: 'worker দ্বিগুণ করলে ৮ core-এ কেন কাজ থামে, serial fraction + coherency cost কীভাবে retrograde curve বলে দেয়।',
    },
    tags: ['amdahl', 'parallelism', 'scalability', 'usl', 'contention'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'littles-law-capacity-planning',
      'thread-and-connection-pool-sizing',
      'profiling-cpu-vs-io-bound',
    ],
    systemsLinks: ['littles-law'],
  },
  {
    id: 'thread-and-connection-pool-sizing',
    slug: 'thread-and-connection-pool-sizing',
    domain: 'performance-capacity',
    titles: {
      en: 'Thread and connection pool sizing formulas',
      bn: 'Thread ও connection pool sizing formula',
    },
    summary: {
      en: 'The pool that is too big is worse than the pool that is too small - sizing from cores, wait ratio, and database capacity.',
      bn: 'বড় pool ছোট pool-এর চেয়েও খারাপ - core, wait ratio ও database capacity থেকে sizing।',
    },
    tags: ['pools', 'threads', 'connections', 'concurrency', 'saturation'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'littles-law-capacity-planning',
      'gc-pauses-and-memory-pressure',
      'hot-path-query-optimization',
    ],
    systemsLinks: ['littles-law', 'backpressure'],
  },
  {
    id: 'gc-pauses-and-memory-pressure',
    slug: 'gc-pauses-and-memory-pressure',
    domain: 'performance-capacity',
    titles: {
      en: 'GC pauses and memory pressure in the tail',
      bn: 'Tail-এ GC pause ও memory pressure',
    },
    summary: {
      en: 'Allocation rate, promotion failure, and why your p99 is a sawtooth that matches the old-generation collection cycle.',
      bn: 'allocation rate, promotion failure, আর p99 কেন old-generation collection cycle-এর মতো sawtooth।',
    },
    tags: ['gc', 'memory', 'jvm', 'pauses', 'allocation'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'profiling-cpu-vs-io-bound',
      'thread-and-connection-pool-sizing',
      'payload-size-and-serialization-cost',
    ],
    systemsLinks: ['golden-signals'],
  },
  {
    id: 'profiling-cpu-vs-io-bound',
    slug: 'profiling-cpu-vs-io-bound',
    domain: 'performance-capacity',
    titles: {
      en: 'Profiling: telling CPU-bound from IO-bound',
      bn: 'Profiling: CPU-bound বনাম IO-bound চেনা',
    },
    summary: {
      en: 'Reading flamegraphs and off-CPU profiles so you optimise the thing that is actually holding the request.',
      bn: 'flamegraph ও off-CPU profile পড়া, যাতে যেটা সত্যিই request আটকে আছে সেটাই optimise হয়।',
    },
    tags: ['profiling', 'flamegraph', 'cpu', 'io', 'tracing'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'hot-path-query-optimization',
      'gc-pauses-and-memory-pressure',
      'amdahl-and-parallel-limits',
    ],
    systemsLinks: ['golden-signals'],
  },
  {
    id: 'hot-path-query-optimization',
    slug: 'hot-path-query-optimization',
    domain: 'performance-capacity',
    titles: {
      en: 'Hot-path query optimisation that survives growth',
      bn: 'বৃদ্ধি টিকে থাকা hot-path query optimisation',
    },
    summary: {
      en: 'EXPLAIN ANALYZE, N+1 fan-out, and the index that turns a 400 ms endpoint into a 12 ms one.',
      bn: 'EXPLAIN ANALYZE, N+1 fan-out, আর যে index ৪০০ ms endpoint-কে ১২ ms করে।',
    },
    tags: ['sql', 'indexes', 'explain', 'n-plus-one', 'latency'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'profiling-cpu-vs-io-bound',
      'batching-and-request-coalescing',
      'thread-and-connection-pool-sizing',
    ],
    systemsLinks: ['hotspot-keys'],
  },
  {
    id: 'payload-size-and-serialization-cost',
    slug: 'payload-size-and-serialization-cost',
    domain: 'performance-capacity',
    titles: {
      en: 'Payload size and the hidden cost of serialisation',
      bn: 'Payload size ও serialisation-এর লুকানো খরচ',
    },
    summary: {
      en: 'JSON encoding can cost more CPU than the query - measure bytes per response and the allocations behind them.',
      bn: 'JSON encoding query-র চেয়েও বেশি CPU খেতে পারে - response-প্রতি byte ও তার allocation মাপুন।',
    },
    tags: ['serialization', 'json', 'payload', 'compression', 'bandwidth'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'batching-and-request-coalescing',
      'cost-per-request-optimization',
      'gc-pauses-and-memory-pressure',
    ],
    systemsLinks: [],
  },
  {
    id: 'batching-and-request-coalescing',
    slug: 'batching-and-request-coalescing',
    domain: 'performance-capacity',
    titles: {
      en: 'Batching and request coalescing without adding tail latency',
      bn: 'Tail latency না বাড়িয়ে batching ও request coalescing',
    },
    summary: {
      en: 'Micro-batch windows, single-flight dedup, and the arithmetic that says whether 5 ms of waiting pays for itself.',
      bn: 'micro-batch window, single-flight dedup, আর ৫ ms অপেক্ষা লাভজনক কি না তার হিসাব।',
    },
    tags: ['batching', 'coalescing', 'single-flight', 'throughput', 'dataloader'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'payload-size-and-serialization-cost',
      'littles-law-capacity-planning',
      'hot-path-query-optimization',
    ],
    systemsLinks: ['cache-stampede', 'thundering-herd'],
  },
  {
    id: 'load-testing-that-reflects-reality',
    slug: 'load-testing-that-reflects-reality',
    domain: 'performance-capacity',
    titles: {
      en: 'Load testing that reflects reality',
      bn: 'বাস্তবতা মেলানো load testing',
    },
    summary: {
      en: 'Closed-model tests hide coordinated omission - open-model arrival rates, warm caches, and honest percentiles.',
      bn: 'closed-model test coordinated omission লুকায় - open-model arrival rate, warm cache, সৎ percentile।',
    },
    tags: ['load-testing', 'k6', 'jmeter', 'benchmarking', 'percentiles'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'littles-law-capacity-planning',
      'p99-tail-latency-planning',
      'autoscaling-lag-and-warmup',
    ],
    systemsLinks: ['littles-law', 'chaos-engineering'],
  },
  {
    id: 'cost-per-request-optimization',
    slug: 'cost-per-request-optimization',
    domain: 'performance-capacity',
    titles: {
      en: 'Cost per request as a first-class metric',
      bn: 'Cost per request একটি প্রথম শ্রেণির metric',
    },
    summary: {
      en: 'Turning the cloud bill into millicents per request so efficiency work can be prioritised against feature work.',
      bn: 'cloud bill-কে request-প্রতি millicent-এ রূপ দিয়ে efficiency কাজকে feature কাজের সাথে তুলনা করা।',
    },
    tags: ['cost', 'unit-economics', 'finops', 'efficiency', 'capacity'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'payload-size-and-serialization-cost',
      'autoscaling-lag-and-warmup',
      'batching-and-request-coalescing',
    ],
    systemsLinks: [],
  },
  {
    id: 'autoscaling-lag-and-warmup',
    slug: 'autoscaling-lag-and-warmup',
    domain: 'performance-capacity',
    titles: {
      en: 'Autoscaling lag, warmup, and the gap you must pre-provision',
      bn: 'Autoscaling lag, warmup আর যে gap আগে থেকে রাখতে হয়',
    },
    summary: {
      en: 'Metric delay plus scheduling plus JIT warmup is often 3-4 minutes - traffic does not wait that long.',
      bn: 'metric delay + scheduling + JIT warmup প্রায়ই ৩-৪ মিনিট - traffic এত অপেক্ষা করে না।',
    },
    tags: ['autoscaling', 'kubernetes', 'hpa', 'warmup', 'headroom'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'littles-law-capacity-planning',
      'load-testing-that-reflects-reality',
      'cost-per-request-optimization',
    ],
    systemsLinks: ['littles-law', 'blue-green-canary'],
  },
]

export default topics
