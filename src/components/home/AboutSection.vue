<script setup lang="ts">
import ProfilePortrait from '@/components/ProfilePortrait.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()

const facts = [
  {
    label: { en: 'Based in', bn: 'অবস্থান' },
    value: PROFILE.location,
  },
  {
    label: { en: 'Education', bn: 'শিক্ষা' },
    value: PROFILE.education,
  },
  {
    label: { en: 'Languages', bn: 'ভাষা' },
    value: { en: 'Bengali (native), English (professional)', bn: 'বাংলা (মাতৃভাষা), ইংরেজি (পেশাগত)' },
  },
  {
    label: { en: 'Availability', bn: 'উপলভ্যতা' },
    value: {
      en: 'Open to Tech Lead, architecture, and Marketing Director seats - together as one hire, or either chair on its own.',
      bn: 'টেক লিড, আর্কিটেকচার ও মার্কেটিং ডিরেক্টর আসনের জন্য উন্মুক্ত - একসাথে এক নিয়োগ, অথবা যেকোনো একটি আসন।',
    },
  },
]

const teaching = [
  {
    en: 'Programming instructor at Timedoor Academy - JavaScript OOP through project work.',
    bn: 'Timedoor Academy-তে প্রোগ্রামিং ইন্সট্রাক্টর - প্রজেক্টভিত্তিক শিক্ষায় JavaScript OOP।',
  },
  {
    en: 'Head of Physics at Interaid - curriculum delivery and explaining hard ideas simply.',
    bn: 'Interaid-এ হেড অফ ফিজিক্স - কারিকুলাম ডেলিভারি ও কঠিন ধারণা সহজে ব্যাখ্যা।',
  },
  {
    en: 'Mentoring habit carried into code review: debugging discipline, structure, and clear written reasoning.',
    bn: 'কোড রিভিউতেও সেই মেন্টরিং অভ্যাস: ডিবাগিং শৃঙ্খলা, কাঠামো ও পরিষ্কার লিখিত যুক্তি।',
  },
]
</script>

<template>
  <SectionShell
    id="about"
    :eyebrow="pick({ en: 'About', bn: 'পরিচিতি' })"
    :title="pick({ en: 'The short version', bn: 'সংক্ষেপে' })"
    :lead="pick(PROFILE.shortBio)"
  >
    <div class="mb-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
      <ProfilePortrait
        variant="about"
        src="/images/profile/hero-mall.png"
        alt="Asif Hasan Tonmoy in a modern city setting"
      />
      <p class="max-w-xl text-sm leading-relaxed text-mist">
        {{
          pick({
            en: 'Educated, skilled, and public-facing without the suit-and-tie act — I show up the way I ship: clear, calm, and ready to work.',
            bn: 'শিক্ষিত, দক্ষ, আর suit-tie ছাড়াই presentable — যেভাবে শিপ করি, সেভাবেই দেখা দিই।',
          })
        }}
      </p>
    </div>

    <div class="grid gap-5 lg:grid-cols-2">
      <dl class="surface-card divide-y divide-steel/50 p-5">
        <div
          v-for="fact in facts"
          :key="fact.label.en"
          class="py-3 first:pt-0 last:pb-0 sm:flex sm:gap-4"
        >
          <dt class="w-32 shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-glow">
            {{ pick(fact.label) }}
          </dt>
          <dd class="mt-1 text-sm text-mist sm:mt-0">{{ pick(fact.value) }}</dd>
        </div>
      </dl>

      <div class="surface-card p-5">
        <h3 class="font-display text-lg font-semibold text-accent-soft">
          {{ pick({ en: 'Teaching & mentoring', bn: 'শিক্ষা ও মেন্টরিং' }) }}
        </h3>
        <ul class="mt-4 space-y-3">
          <li v-for="item in teaching" :key="item.en" class="flex gap-2.5 text-sm text-mist">
            <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {{ pick(item) }}
          </li>
        </ul>
      </div>
    </div>
  </SectionShell>
</template>
