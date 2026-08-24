> **Lesson 168 · advanced** - When the primary provider returns 529s, a naive retry loop doubles your bill - route on health, not on hope.

## Why it matters

- RAG without evals is a demo. Empty retrieval still needs a fallback the user can trust.
- Prompt injection and cost both live in production even when the model is “just an assistant”.
- Caching LLM calls without tenant keys is a privacy bug with a latency win attached.
- This lesson is specifically about **Fallback model routing across providers**. Tags: routing, fallback, failover, providers, latency.

## Symptoms

| Signal | What you observe |
| --- | --- |
| Hallucination | Answer cites a ticket that does not exist |
| Cost spike | Retry loop on timeouts multiplies tokens |
| Injection | Uploaded PDF contains “ignore previous instructions” |
| Skew | Index built on v2 embeddings, query uses v1 |

## How it breaks

```mermaid
flowchart TD
  A["User question"] --> B["Retrieve"]
  B --> C["Empty or injected"]
  C --> D["Wrong answer / cost"]
  D --> E["Fallback model routing across providers"]
  E --> F["Eval + fallback"]
```

The named technology is rarely the villain. Two code paths (often a Vue/Quasar screen and a Laravel write) assume opposite contracts. Production finds the race. For this topic that contract is: When the primary provider returns 529s, a naive retry loop doubles your bill - route on health, not on hope.

## Root causes

1. No golden set; shipping prompt tweaks on vibes.
2. Unbounded agent loops without a token budget.
3. User content concatenated into the system prompt.
4. Embedding model swapped without reindexing.

## How to solve it

### 1. Write the invariant in one sentence

When the primary provider returns 529s, a naive retry loop doubles your bill - route on health, not on hope. Put that sentence in the PR, the Pinia action, and the Laravel class.

### 2. Guard the edge in code

```ts
export async function askDocs(q: string) {
  return api.post('/api/ask', { q, timeoutMs: 12_000 })
}
```

```php
if ($hits->isEmpty()) {
    return response()->json(['answer' => null, 'fallback' => 'human_queue']);
}
```

### 3. Keep a chart you will actually look at

Eval score, cost per successful answer, and empty-retrieval rate. If the chart cannot catch a regression in **Fallback model routing across providers**, the lesson is not done.

## Worked example

A “search tickets with AI” feature answered from an empty Pinecone result with a confident paragraph. Returning `fallback: human_queue` and showing the Quasar empty state was the production fix, not a bigger model.

On this topic, start from the symptom in the table that matches your last incident, then walk the diagram until the guard above would have fired.

## Check before you ship

- [ ] The invariant for **Fallback model routing across providers** is written in one sentence.
- [ ] Empty, duplicate, timeout, or permission paths have a test or a staged rehearsal.
- [ ] A dashboard or log query would catch a regression within one deploy.
- [ ] Related reading still makes sense: llm-caching-and-cost-control, streaming-ux-and-cancellation, agent-tool-calling-reliability.

## What not to do

- Copy a blog snippet that retries forever or caches the error as success.
- Treat Pinia as the source of truth for a Laravel row.
- Skip the previous numbered lesson if this one feels dense — the path is beginner → intermediate → advanced on purpose.
