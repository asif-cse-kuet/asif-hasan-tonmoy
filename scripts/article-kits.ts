import type { IndustryTopic } from '../src/content/industry-topics/topic-types'
import type { DomainSlug } from '../src/content/industry-topics/domains'

export type DomainKit = {
  whyEn: string[]
  whyBn: string[]
  symptomsEn: [string, string][]
  symptomsBn: [string, string][]
  rootEn: string[]
  rootBn: string[]
  vue: string
  php: string
  chartEn: string
  chartBn: string
  exampleEn: string
  exampleBn: string
  mermaidEn: (title: string) => string
  mermaidBn: (title: string) => string
}

function mermaid(
  a: string,
  b: string,
  c: string,
  d: string,
  title: string,
  e: string,
) {
  const safe = title.replace(/"/g, '')
  return `\`\`\`mermaid
flowchart TD
  A["${a}"] --> B["${b}"]
  B --> C["${c}"]
  C --> D["${d}"]
  D --> E["${safe}"]
  E --> F["${e}"]
\`\`\``
}

const KITS: Record<DomainSlug, DomainKit> = {
  'frontend-architecture': {
    whyEn: [
      'A Vue 3 + Quasar screen that looks finished still drops focus, ships a 900 kB route, or shows yesterday’s Pinia state after a deploy.',
      'Component contracts multiply. One modal, one table, or one store leak becomes every product that imports the package.',
      'Visual QA never sees keyboard traps, hydration mismatch, or a waterfall of lazy chunks.',
    ],
    whyBn: [
      'Vue 3 আর Quasar-এ স্ক্রিন সুন্দর দেখালেও ফোকাস হারাতে পারে, রুট ৯০০ কেবি পাঠাতে পারে, বা ডিপ্লয়ের পর Pinia-তে গতকালকের ডেটা দেখাতে পারে।',
      'শেয়ার করা কম্পোনেন্ট একবার ভাঙলে যত প্রোডাক্ট সেই প্যাকেজ খায়, সবখানেই ভাঙে।',
      'শুধু চোখে দেখা টেস্ট কিবোর্ড ফাঁদ, হাইড্রেশন মিসম্যাচ, বা লেজি চাঙ্কের জলপ্রপাত ধরে না।',
    ],
    symptomsEn: [
      ['Focus / a11y', 'Tab leaves the dialog, or a screen reader only says “button”'],
      ['Bundle', 'A lazy route still downloads the whole dashboard'],
      ['Stale UI', 'Pinia shows cached rows after the Laravel write succeeded'],
      ['Hydration', 'Server HTML and client Vue tree disagree on first paint'],
    ],
    symptomsBn: [
      ['ফোকাস / a11y', 'ট্যাব ডায়ালগ ছেড়ে পেছনের পেজে চলে যায়, স্ক্রিন রিডার শুধু “বাটন” বলে'],
      ['বান্ডেল', 'লেজি রুট তবু পুরো ড্যাশবোর্ড নামিয়ে আনে'],
      ['পুরনো UI', 'Laravel লিখে ফেললেও Pinia পুরনো সারি দেখায়'],
      ['হাইড্রেশন', 'সার্ভার HTML আর ক্লায়েন্ট Vue গাছ প্রথম পেইন্টে মেলে না'],
    ],
    rootEn: [
      'Accessibility and focus restore lived in markup, not in a tested composable.',
      'Route-level code splitting imported a barrel file that pulled Chart.js into every page.',
      'Pinia stored API payloads as the source of truth instead of a server-cache plus local UI state.',
      'No axe or keyboard-only check in CI, so refactors deleted ARIA with a green build.',
    ],
    rootBn: [
      'অ্যাক্সেসিবিলিটি আর ফোকাস ফেরানো মার্কআপে ছিল, টেস্ট করা কম্পোজেবলে নয়।',
      'রুট-লেভেল স্প্লিটিং একটা ব্যারেল ইমপোর্ট করেছে, তাই Chart.js সব পেজে ঢুকেছে।',
      'Pinia API পেলোডকেই সত্য ধরেছে, সার্ভার-ক্যাশ আর লোকাল UI স্টেট আলাদা করেনি।',
      'CI-তে axe বা কিবোর্ড-only চেক নেই, তাই রিফ্যাক্টরে ARIA উধাও হয়েও বিল্ড সবুজ।',
    ],
    vue: `// composables/useFocusTrap.ts
export function useFocusTrap(panel: Ref<HTMLElement | null>, onClose: () => void) {
  const SELECTOR = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') return onClose()
    if (e.key !== 'Tab' || !panel.value) return
    const nodes = [...panel.value.querySelectorAll<HTMLElement>(SELECTOR)]
    const first = nodes[0]
    const last = nodes.at(-1)
    if (!first || !last) return
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }
  onMounted(() => document.addEventListener('keydown', onKey))
  onUnmounted(() => document.removeEventListener('keydown', onKey))
}`,
    php: `// routes/web.php — keep the JSON contract tiny so the Vue chunk stays lazy
Route::get('/api/tickets/{ticket}', function (Ticket $ticket) {
    return $ticket->only(['id', 'title', 'status', 'updated_at']);
});`,
    chartEn: 'LCP, JS transferred per route, and axe violations per deploy.',
    chartBn: 'প্রতি রুটে LCP, ডাউনলোড হওয়া JS, আর ডিপ্লয়প্রতি axe লঙ্ঘন।',
    exampleEn:
      'A Quasar dialog refactor swapped `<q-dialog>` internals for a teleported div. Mouse users saw nothing. Keyboard users tabbed into the page behind it. A 12-line focus-trap composable plus an axe check in CI closed the hole for every screen that reused the dialog.',
    exampleBn:
      'Quasar ডায়ালগ রিফ্যাক্টরে ভিতরের মার্কআপ একটা টেলিপোর্ট করা div হয়ে যায়। মাউসে কিছুই বদলায় না। কিবোর্ডে ট্যাব পেছনের পেজে চলে যায়। ১২ লাইনের ফোকাস-ট্র্যাপ কম্পোজেবল আর CI-তে axe চেক সেই ফাঁক সব স্ক্রিনে বন্ধ করে।',
    mermaidEn: (title) =>
      mermaid('UI refactor', 'Lost focus / extra JS', 'Visual tests pass', 'Ship minor version', title, 'Keyboard or LCP incident'),
    mermaidBn: (title) =>
      mermaid('UI রিফ্যাক্টর', 'ফোকাস/অতিরিক্ত JS', 'ভিজ্যুয়াল টেস্ট পাস', 'মাইনর ভার্সন', title, 'কিবোর্ড বা LCP ইনসিডেন্ট'),
  },
  'api-integration': {
    whyEn: [
      'Vue retries and Laravel retries on the same write create double tickets, double charges, or ghost webhooks.',
      'Timeouts that are “just Axios defaults” blow the whole budget when three services sit on the path.',
      'A versioned URL is cheaper than a breaking field rename that twelve clients already cached.',
    ],
    whyBn: [
      'Vue আর Laravel দুজনেই একই রাইটে রিট্রাই করলে দুটো টিকিট, দুটো চার্জ, বা ভুত ওয়েবহুক হয়।',
      'Axios-এর ডিফল্ট টাইমআউট পথে তিনটা সার্ভিস থাকলে পুরো বাজেট শেষ করে।',
      'ভাঙা ফিল্ড নাম বদলানোর চেয়ে ভার্সন করা URL সস্তা, কারণ বারোটা ক্লায়েন্ট আগেই ক্যাশ করেছে।',
    ],
    symptomsEn: [
      ['Duplicate writes', 'Two rows for one tap on a slow 4G Quasar form'],
      ['Timeouts', 'Gateway 504 while the job actually finished'],
      ['Webhook storms', 'Partner retries every 10s with no signature check'],
      ['Version clash', 'Mobile app 2.1 still posts the old JSON shape'],
    ],
    symptomsBn: [
      ['ডুপ্লিকেট রাইট', 'ধীর ৪জি Quasar ফর্মে এক ট্যাপে দুটো সারি'],
      ['টাইমআউট', 'জব শেষ, তবু গেটওয়ে ৫০৪'],
      ['ওয়েবহুক স্টর্ম', 'পার্টনার ১০ সেকেন্ডে রিট্রাই, সিগনেচার চেক নেই'],
      ['ভার্সন সংঘাত', 'মোবাইল অ্যাপ ২.১ এখনও পুরনো JSON পাঠায়'],
    ],
    rootEn: [
      'The client retried POST without an Idempotency-Key the server honored.',
      'Each hop used a 30s timeout, so the user waited 90s and tapped again.',
      'Webhook handlers were not idempotent on delivery id.',
      'Breaking JSON changes shipped without a /v2 or a sunset header.',
    ],
    rootBn: [
      'ক্লায়েন্ট POST রিট্রাই করেছে, সার্ভার Idempotency-Key মানেনি।',
      'প্রতি হপে ৩০ সেকেন্ড টাইমআউট, ইউজার ৯০ সেকেন্ড অপেক্ষা করে আবার ট্যাপ করেছে।',
      'ওয়েবহুক হ্যান্ডলার ডেলিভারি আইডিতে আইডেমপোটেন্ট নয়।',
      '/v2 বা সানসেট হেডার ছাড়াই ভাঙা JSON চেঞ্জ শিপ হয়েছে।',
    ],
    vue: `// Pinia: one key per human intent, not per HTTP attempt
export async function createTicket(payload: TicketDraft, key: string) {
  const hit = sessionStorage.getItem(key)
  if (hit) return JSON.parse(hit) as Ticket
  const ticket = await api.post('/api/tickets', payload, { headers: { 'Idempotency-Key': key } })
  sessionStorage.setItem(key, JSON.stringify(ticket))
  return ticket
}`,
    php: `Route::post('/api/tickets', function (Request $request) {
    $key = $request->header('Idempotency-Key');
    abort_unless($key, 400, 'Idempotency-Key required');

    return Cache::lock("ticket:{$key}", 10)->block(5, function () use ($key, $request) {
        $existing = Ticket::query()->where('idempotency_key', $key)->first();
        if ($existing) return $existing;
        return Ticket::query()->create([...$request->validated(), 'idempotency_key' => $key]);
    });
});`,
    chartEn: 'Duplicate create rate, 4xx on missing idempotency key, and p99 of the write path.',
    chartBn: 'ডুপ্লিকেট ক্রিয়েট রেট, আইডেমপোটেন্সি কী ছাড়া ৪xx, আর রাইট পাথের p99।',
    exampleEn:
      'Support agents double-tapped “Create ticket” on 4G. Without a key, Laravel inserted two rows. With the snippets above, the second tap returns the first ticket and the queue stays clean.',
    exampleBn:
      'সাপোর্ট এজেন্ট ৪জিতে “টিকিট তৈরি” দুবার ট্যাপ করে। কী না থাকলে Laravel দুটো সারি ঢোকায়। উপরের স্নিপেট থাকলে দ্বিতীয় ট্যাপ প্রথম টিকিটই ফেরত দেয়, কিউ পরিষ্কার থাকে।',
    mermaidEn: (title) =>
      mermaid('Slow tap / retry', 'Second POST', 'Two Laravel rows', 'Ops confusion', title, 'Idempotent write'),
    mermaidBn: (title) =>
      mermaid('ধীর ট্যাপ / রিট্রাই', 'দ্বিতীয় POST', 'দুটো Laravel সারি', 'অপস বিভ্রান্তি', title, 'আইডেমপোটেন্ট রাইট'),
  },
  'auth-security': {
    whyEn: [
      'A session cookie, a JWT, and a Pinia “user” object that disagree is how account takeovers start looking like support tickets.',
      'Password reset, MFA recovery, and file upload are the doors attackers actually use, not the login form you polished.',
      'Tenant isolation bugs do not show up in unit tests that use a single factory user.',
    ],
    whyBn: [
      'সেশন কুকি, JWT, আর Pinia-র user অবজেক্ট যদি তিনজন তিন কথা বলে, অ্যাকাউন্ট হাইজ্যাক সাপোর্ট টিকিটের ছদ্মবেশে আসে।',
      'আক্রমণকারী লগইন ফর্ম না, পাসওয়ার্ড রিসেট, MFA রিকভারি আর ফাইল আপলোড দিয়ে ঢোকে।',
      'এক ইউজার ফ্যাক্টরিতে লেখা ইউনিট টেস্ট টেন্যান্ট ফাঁস ধরে না।',
    ],
    symptomsEn: [
      ['Session weirdness', 'User A sees User B tickets after a tab restore'],
      ['Reset abuse', 'Reset tokens live for days in the email HTML'],
      ['Upload', 'SVG/HTML stored as “image” and later served to staff'],
      ['JWT forever', 'Logout only clears Pinia; the token still works'],
    ],
    symptomsBn: [
      ['সেশন গোলমাল', 'ট্যাব রিস্টোরের পর ইউজার A ইউজার B-র টিকিট দেখে'],
      ['রিসেট অপব্যবহার', 'রিসেট টোকেন ইমেইল HTML-এ দিনের পর দিন বাঁচে'],
      ['আপলোড', 'SVG/HTML “ছবি” হিসেবে সেভ, পরে স্টাফকে সার্ভ হয়'],
      ['অমর JWT', 'লগআউট শুধু Pinia খালি করে, টোকেন তবু চলে'],
    ],
    rootEn: [
      'Session fixation or missing SameSite on the Laravel session cookie.',
      'JWT treated as a session without a denylist or short TTL plus refresh.',
      'CSRF token not sent on Axios because withCredentials was “fixed later”.',
      'Policies checked the role string, not the tenant id on the row.',
    ],
    rootBn: [
      'সেশন ফিক্সেশন, বা Laravel সেশন কুকিতে SameSite নেই।',
      'JWT-কে সেশন ভাবা হয়েছে, ডিনাইলিস্ট বা ছোট TTL+রিফ্রেশ নেই।',
      'Axios-এ CSRF যায়নি, withCredentials “পরে ঠিক করব” ছিল।',
      'পলিসি রোল স্ট্রিং চেক করেছে, সারির টেন্যান্ট আইডি নয়।',
    ],
    vue: `// boot/axios.ts — Quasar
api.defaults.withCredentials = true
api.interceptors.request.use((config) => {
  const xsrf = document.cookie.split('; ').find((row) => row.startsWith('XSRF-TOKEN='))
  if (xsrf) config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrf.slice(11))
  return config
})`,
    php: `// app/Policies/TicketPolicy.php
public function view(User $user, Ticket $ticket): bool
{
    return $user->tenant_id === $ticket->tenant_id
        && $user->can('tickets.view');
}`,
    chartEn: 'Failed logins by reason, reset-token reuse, and cross-tenant 403 rate.',
    chartBn: 'কারণ অনুযায়ী ব্যর্থ লগইন, রিসেট টোকেন পুনব্যবহার, আর ক্রস-টেন্যান্ট ৪০৩ হার।',
    exampleEn:
      'A Quasar admin “switched user” by writing Pinia only. The Laravel session still belonged to the previous staff member. Binding tenant_id in every policy and rotating the session on privilege change stopped the leak.',
    exampleBn:
      'Quasar অ্যাডমিন শুধু Pinia লিখে “ইউজার স্যুইচ” করেছে। Laravel সেশন আগের স্টাফেরই ছিল। প্রতি পলিসিতে tenant_id বাঁধা আর প্রিভিলেজ বদলে সেশন ঘোরানো সেই ফাঁস বন্ধ করে।',
    mermaidEn: (title) =>
      mermaid('Login / reset / upload', 'Cookie or token mismatch', 'Pinia looks logged in', 'Wrong tenant data', title, 'Policy + cookie flags'),
    mermaidBn: (title) =>
      mermaid('লগইন / রিসেট / আপলোড', 'কুকি বা টোকেন মিলছে না', 'Pinia লগইন দেখায়', 'ভুল টেন্যান্ট ডেটা', title, 'পলিসি + কুকি ফ্ল্যাগ'),
  },
  'data-storage': {
    whyEn: [
      'Eloquent looks like one line and becomes forty queries the moment a Quasar table renders relations.',
      'An index that does not match the WHERE + ORDER BY is decoration. EXPLAIN ANALYZE is the witness.',
      'Soft delete without a unique constraint on the live row is how “deleted” emails get reused and collide.',
    ],
    whyBn: [
      'Eloquent এক লাইন দেখায়, Quasar টেবিল রিলেশন আঁকলেই চল্লিশটা কোয়েরি হয়ে যায়।',
      'WHERE আর ORDER BY-এর সাথে না মিললে ইনডেক্স সাজসজ্জা। EXPLAIN ANALYZE-ই সাক্ষী।',
      'সফট ডিলেট থাকলেও লাইভ সারিতে ইউনিক না থাকলে “ডিলিট” ইমেইল আবার ব্যবহার হয়ে সংঘাত করে।',
    ],
    symptomsEn: [
      ['N+1', 'Toolbar spinner 4s; query log shows 1 + n tickets'],
      ['Pool empty', 'FPM workers wait on MySQL while idle connections sit in another pod'],
      ['Pagination lie', 'OFFSET 200000 takes longer than the user will wait'],
      ['Ghost unique', 'Re-registering a soft-deleted email 500s on unique index'],
    ],
    symptomsBn: [
      ['N+1', 'টুলবার স্পিনার ৪ সেকেন্ড; লগে ১ + n টিকিট কোয়েরি'],
      ['পুল খালি', 'অন্য পডে ইডল কানেকশন, এই FPM MySQL-এর অপেক্ষায়'],
      ['পেজিনেশন মিথ্যা', 'OFFSET ২০০০০০ ইউজারের ধৈর্যের চেয়ে লম্বা'],
      ['ভুত ইউনিক', 'সফট-ডিলিট ইমেইল আবার রেজিস্টারে ইউনিক ইনডেক্সে ৫০০'],
    ],
    rootEn: [
      'Missing with() / join, so serializers lazy-load in a loop.',
      'Connection pool sized for local Docker, not production workers × services.',
      'Page-by-offset instead of keyset pagination on a hot list.',
      'No partial unique index for (email) WHERE deleted_at IS NULL.',
    ],
    rootBn: [
      'with() বা জয়েন নেই, সিরিয়ালাইজার লুপে লেজি-লোড করে।',
      'কানেকশন পুল লোকাল Docker-এর মাপ, প্রোডাকশন ওয়ার্কার × সার্ভিস নয়।',
      'হট লিস্টে OFFSET, কীসেট পেজিনেশন নয়।',
      'deleted_at IS NULL ধরে ইমেইলের পার্শিয়াল ইউনিক ইনডেক্স নেই।',
    ],
    vue: `// stores/ticket.ts — ask for the page you show, not the world
export async function loadPage(cursor: string | null) {
  const { data } = await api.get('/api/tickets', { params: { cursor, limit: 50 } })
  return data as { items: Ticket[]; next: string | null }
}`,
    php: `Ticket::query()
    ->with(['assignee:id,name', 'tags:id,name'])
    ->when($cursor, fn ($q) => $q->where('id', '<', $cursor))
    ->orderByDesc('id')
    ->limit(50)
    ->get();`,
    chartEn: 'Query count per request, p99 of the list endpoint, and pool wait time.',
    chartBn: 'রিকোয়েস্টপ্রতি কোয়েরি সংখ্যা, লিস্ট এন্ডপয়েন্টের p99, আর পুল ওয়েট টাইম।',
    exampleEn:
      'The ticket index loaded comments in a Vue `v-for`. Laravel logged 1 + 50 queries. `with()` plus keyset pagination dropped the page from 4.2s to 80ms.',
    exampleBn:
      'টিকিট ইনডেক্স Vue `v-for`-এ কমেন্ট লোড করছিল। Laravel লগে ১ + ৫০ কোয়েরি। `with()` আর কীসেট পেজিনেশনে পেজ ৪.২ সেকেন্ড থেকে ৮০ মিলিসেকেন্ডে নামে।',
    mermaidEn: (title) =>
      mermaid('Quasar table paint', 'N+1 or OFFSET', 'Pool or lock wait', 'Timeout / 500', title, 'with() + keyset + index'),
    mermaidBn: (title) =>
      mermaid('Quasar টেবিল', 'N+1 বা OFFSET', 'পুল বা লক ওয়েট', 'টাইমআউট / ৫০০', title, 'with() + কীসেট + ইনডেক্স'),
  },
  'caching-cdn': {
    whyEn: [
      'Cache-aside without jitter thunders every TTL. Personalized HTML on a CDN cache is tomorrow’s privacy incident.',
      'After deploy, a cold Redis looks like an outage even when MySQL is fine.',
      'Eviction policy is a product decision: LRU vs TTL vs explicit invalidate.',
    ],
    whyBn: [
      'জিটার ছাড়া ক্যাশ-অ্যাসাইড প্রতি TTL-এ সবাই একসাথে আঘাত করে। CDN-এ পার্সোনাল HTML মানে কালকের প্রাইভেসি ইনসিডেন্ট।',
      'ডিপ্লয়ের পর ঠান্ডা Redis আউটেজের মতো দেখায়, MySQL ঠিক থাকলেও।',
      'ইভিকশন পলিসি প্রোডাক্ট সিদ্ধান্ত: LRU, TTL, না স্পষ্ট ইনভ্যালিডেট।',
    ],
    symptomsEn: [
      ['Stampede', 'MySQL CPU 100% every 5 minutes on the second'],
      ['Stale private', 'User B sees User A’s name in the header'],
      ['Cold start', 'First request after deploy is 3s, then 40ms'],
      ['Wrong key', 'Locale or tenant missing from the cache key'],
    ],
    symptomsBn: [
      ['স্ট্যাম্পিড', 'প্রতি ৫ মিনিটে সেকেন্ডে MySQL CPU ১০০%'],
      ['পুরনো প্রাইভেট', 'হেডারে ইউজার B ইউজার A-র নাম দেখে'],
      ['কোল্ড স্টার্ট', 'ডিপ্লয়ের পর প্রথম রিকোয়েস্ট ৩ সেকেন্ড, তারপর ৪০ ms'],
      ['ভুল কী', 'ক্যাশ কীতে লোকেল বা টেন্যান্ট নেই'],
    ],
    rootEn: [
      'Same TTL on every key, no lottery/jitter, no singleflight lock.',
      'CDN cached `/dashboard` without `Vary: Cookie` or a private Cache-Control.',
      'No warming job for the ten hottest keys after release.',
      'Key designed as `ticket:{id}` instead of `ticket:{tenant}:{id}:{locale}`.',
    ],
    rootBn: [
      'সব কী-তে এক TTL, জিটার নেই, সিঙ্গেলফ্লাইট লক নেই।',
      'CDN `/dashboard` ক্যাশ করেছে, `Vary: Cookie` বা private Cache-Control নেই।',
      'রিলিজের পর হট কী ওয়ার্ম করার জব নেই।',
      'কী `ticket:{id}`, `ticket:{tenant}:{id}:{locale}` নয়।',
    ],
    vue: `// Remember: Pinia is not Redis. Cache server JSON, not the whole store.
export async function ticketSummary(id: number) {
  return await api.get(\`/api/tickets/\${id}/summary\`)
}`,
    php: `$ttl = 60 + random_int(0, 15); // jitter so TTLs do not align
return Cache::remember("ticket:{$tenant}:{$id}:summary", $ttl, function () use ($id) {
    return Ticket::query()->with('assignee')->findOrFail($id);
});`,
    chartEn: 'Cache hit ratio, origin QPS at TTL expiry, and personalization cache-key collisions.',
    chartBn: 'ক্যাশ হিট রেশিও, TTL শেষে অরিজিন QPS, আর পার্সোনালাইজেশন কী সংঘাত।',
    exampleEn:
      'A homepage fragment cached “Hello, Asif” at the edge. The next visitor got Asif’s greeting. Splitting anonymous CDN HTML from a private XHR to Laravel fixed it in an afternoon.',
    exampleBn:
      'হোমপেজ ফ্র্যাগমেন্ট এজে “হ্যালো, আসিফ” ক্যাশ করে। পরের ভিজিটর আসিফের অভিবাদন পায়। অ্যানোনিমাস CDN HTML আর প্রাইভেট XHR আলাদা করলে দুপুরের মধ্যে ঠিক হয়।',
    mermaidEn: (title) =>
      mermaid('TTL expiry', 'Thundering herd', 'Origin overload', 'Timeouts', title, 'Jitter + lock + key design'),
    mermaidBn: (title) =>
      mermaid('TTL শেষ', 'সবাই একসাথে', 'অরিজিন চাপ', 'টাইমআউট', title, 'জিটার + লক + কী ডিজাইন'),
  },
  'messaging-async': {
    whyEn: [
      'Queues make latency someone else’s problem until a poison message blocks the lane.',
      'At-least-once delivery plus a side effect without an idempotency table is duplicate SMS, duplicate mail, duplicate charges.',
      'Schema evolution on events is how Friday’s consumer dies on Monday’s field rename.',
    ],
    whyBn: [
      'কিউ লেটেন্সি অন্যের সমস্যা করে, যতক্ষণ একটা বিষাক্ত মেসেজ লেন না আটকে।',
      'অ্যাট-লিস্ট-ওয়ান্স আর সাইড ইফেক্ট, আইডেমপোটেন্সি টেবিল ছাড়া: ডুপ্লিকেট SMS, মেইল, চার্জ।',
      'ইভেন্ট স্কিমা বদল মানে শুক্রবারের কনজিউমার সোমবারের ফিল্ড নামে মরে।',
    ],
    symptomsEn: [
      ['Lag', 'Horizon / queue depth climbs while HTTP still looks healthy'],
      ['Poison', 'One bad payload retries forever and starves the rest'],
      ['Dup work', 'Mail count is 2× the ticket count'],
      ['Schema', 'Old workers JSON-decode a field that no longer exists'],
    ],
    symptomsBn: [
      ['ল্যাগ', 'HTTP ঠিক, Horizon / কিউ গভীরতা বাড়ে'],
      ['বিষ', 'একটা খারাপ পেলোড অনন্ত রিট্রাই, বাকি কাজ অনাহারী'],
      ['ডুপ্লিকেট কাজ', 'মেইল সংখ্যা টিকিটের দ্বিগুণ'],
      ['স্কিমা', 'পুরনো ওয়ার্কার এমন ফিল্ড ডিকোড করে যা আর নেই'],
    ],
    rootEn: [
      'Consumer was not idempotent on message id.',
      'Retry without backoff and without a dead-letter.',
      'Side effects ran before the outbox row committed.',
      'Producers shipped breaking event shapes without a version field.',
    ],
    rootBn: [
      'কনজিউমার মেসেজ আইডিতে আইডেমপোটেন্ট নয়।',
      'ব্যাকঅফ ও ডেড-লেটার ছাড়া রিট্রাই।',
      'আউটবক্স সারি কমিটের আগে সাইড ইফেক্ট চলেছে।',
      'প্রডিউসার ভার্সন ফিল্ড ছাড়া ভাঙা ইভেন্ট শেপ পাঠিয়েছে।',
    ],
    vue: `// Pinia only reflects job state from the API — it does not enqueue twice
export async function enqueueExport(ticketId: number) {
  return api.post('/api/tickets/export', { ticketId })
}`,
    php: `class SendTicketMail implements ShouldQueue
{
    public function handle(): void
    {
        if (ProcessedMessage::query()->where('id', $this->messageId)->exists()) return;
        Mail::to($this->email)->send(new TicketCreated($this->ticket));
        ProcessedMessage::query()->create(['id' => $this->messageId]);
    }
}`,
    chartEn: 'Queue depth, dead-letter rate, and duplicate side-effect count.',
    chartBn: 'কিউ গভীরতা, ডেড-লেটার হার, আর ডুপ্লিকেট সাইড ইফেক্ট।',
    exampleEn:
      'Ticket-created mail used `ShouldQueue` with three retries. SMTP succeeded, the worker timed out, and Laravel retried. An idempotency row on message id made the second attempt a no-op.',
    exampleBn:
      'টিকিট-তৈরি মেইল `ShouldQueue` আর তিন রিট্রাই। SMTP সফল, ওয়ার্কার টাইমআউট, Laravel আবার চেষ্টা। মেসেজ আইডিতে আইডেমপোটেন্সি সারি দ্বিতীয় চেষ্টাকে নো-অপ করে।',
    mermaidEn: (title) =>
      mermaid('HTTP 202', 'Job retry', 'Side effect twice', 'User complaint', title, 'Idempotent consumer'),
    mermaidBn: (title) =>
      mermaid('HTTP ২০২', 'জব রিট্রাই', 'সাইড ইফেক্ট দুবার', 'ইউজার অভিযোগ', title, 'আইডেমপোটেন্ট কনজিউমার'),
  },
  'performance-capacity': {
    whyEn: [
      'Averages hide the p99 that users actually feel on a Quasar spinner.',
      'Payload size, serialization, and N+1 add up before you “need Kubernetes”.',
      'Load tests that hammer login and skip the ticket list lie about capacity.',
    ],
    whyBn: [
      'গড় লুকিয়ে রাখে p99, যা ইউজার Quasar স্পিনারে আসলে অনুভব করে।',
      'পেলোড সাইজ, সিরিয়ালাইজেশন আর N+1 জোটে, Kubernetes-এর আগেই।',
      'শুধু লগইন হ্যামার করা লোড টেস্ট টিকিট লিস্টের ক্যাপাসিটি নিয়ে মিথ্যা বলে।',
    ],
    symptomsEn: [
      ['Tail', 'p50 40ms, p99 2.1s on the same endpoint'],
      ['Payload', 'Ticket JSON is 1.4 MB because comments are nested'],
      ['GC / CPU', 'Workers busy encoding, not querying'],
      ['Lab vs prod', 'k6 on staging has no production cache stampede'],
    ],
    symptomsBn: [
      ['টেইল', 'একই এন্ডপয়েন্টে p50 ৪০ ms, p99 ২.১ s'],
      ['পেলোড', 'নেস্টেড কমেন্টে টিকিট JSON ১.৪ MB'],
      ['CPU', 'ওয়ার্কার কোয়েরি না করে এনকোডিং করে ব্যস্ত'],
      ['ল্যাব vs প্রোড', 'স্টেজিং-এর k6-এ প্রোডাকশনের ক্যাশ স্ট্যাম্পিড নেই'],
    ],
    rootEn: [
      'Dashboards showed mean latency only.',
      'API returned graphs the UI did not render.',
      'No budget for bytes per route in the Vue build.',
      'Load test used a warm cache and a single tenant.',
    ],
    rootBn: [
      'ড্যাশবোর্ডে শুধু গড় লেটেন্সি।',
      'API এমন গ্রাফ পাঠায় যে UI আঁকে না।',
      'Vue বিল্ডে রুটপ্রতি বাইট বাজেট নেই।',
      'লোড টেস্ট উষ্ণ ক্যাশ আর এক টেন্যান্ট।',
    ],
    vue: `// Keep the list payload boring
const columns = ['id', 'title', 'status', 'updated_at'] as const`,
    php: `return TicketResource::collection(
    $tickets->map(fn (Ticket $t) => $t->only(['id', 'title', 'status', 'updated_at']))
);`,
    chartEn: 'Histogram of latency (not just average), response bytes, and CPU per request.',
    chartBn: 'লেটেন্সির হিস্টোগ্রাম (শুধু গড় নয়), রেসপন্স বাইট, আর রিকোয়েস্টপ্রতি CPU।',
    exampleEn:
      'The ticket detail resource embedded the whole comment thread. Mobile Vue spent 800ms JSON.parse. A summary endpoint plus a paged comments call cut p99 in half.',
    exampleBn:
      'টিকিট ডিটেইল রিসোর্স পুরো কমেন্ট থ্রেড এমবেড করত। মোবাইল Vue JSON.parse-এ ৮০০ ms খরচ করে। সামারি এন্ডপয়েন্ট আর পেজ করা কমেন্ট কলে p99 অর্ধেক হয়।',
    mermaidEn: (title) =>
      mermaid('User wait', 'Hidden tail / fat JSON', 'CPU or parse cost', 'Timeouts', title, 'Budget + histogram'),
    mermaidBn: (title) =>
      mermaid('ইউজার অপেক্ষা', 'লুকানো টেইল / মোটা JSON', 'CPU বা পার্স খরচ', 'টাইমআউট', title, 'বাজেট + হিস্টোগ্রাম'),
  },
  'observability-sli': {
    whyEn: [
      'If the dashboard cannot answer “is create-ticket broken for tenant X?”, it is art, not operations.',
      'Correlation ids that die at the Vue boundary make Laravel logs a different universe.',
      'Averages and red/green uptime hide burn of the error budget.',
    ],
    whyBn: [
      'ড্যাশবোর্ড যদি “টেন্যান্ট X-এ টিকিট তৈরি ভাঙা?”-র উত্তর না দেয়, সেটা অপস নয়, সাজসজ্জা।',
      'Vue সীমানায় correlation id মরলে Laravel লগ আরেক গ্রহ।',
      'গড় আর লাল/সবুজ আপটাইম এরর বাজেট পোড়ানো লুকায়।',
    ],
    symptomsEn: [
      ['Blind page', 'Pager fires, nobody has the request id'],
      ['Cardinality', 'Grafana series explode on user_id labels'],
      ['False calm', 'Uptime 99.9% while p99 create is 8s'],
      ['Split brain logs', 'Browser console and FPM logs cannot be joined'],
    ],
    symptomsBn: [
      ['অন্ধ পেজ', 'পেজার বাজে, রিকোয়েস্ট আইডি কারো কাছে নেই'],
      ['কার্ডিনালিটি', 'user_id লেবেলে Grafana সিরিজ ফাটে'],
      ['মিথ্যা শান্তি', 'আপটাইম ৯৯.৯%, টিকিট তৈরির p99 ৮ সেকেন্ড'],
      ['ভাঙা লগ', 'ব্রাউজার কনসোল আর FPM লগ জোড়া যায় না'],
    ],
    rootEn: [
      'No `X-Request-Id` from Quasar boot into Axios into Laravel log context.',
      'High-cardinality labels on every metric.',
      'SLI defined as “process up” instead of “ticket created < 2s”.',
      'Dashboards copied from a template and never asked a question.',
    ],
    rootBn: [
      'Quasar বুট থেকে Axios হয়ে Laravel লগ কনটেক্সটে `X-Request-Id` নেই।',
      'প্রতি মেট্রিকে উচ্চ কার্ডিনালিটি লেবেল।',
      'SLI “প্রসেস আপ”, “টিকিট তৈরি < ২ সেকেন্ড” নয়।',
      'টেমপ্লেট ড্যাশবোর্ড, কখনও প্রশ্ন করেনি।',
    ],
    vue: `api.interceptors.request.use((config) => {
  config.headers['X-Request-Id'] = crypto.randomUUID()
  return config
})`,
    php: `Log::withContext(['request_id' => $request->header('X-Request-Id')]);`,
    chartEn: 'SLI burn, request-id join success, and alert pages that map to an owner.',
    chartBn: 'SLI বার্ন, রিকোয়েস্ট-আইডি জোড়া, আর মালিক-ম্যাপ করা অ্যালার্ট।',
    exampleEn:
      'An incident war-room grepped four log files for “timeout”. Adding a request id from the Quasar boot file made the same search a single Grafana trace in the next outage.',
    exampleBn:
      'ইনসিডেন্ট রুম চারটা লগ ফাইলে “timeout” খুঁজেছে। Quasar বুট থেকে রিকোয়েস্ট আইডি দিলে পরের আউটেজে একই খোঁজ একটা Grafana ট্রেস।',
    mermaidEn: (title) =>
      mermaid('User error', 'No shared id', 'Four log silos', 'Long TTD', title, 'Correlate + SLI'),
    mermaidBn: (title) =>
      mermaid('ইউজার এরর', 'শেয়ার আইডি নেই', 'চার লগ সাইলো', 'দীর্ঘ TTD', title, 'কোরিলেট + SLI'),
  },
  'reliability-edge-cases': {
    whyEn: [
      'Retry storms, leap days, money rounding, and third-party outages are not “edge” once you have traffic.',
      'A forward fix vs rollback is a product call you should make before the pager, not during it.',
      'Duplicate submissions and calendar bugs are the tickets finance will remember.',
    ],
    whyBn: [
      'রিট্রাই স্টর্ম, লিপ ডে, টাকার রাউন্ডিং, থার্ড-পার্টি আউটেজ-ট্রাফিক এলে এগুলো আর “এজ” থাকে না।',
      'ফরোয়ার্ড ফিক্স না রোলব্যাক, পেজারের আগে সিদ্ধান্ত, মাঝখানে নয়।',
      'ডুপ্লিকেট সাবমিশন আর ক্যালেন্ডার বাগ ফাইন্যান্স মনে রাখে।',
    ],
    symptomsEn: [
      ['Storm', 'Error rate up → retries up → error rate worse'],
      ['Money', 'Invoice total off by 0.01 × line count'],
      ['Calendar', 'DST skips a scheduled job or runs it twice'],
      ['Vendor', 'SMS provider 500s, UI still says “sent”'],
    ],
    symptomsBn: [
      ['স্টর্ম', 'এরর বাড়ে → রিট্রাই বাড়ে → এরর আরও বাড়ে'],
      ['টাকা', 'ইনভয়েস মোট লাইন সংখ্যা × ০.০১ কম/বেশি'],
      ['ক্যালেন্ডার', 'DST জব স্কিপ করে বা দুবার চালায়'],
      ['ভেন্ডর', 'SMS ৫০০, UI তবু “পাঠানো”'],
    ],
    rootEn: [
      'Unbounded retries in Axios and in the queue worker.',
      'Floats for currency instead of integer minor units.',
      'Cron in local time without zone stored on the row.',
      'No degraded mode when a dependency fails.',
    ],
    rootBn: [
      'Axios আর কিউ ওয়ার্কার দুদিকেই সীমাহীন রিট্রাই।',
      'মুদ্রায় ফ্লোট, ইন্টিজার মাইনর ইউনিট নয়।',
      'ক্রন লোকাল টাইমে, সারিতে জোন নেই।',
      'ডিপেন্ডেন্সি ফেল করলে ডিগ্রেডেড মোড নেই।',
    ],
    vue: `function money(cents: number) {
  return (cents / 100).toFixed(2) // display only; store integer cents
}`,
    php: `$cents = (int) bcmul($request->amount, '100', 0);
$ticket->update(['price_cents' => $cents]);`,
    chartEn: 'Retry amplification, money-reconciliation diffs, and dependency error budget.',
    chartBn: 'রিট্রাই অ্যামপ্লিফিকেশন, টাকা মিলের ফারাক, আর ডিপেন্ডেন্সি এরর বাজেট।',
    exampleEn:
      'A “pay invoice” button retried on timeout after Laravel had already captured the charge. Showing a pending state and reconciling on webhook (not on a second POST) stopped double capture.',
    exampleBn:
      '“ইনভয়েস পরিশোধ” টাইমআউটে রিট্রাই করে, Laravel তখনই চার্জ ক্যাপচার করে ফেলেছে। পেন্ডিং স্টেট দেখিয়ে ওয়েবহুকে মিলিয়ে (দ্বিতীয় POST নয়) ডাবল ক্যাপচার বন্ধ হয়।',
    mermaidEn: (title) =>
      mermaid('Failure', 'Retry / float / DST', 'Worse failure', 'Finance ticket', title, 'Bound + degrade'),
    mermaidBn: (title) =>
      mermaid('ব্যর্থতা', 'রিট্রাই / ফ্লোট / DST', 'আরও খারাপ', 'ফাইন্যান্স টিকিট', title, 'সীমা + ডিগ্রেড'),
  },
  'devops-containers': {
    whyEn: [
      'A Docker layer that copies `node_modules` before the lockfile makes every CI minute expensive.',
      'Kubernetes rollouts fail in slow motion: probes, OOM, and startup order — not “the YAML is wrong”.',
      'Rollback vs forward-fix is cheaper when the previous image is still in the registry.',
    ],
    whyBn: [
      'লকফাইলের আগে `node_modules` কপি করলে CI-এর প্রতি মিনিট দামি।',
      'কুবারনেটিস রোলআউট আস্তে ভাঙে: প্রোব, OOM, স্টার্টআপ অর্ডার — “YAML ভুল” নয়।',
      'আগের ইমেজ রেজিস্ট্রিতে থাকলে রোলব্যাক সস্তা।',
    ],
    symptomsEn: [
      ['Fat image', 'Build 12 minutes because apt ran on every JS change'],
      ['CrashLoop', 'App starts before MySQL; probes never turn ready'],
      ['OOM', 'PHP-FPM workers × memory limit < peak traffic'],
      ['Stuck rollout', 'Old and new pods both serving incompatible APIs'],
    ],
    symptomsBn: [
      ['মোটা ইমেজ', 'প্রতি JS চেঞ্জে apt, বিল্ড ১২ মিনিট'],
      ['CrashLoop', 'MySQL-এর আগে অ্যাপ, প্রোব রেডি হয় না'],
      ['OOM', 'FPM ওয়ার্কার × মেমোরি লিমিট পিক ট্রাফিকের নিচে'],
      ['আটকে রোলআউট', 'পুরনো-নতুন পড অসামঞ্জস্য API সার্ভ করছে'],
    ],
    rootEn: [
      'Dockerfile order fought the cache.',
      'No init container / wait-for-db; Laravel booted into a missing schema.',
      'Limits copied from a tutorial, not from RSS in production.',
      'Readiness matched “port open”, not “migrations done”.',
    ],
    rootBn: [
      'Dockerfile অর্ডার ক্যাশের বিরুদ্ধে।',
      'init / wait-for-db নেই; Laravel খালি স্কিমায় বুট।',
      'লিমিট টিউটোরিয়ালের, প্রোডাকশন RSS-এর নয়।',
      'রেডিনেস “পোর্ট খোলা”, “মাইগ্রেশন শেষ” নয়।',
    ],
    vue: `// vite.config.ts — production image should serve the built dist, not a dev server
export default defineConfig({ build: { sourcemap: false } })`,
    php: `# Dockerfile (PHP-FPM)
COPY composer.lock composer.json /app/
RUN composer install --no-dev --no-scripts
COPY . /app`,
    chartEn: 'Image size, rollout duration, restart count, and time-to-ready.',
    chartBn: 'ইমেজ সাইজ, রোলআউট সময়, রিস্টার্ট সংখ্যা, আর রেডি হতে কতক্ষণ।',
    exampleEn:
      'A Vue SPA image bundled `npm run dev`. Production CPU sat at 100% compiling. A multi-stage build that copies `dist/` into nginx dropped the container to a few MB of static files.',
    exampleBn:
      'Vue SPA ইমেজে `npm run dev` বান্ডিল ছিল। প্রোডাকশন CPU কম্পাইলে ১০০%। মাল্টি-স্টেজ বিল্ডে `dist/` nginx-এ কপি করলে কনটেইনার কয়েক MB স্ট্যাটিক ফাইল হয়।',
    mermaidEn: (title) =>
      mermaid('Build / deploy', 'Cache miss / probe fail', 'CrashLoop or OOM', 'Rollback debate', title, 'Layer order + probes'),
    mermaidBn: (title) =>
      mermaid('বিল্ড / ডিপ্লয়', 'ক্যাশ মিস / প্রোব ফেল', 'CrashLoop বা OOM', 'রোলব্যাক তর্ক', title, 'লেয়ার অর্ডার + প্রোব'),
  },
  'networking-edge': {
    whyEn: [
      'Nginx buffering, TLS handshake cost, and timeouts are the real UX of a Laravel API behind a proxy.',
      'Geo routing and rate limits at the edge stop abuse before PHP-FPM ever wakes.',
      'MTU/MSS issues look like “random” timeouts that no application log will explain.',
    ],
    whyBn: [
      'প্রক্সির পেছনে Laravel API-এর আসল UX হলো Nginx বাফার, TLS হ্যান্ডশেক খরচ, আর টাইমআউট।',
      'এজ রেট লিমিট PHP-FPM জাগার আগে অপব্যবহার আটকায়।',
      'MTU/MSS সমস্যা “এলোমেলো” টাইমআউট, অ্যাপ লগে ব্যাখ্যা মেলে না।',
    ],
    symptomsEn: [
      ['504', 'PHP finished, proxy already gave up'],
      ['TLS tax', 'Mobile p99 dominated by handshake, not JSON'],
      ['DDoS-ish', 'Login endpoint CPU-bound from unauthenticated POST'],
      ['Partial body', 'Large upload dies at 1MB proxy limit'],
    ],
    symptomsBn: [
      ['৫০৪', 'PHP শেষ, প্রক্সি আগেই ছেড়েছে'],
      ['TLS কর', 'মোবাইল p99 হ্যান্ডশেকে, JSON-এ নয়'],
      ['DDoS-সদৃশ', 'অনঅথেন্টিকেটেড POST-এ লগইন CPU'],
      ['আংশিক বডি', 'বড় আপলোড প্রক্সি ১ MB লিমিটে মরে'],
    ],
    rootEn: [
      'proxy_read_timeout shorter than the slowest honest job.',
      'No session resumption / HTTP/2 on the cert.',
      'Rate limit only inside Laravel, not at nginx.',
      'client_max_body_size copied from a blog and never matched the product.',
    ],
    rootBn: [
      'সবচেয়ে ধীর সৎ জবের চেয়ে proxy_read_timeout ছোট।',
      'সার্টে সেশন রিজাম্পশন / HTTP/2 নেই।',
      'রেট লিমিট শুধু Laravel-এ, nginx-এ নয়।',
      'client_max_body_size ব্লগ থেকে কপি, প্রোডাক্টের সাথে মেলেনি।',
    ],
    vue: `// Axios timeout must be < nginx, or the user retries while PHP still runs
api.defaults.timeout = 12_000`,
    php: `# nginx
proxy_read_timeout 30s;
client_max_body_size 12m;
limit_req zone=login burst=20 nodelay;`,
    chartEn: 'Edge 4xx/5xx, TLS handshake time, and origin vs edge cache hit.',
    chartBn: 'এজ ৪xx/৫xx, TLS হ্যান্ডশেক সময়, আর অরিজিন vs এজ হিট।',
    exampleEn:
      'Quasar file upload hung at 99%. Nginx `client_max_body_size` was 1m; Laravel accepted 8m. Aligning the proxy limit and showing a client-side size check removed the ghost progress bar.',
    exampleBn:
      'Quasar ফাইল আপলোড ৯৯%-এ আটকে। nginx `client_max_body_size` ১m, Laravel ৮m নেয়। প্রক্সি লিমিট মিলিয়ে ক্লায়েন্টে সাইজ চেক দিলে ভুত প্রোগ্রেস বার কাটে।',
    mermaidEn: (title) =>
      mermaid('Browser', 'TLS / nginx / timeout', 'Origin PHP', '504 or hang', title, 'Align budgets'),
    mermaidBn: (title) =>
      mermaid('ব্রাউজার', 'TLS / nginx / টাইমআউট', 'অরিজিন PHP', '৫০৪ বা হ্যাং', title, 'বাজেট মেলানো'),
  },
  'distributed-systems': {
    whyEn: [
      'Two Laravel boxes and a Redis lock still need a story for clocks, split brain, and “exactly once”.',
      'PACELC is the lunch-menu version of CAP: when the network is fine you still pay latency for consistency.',
      'Gossip, membership, and multi-region failover are how “the other DC is down” becomes a user-visible banner.',
    ],
    whyBn: [
      'দুটো Laravel বক্স আর একটা Redis লকেও ঘড়ি, স্প্লিট ব্রেইন, আর “এক্সাক্টলি ওয়ান্স”-এর গল্প লাগে।',
      'PACELC হলো CAP-এর দুপুরের মেনু: নেট ঠিক থাকলেও কনসিস্টেন্সির জন্য লেটেন্সি দিতে হয়।',
      'গসিপ, মেম্বারশিপ, মাল্টি-রিজিয়ন ফেইলওভার-“অন্য DC ডাউন” ইউজারের ব্যানার হয়।',
    ],
    symptomsEn: [
      ['Split', 'Two leaders both accept writes'],
      ['Clock', 'Last-write-wins deletes the newer ticket because NTP drifted'],
      ['Failover', 'DNS still points at the sick region for 30 minutes'],
      ['Illusion', 'Team believes Kafka is exactly-once end to end'],
    ],
    symptomsBn: [
      ['স্প্লিট', 'দুই লিডার দুজনেই রাইট নেয়'],
      ['ঘড়ি', 'NTP সরে গেছে, LWW নতুন টিকিট মুছে'],
      ['ফেইলওভার', '৩০ মিনিট DNS অসুস্থ রিজিয়নে'],
      ['মায়া', 'টিম ভাবে Kafka এন্ড-টু-এন্ড এক্সাক্টলি-ওয়ান্স'],
    ],
    rootEn: [
      'No fencing token on the lock; a paused process kept writing.',
      'Timestamps compared across hosts without a true time source.',
      'Health check was HTTP 200 on nginx, not on the Laravel dependency.',
      'Delivery guarantee of the broker confused with business idempotency.',
    ],
    rootBn: [
      'লকে ফেন্সিং টোকেন নেই; পজ করা প্রসেস লিখতে থাকে।',
      'হোস্টের টাইমস্ট্যাম্প তুলনা, সত্যিকারের টাইম সোর্স নেই।',
      'হেলথ চেক nginx ২০০, Laravel ডিপেন্ডেন্সি নয়।',
      'ব্রোকারের ডেলিভারি গ্যারান্টি আর বিজনেস আইডেমপোটেন্সি গুলিয়ে ফেলা।',
    ],
    vue: `// Show eventual consistency honestly in the UI
if (ticket.status === 'pending_sync') return 'Saving across regions…'`,
    php: `Cache::lock('ticket:'.$id, 10)->get(function () use ($id) {
    // fencing: lock owner id stored; expired owner must not commit
    return Ticket::query()->findOrFail($id);
});`,
    chartEn: 'Cross-region lag, lock wait, and split-brain detections.',
    chartBn: 'ক্রস-রিজিয়ন ল্যাগ, লক ওয়েট, আর স্প্লিট-ব্রেইন ধরা।',
    exampleEn:
      'A Redis lock expired while a report job paused on GC. The job resumed and overwrote a newer edit. A fencing token (lock generation in the row) made the late writer abort.',
    exampleBn:
      'রিপোর্ট জব GC-তে পজ, Redis লক শেষ। জব ফিরে নতুন এডিট ওভাররাইট করে। ফেন্সিং টোকেন (সারিতে লক জেনারেশন) দেরি লেখককে অ্যাবর্ট করায়।',
    mermaidEn: (title) =>
      mermaid('Two nodes', 'Network / clock / lock', 'Conflicting writes', 'User sees flicker', title, 'Fence + honest UX'),
    mermaidBn: (title) =>
      mermaid('দুই নোড', 'নেট / ঘড়ি / লক', 'সংঘাতপূর্ণ রাইট', 'ইউজার ফ্লিকার দেখে', title, 'ফেন্স + সৎ UX'),
  },
  'ai-rag-agents': {
    whyEn: [
      'RAG without evals is a demo. Empty retrieval still needs a fallback the user can trust.',
      'Prompt injection and cost both live in production even when the model is “just an assistant”.',
      'Caching LLM calls without tenant keys is a privacy bug with a latency win attached.',
    ],
    whyBn: [
      'ইভ্যাল ছাড়া RAG ডেমো। খালি রিট্রিভালেও ইউজার বিশ্বাস করতে পারে এমন ফলব্যাক লাগে।',
      'প্রম্পট ইনজেকশন আর খরচ দুটোই প্রোডাকশনে থাকে, মডেল “শুধু অ্যাসিস্ট্যান্ট” হলেও।',
      'টেন্যান্ট কী ছাড়া LLM ক্যাশ লেটেন্সি জেতা প্রাইভেসি বাগ।',
    ],
    symptomsEn: [
      ['Hallucination', 'Answer cites a ticket that does not exist'],
      ['Cost spike', 'Retry loop on timeouts multiplies tokens'],
      ['Injection', 'Uploaded PDF contains “ignore previous instructions”'],
      ['Skew', 'Index built on v2 embeddings, query uses v1'],
    ],
    symptomsBn: [
      ['হ্যালুসিনেশন', 'এমন টিকিট সাইট করে যা নেই'],
      ['খরচ', 'টাইমআউট রিট্রাই টোকেন গুণ করে'],
      ['ইনজেকশন', 'PDF-এ “আগের নির্দেশ উপেক্ষা করো”'],
      ['স্কিউ', 'ইনডেক্স v2 এম্বেডিং, কোয়েরি v1'],
    ],
    rootEn: [
      'No golden set; shipping prompt tweaks on vibes.',
      'Unbounded agent loops without a token budget.',
      'User content concatenated into the system prompt.',
      'Embedding model swapped without reindexing.',
    ],
    rootBn: [
      'গোল্ডেন সেট নেই; প্রম্পট ভাইবে বদল।',
      'টোকেন বাজেট ছাড়া এজেন্ট লুপ।',
      'ইউজার কনটেন্ট সিস্টেম প্রম্পটে জোড়া।',
      'রিইনডেক্স ছাড়া এম্বেডিং মডেল বদল।',
    ],
    vue: `export async function askDocs(q: string) {
  return api.post('/api/ask', { q, timeoutMs: 12_000 })
}`,
    php: `if ($hits->isEmpty()) {
    return response()->json(['answer' => null, 'fallback' => 'human_queue']);
}`,
    chartEn: 'Eval score, cost per successful answer, and empty-retrieval rate.',
    chartBn: 'ইভ্যাল স্কোর, সফল উত্তরপ্রতি খরচ, আর খালি রিট্রিভাল হার।',
    exampleEn:
      'A “search tickets with AI” feature answered from an empty Pinecone result with a confident paragraph. Returning `fallback: human_queue` and showing the Quasar empty state was the production fix, not a bigger model.',
    exampleBn:
      '“AI দিয়ে টিকিট খুঁজুন” খালি রেজাল্টেও আত্মবিশ্বাসী প্যারাগ্রাফ দিত। `fallback: human_queue` ফেরত দিয়ে Quasar খালি স্টেট দেখানোই প্রোডাকশন ফিক্স, বড় মডেল নয়।',
    mermaidEn: (title) =>
      mermaid('User question', 'Retrieve', 'Empty or injected', 'Wrong answer / cost', title, 'Eval + fallback'),
    mermaidBn: (title) =>
      mermaid('ইউজার প্রশ্ন', 'রিট্রিভ', 'খালি বা ইনজেক্টেড', 'ভুল উত্তর / খরচ', title, 'ইভ্যাল + ফলব্যাক'),
  },
  'data-pipelines-ml': {
    whyEn: [
      'Training-serving skew is the polite name for “the model never saw production nulls”.',
      'PII in a pipeline log is a compliance incident that looks like a debug line.',
      'Orchestrator retries that are not idempotent duplicate billable warehouse scans.',
    ],
    whyBn: [
      'ট্রেনিং-সার্ভিং স্কিউ মানে মডেল প্রোডাকশনের নাল কখনও দেখেনি।',
      'পাইপলাইন লগে PII ডিবাগ লাইনের ছদ্মবেশে কমপ্লায়েন্স ইনসিডেন্ট।',
      'আইডেমপোটেন্ট নয় এমন অর্কেস্ট্রেটর রিট্রাই গুদামের বিল দ্বিগুণ করে।',
    ],
    symptomsEn: [
      ['Skew', 'Offline F1 0.81, online 0.54'],
      ['Late data', 'Yesterday’s events arrive after today’s aggregate closed'],
      ['PII leak', 'Email in a “debug” parquet dropped in S3'],
      ['Retry bill', 'Airflow rerun scans the same partition twice'],
    ],
    symptomsBn: [
      ['স্কিউ', 'অফলাইন F1 ০.৮১, অনলাইন ০.৫৪'],
      ['দেরি ডেটা', 'গতকালের ইভেন্ট আজকের অ্যাগ্রিগেট বন্ধের পর আসে'],
      ['PII ফাঁস', 'ডিবাগ parquet-এ ইমেইল'],
      ['রিট্রাই বিল', 'একই পার্টিশন দুবার স্ক্যান'],
    ],
    rootEn: [
      'Feature code copied, not shared, between train and serve.',
      'No watermark / allowed lateness on the job.',
      'Logs stored raw request bodies.',
      'Retry policy ignored destination uniqueness.',
    ],
    rootBn: [
      'ফিচার কোড ট্রেন আর সার্ভে কপি, শেয়ার নয়।',
      'জবে ওয়াটারমার্ক / অ্যালাউড লেটনেস নেই।',
      'লগে র raw রিকোয়েস্ট বডি।',
      'রিট্রাই পলিসি গন্তব্যের ইউনিকনেস মানেনি।',
    ],
    vue: `// Admin: show pipeline run id so support can trace a bad batch
export async function pipelineStatus(runId: string) {
  return api.get(\`/api/pipelines/\${runId}\`)
}`,
    php: `ProcessPipelineJob::dispatch($runId)->onQueue('pipelines');`,
    chartEn: 'Freshness, duplicate partition writes, and PII-scan findings.',
    chartBn: 'ফ্রেশনেস, ডুপ্লিকেট পার্টিশন রাইট, আর PII স্ক্যান।',
    exampleEn:
      'A nightly job used `created_at` in local time. DST made two “days” overlap and one vanish. Storing UTC plus a watermark stopped the gap in the Quasar ops chart.',
    exampleBn:
      'রাতের জব লোকাল `created_at` ধরেছে। DST-এ দুই “দিন” ওভারল্যাপ, একদিন উধাও। UTC আর ওয়াটারমার্ক Quasar অপস চার্টের ফাঁক বন্ধ করে।',
    mermaidEn: (title) =>
      mermaid('Extract', 'Late / PII / retry', 'Wrong aggregate', 'Bad model or fine', title, 'Contract + watermark'),
    mermaidBn: (title) =>
      mermaid('এক্সট্র্যাক্ট', 'দেরি / PII / রিট্রাই', 'ভুল অ্যাগ্রিগেট', 'খারাপ মডেল বা জরিমানা', title, 'চুক্তি + ওয়াটারমার্ক'),
  },
  'product-platform': {
    whyEn: [
      'Internal platforms fail when they are a pile of YAML, not a product with users and a kill switch.',
      'ADRs and build-vs-buy are how you avoid rewriting the ticketing module every year.',
      'Multi-tenant isolation and cost showback are product questions wearing infrastructure clothes.',
    ],
    whyBn: [
      'ইন্টারনাল প্ল্যাটফর্ম YAML-এর স্তূপ হলে ফেল করে; ইউজার আর কিল সুইচওয়ালা প্রোডাক্ট লাগে।',
      'ADR আর বিল্ড-ভস-বাই মানে বছর বছর টিকেটিং মডিউল না লেখা।',
      'মাল্টি-টেন্যান্ট আইসোলেশন আর খরচ শোব্যাক ইনফ্রার পোশাকে প্রোডাক্ট প্রশ্ন।',
    ],
    symptomsEn: [
      ['Shadow IT', 'Every team forks the starter and never pulls'],
      ['No kill switch', 'A bad flag rolls to 100% with no owner'],
      ['Mystery bill', 'Nobody knows which tenant burned Redis'],
      ['Migration freeze', 'Strangler fig never cuts the old module'],
    ],
    symptomsBn: [
      ['শ্যাডো IT', 'প্রতি টিম স্টার্টার ফর্ক করে, আর টানে না'],
      ['কিল সুইচ নেই', 'খারাপ ফ্ল্যাগ ১০০%-এ, মালিক নেই'],
      ['রহস্য বিল', 'কোন টেন্যান্ট Redis পুড়িয়েছে কেউ জানে না'],
      ['মাইগ্রেশন জমাট', 'স্ট্র্যাঙ্গলার ফিগ পুরনো মডিউল কাটে না'],
    ],
    rootEn: [
      'Platform had no office hours, only a Slack channel that went quiet.',
      'Feature flags without an owner and an expiry.',
      'Cost tags missing on queues and databases.',
      'Dual-running forever because cutover criteria were never written.',
    ],
    rootBn: [
      'প্ল্যাটফর্মে অফিস আওয়ার নেই, শুধু নিঃশব্দ Slack চ্যানেল।',
      'ফ্ল্যাগে মালিক ও মেয়াদ নেই।',
      'কিউ আর ডেটাবেসে কস্ট ট্যাগ নেই।',
      'কাটোভার মানদণ্ড না লিখে চিরকাল ডুয়াল-রান।',
    ],
    vue: `if (!flags.ticketV2) return legacyTicketList()
return ticketListV2()`,
    php: `if (!Feature::for($tenant)->active('ticket-v2')) {
    return app(LegacyTicketService::class)->index();
}`,
    chartEn: 'Flag exposure %, platform adoption, and cost per tenant.',
    chartBn: 'ফ্ল্যাগ এক্সপোজার %, প্ল্যাটফর্ম অ্যাডপশন, আর টেন্যান্টপ্রতি খরচ।',
    exampleEn:
      'A “new ticket UI” flag shipped at 100% on Friday. There was no owner on-call. A 10% canary plus a documented kill switch in the Quasar admin turned the next bad flag into a 12-minute story, not a weekend.',
    exampleBn:
      'শুক্রবার “নতুন টিকিট UI” ফ্ল্যাগ ১০০%। অন-কল মালিক নেই। ১০% ক্যানারি আর Quasar অ্যাডমিনে লেখা কিল সুইচ পরের খারাপ ফ্ল্যাগকে সপ্তাহান্ত না করে ১২ মিনিটের গল্প করে।',
    mermaidEn: (title) =>
      mermaid('Idea', 'No owner / no flag', '100% blast', 'Weekend fire', title, 'ADR + kill switch'),
    mermaidBn: (title) =>
      mermaid('আইডিয়া', 'মালিক/ফ্ল্যাগ নেই', '১০০% ব্লাস্ট', 'সপ্তাহান্তের আগুন', title, 'ADR + কিল সুইচ'),
  },
}

export function kitFor(topic: IndustryTopic): DomainKit {
  return KITS[topic.domain]
}

export function difficultyBn(difficulty: IndustryTopic['difficulty']) {
  if (difficulty === 'intro') return 'শুরুর ধাপ'
  if (difficulty === 'intermediate') return 'মাঝারি ধাপ'
  return 'উন্নত ধাপ'
}

export function difficultyEn(difficulty: IndustryTopic['difficulty']) {
  if (difficulty === 'intro') return 'beginner'
  if (difficulty === 'intermediate') return 'intermediate'
  return 'advanced'
}
