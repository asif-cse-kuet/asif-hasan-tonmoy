> **Lesson 92 · intermediate** - Header trust, HSTS, and why your reverse proxy is part of the security boundary.

## Why it matters

- Nginx buffering, TLS handshake cost, and timeouts are the real UX of a Laravel API behind a proxy.
- Geo routing and rate limits at the edge stop abuse before PHP-FPM ever wakes.
- MTU/MSS issues look like “random” timeouts that no application log will explain.
- This lesson is specifically about **nginx edge TLS termination pitfalls**. Tags: nginx, tls, edge, security.

## Symptoms

| Signal | What you observe |
| --- | --- |
| 504 | PHP finished, proxy already gave up |
| TLS tax | Mobile p99 dominated by handshake, not JSON |
| DDoS-ish | Login endpoint CPU-bound from unauthenticated POST |
| Partial body | Large upload dies at 1MB proxy limit |

## How it breaks

```mermaid
flowchart TD
  A["Browser"] --> B["TLS / nginx / timeout"]
  B --> C["Origin PHP"]
  C --> D["504 or hang"]
  D --> E["nginx edge TLS termination pitfalls"]
  E --> F["Align budgets"]
```

The named technology is rarely the villain. Two code paths (often a Vue/Quasar screen and a Laravel write) assume opposite contracts. Production finds the race. For this topic that contract is: Header trust, HSTS, and why your reverse proxy is part of the security boundary.

## Root causes

1. proxy_read_timeout shorter than the slowest honest job.
2. No session resumption / HTTP/2 on the cert.
3. Rate limit only inside Laravel, not at nginx.
4. client_max_body_size copied from a blog and never matched the product.

## How to solve it

### 1. Write the invariant in one sentence

Header trust, HSTS, and why your reverse proxy is part of the security boundary. Put that sentence in the PR, the Pinia action, and the Laravel class.

### 2. Guard the edge in code

```ts
// Axios timeout must be < nginx, or the user retries while PHP still runs
api.defaults.timeout = 12_000
```

```php
# nginx
proxy_read_timeout 30s;
client_max_body_size 12m;
limit_req zone=login burst=20 nodelay;
```

### 3. Keep a chart you will actually look at

Edge 4xx/5xx, TLS handshake time, and origin vs edge cache hit. If the chart cannot catch a regression in **nginx edge TLS termination pitfalls**, the lesson is not done.

## Worked example

Quasar file upload hung at 99%. Nginx `client_max_body_size` was 1m; Laravel accepted 8m. Aligning the proxy limit and showing a client-side size check removed the ghost progress bar.

On this topic, start from the symptom in the table that matches your last incident, then walk the diagram until the guard above would have fired.

## Check before you ship

- [ ] The invariant for **nginx edge TLS termination pitfalls** is written in one sentence.
- [ ] Empty, duplicate, timeout, or permission paths have a test or a staged rehearsal.
- [ ] A dashboard or log query would catch a regression within one deploy.
- [ ] Related reading still makes sense: the next numbered lesson.

## What not to do

- Copy a blog snippet that retries forever or caches the error as success.
- Treat Pinia as the source of truth for a Laravel row.
- Skip the previous numbered lesson if this one feels dense — the path is beginner → intermediate → advanced on purpose.
