import type { LocaleText } from '../types'

export type ChatTurn = {
  role: 'user' | 'assistant' | 'system'
  content: LocaleText
}

export type SolvedProblem = {
  slug: string
  titles: LocaleText
  summary: LocaleText
  problem: LocaleText
  context: LocaleText
  diagnosis: LocaleText
  fix: LocaleText
  impact: LocaleText
  stack: string[]
  tags: string[]
  chat?: ChatTurn[]
}

export const SOLVED_PROBLEMS: SolvedProblem[] = [
  {
    slug: 'api-db-latency-10x',
    titles: {
      en: 'API & DB latency cut ~10×',
      bn: 'API ও DB লেটেন্সি ~১০× কমানো',
    },
    summary: {
      en: 'Production endpoints were drowning in N+1 queries and missing indexes — profiling exposed the real bottlenecks.',
      bn: 'প্রোডাকশন এন্ডপয়েন্ট N+1 query ও missing index-এ ডুবছিল — প্রোফাইলিং আসল bottleneck ধরিয়ে দিয়েছিল।',
    },
    problem: {
      en: 'Critical list and detail APIs routinely exceeded acceptable latency under normal load.',
      bn: 'সাধারণ লোডেই গুরুত্বপূর্ণ list ও detail API গ্রহণযোগ্য লেটেন্সি ছাড়িয়ে যাচ্ছিল।',
    },
    context: {
      en: 'Laravel backend serving Vue/Quasar dashboards at Proficient IS with growing data volume.',
      bn: 'Proficient IS-এ Vue/Quasar ড্যাশবোর্ডে Laravel ব্যাকএন্ড, ডেটার পরিমাণ বাড়ছিল।',
    },
    diagnosis: {
      en: 'Eloquent N+1, unindexed filter columns, and over-fetching in serializers.',
      bn: 'Eloquent N+1, unindexed filter column, serializer-এ over-fetching।',
    },
    fix: {
      en: 'Eager loading, composite indexes, query scopes, and response shaping to drop unused fields.',
      bn: 'Eager loading, composite index, query scope, unused field বাদ দিয়ে response shaping।',
    },
    impact: {
      en: '~10× faster responses on the worst endpoints; smoother UX for 200+ concurrent users.',
      bn: 'সবচেয়ে খারাপ এন্ডপয়েন্টে ~১০× দ্রুত; ২০০+ একযোগী ব্যবহারকারীর জন্য মসৃণ UX।',
    },
    stack: ['Laravel', 'MySQL', 'Vue 3', 'Quasar'],
    tags: ['performance', 'database', 'api', 'proficient'],
    chat: [
      {
        role: 'user',
        content: {
          en: 'Our ticket list API takes 4–8 seconds. Users are complaining.',
          bn: 'টিকেট list API ৪–৮ সেকেন্ড নিচ্ছে। ইউজাররা অভিযোগ করছে।',
        },
      },
      {
        role: 'assistant',
        content: {
          en: 'Let me check query count per request… 847 queries for one page. Classic N+1 on comments and assignees.',
          bn: 'প্রতি request-এ query count দেখি… এক পেজে ৮৪৭ query। comments ও assignees-এ classic N+1।',
        },
      },
    ],
  },
  {
    slug: 'realtime-chat-state-200-users',
    titles: {
      en: 'Realtime chat state at 200+ users',
      bn: '২০০+ ইউজারে রিয়েলটাইম চ্যাট স্টেট',
    },
    summary: {
      en: 'Read/unread badges and favorites broke under concurrency — state had to be authoritative and UI-resilient.',
      bn: 'read/unread badge ও favorites concurrency-তে ভেঙে যাচ্ছিল — state authoritative ও UI-resilient হতে হবে।',
    },
    problem: {
      en: 'Chat unread counts drifted; favorites desynced when multiple tabs or rapid message bursts occurred.',
      bn: 'চ্যাট unread count drift করছিল; multiple tab বা rapid message burst-এ favorites desync।',
    },
    context: {
      en: 'Production support chat embedded in Quasar app with Pinia stores and polling/WebSocket hybrid.',
      bn: 'Quasar অ্যাপে Pinia store ও polling/WebSocket hybrid সহ প্রোডাকশন সাপোর্ট চ্যাট।',
    },
    diagnosis: {
      en: 'Optimistic UI without reconciliation; race between tab-local Pinia and server truth.',
      bn: 'reconciliation ছাড়া optimistic UI; tab-local Pinia ও server truth-এর race।',
    },
    fix: {
      en: 'Server-authoritative counters, versioned read cursors, debounced sync, and tab broadcast via storage events.',
      bn: 'Server-authoritative counter, versioned read cursor, debounced sync, storage event দিয়ে tab broadcast।',
    },
    impact: {
      en: 'Stable read/unread and favorites for 200+ concurrent users without ghost notifications.',
      bn: '২০০+ একযোগী ইউজারে স্থিতিশীল read/unread ও favorites, ghost notification ছাড়া।',
    },
    stack: ['Vue 3', 'Pinia', 'Laravel', 'WebSocket'],
    tags: ['realtime', 'chat', 'state', 'pinia'],
  },
  {
    slug: 'rbac-multi-role-dashboards',
    titles: {
      en: 'RBAC multi-role dashboards',
      bn: 'RBAC মাল্টি-রোল ড্যাশবোর্ড',
    },
    summary: {
      en: 'Role explosion made admin maintenance painful — policy layers and composable guards cut effort ~35%.',
      bn: 'রোল explosion admin maintenance কষ্টকর করেছিল — policy layer ও composable guard ~৩৫% effort কমিয়েছে।',
    },
    problem: {
      en: 'Each new role required scattered if-checks across views, routes, and API policies.',
      bn: 'প্রতি নতুন রোলে view, route, API policy-তে ছড়িয়ে if-check লাগত।',
    },
    context: {
      en: 'Enterprise dashboard with admin, agent, supervisor, and custom client roles.',
      bn: 'admin, agent, supervisor ও custom client role সহ enterprise dashboard।',
    },
    diagnosis: {
      en: 'No single capability matrix; duplicated permission logic FE and BE.',
      bn: 'একটি capability matrix নেই; FE-BE-তে duplicate permission logic।',
    },
    fix: {
      en: 'Central permission map, Laravel policies, route meta guards, and Quasar menu generation from capabilities.',
      bn: 'কেন্দ্রীয় permission map, Laravel policy, route meta guard, capability থেকে Quasar menu generation।',
    },
    impact: {
      en: '~35% less admin configuration effort when onboarding new roles.',
      bn: 'নতুন রোল অনবোর্ডিংয়ে ~৩৫% কম admin configuration effort।',
    },
    stack: ['Laravel', 'Vue 3', 'Quasar', 'Pinia'],
    tags: ['rbac', 'auth', 'dashboard'],
  },
  {
    slug: 'micro-packaging-low-code-modules',
    titles: {
      en: 'Micro-packaging for low-code R&D',
      bn: 'লো-কোড R&D-র জন্য মাইক্রো-প্যাকেজিং',
    },
    summary: {
      en: 'Monolithic frontend blocked parallel R&D — decoupled packages let teams ship modules independently.',
      bn: 'Monolithic frontend parallel R&D বাধা দিচ্ছিল — decoupled package দলকে স্বাধীনভাবে মডিউল ship করতে দিয়েছে।',
    },
    problem: {
      en: 'Feature teams stepped on each other; low-code experiments required full-app rebuilds.',
      bn: 'ফিচার দল একে অপরের উপর পড়ছিল; low-code experiment-এ full-app rebuild লাগত।',
    },
    context: {
      en: 'Proficient IS R&D track exploring composable UI for client-specific extensions.',
      bn: 'Proficient IS R&D — client-specific extension-এর composable UI অনুসন্ধান।',
    },
    diagnosis: {
      en: 'Tight coupling via shared global state and implicit cross-imports between feature folders.',
      bn: 'shared global state ও feature folder-এর implicit cross-import-এ tight coupling।',
    },
    fix: {
      en: 'Package boundaries, explicit contracts, lazy-loaded module registry, and sandboxed Pinia namespaces.',
      bn: 'Package boundary, explicit contract, lazy-loaded module registry, sandboxed Pinia namespace।',
    },
    impact: {
      en: 'Parallel module development without blocking the main release train.',
      bn: 'মূল release train block না করে parallel module development।',
    },
    stack: ['Vue 3', 'Vite', 'Pinia', 'Quasar'],
    tags: ['architecture', 'micro-packaging', 'frontend'],
  },
  {
    slug: 'vue-recursive-reactivity-bugs',
    titles: {
      en: 'Vue recursive reactivity bugs',
      bn: 'Vue recursive reactivity বাগ',
    },
    summary: {
      en: 'Deep tree editors triggered infinite update loops — shallow refs and explicit update paths fixed it.',
      bn: 'Deep tree editor infinite update loop ট্রিগার করছিল — shallow ref ও explicit update path সমাধান করেছে।',
    },
    problem: {
      en: 'Nested category/tree UI froze the browser or threw "Maximum recursive updates exceeded".',
      bn: 'Nested category/tree UI browser freeze বা "Maximum recursive updates exceeded"।',
    },
    context: {
      en: 'Hierarchical data editor in Quasar with v-model chains across recursive child components.',
      bn: 'recursive child component-এ v-model chain সহ Quasar hierarchical editor।',
    },
    diagnosis: {
      en: 'Mutating nested reactive objects in watchers that re-trigger the same watcher.',
      bn: 'watcher-এ nested reactive object mutate যা একই watcher re-trigger করে।',
    },
    fix: {
      en: 'shallowRef for tree roots, immutable splice updates, and event-up instead of deep two-way binding.',
      bn: 'tree root-এ shallowRef, immutable splice update, deep two-way binding-এর বদলে event-up।',
    },
    impact: {
      en: 'Stable tree editing with no freeze on large hierarchies.',
      bn: 'বড় hierarchy-তে freeze ছাড়া স্থিতিশীল tree editing।',
    },
    stack: ['Vue 3', 'Quasar', 'TypeScript'],
    tags: ['vue', 'reactivity', 'debugging'],
  },
  {
    slug: 'pinia-localstorage-sync',
    titles: {
      en: 'Pinia + localStorage sync',
      bn: 'Pinia + localStorage sync',
    },
    summary: {
      en: 'Persisted UI preferences corrupted across tabs — keyed storage and merge strategy restored trust.',
      bn: 'Persisted UI preference tab-এ corrupt হচ্ছিল — keyed storage ও merge strategy বিশ্বাস ফিরিয়েছে।',
    },
    problem: {
      en: 'Filters and layout prefs randomly reset or showed stale data after refresh.',
      bn: 'filter ও layout pref randomly reset বা refresh-এ stale data।',
    },
    context: {
      en: 'Dashboard filters persisted for returning users across sessions.',
      bn: 'returning user-এর dashboard filter session জুড়ে persist।',
    },
    diagnosis: {
      en: 'Whole-store JSON overwrite on every mutation; schema drift without migration.',
      bn: 'প্রতি mutation-এ whole-store JSON overwrite; migration ছাড়া schema drift।',
    },
    fix: {
      en: 'Partial persist plugin, versioned schema, hydrate-on-init, and cross-tab storage listener.',
      bn: 'Partial persist plugin, versioned schema, hydrate-on-init, cross-tab storage listener।',
    },
    impact: {
      en: 'Reliable prefs with safe upgrades when store shape changes.',
      bn: 'store shape বদলালে safe upgrade সহ নির্ভরযোগ্য prefs।',
    },
    stack: ['Pinia', 'Vue 3', 'localStorage'],
    tags: ['pinia', 'state', 'persistence'],
  },
  {
    slug: 'csrf-laravel-session',
    titles: {
      en: 'CSRF & Laravel session issues',
      bn: 'CSRF ও Laravel session সমস্যা',
    },
    summary: {
      en: 'SPA AJAX calls failed intermittently with 419 — cookie, Sanctum, and axios defaults had to align.',
      bn: 'SPA AJAX call মাঝে মাঝে 419 — cookie, Sanctum, axios default align করতে হয়েছিল।',
    },
    problem: {
      en: 'Users logged out or saw "CSRF token mismatch" on form submits after idle time.',
      bn: 'idle-এর পর form submit-এ logout বা "CSRF token mismatch"।',
    },
    context: {
      en: 'Vue SPA on separate dev port talking to Laravel API with session auth.',
      bn: 'আলাদা dev port-এ Vue SPA, session auth-এ Laravel API।',
    },
    diagnosis: {
      en: 'Missing withCredentials, mismatched SESSION_DOMAIN, and stale XSRF-TOKEN cookie.',
      bn: 'withCredentials missing, SESSION_DOMAIN mismatch, stale XSRF-TOKEN cookie।',
    },
    fix: {
      en: 'Aligned Sanctum stateful domains, axios defaults, session regenerate flow, and 419 retry guard.',
      bn: 'Sanctum stateful domain align, axios default, session regenerate flow, 419 retry guard।',
    },
    impact: {
      en: 'Stable authenticated SPA sessions without mystery 419s.',
      bn: 'রহস্যময় 419 ছাড়া স্থিতিশীল authenticated SPA session।',
    },
    stack: ['Laravel', 'Vue 3', 'Sanctum', 'axios'],
    tags: ['csrf', 'auth', 'laravel', 'debugging'],
  },
  {
    slug: 'vite-webpack-mix-migration',
    titles: {
      en: 'Vite vs Webpack/Mix migration pain',
      bn: 'Vite বনাম Webpack/Mix মাইগ্রেশন',
    },
    summary: {
      en: 'Legacy Mix configs blocked modern Vue — incremental Vite migration with env parity unblocked the team.',
      bn: 'Legacy Mix config modern Vue block করছিল — env parity সহ incremental Vite migration দলকে unblock করেছে।',
    },
    problem: {
      en: 'Slow HMR, broken aliases, and incompatible plugins under Laravel Mix.',
      bn: 'Laravel Mix-এ slow HMR, broken alias, incompatible plugin।',
    },
    context: {
      en: 'Greenfield Quasar modules while legacy admin still on Mix.',
      bn: 'legacy admin Mix-এ, greenfield Quasar module আলাদা।',
    },
    diagnosis: {
      en: 'Dual bundlers, duplicate polyfills, and env vars not mirrored in Vite config.',
      bn: 'dual bundler, duplicate polyfill, Vite config-এ env var mirror নেই।',
    },
    fix: {
      en: 'Vite config parity checklist, shared alias map, and module-by-module cutover.',
      bn: 'Vite config parity checklist, shared alias map, module-by-module cutover।',
    },
    impact: {
      en: 'Sub-second HMR for new modules; clearer path off Mix entirely.',
      bn: 'নতুন module-এ sub-second HMR; Mix থেকে স্পষ্ট cutover পথ।',
    },
    stack: ['Vite', 'Vue 3', 'Laravel Mix', 'Quasar'],
    tags: ['vite', 'tooling', 'migration'],
  },
  {
    slug: 'composer-php-imagick-env',
    titles: {
      en: 'Composer / PHP env / Imagick',
      bn: 'Composer / PHP env / Imagick',
    },
    summary: {
      en: 'Image pipeline failed on Windows/XAMPP — extension matrix and Composer platform config documented the fix.',
      bn: 'Windows/XAMPP-এ image pipeline fail — extension matrix ও Composer platform config fix নথিভুক্ত করেছে।',
    },
    problem: {
      en: 'Thumbnail generation crashed with Imagick or GD extension missing on local dev machines.',
      bn: 'local dev-এ Imagick/GD missing-এ thumbnail generation crash।',
    },
    context: {
      en: 'Multi-dev team on Windows and Linux with different PHP builds.',
      bn: 'Windows-Linux mixed team, ভিন্ন PHP build।',
    },
    diagnosis: {
      en: 'Undocumented extension requirements; Composer pulling packages incompatible with PHP 8.x build.',
      bn: 'extension requirement undocumented; PHP 8.x build-এ incompatible Composer package।',
    },
    fix: {
      en: 'Docker dev baseline, composer platform-check config, and Imagick install runbook.',
      bn: 'Docker dev baseline, composer platform-check config, Imagick install runbook।',
    },
    impact: {
      en: 'Onboarding new devs without day-long environment rabbit holes.',
      bn: 'নতুন dev onboard দিন-দীর্ঘ env rabbit hole ছাড়া।',
    },
    stack: ['PHP', 'Composer', 'Imagick', 'Docker'],
    tags: ['devops', 'php', 'debugging'],
  },
  {
    slug: 'npm-powershell-tooling',
    titles: {
      en: 'npm + PowerShell tooling friction',
      bn: 'npm + PowerShell tooling friction',
    },
    summary: {
      en: 'Script failures on Windows PowerShell — execution policy and path fixes standardized cross-platform scripts.',
      bn: 'Windows PowerShell-এ script fail — execution policy ও path fix cross-platform script standardize করেছে।',
    },
    problem: {
      en: 'npm run dev failed for Windows teammates with opaque PowerShell errors.',
      bn: 'Windows teammate-দের npm run dev opaque PowerShell error।',
    },
    context: {
      en: 'Shared package.json scripts assuming bash semantics.',
      bn: 'bash semantics ধরে নেওয়া shared package.json script।',
    },
    diagnosis: {
      en: '&& chains, ENV syntax, and postinstall shell assumptions.',
      bn: '&& chain, ENV syntax, postinstall shell assumption।',
    },
    fix: {
      en: 'cross-env, npm-run-all, documented PowerShell policy, and WSL/Docker optional path.',
      bn: 'cross-env, npm-run-all, PowerShell policy doc, WSL/Docker optional path।',
    },
    impact: {
      en: 'Same npm scripts work on macOS, Linux, and Windows without tribal knowledge.',
      bn: 'tribal knowledge ছাড়া macOS, Linux, Windows-এ একই npm script।',
    },
    stack: ['npm', 'Node.js', 'PowerShell'],
    tags: ['tooling', 'windows', 'dx'],
  },
  {
    slug: 'complex-api-query-construction',
    titles: {
      en: 'Complex API query construction',
      bn: 'জটিল API query construction',
    },
    summary: {
      en: 'Dynamic filters produced invalid SQL — builder pattern and whitelist validation tamed the combinatorics.',
      bn: 'dynamic filter invalid SQL — builder pattern ও whitelist validation combinatorics নিয়ন্ত্রণ করেছে।',
    },
    problem: {
      en: 'Report endpoints accepted arbitrary filter JSON that sometimes generated cartesian explosions.',
      bn: 'report endpoint arbitrary filter JSON গ্রহণ, কখনো cartesian explosion।',
    },
    context: {
      en: 'Admin analytics with multi-field filters, sorts, and date ranges.',
      bn: 'multi-field filter, sort, date range সহ admin analytics।',
    },
    diagnosis: {
      en: 'String-concatenated WHERE clauses without typed filter AST.',
      bn: 'typed filter AST ছাড়া string-concatenated WHERE।',
    },
    fix: {
      en: 'Filter AST, allowed field map, eager-load plan per report, and query explain in CI.',
      bn: 'Filter AST, allowed field map, report-wise eager-load plan, CI-তে query explain।',
    },
    impact: {
      en: 'Predictable report queries and fewer production timeouts.',
      bn: 'predictable report query, কম production timeout।',
    },
    stack: ['Laravel', 'MySQL', 'Vue 3'],
    tags: ['api', 'sql', 'backend'],
  },
  {
    slug: 'font-uploader-json-ajax',
    titles: {
      en: 'JSON/AJAX font grouping (FontUploader)',
      bn: 'JSON/AJAX font grouping (FontUploader)',
    },
    summary: {
      en: 'Font family grouping broke on partial payloads — schema validation and incremental merge fixed uploads.',
      bn: 'partial payload-এ font family grouping ভেঙে যাচ্ছিল — schema validation ও incremental merge upload ঠিক করেছে।',
    },
    problem: {
      en: 'Bulk font uploads showed wrong families or duplicate entries in the UI grid.',
      bn: 'bulk font upload-এ UI grid-এ ভুল family বা duplicate entry।',
    },
    context: {
      en: 'FontUploader project with AJAX batch uploads and Laravel storage.',
      bn: 'AJAX batch upload ও Laravel storage সহ FontUploader প্রজেক্ট।',
    },
    diagnosis: {
      en: 'Client assumed full list responses; server returned paginated slices without cursors.',
      bn: 'client full list ধরে নিয়েছিল; server cursor ছাড়া paginated slice দিচ্ছিল।',
    },
    fix: {
      en: 'Cursor pagination, idempotent upload IDs, and client-side merge by stable font hash.',
      bn: 'cursor pagination, idempotent upload ID, stable font hash-এ client-side merge।',
    },
    impact: {
      en: 'Reliable bulk font ingestion for design tooling workflows.',
      bn: 'design tooling workflow-এ নির্ভরযোগ্য bulk font ingestion।',
    },
    stack: ['Laravel', 'AJAX', 'JSON', 'Vue'],
    tags: ['fonts', 'ajax', 'uploads'],
  },
  {
    slug: 'docker-gmail-registration-path',
    titles: {
      en: 'Dockerizing registration + Gmail API path',
      bn: 'Dockerizing registration + Gmail API path',
    },
    summary: {
      en: 'Email scheduling worked locally but failed in containers — secrets, queues, and network egress aligned.',
      bn: 'email scheduling local-এ কাজ, container-এ fail — secret, queue, network egress align।',
    },
    problem: {
      en: 'Registration succeeded but welcome emails never sent from Docker deployment.',
      bn: 'registration success কিন্তু Docker deploy-এ welcome email যায় না।',
    },
    context: {
      en: 'Laravel API with Gmail OAuth and scheduled dispatch.',
      bn: 'Gmail OAuth ও scheduled dispatch সহ Laravel API।',
    },
    diagnosis: {
      en: 'Token path mounted read-only; queue worker not running; outbound SMTP blocked in container.',
      bn: 'token path read-only mount; queue worker চলছে না; container outbound SMTP block।',
    },
    fix: {
      en: 'Multi-stage Dockerfile, worker sidecar, secret mounts, and health-checked queue consumer.',
      bn: 'multi-stage Dockerfile, worker sidecar, secret mount, health-checked queue consumer।',
    },
    impact: {
      en: 'Production-parity email flow in one docker compose up.',
      bn: 'এক docker compose up-এ production-parity email flow।',
    },
    stack: ['Docker', 'Laravel', 'Gmail API', 'MySQL'],
    tags: ['docker', 'email', 'devops'],
  },
  {
    slug: 'ticketing-chat-fe-be-split',
    titles: {
      en: 'Ticketing + chat architecture split',
      bn: 'Ticketing + chat architecture split',
    },
    summary: {
      en: 'Support chat and tickets shared models but different lifecycles — bounded contexts clarified ownership.',
      bn: 'support chat ও ticket shared model কিন্তু ভিন্ন lifecycle — bounded context ownership স্পষ্ট করেছে।',
    },
    problem: {
      en: 'Closing a ticket did not reliably archive chat threads; agents saw ghost conversations.',
      bn: 'ticket close chat thread archive করে না; agent ghost conversation দেখে।',
    },
    context: {
      en: 'Ticketing System FE/BE with embedded realtime support chat.',
      bn: 'embedded realtime support chat সহ Ticketing System FE/BE।',
    },
    diagnosis: {
      en: 'Single table for messages and ticket comments without state machine.',
      bn: 'message ও ticket comment এক table, state machine নেই।',
    },
    fix: {
      en: 'Separate aggregates, domain events on ticket status, and chat room lifecycle tied to ticket ID.',
      bn: 'আলাদা aggregate, ticket status-এ domain event, ticket ID-তে chat room lifecycle bind।',
    },
    impact: {
      en: 'Clear agent UX and auditable support history.',
      bn: 'স্পষ্ট agent UX ও auditable support history।',
    },
    stack: ['Vue 3', 'Quasar', 'Laravel', 'MySQL'],
    tags: ['architecture', 'ticketing', 'chat'],
  },
  {
    slug: 'imbalanced-nlp-classification',
    titles: {
      en: 'Imbalanced NLP classification (research)',
      bn: 'Imbalanced NLP classification (গবেষণা)',
    },
    summary: {
      en: 'Minority mental-health classes collapsed under naive training — TransMentalNet-6 rebalanced the objective.',
      bn: 'naive training-এ minority mental-health class collapse — TransMentalNet-6 objective rebalance করেছে।',
    },
    problem: {
      en: '12-class Bengali dataset with severe skew; macro-F1 unusable on minority disorders.',
      bn: '১২-ক্লাস বাংলা dataset severe skew; minority disorder-এ macro-F1 unusable।',
    },
    context: {
      en: 'KUET thesis → ICCIT 2025 paper on 27,031 samples.',
      bn: 'KUET thesis → ২৭,০৩১ নমুনায় ICCIT 2025 পেপার।',
    },
    diagnosis: {
      en: 'Plain cross-entropy favored majority labels; insufficient augmentation for rare signs.',
      bn: 'plain cross-entropy majority label favor; rare sign-এ insufficient augmentation।',
    },
    fix: {
      en: 'Class-weighted loss, focal tuning, stratified splits, and BanglaBERT fine-tuning (TransMentalNet-6).',
      bn: 'class-weighted loss, focal tuning, stratified split, BanglaBERT fine-tuning (TransMentalNet-6)।',
    },
    impact: {
      en: 'Weighted F1 66.35% published at ICCIT 2025 (DOI 10.1109/ICCIT68739.2025.11490477).',
      bn: 'ICCIT 2025-এ weighted F1 ৬৬.৩৫% প্রকাশ (DOI 10.1109/ICCIT68739.2025.11490477)।',
    },
    stack: ['Python', 'PyTorch', 'Transformers', 'BanglaBERT'],
    tags: ['nlp', 'research', 'ai', 'imbalanced'],
  },
]

export function getSolvedProblemBySlug(slug: string): SolvedProblem | undefined {
  return SOLVED_PROBLEMS.find((item) => item.slug === slug)
}

export function getSolvedProblemsByTag(tag: string): SolvedProblem[] {
  return SOLVED_PROBLEMS.filter((item) => item.tags.includes(tag))
}
