<script setup lang="ts">
import { ref } from 'vue'

import ExpandableText from '@/components/ExpandableText.vue'
import GlassAvatar from '@/components/GlassAvatar.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PORTRAITS } from '@/content/portraits'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()
const teachingExpanded = ref(false)

const facts = [
  {
    label: { en: 'Designation', bn: 'পদবি' },
    value: PROFILE.designation,
  },
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
      en: 'Open for owners who need one hire to handle clients, architect the solution, and ship — Tech Lead, architecture, Growth Director, or both chairs.',
      bn: 'যে মালিক এক নিয়োগে ক্লায়েন্ট হ্যান্ডেল, সলিউশন আর্কিটেক্ট ও শিপ চান — টেক লিড, আর্কিটেকচার, গ্রোথ ডিরেক্টর, বা দুই আসন।',
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
    :lead="pick(PROFILE.aboutLead)"
    :lead-max-lines="2"
  >
    <div class="glass-panel mb-6 flex flex-col items-start gap-5 p-5 sm:flex-row sm:items-center">
      <GlassAvatar :src="PORTRAITS.avatars.about" alt="Asif Hasan Tonmoy" size="lg" />
      <p class="max-w-xl text-sm leading-relaxed text-mist">
        {{
          pick({
            en: 'Client-facing when the room needs an owner, technical when the CTO needs a peer. I translate business into buildable scope — then stay accountable through delivery.',
            bn: 'রুমে মালিক দরকার হলে ক্লায়েন্ট-facing, CTO-র পিয়ার দরকার হলে টেকনিক্যাল। ব্যবসাকে বিল্ডযোগ্য স্কোপে অনুবাদ করি — তারপর ডেলিভারি পর্যন্ত জবাবদিহি থাকি।',
          })
        }}
      </p>
    </div>

    <div class="grid gap-5 lg:grid-cols-2">
      <dl class="surface-card divide-y divide-steel/50 p-5">
        <div
          v-for="(fact, index) in facts"
          :key="fact.label.en"
          class="py-3 first:pt-0 last:pb-0 sm:flex sm:gap-4"
          :class="index === 0 ? 'border-b border-steel/40 pb-4 sm:pb-4' : ''"
        >
          <dt class="w-32 shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-glow">
            {{ pick(fact.label) }}
          </dt>
          <dd
            class="mt-1 text-sm sm:mt-0"
            :class="index === 0 ? 'font-medium leading-relaxed text-paper' : 'text-mist'"
          >
            {{ pick(fact.value) }}
          </dd>
        </div>
      </dl>

      <div class="surface-card p-5">
        <h3 class="font-display text-lg font-semibold text-accent-soft">
          {{ pick({ en: 'Teaching & mentoring', bn: 'শিক্ষা ও মেন্টরিং' }) }}
        </h3>
        <ul class="mt-4 space-y-3">
          <li
            v-for="(item, index) in teaching"
            :key="item.en"
            class="flex gap-2.5 text-sm text-mist"
            :class="index > 0 && !teachingExpanded ? 'hidden sm:flex' : ''"
          >
            <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {{ pick(item) }}
          </li>
        </ul>
        <button
          v-if="teaching.length > 1"
          type="button"
          class="expandable-text__toggle mt-3 inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-glow sm:hidden"
          :aria-expanded="teachingExpanded"
          @click="teachingExpanded = !teachingExpanded"
        >
          <span class="text-base leading-none" aria-hidden="true">{{ teachingExpanded ? '−' : '⋯' }}</span>
          {{
            pick(
              teachingExpanded
                ? { en: 'Less', bn: 'কম' }
                : { en: 'More', bn: 'আরও' },
            )
          }}
        </button>
      </div>
    </div>
  </SectionShell>
</template>
