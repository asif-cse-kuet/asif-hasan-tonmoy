<script setup lang="ts">
import { RouterLink } from 'vue-router'

import HeroDecor from '@/components/HeroDecor.vue'
import ProfileLinksStrip from '@/components/home/ProfileLinksStrip.vue'
import TechMarquee from '@/components/home/TechMarquee.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()
</script>

<template>
  <section id="top" class="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-14">
    <HeroDecor />

    <div class="page-wrap relative z-10">
      <p class="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-glow sm:text-sm">
        {{ pick(PROFILE.brandLine) }}
      </p>

      <h1
        class="mt-3 font-display text-[2.6rem] font-bold leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
      >
        {{ PROFILE.name }}
      </h1>

      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
        {{ pick(PROFILE.tagline) }}
      </p>

      <p class="mt-3 max-w-2xl text-sm text-mist/80 sm:text-base">
        {{ pick(PROFILE.shortBio) }}
      </p>

      <div class="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
        <a :href="`mailto:${PROFILE.email}`" class="btn-primary">
          {{ pick({ en: 'Hire me', bn: 'নিয়োগ করুন' }) }}
        </a>
        <RouterLink to="/systems" class="btn-ghost">
          {{ pick({ en: 'System design guide', bn: 'সিস্টেম ডিজাইন গাইড' }) }}
        </RouterLink>
        <RouterLink to="/problems/solved" class="btn-ghost">
          {{ pick({ en: 'Problems I solved', bn: 'সমাধান করা সমস্যা' }) }}
        </RouterLink>
        <RouterLink to="/marketing" class="btn-ghost">
          {{ pick({ en: 'Marketing', bn: 'মার্কেটিং' }) }}
        </RouterLink>
      </div>

      <div class="mt-9">
        <p class="mb-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-mist/70">
          {{ pick({ en: 'Profiles & coding platforms', bn: 'প্রোফাইল ও কোডিং প্ল্যাটফর্ম' }) }}
        </p>
        <ProfileLinksStrip />
      </div>

      <div class="mt-8 border-t border-steel/40 pt-6">
        <TechMarquee />
      </div>
    </div>
  </section>
</template>
