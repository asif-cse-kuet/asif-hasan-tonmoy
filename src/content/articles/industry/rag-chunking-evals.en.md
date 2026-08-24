# RAG chunking and evaluation loops

Educational notes for building retrieval-augmented generation systems that stay useful in production.

## Why chunking matters

Embedding quality is bounded by what you feed the model. Too-large chunks dilute relevance; too-small chunks lose context. Hybrid strategies (fixed size + semantic splits + overlap) usually beat naive paragraph cuts.

## Evaluation before demos

Measure retrieval hit-rate, answer faithfulness, and refusal behavior on a frozen golden set. Without evals, prompt tweaks look like progress while regressions hide.

## Agentic RAG caution

Letting an agent decide when to retrieve helps hard queries, but multiplies cost and failure modes. Keep tool budgets, timeouts, and audit logs.

## Related concepts

Vector stores, reranking, prompt injection, and SLOs for LLM latency all connect to this topic.
