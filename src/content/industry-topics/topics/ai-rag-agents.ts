import type { IndustryTopic } from '../topic-types'

const topics: IndustryTopic[] = [
  {
    id: 'hybrid-search-and-reranking',
    slug: 'hybrid-search-and-reranking',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Hybrid search and reranking that actually lifts recall',
      bn: 'Recall বাড়ায় এমন hybrid search ও reranking',
    },
    summary: {
      en: 'Dense embeddings miss exact identifiers, BM25 misses paraphrase - RRF fusion plus a cross-encoder rerank fixes both.',
      bn: 'Dense embedding exact identifier মিস করে, BM25 paraphrase মিস করে - RRF fusion আর cross-encoder rerank দুটোই ঠিক করে।',
    },
    tags: ['rag', 'hybrid-search', 'bm25', 'reranking', 'rrf'],
    difficulty: 'advanced',
    status: 'full',
    related: ['rag-chunking-evals', 'vector-index-selection-and-tuning', 'eval-harness-design'],
    systemsLinks: ['vector-retrieval'],
  },
  {
    id: 'vector-index-selection-and-tuning',
    slug: 'vector-index-selection-and-tuning',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Vector index selection and ANN parameter tuning',
      bn: 'Vector index নির্বাচন ও ANN parameter tuning',
    },
    summary: {
      en: 'HNSW versus IVF, what M, efConstruction, efSearch and nprobe really cost, and why recall silently drops after a rebuild.',
      bn: 'HNSW বনাম IVF, M, efConstruction, efSearch, nprobe-এর আসল খরচ, আর rebuild-এর পর recall কেন চুপচাপ কমে।',
    },
    tags: ['vector-db', 'hnsw', 'ivf', 'ann', 'recall'],
    difficulty: 'advanced',
    status: 'full',
    related: ['hybrid-search-and-reranking', 'embedding-model-migration', 'eval-harness-design'],
    systemsLinks: ['vector-retrieval', 'littles-law'],
  },
  {
    id: 'embedding-model-migration',
    slug: 'embedding-model-migration',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Embedding model migration without a retrieval blackout',
      bn: 'Retrieval blackout ছাড়া embedding model migration',
    },
    summary: {
      en: 'Vectors from two models are not comparable - dual-write backfills, shadow reads, and the cutover checklist.',
      bn: 'দুই model-এর vector তুলনাযোগ্য নয় - dual-write backfill, shadow read, আর cutover checklist।',
    },
    tags: ['embeddings', 'migration', 'backfill', 'versioning', 'rag'],
    difficulty: 'advanced',
    status: 'full',
    related: ['vector-index-selection-and-tuning', 'eval-harness-design', 'rag-chunking-evals'],
    systemsLinks: ['vector-retrieval', 'blue-green-canary'],
  },
  {
    id: 'context-window-budgeting',
    slug: 'context-window-budgeting',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Context window budgeting under real token limits',
      bn: 'বাস্তব token limit-এ context window budgeting',
    },
    summary: {
      en: 'Stuffing 40 chunks into the prompt burns money and buries the answer - budget the window like a memory allocator.',
      bn: 'প্রম্পটে ৪০টি chunk ঢোকালে টাকা পোড়ে আর উত্তর চাপা পড়ে - window-কে memory allocator-এর মতো budget করুন।',
    },
    tags: ['context-window', 'tokens', 'cost', 'prompting', 'truncation'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'hybrid-search-and-reranking',
      'llm-caching-and-cost-control',
      'hallucination-detection-and-citations',
    ],
    systemsLinks: [],
  },
  {
    id: 'agent-tool-calling-reliability',
    slug: 'agent-tool-calling-reliability',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Agent tool-calling reliability and schema discipline',
      bn: 'Agent tool-calling নির্ভরযোগ্যতা ও schema discipline',
    },
    summary: {
      en: 'Malformed arguments, hallucinated tool names, and duplicate side effects - validate, repair, and make every tool idempotent.',
      bn: 'ভুল argument, বানানো tool name, duplicate side effect - validate করুন, repair করুন, প্রতিটি tool idempotent বানান।',
    },
    tags: ['agents', 'tool-calling', 'json-schema', 'validation', 'idempotency'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'multi-step-agent-loops-and-cost',
      'prompt-injection-guardrails',
      'fallback-model-routing',
    ],
    systemsLinks: ['idempotency-keys', 'circuit-breaker'],
  },
  {
    id: 'multi-step-agent-loops-and-cost',
    slug: 'multi-step-agent-loops-and-cost',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Multi-step agent loops and the cost blast radius',
      bn: 'Multi-step agent loop ও খরচের blast radius',
    },
    summary: {
      en: 'Quadratic token growth per step, loops that never terminate, and the budget guard that stops a $900 afternoon.',
      bn: 'প্রতি step-এ quadratic token বৃদ্ধি, না থামা loop, আর $900-এর দুপুর ঠেকানো budget guard।',
    },
    tags: ['agents', 'loops', 'cost', 'budgets', 'timeouts'],
    difficulty: 'advanced',
    status: 'full',
    related: ['agent-tool-calling-reliability', 'llm-caching-and-cost-control', 'eval-harness-design'],
    systemsLinks: ['circuit-breaker', 'littles-law'],
  },
  {
    id: 'hallucination-detection-and-citations',
    slug: 'hallucination-detection-and-citations',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Hallucination detection and citations that verify',
      bn: 'Hallucination শনাক্তকরণ ও যাচাইযোগ্য citation',
    },
    summary: {
      en: 'A citation the user cannot check is decoration - span-level grounding, NLI entailment scoring, and honest refusals.',
      bn: 'যাচাই করা যায় না এমন citation নিছক সাজসজ্জা - span-level grounding, NLI entailment score, আর সৎ refusal।',
    },
    tags: ['hallucination', 'citations', 'faithfulness', 'grounding', 'evals'],
    difficulty: 'advanced',
    status: 'full',
    related: ['eval-harness-design', 'hybrid-search-and-reranking', 'context-window-budgeting'],
    systemsLinks: ['vector-retrieval'],
  },
  {
    id: 'llm-caching-and-cost-control',
    slug: 'llm-caching-and-cost-control',
    domain: 'ai-rag-agents',
    titles: {
      en: 'LLM caching layers and cost control',
      bn: 'LLM caching layer ও খরচ নিয়ন্ত্রণ',
    },
    summary: {
      en: 'Exact-match, prefix, and semantic caches each fail differently - pick the layer that matches your invalidation story.',
      bn: 'exact-match, prefix ও semantic cache আলাদাভাবে fail করে - invalidation story-র সাথে মেলে এমন layer নিন।',
    },
    tags: ['caching', 'cost', 'prefix-cache', 'semantic-cache', 'tokens'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'context-window-budgeting',
      'multi-step-agent-loops-and-cost',
      'fallback-model-routing',
    ],
    systemsLinks: ['cache-stampede', 'thundering-herd'],
  },
  {
    id: 'eval-harness-design',
    slug: 'eval-harness-design',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Eval harness design for LLM features in CI',
      bn: 'CI-তে LLM feature-এর eval harness design',
    },
    summary: {
      en: 'Frozen golden sets, recall@k and nDCG for retrieval, faithfulness for generation, and thresholds that block a merge.',
      bn: 'frozen golden set, retrieval-এ recall@k ও nDCG, generation-এ faithfulness, আর merge আটকানো threshold।',
    },
    tags: ['evals', 'golden-set', 'ci', 'metrics', 'regression'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'rag-chunking-evals',
      'hallucination-detection-and-citations',
      'embedding-model-migration',
    ],
    systemsLinks: ['blue-green-canary'],
  },
  {
    id: 'streaming-ux-and-cancellation',
    slug: 'streaming-ux-and-cancellation',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Streaming UX, cancellation, and abandoned generations',
      bn: 'Streaming UX, cancellation ও পরিত্যক্ত generation',
    },
    summary: {
      en: 'Closing the browser tab does not stop the meter - propagate abort signals from SSE all the way to the provider.',
      bn: 'browser tab বন্ধ করলে মিটার থামে না - SSE থেকে provider পর্যন্ত abort signal propagate করুন।',
    },
    tags: ['streaming', 'sse', 'cancellation', 'ttft', 'frontend'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'fallback-model-routing',
      'multi-step-agent-loops-and-cost',
      'llm-caching-and-cost-control',
    ],
    systemsLinks: ['backpressure'],
  },
  {
    id: 'fallback-model-routing',
    slug: 'fallback-model-routing',
    domain: 'ai-rag-agents',
    titles: {
      en: 'Fallback model routing across providers',
      bn: 'Provider জুড়ে fallback model routing',
    },
    summary: {
      en: 'When the primary provider returns 529s, a naive retry loop doubles your bill - route on health, not on hope.',
      bn: 'Primary provider 529 দিলে সরল retry loop bill দ্বিগুণ করে - আশায় নয়, health দেখে route করুন।',
    },
    tags: ['routing', 'fallback', 'failover', 'providers', 'latency'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'llm-caching-and-cost-control',
      'streaming-ux-and-cancellation',
      'agent-tool-calling-reliability',
    ],
    systemsLinks: ['circuit-breaker', 'feature-flags'],
  },
]

export default topics
