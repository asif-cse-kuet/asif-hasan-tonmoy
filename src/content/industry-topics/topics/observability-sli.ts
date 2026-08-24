import type { IndustryTopic } from '../topic-types'

/** Observability & SLI/SLO wave — instrumentation, signals, cost, and alerts that earn a page. */
const topics: IndustryTopic[] = [
  {
    id: 'golden-signals-instrumentation',
    slug: 'golden-signals-instrumentation',
    domain: 'observability-sli',
    titles: {
      en: 'Instrumenting the four golden signals correctly',
      bn: 'চারটি golden signal সঠিকভাবে instrument করা',
    },
    summary: {
      en: 'Latency, traffic, errors, and saturation sound trivial until you average a histogram, count 499s as success, and page on CPU instead of queue depth.',
      bn: 'latency, traffic, error ও saturation সহজ শোনায় — যতক্ষণ histogram average করেন, 499-কে success গোনেন আর queue depth-এর বদলে CPU-তে page করেন।',
    },
    tags: ['golden-signals', 'prometheus', 'histograms', 'instrumentation'],
    difficulty: 'intermediate',
    status: 'full',
    related: ['red-and-use-methods', 'dashboards-that-answer-questions', 'slo-error-budget-burn'],
    systemsLinks: ['golden-signals'],
  },
  {
    id: 'structured-logging-standards',
    slug: 'structured-logging-standards',
    domain: 'observability-sli',
    titles: {
      en: 'Structured logging standards that survive an incident',
      bn: 'incident টিকে যায় এমন structured logging standard',
    },
    summary: {
      en: 'Free-text logs are unqueryable at 2am. A shared field schema, stable log levels, and redaction at the encoder turn grep archaeology into a filter.',
      bn: 'free-text log রাত ২টায় query করা যায় না — shared field schema, স্থির log level ও encoder-এ redaction grep-খনন-কে filter বানায়।',
    },
    tags: ['logging', 'json-logs', 'schema', 'redaction', 'loki'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'correlation-ids-across-services',
      'log-sampling-and-cost-control',
      'incident-timeline-reconstruction',
    ],
    systemsLinks: [],
  },
  {
    id: 'distributed-tracing-adoption',
    slug: 'distributed-tracing-adoption',
    domain: 'observability-sli',
    titles: {
      en: 'Distributed tracing adoption without broken traces',
      bn: 'ভাঙা trace ছাড়াই distributed tracing adoption',
    },
    summary: {
      en: 'One service that drops traceparent orphans every span downstream — context propagation, tail sampling, and span naming decide whether traces are usable.',
      bn: 'একটি service traceparent ফেলে দিলে downstream-এর সব span orphan — context propagation, tail sampling ও span naming ঠিক করে trace কাজে লাগবে কি না।',
    },
    tags: ['tracing', 'opentelemetry', 'w3c-traceparent', 'sampling', 'spans'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'correlation-ids-across-services',
      'golden-signals-instrumentation',
      'incident-timeline-reconstruction',
    ],
    systemsLinks: [],
  },
  {
    id: 'metric-cardinality-explosion',
    slug: 'metric-cardinality-explosion',
    domain: 'observability-sli',
    titles: {
      en: 'Metric cardinality explosion and the OOM that follows',
      bn: 'Metric cardinality explosion ও তার পরের OOM',
    },
    summary: {
      en: 'A user_id label ships on Friday and Prometheus is killed by the OOM reaper on Monday — series budgets, label allowlists, and exemplars instead of labels.',
      bn: 'শুক্রবারে একটি user_id label যায়, সোমবারে OOM reaper Prometheus মারে — series budget, label allowlist এবং label-এর বদলে exemplar।',
    },
    tags: ['cardinality', 'prometheus', 'tsdb', 'cost', 'labels'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'golden-signals-instrumentation',
      'log-sampling-and-cost-control',
      'dashboards-that-answer-questions',
    ],
    systemsLinks: [],
  },
  {
    id: 'alert-design-and-noise-reduction',
    slug: 'alert-design-and-noise-reduction',
    domain: 'observability-sli',
    titles: {
      en: 'Alert design and noise reduction for humans',
      bn: 'মানুষের জন্য alert design ও noise কমানো',
    },
    summary: {
      en: 'Forty pages a night trains an on-call to ignore the pager. Symptom-based alerts, multi-window burn rates, inhibition, and a hard rule: every page has an action.',
      bn: 'রাতে চল্লিশ page on-call-কে pager ignore করতে শেখায় — symptom-based alert, multi-window burn rate, inhibition এবং নিয়ম: প্রতি page-এ একটি action।',
    },
    tags: ['alerting', 'alertmanager', 'burn-rate', 'on-call', 'slo'],
    difficulty: 'intermediate',
    status: 'full',
    related: ['slo-error-budget-burn', 'red-and-use-methods', 'dashboards-that-answer-questions'],
    systemsLinks: ['golden-signals'],
  },
  {
    id: 'red-and-use-methods',
    slug: 'red-and-use-methods',
    domain: 'observability-sli',
    titles: {
      en: 'RED for services, USE for resources',
      bn: 'service-এ RED, resource-এ USE',
    },
    summary: {
      en: 'Request-rate/errors/duration answers "are users hurt", utilisation/saturation/errors answers "what is the constraint" — mixing them wastes an incident.',
      bn: 'rate/errors/duration বলে "user ভুগছে কি", utilisation/saturation/errors বলে "constraint কোথায়" — দুটো মেশালে incident-এর সময় নষ্ট হয়।',
    },
    tags: ['red-method', 'use-method', 'saturation', 'queueing', 'dashboards'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'golden-signals-instrumentation',
      'dashboards-that-answer-questions',
      'alert-design-and-noise-reduction',
    ],
    systemsLinks: ['golden-signals', 'littles-law'],
  },
  {
    id: 'log-sampling-and-cost-control',
    slug: 'log-sampling-and-cost-control',
    domain: 'observability-sli',
    titles: {
      en: 'Log sampling and observability cost control',
      bn: 'Log sampling ও observability cost control',
    },
    summary: {
      en: 'When telemetry costs more than the cluster it watches, teams delete the wrong data — tiered retention, head/tail sampling, and always keeping every error.',
      bn: 'telemetry-র খরচ cluster-এর চেয়ে বেশি হলে দল ভুল data মোছে — tiered retention, head/tail sampling এবং প্রতিটি error রেখে দেওয়া।',
    },
    tags: ['sampling', 'cost', 'retention', 'otel-collector', 'logging'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'structured-logging-standards',
      'metric-cardinality-explosion',
      'distributed-tracing-adoption',
    ],
    systemsLinks: [],
  },
  {
    id: 'correlation-ids-across-services',
    slug: 'correlation-ids-across-services',
    domain: 'observability-sli',
    titles: {
      en: 'Correlation IDs across services and queues',
      bn: 'service ও queue জুড়ে correlation ID',
    },
    summary: {
      en: 'HTTP hops keep the request ID; the queue hop loses it, and the async half of the incident becomes invisible — propagate through headers, payload envelopes, and cron seeds.',
      bn: 'HTTP hop request ID রাখে, queue hop হারায় — incident-এর async অর্ধেক অদৃশ্য হয়; header, payload envelope ও cron seed দিয়ে propagate করুন।',
    },
    tags: ['correlation-id', 'request-id', 'propagation', 'queues', 'laravel'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'distributed-tracing-adoption',
      'structured-logging-standards',
      'incident-timeline-reconstruction',
    ],
    systemsLinks: ['message-queues'],
  },
  {
    id: 'dashboards-that-answer-questions',
    slug: 'dashboards-that-answer-questions',
    domain: 'observability-sli',
    titles: {
      en: 'Dashboards that answer questions, not decorate walls',
      bn: 'দেয়াল সাজানো নয়, প্রশ্নের উত্তর দেওয়া dashboard',
    },
    summary: {
      en: 'Ninety panels of CPU tell you nothing at 03:00. Start from the question, order panels by triage flow, and delete anything nobody has ever acted on.',
      bn: '03:00-এ নব্বইটা CPU panel কিছু বলে না — প্রশ্ন থেকে শুরু করুন, triage flow অনুযায়ী panel সাজান, যেটায় কেউ কখনো action নেয়নি সেটা মুছুন।',
    },
    tags: ['grafana', 'dashboards', 'triage', 'promql', 'ux'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'red-and-use-methods',
      'golden-signals-instrumentation',
      'alert-design-and-noise-reduction',
    ],
    systemsLinks: ['golden-signals'],
  },
  {
    id: 'incident-timeline-reconstruction',
    slug: 'incident-timeline-reconstruction',
    domain: 'observability-sli',
    titles: {
      en: 'Incident timeline reconstruction after the fact',
      bn: 'ঘটনার পরে incident timeline পুনর্গঠন',
    },
    summary: {
      en: 'Post-incident review stalls because deploy markers, alert timestamps, and log clocks disagree by minutes — annotate events, normalise to UTC, and keep raw evidence.',
      bn: 'deploy marker, alert timestamp ও log clock মিনিট-ব্যবধানে অমিল হলে post-incident review আটকে যায় — event annotate করুন, UTC-তে normalise করুন, raw evidence রাখুন।',
    },
    tags: ['postmortem', 'timeline', 'annotations', 'clock-skew', 'forensics'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'correlation-ids-across-services',
      'structured-logging-standards',
      'distributed-tracing-adoption',
    ],
    systemsLinks: ['clock-skew'],
  },
  {
    id: 'synthetic-vs-real-user-monitoring',
    slug: 'synthetic-vs-real-user-monitoring',
    domain: 'observability-sli',
    titles: {
      en: 'Synthetic checks vs real user monitoring',
      bn: 'Synthetic check vs real user monitoring',
    },
    summary: {
      en: 'Your probe is green from one datacentre while a third of real users get 8-second loads — synthetics catch availability, RUM catches the experience.',
      bn: 'এক datacentre থেকে probe সবুজ, অথচ এক-তৃতীয়াংশ real user পায় 8 সেকেন্ডের load — synthetic availability ধরে, RUM ধরে experience।',
    },
    tags: ['synthetic-monitoring', 'rum', 'web-vitals', 'blackbox', 'slo'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'golden-signals-instrumentation',
      'alert-design-and-noise-reduction',
      'slo-error-budget-burn',
    ],
    systemsLinks: ['multi-region'],
  },
]

export default topics
