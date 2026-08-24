# Article authoring spec - industry knowledge library

Every topic in `src/content/industry-topics/topics/*.ts` should have two markdown files:

```
src/content/articles/industry/<slug>.en.md
src/content/articles/industry/<slug>.bn.md
```

They are loaded by `loadArticle(slug, locale)` and rendered by `ArticleRenderer.vue`
(`marked` + Mermaid). No frontmatter - the page supplies the title, so start at `## `.

## Required structure

```md
> **Scenario** - one or two sentences describing a concrete production situation.

## Why it matters
3-5 bullets tying the failure to users, money, or on-call load.

## Symptoms
A table: `| Signal | What you observe |`

## How it breaks
Prose plus one Mermaid diagram of the failure path.

## Root causes
Numbered list, one line each.

## How to solve it
Numbered `###` steps. At least one runnable code block or clearly labelled
pseudocode per article. Prefer the stack in use here: TypeScript/Vue, PHP/Laravel,
Python, SQL, YAML/Kubernetes, nginx.conf, bash.

## Target design
A second Mermaid diagram showing the fixed architecture or flow.

## Tradeoffs
A table: `| Option | Pros | Cons | Choose when |`

## Verification checklist
`- [ ]` items an engineer can actually run or observe.

## Anti-patterns
Bullets of the tempting wrong fixes.

## Related
Links to sibling topics using site-relative paths:
`[Title](/systems/<domain-slug>/<topic-slug>)`
```

## Mermaid rules

- Fence with ` ```mermaid `.
- Use `flowchart LR`, `flowchart TD`, `sequenceDiagram`, or `stateDiagram-v2`.
- Keep node labels short and quote any label containing punctuation:
  `A["Client (browser)"]`.
- No `click`, no HTML labels, no external images - `securityLevel` is `strict`.

## Bengali version

- Same headings, same diagrams, same code blocks.
- Bengali prose; keep standard technical terms in English (`retry`, `quorum`,
  `idempotency`) rather than inventing translations.
- May be tighter than the English text, but every section must be present.

## Tone

Written for a senior engineer who is debugging at 2am: concrete, specific numbers,
no marketing language. These are educational write-ups about industry-wide problems,
not claims that the author personally shipped each fix.
