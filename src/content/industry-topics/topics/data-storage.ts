import type { IndustryTopic } from '../topic-types'

/** Data & storage wave - schema change, replication, sharding, locking, retention. */
const topics: IndustryTopic[] = [
  {
    id: 'zero-downtime-schema-migrations',
    slug: 'zero-downtime-schema-migrations',
    domain: 'data-storage',
    titles: {
      en: 'Zero-downtime schema migrations',
      bn: 'Zero-downtime schema migration',
    },
    summary: {
      en: 'Metadata locks, blocking ALTERs, and the expand–backfill–contract sequence that keeps writes online. Why the deploy, not the DDL, is usually the outage.',
      bn: 'Metadata lock, blocking ALTER এবং expand–backfill–contract ধাপ যা write online রাখে। outage সাধারণত DDL নয়, deploy-এ হয়।',
    },
    tags: ['migrations', 'ddl', 'mysql', 'postgres', 'deploy'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'index-design-and-query-plans',
      'large-table-archival-strategy',
      'database-deadlocks-under-load',
    ],
    systemsLinks: ['blue-green-canary', 'feature-flags'],
  },
  {
    id: 'replication-lag-read-your-writes',
    slug: 'replication-lag-read-your-writes',
    domain: 'data-storage',
    titles: {
      en: 'Replication lag and read-your-writes',
      bn: 'Replication lag ও read-your-writes',
    },
    summary: {
      en: 'A user saves a form, the read hits a replica 800 ms behind, and the change appears to vanish. Session pinning, LSN tokens, and bounded staleness fix it.',
      bn: 'user form save করে, read যায় ৮০০ ms পিছিয়ে থাকা replica-তে, পরিবর্তন হারিয়ে গেছে মনে হয়। session pinning, LSN token, bounded staleness সমাধান।',
    },
    tags: ['replication', 'consistency', 'read-replicas', 'postgres'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'transaction-isolation-anomalies',
      'connection-pool-exhaustion',
      'sharding-key-selection',
    ],
    systemsLinks: ['cap-theorem', 'clock-skew'],
  },
  {
    id: 'sharding-key-selection',
    slug: 'sharding-key-selection',
    domain: 'data-storage',
    titles: {
      en: 'Choosing a shard key you can live with',
      bn: 'যে shard key নিয়ে বাঁচা যায়',
    },
    summary: {
      en: 'Shard keys decide which queries stay cheap and which become scatter-gather forever. Resharding a wrong key costs quarters, not sprints.',
      bn: 'shard key ঠিক করে কোন query সস্তা থাকবে আর কোনটা চিরকাল scatter-gather হবে। ভুল key reshard করতে sprint নয়, quarter লাগে।',
    },
    tags: ['sharding', 'partitioning', 'scale', 'data-modeling'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'hot-partition-mitigation',
      'multi-tenant-data-isolation',
      'replication-lag-read-your-writes',
    ],
    systemsLinks: ['hotspot-keys', 'multi-region'],
  },
  {
    id: 'hot-partition-mitigation',
    slug: 'hot-partition-mitigation',
    domain: 'data-storage',
    titles: {
      en: 'Hot partition and hot row mitigation',
      bn: 'Hot partition ও hot row সামলানো',
    },
    summary: {
      en: 'One tenant, one counter, or one monotonic index tail absorbs the whole write rate while the other shards idle. Salting, sharded counters, and admission control.',
      bn: 'এক tenant, এক counter বা monotonic index tail পুরো write rate শুষে নেয়, বাকি shard বসে থাকে। salting, sharded counter, admission control।',
    },
    tags: ['hotspot', 'partitioning', 'contention', 'throughput'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'sharding-key-selection',
      'database-deadlocks-under-load',
      'connection-pool-exhaustion',
    ],
    systemsLinks: ['hotspot-keys', 'thundering-herd'],
  },
  {
    id: 'index-design-and-query-plans',
    slug: 'index-design-and-query-plans',
    domain: 'data-storage',
    titles: {
      en: 'Index design and reading query plans',
      bn: 'Index design ও query plan পড়া',
    },
    summary: {
      en: 'Composite column order, selectivity, and covering indexes decide whether a query touches 40 rows or 40 million. EXPLAIN ANALYZE is the only honest witness.',
      bn: 'composite column order, selectivity ও covering index ঠিক করে query ৪০ row না ৪ কোটি row ছোঁবে। EXPLAIN ANALYZE-ই একমাত্র সৎ সাক্ষী।',
    },
    tags: ['indexes', 'explain', 'query-planner', 'sql'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'n-plus-one-query-elimination',
      'zero-downtime-schema-migrations',
      'large-table-archival-strategy',
    ],
    systemsLinks: [],
  },
  {
    id: 'n-plus-one-query-elimination',
    slug: 'n-plus-one-query-elimination',
    domain: 'data-storage',
    titles: {
      en: 'Eliminating N+1 queries in ORMs',
      bn: 'ORM-এ N+1 query দূর করা',
    },
    summary: {
      en: 'A list endpoint fires 1 + 200 queries because a template touched a lazy relation. Eager loading, batch loaders, and a test that fails on query count.',
      bn: 'template lazy relation ছোঁয়ায় list endpoint ১ + ২০০ query চালায়। eager loading, batch loader, query count-এ fail করা test।',
    },
    tags: ['orm', 'laravel', 'eager-loading', 'latency'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'index-design-and-query-plans',
      'connection-pool-exhaustion',
      'large-table-archival-strategy',
    ],
    systemsLinks: ['littles-law'],
  },
  {
    id: 'transaction-isolation-anomalies',
    slug: 'transaction-isolation-anomalies',
    domain: 'data-storage',
    titles: {
      en: 'Transaction isolation anomalies in production',
      bn: 'Production-এ transaction isolation anomaly',
    },
    summary: {
      en: 'Lost updates, write skew, and phantom reads survive code review because they only appear under concurrency. Pick the isolation level and the lock deliberately.',
      bn: 'lost update, write skew, phantom read code review পার হয়ে যায় কারণ এগুলো শুধু concurrency-তে দেখা দেয়। isolation level ও lock ইচ্ছাকৃতভাবে বেছে নিন।',
    },
    tags: ['transactions', 'isolation', 'locking', 'mvcc'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'database-deadlocks-under-load',
      'replication-lag-read-your-writes',
      'connection-pool-exhaustion',
    ],
    systemsLinks: ['idempotency-keys'],
  },
  {
    id: 'connection-pool-exhaustion',
    slug: 'connection-pool-exhaustion',
    domain: 'data-storage',
    titles: {
      en: 'Connection pool exhaustion',
      bn: 'Connection pool শেষ হয়ে যাওয়া',
    },
    summary: {
      en: 'The database is at 12% CPU while every request times out waiting for a connection. Pool math, transaction hold time, and where to put the queue.',
      bn: 'database ১২% CPU-তে, অথচ প্রতিটি request connection-এর অপেক্ষায় timeout করছে। pool-এর হিসাব, transaction hold time, queue কোথায় রাখবেন।',
    },
    tags: ['connection-pool', 'pgbouncer', 'saturation', 'timeouts'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'n-plus-one-query-elimination',
      'transaction-isolation-anomalies',
      'hot-partition-mitigation',
    ],
    systemsLinks: ['littles-law', 'backpressure'],
  },
  {
    id: 'large-table-archival-strategy',
    slug: 'large-table-archival-strategy',
    domain: 'data-storage',
    titles: {
      en: 'Archiving and pruning very large tables',
      bn: 'বিশাল table archive ও prune করা',
    },
    summary: {
      en: 'A 1.4 TB events table makes every backup, migration, and index rebuild slower. Partition-drop retention beats DELETE loops that bloat the table further.',
      bn: '১.৪ TB events table প্রতিটি backup, migration ও index rebuild ধীর করে। DELETE loop table আরও bloat করে; partition drop ভালো retention।',
    },
    tags: ['retention', 'partitioning', 'vacuum', 'storage-cost'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'zero-downtime-schema-migrations',
      'index-design-and-query-plans',
      'soft-delete-and-audit-trails',
    ],
    systemsLinks: [],
  },
  {
    id: 'multi-tenant-data-isolation',
    slug: 'multi-tenant-data-isolation',
    domain: 'data-storage',
    titles: {
      en: 'Multi-tenant data isolation at the storage layer',
      bn: 'Storage layer-এ multi-tenant data isolation',
    },
    summary: {
      en: 'Shared schema, schema-per-tenant, or database-per-tenant - each choice moves the cross-tenant leak risk somewhere else. Enforce the tenant filter below the ORM.',
      bn: 'shared schema, schema-per-tenant বা database-per-tenant - প্রতিটি পছন্দ cross-tenant leak-এর ঝুঁকি অন্য জায়গায় সরায়। tenant filter ORM-এর নিচে enforce করুন।',
    },
    tags: ['multi-tenancy', 'rls', 'isolation', 'noisy-neighbour'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'sharding-key-selection',
      'hot-partition-mitigation',
      'soft-delete-and-audit-trails',
    ],
    systemsLinks: ['rate-limiting'],
  },
  {
    id: 'soft-delete-and-audit-trails',
    slug: 'soft-delete-and-audit-trails',
    domain: 'data-storage',
    titles: {
      en: 'Soft delete and trustworthy audit trails',
      bn: 'Soft delete ও নির্ভরযোগ্য audit trail',
    },
    summary: {
      en: 'deleted_at looks free until unique constraints, GDPR erasure, and every query filter disagree. Append-only history plus real deletion beats a tombstone column.',
      bn: 'deleted_at সস্তা মনে হয়, যতক্ষণ unique constraint, GDPR erasure ও query filter একমত না হয়। tombstone column-এর চেয়ে append-only history + আসল deletion ভালো।',
    },
    tags: ['soft-delete', 'audit-log', 'gdpr', 'data-modeling'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'large-table-archival-strategy',
      'multi-tenant-data-isolation',
      'index-design-and-query-plans',
    ],
    systemsLinks: ['outbox-pattern'],
  },
]

export default topics
