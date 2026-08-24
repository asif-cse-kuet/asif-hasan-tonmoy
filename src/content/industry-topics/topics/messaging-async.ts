import type { IndustryTopic } from '../topic-types'

/** Messaging & async wave - queues, streams, delivery semantics, and job scheduling. */
const topics: IndustryTopic[] = [
  {
    id: 'poison-message-and-dlq',
    slug: 'poison-message-and-dlq',
    domain: 'messaging-async',
    titles: {
      en: 'Poison messages and dead-letter queue design',
      bn: 'Poison message ও dead-letter queue design',
    },
    summary: {
      en: 'One unparseable payload can pin a consumer in an infinite redelivery loop - retry caps, DLQ routing, and replay tooling.',
      bn: 'একটা unparseable payload consumer-কে অসীম redelivery loop-এ আটকে দেয় - retry cap, DLQ routing ও replay tooling।',
    },
    tags: ['dlq', 'poison-pill', 'rabbitmq', 'retries', 'laravel'],
    difficulty: 'intermediate',
    related: ['idempotent-consumers', 'event-schema-evolution', 'backpressure-queue-design'],
    systemsLinks: ['poison-pills', 'message-queues'],
    status: 'full',
  },
  {
    id: 'outbox-pattern-implementation',
    slug: 'outbox-pattern-implementation',
    domain: 'messaging-async',
    titles: {
      en: 'Implementing the transactional outbox',
      bn: 'Transactional outbox বাস্তবায়ন',
    },
    summary: {
      en: 'Commit business rows and outbound events in one transaction, then relay them - no dual-write race, no phantom events.',
      bn: 'business row ও outbound event এক transaction-এ commit, তারপর relay - dual-write race বা phantom event নেই।',
    },
    tags: ['outbox', 'cdc', 'postgres', 'dual-write', 'debezium'],
    difficulty: 'advanced',
    related: ['saga-compensation-design', 'idempotent-consumers', 'exactly-once-delivery-illusion'],
    systemsLinks: ['outbox-pattern', 'idempotency-keys'],
    status: 'full',
  },
  {
    id: 'saga-compensation-design',
    slug: 'saga-compensation-design',
    domain: 'messaging-async',
    titles: {
      en: 'Saga compensation design that actually unwinds',
      bn: 'সত্যিই unwind করে এমন saga compensation design',
    },
    summary: {
      en: 'Compensating steps are not rollbacks - how to design semantic undo, timeouts, and stuck-saga recovery.',
      bn: 'compensating step rollback নয় - semantic undo, timeout ও stuck-saga recovery কীভাবে design করবেন।',
    },
    tags: ['saga', 'compensation', 'orchestration', 'transactions'],
    difficulty: 'advanced',
    related: ['outbox-pattern-implementation', 'at-least-once-side-effects', 'idempotent-consumers'],
    systemsLinks: ['saga-pattern', 'outbox-pattern'],
    status: 'full',
  },
  {
    id: 'ordered-processing-with-partitions',
    slug: 'ordered-processing-with-partitions',
    domain: 'messaging-async',
    titles: {
      en: 'Ordered processing with partition keys',
      bn: 'Partition key দিয়ে ordered processing',
    },
    summary: {
      en: 'Kafka orders within a partition only - key selection, hot partitions, and rebalance gaps that reorder your events.',
      bn: 'Kafka শুধু partition-এর ভিতরে order দেয় - key selection, hot partition ও rebalance gap event reorder করে।',
    },
    tags: ['kafka', 'partitions', 'ordering', 'rebalance'],
    difficulty: 'advanced',
    related: [
      'consumer-lag-and-scaling',
      'queue-vs-stream-selection',
      'idempotent-consumers',
    ],
    systemsLinks: ['hotspot-keys', 'clock-skew'],
    status: 'full',
  },
  {
    id: 'consumer-lag-and-scaling',
    slug: 'consumer-lag-and-scaling',
    domain: 'messaging-async',
    titles: {
      en: 'Consumer lag, autoscaling, and drain time',
      bn: 'Consumer lag, autoscaling ও drain time',
    },
    summary: {
      en: 'Lag in messages is not lag in minutes - measure drain rate, scale on backlog age, and stop adding workers past partition count.',
      bn: 'message-এ lag মানে মিনিটে lag নয় - drain rate মাপুন, backlog age-এ scale করুন, partition count পেরিয়ে worker বাড়াবেন না।',
    },
    tags: ['kafka', 'lag', 'autoscaling', 'horizon', 'keda'],
    difficulty: 'intermediate',
    related: [
      'backpressure-queue-design',
      'ordered-processing-with-partitions',
      'delayed-and-scheduled-jobs',
    ],
    systemsLinks: ['backpressure', 'littles-law'],
    status: 'full',
  },
  {
    id: 'idempotent-consumers',
    slug: 'idempotent-consumers',
    domain: 'messaging-async',
    titles: {
      en: 'Building idempotent consumers',
      bn: 'Idempotent consumer বানানো',
    },
    summary: {
      en: 'Dedup keys, unique constraints, and state machines that make redelivery boring instead of double-charging a customer.',
      bn: 'dedup key, unique constraint ও state machine redelivery-কে নিরীহ করে - double charge নয়।',
    },
    tags: ['idempotency', 'dedup', 'consumers', 'redis', 'sql'],
    difficulty: 'intermediate',
    related: [
      'exactly-once-delivery-illusion',
      'at-least-once-side-effects',
      'outbox-pattern-implementation',
    ],
    systemsLinks: ['idempotency-keys', 'exactly-once-illusion'],
    status: 'full',
  },
  {
    id: 'fan-out-and-duplicate-control',
    slug: 'fan-out-and-duplicate-control',
    domain: 'messaging-async',
    titles: {
      en: 'Fan-out topologies and duplicate control',
      bn: 'Fan-out topology ও duplicate control',
    },
    summary: {
      en: 'One event, six subscribers, and the day a rebind doubled every downstream side effect.',
      bn: 'একটা event, ছয়টা subscriber - একদিন rebind প্রতিটি downstream side effect দ্বিগুণ করে দিল।',
    },
    tags: ['fan-out', 'pubsub', 'duplicates', 'rabbitmq', 'consumer-groups'],
    difficulty: 'intermediate',
    related: ['idempotent-consumers', 'poison-message-and-dlq', 'queue-vs-stream-selection'],
    systemsLinks: ['message-queues', 'thundering-herd'],
    status: 'full',
  },
  {
    id: 'delayed-and-scheduled-jobs',
    slug: 'delayed-and-scheduled-jobs',
    domain: 'messaging-async',
    titles: {
      en: 'Delayed and scheduled jobs without pile-ups',
      bn: 'Pile-up ছাড়া delayed ও scheduled job',
    },
    summary: {
      en: 'Delay queues, cron fan-out spikes, timezone drift, and why every job fires at :00 on the hour.',
      bn: 'delay queue, cron fan-out spike, timezone drift - সব job কেন ঘণ্টার :00-তে fire করে।',
    },
    tags: ['scheduling', 'delayed-jobs', 'laravel', 'redis', 'cron'],
    difficulty: 'intermediate',
    related: ['consumer-lag-and-scaling', 'idempotent-consumers', 'at-least-once-side-effects'],
    systemsLinks: ['thundering-herd', 'idempotency-keys'],
    status: 'full',
  },
  {
    id: 'queue-vs-stream-selection',
    slug: 'queue-vs-stream-selection',
    domain: 'messaging-async',
    titles: {
      en: 'Choosing between a queue and a stream',
      bn: 'Queue না stream - কোনটা নেবেন',
    },
    summary: {
      en: 'Work distribution versus replayable log: retention, ordering, consumer count, and the migration cost of guessing wrong.',
      bn: 'work distribution vs replayable log: retention, ordering, consumer count ও ভুল অনুমানের migration cost।',
    },
    tags: ['kafka', 'rabbitmq', 'architecture', 'retention', 'sqs'],
    difficulty: 'intermediate',
    related: [
      'ordered-processing-with-partitions',
      'fan-out-and-duplicate-control',
      'consumer-lag-and-scaling',
    ],
    systemsLinks: ['message-queues', 'backpressure'],
    status: 'full',
  },
  {
    id: 'at-least-once-side-effects',
    slug: 'at-least-once-side-effects',
    domain: 'messaging-async',
    titles: {
      en: 'At-least-once delivery meets real side effects',
      bn: 'At-least-once delivery ও বাস্তব side effect',
    },
    summary: {
      en: 'Charges, emails, and webhooks cannot be rolled back - bracket every external call with dedup and a decision record.',
      bn: 'charge, email, webhook rollback হয় না - প্রতিটি external call dedup ও decision record দিয়ে ঘিরুন।',
    },
    tags: ['at-least-once', 'side-effects', 'payments', 'webhooks', 'stripe'],
    difficulty: 'advanced',
    related: [
      'idempotent-consumers',
      'exactly-once-delivery-illusion',
      'saga-compensation-design',
    ],
    systemsLinks: ['exactly-once-illusion', 'idempotency-keys'],
    status: 'full',
  },
  {
    id: 'event-schema-evolution',
    slug: 'event-schema-evolution',
    domain: 'messaging-async',
    titles: {
      en: 'Event schema evolution without breaking consumers',
      bn: 'Consumer না ভেঙে event schema evolution',
    },
    summary: {
      en: 'Compatibility modes, required-field traps, and rolling out a producer change when six consumers deploy on their own schedule.',
      bn: 'compatibility mode, required-field ফাঁদ, ছয়টা consumer নিজের schedule-এ deploy করলে producer change rollout।',
    },
    tags: ['schema-registry', 'avro', 'compatibility', 'contracts', 'protobuf'],
    difficulty: 'advanced',
    related: [
      'poison-message-and-dlq',
      'queue-vs-stream-selection',
      'outbox-pattern-implementation',
    ],
    systemsLinks: ['outbox-pattern', 'message-queues'],
    status: 'full',
  },
]

export default topics
