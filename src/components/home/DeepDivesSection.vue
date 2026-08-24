<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { SOLVED_PROBLEMS } from '@/content/solved-problems'
import { TOPICS } from '@/content/industry-topics'

const { pick } = useLocaleText()

const cards = computed(() => [
  {
    to: '/problems/solved',
    kicker: pick({ en: 'First-hand', bn: 'সরাসরি অভিজ্ঞতা' }),
    title: pick({ en: 'Critical problems I solved', bn: 'আমি সমাধান করা ক্রিটিক্যাল সমস্যা' }),
    body: pick({
      en: 'Real production incidents and hard bugs — the constraint, the diagnosis, the fix, and what it changed.',
      bn: 'বাস্তব প্রোডাকশন ঘটনা ও কঠিন বাগ — সীমাবদ্ধতা, নির্ণয়, সমাধান এবং তার প্রভাব।',
    }),
    count: `${SOLVED_PROBLEMS.length}`,
    countLabel: pick({ en: 'cases', bn: 'কেস' }),
  },
  {
    to: '/systems',
    kicker: pick({ en: 'Knowledge library', bn: 'জ্ঞান ভাণ্ডার' }),
    title: pick({ en: 'Engineering systems & system design guide', bn: 'ইঞ্জিনিয়ারিং সিস্টেম ও সিস্টেম ডিজাইন গাইড' }),
    body: pick({
      en: 'An educational atlas of industry-critical scenarios and advanced system design concepts, readable in English or Bengali.',
      bn: 'ইন্ডাস্ট্রি-ক্রিটিক্যাল দৃশ্যপট ও অ্যাডভান্সড সিস্টেম ডিজাইন ধারণার শিক্ষামূলক অ্যাটলাস — ইংরেজি বা বাংলায় পড়ুন।',
    }),
    count: `${TOPICS.length}+`,
    countLabel: pick({ en: 'topics', bn: 'টপিক' }),
  },
  {
    to: '/marketing',
    kicker: pick({ en: 'Growth', bn: 'গ্রোথ' }),
    title: pick({ en: 'Marketing consultant', bn: 'মার্কেটিং কনসালট্যান্ট' }),
    body: pick({
      en: '8+ years, 50+ clients, 70+ social growth wins — with its own timeline, channel stack, and proof.',
      bn: '৮+ বছর, ৫০+ ক্লায়েন্ট, ৭০+ সোশ্যাল গ্রোথ সাফল্য — নিজস্ব টাইমলাইন, চ্যানেল স্ট্যাক ও প্রমাণ সহ।',
    }),
    count: '50+',
    countLabel: pick({ en: 'clients', bn: 'ক্লায়েন্ট' }),
  },
])
</script>

<template>
  <SectionShell
    id="deep-dives"
    :eyebrow="pick({ en: 'Go deeper', bn: 'আরও গভীরে' })"
    :title="pick({ en: 'Three dedicated libraries', bn: 'তিনটি নিবেদিত লাইব্রেরি' })"
    :lead="
      pick({
        en: 'Everything else about me lives on this page. These three get their own space because they keep growing.',
        bn: 'আমার বাকি সব তথ্য এই পেজেই। এই তিনটি আলাদা পেজ পেয়েছে কারণ এগুলো ক্রমাগত বাড়ছে।',
      })
    "
  >
    <div class="grid gap-4 md:grid-cols-3">
      <RouterLink
        v-for="card in cards"
        :key="card.to"
        :to="card.to"
        class="surface-card group flex flex-col p-6 no-underline transition-colors hover:border-accent/50"
      >
        <div class="flex items-baseline justify-between gap-3">
          <span class="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-accent-soft">
            {{ card.kicker }}
          </span>
          <span class="font-display text-2xl font-bold text-glow">{{ card.count }}</span>
        </div>
        <h3 class="mt-3 font-display text-xl font-semibold leading-snug text-paper">
          {{ card.title }}
        </h3>
        <p class="mt-2.5 flex-1 text-sm leading-relaxed text-mist">{{ card.body }}</p>
        <span class="mt-4 text-sm font-semibold text-accent">
          {{ pick({ en: 'Open', bn: 'দেখুন' }) }} {{ card.countLabel }} →
        </span>
      </RouterLink>
    </div>
  </SectionShell>
</template>
