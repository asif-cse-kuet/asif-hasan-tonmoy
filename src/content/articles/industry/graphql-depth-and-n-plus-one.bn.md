> **পাঠ 121 · উন্নত ধাপ** - ১২ লাইনের query ৪,০০০ SQL চালাতে পারে - depth limit, cost analysis ও batched loader।

## কেন এটা জরুরি

- Vue আর Laravel দুজনেই একই রাইটে রিট্রাই করলে দুটো টিকিট, দুটো চার্জ, বা ভুত ওয়েবহুক হয়।
- Axios-এর ডিফল্ট টাইমআউট পথে তিনটা সার্ভিস থাকলে পুরো বাজেট শেষ করে।
- ভাঙা ফিল্ড নাম বদলানোর চেয়ে ভার্সন করা URL সস্তা, কারণ বারোটা ক্লায়েন্ট আগেই ক্যাশ করেছে।
- এই পাঠটা ঠিক **GraphQL query depth ও N+1 tax** নিয়ে। ট্যাগ: graphql, n-plus-one, dataloader, query-cost।

## কী দেখে বুঝবেন সমস্যা আছে

| সংকেত | যা দেখা যায় |
| --- | --- |
| ডুপ্লিকেট রাইট | ধীর ৪জি Quasar ফর্মে এক ট্যাপে দুটো সারি |
| টাইমআউট | জব শেষ, তবু গেটওয়ে ৫০৪ |
| ওয়েবহুক স্টর্ম | পার্টনার ১০ সেকেন্ডে রিট্রাই, সিগনেচার চেক নেই |
| ভার্সন সংঘাত | মোবাইল অ্যাপ ২.১ এখনও পুরনো JSON পাঠায় |

## কীভাবে ভাঙে

```mermaid
flowchart TD
  A["ধীর ট্যাপ / রিট্রাই"] --> B["দ্বিতীয় POST"]
  B --> C["দুটো Laravel সারি"]
  C --> D["অপস বিভ্রান্তি"]
  D --> E["GraphQL query depth ও N+1 tax"]
  E --> F["আইডেমপোটেন্ট রাইট"]
```

ভাঙে প্রযুক্তির নামে নয়, চুক্তির অভাবে। Vue/Quasar স্ক্রিন আর Laravel রাইট যদি উল্টো উত্তর ধরে, প্রোডাকশন সেই রেসটা খুঁজে বের করে। এই টপিকের চুক্তিটা হলো: ১২ লাইনের query ৪,০০০ SQL চালাতে পারে - depth limit, cost analysis ও batched loader।

## মূল কারণ

1. ক্লায়েন্ট POST রিট্রাই করেছে, সার্ভার Idempotency-Key মানেনি।
2. প্রতি হপে ৩০ সেকেন্ড টাইমআউট, ইউজার ৯০ সেকেন্ড অপেক্ষা করে আবার ট্যাপ করেছে।
3. ওয়েবহুক হ্যান্ডলার ডেলিভারি আইডিতে আইডেমপোটেন্ট নয়।
4. /v2 বা সানসেট হেডার ছাড়াই ভাঙা JSON চেঞ্জ শিপ হয়েছে।

## কীভাবে সমাধান করবেন

### ১. ইনভেরিয়েন্ট এক বাক্যে লিখুন

১২ লাইনের query ৪,০০০ SQL চালাতে পারে - depth limit, cost analysis ও batched loader। এই বাক্য পিআর, Pinia অ্যাকশন, আর Laravel ক্লাসে রাখুন।

### ২. কোডে কিনারা আটকে দিন

```ts
// Pinia: one key per human intent, not per HTTP attempt
export async function createTicket(payload: TicketDraft, key: string) {
  const hit = sessionStorage.getItem(key)
  if (hit) return JSON.parse(hit) as Ticket
  const ticket = await api.post('/api/tickets', payload, { headers: { 'Idempotency-Key': key } })
  sessionStorage.setItem(key, JSON.stringify(ticket))
  return ticket
}
```

```php
Route::post('/api/tickets', function (Request $request) {
    $key = $request->header('Idempotency-Key');
    abort_unless($key, 400, 'Idempotency-Key required');

    return Cache::lock("ticket:{$key}", 10)->block(5, function () use ($key, $request) {
        $existing = Ticket::query()->where('idempotency_key', $key)->first();
        if ($existing) return $existing;
        return Ticket::query()->create([...$request->validated(), 'idempotency_key' => $key]);
    });
});
```

### ৩. যে চার্ট সত্যি দেখবেন, সেটাই রাখুন

ডুপ্লিকেট ক্রিয়েট রেট, আইডেমপোটেন্সি কী ছাড়া ৪xx, আর রাইট পাথের p99। **GraphQL query depth ও N+1 tax**-এর রিগ্রেশন এই চার্টে না ধরা পড়লে পাঠ শেষ হয়নি।

## কাজের উদাহরণ

সাপোর্ট এজেন্ট ৪জিতে “টিকিট তৈরি” দুবার ট্যাপ করে। কী না থাকলে Laravel দুটো সারি ঢোকায়। উপরের স্নিপেট থাকলে দ্বিতীয় ট্যাপ প্রথম টিকিটই ফেরত দেয়, কিউ পরিষ্কার থাকে।

এই টপিকে নিজের শেষ ইনসিডেন্টের লক্ষণ টেবিলে মিলিয়ে নিন, তারপর ডায়াগ্রাম ধরে এগোন যতক্ষণ না উপরের গার্ড আগুন ধরত।

## শিপ করার আগে

- [ ] **GraphQL query depth ও N+1 tax**-এর ইনভেরিয়েন্ট এক বাক্যে লেখা।
- [ ] খালি, ডুপ্লিকেট, টাইমআউট বা পারমিশন পাথের টেস্ট বা রিহার্সাল আছে।
- [ ] এক ডিপ্লয়ের মধ্যে রিগ্রেশন ধরার লগ বা চার্ট আছে।
- [ ] আত্মীয় পাঠ এখনও মিলছে: pagination-at-scale, rate-limiting-algorithms।

## যা করবেন না

- অনন্ত রিট্রাই বা এররকে সাকসেস হিসেবে ক্যাশ করা ব্লগ স্নিপেট কপি করবেন না।
- Laravel সারির সত্য Pinia-কে বলে দেবেন না।
- ঘন মনে হলে আগের নম্বরের পাঠ আগে শেষ করুন। পথটা ইচ্ছা করেই শুরু → মাঝারি → উন্নত।
