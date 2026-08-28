<script setup lang="ts">
import GlassAvatar from '@/components/GlassAvatar.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { HIRE_SEATS, SERVICE_PITCHES } from '@/content/capabilities'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()
</script>

<template>
  <SectionShell
    id="services"
    :eyebrow="pick({ en: 'For founders & hiring teams', bn: 'ফাউন্ডার ও হায়ারিং টিমের জন্য' })"
    :title="pick({ en: 'Three seats. One hire.', bn: 'তিন আসন। এক নিয়োগ।' })"
    :lead="
      pick({
        en: 'Owners usually split product, engineering, and growth across people who then argue. I take the brief, own the plan, and ship the outcome.',
        bn: 'মালিকরা সাধারণত প্রোডাক্ট, ইঞ্জিনিয়ারিং ও গ্রোথ আলাদা লোকে ভাগ করেন, তারপর তারা তর্ক করেন। আমি ব্রিফ নিই, প্ল্যান মালিকানা করি, আউটকাম শিপ করি।',
      })
    "
  >
    <div class="mb-8 flex items-center gap-3.5 sm:gap-4">
      <GlassAvatar src="/images/profile/avatars/avatar-crossed.png?v=6" />
      <p class="text-sm text-mist/80 sm:text-base">
        {{
          pick({
            en: 'Same person for the client call, the architecture, and the ship date — calm delivery, clear next step.',
            bn: 'ক্লায়েন্ট কল, আর্কিটেকচার ও শিপ ডেট — একই মানুষ; শান্ত ডেলিভারি, পরিষ্কার পরের ধাপ।',
          })
        }}
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <article
        v-for="pitch in SERVICE_PITCHES"
        :key="pitch.id"
        class="surface-card flex flex-col p-5"
      >
        <h3 class="font-display text-xl font-semibold text-accent-soft">{{ pick(pitch.titles) }}</h3>
        <p class="mt-2 text-sm font-medium text-paper">{{ pick(pitch.outcome) }}</p>
        <ul class="mt-4 flex-1 space-y-2">
          <li
            v-for="bullet in pitch.bullets"
            :key="bullet.en"
            class="flex gap-2 text-sm text-mist"
          >
            <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-glow" />
            {{ pick(bullet) }}
          </li>
        </ul>
      </article>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-3">
      <article v-for="seat in HIRE_SEATS" :key="seat.id" class="rounded-lg border border-glow/30 bg-glow/10 p-5">
        <h3 class="font-display text-lg font-semibold text-glow">{{ pick(seat.titles) }}</h3>
        <p class="mt-2 text-sm text-paper/90">{{ pick(seat.pitch) }}</p>
      </article>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <a :href="PROFILE.telHref" class="btn-primary">
        {{ pick({ en: 'Call now', bn: 'এখনই কল' }) }} · {{ PROFILE.phone }}
      </a>
      <a :href="`mailto:${PROFILE.email}`" class="btn-ghost">
        {{ pick({ en: 'Email a brief', bn: 'ব্রিফ পাঠান' }) }}
      </a>
    </div>
  </SectionShell>
</template>
