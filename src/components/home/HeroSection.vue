<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ProfilePortrait from '@/components/ProfilePortrait.vue'
import ProfileLinksStrip from '@/components/home/ProfileLinksStrip.vue'
import TechMarquee from '@/components/home/TechMarquee.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()
</script>

<template>
  <section id="top" class="relative overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-14">
    <div class="page-wrap relative z-10">
      <div class="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
        <div class="min-w-0">
          <h1
            class="font-display text-[2.6rem] font-bold leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
          >
            {{ PROFILE.name }}
          </h1>

          <p class="mt-4 max-w-4xl text-sm font-semibold leading-relaxed text-glow sm:text-base">
            {{ pick(PROFILE.brandLine) }}
          </p>

          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
            {{ pick(PROFILE.tagline) }}
          </p>

          <p class="mt-3 max-w-3xl text-sm leading-relaxed text-mist/80 sm:text-base">
            {{ pick(PROFILE.shortBio) }}
          </p>

          <div class="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
            <a :href="PROFILE.telHref" class="btn-primary">
              {{ pick({ en: 'Call me', bn: 'কল করুন' }) }}
            </a>
            <a :href="`mailto:${PROFILE.email}`" class="btn-ghost">
              {{ pick({ en: 'Email a brief', bn: 'ব্রিফ পাঠান' }) }}
            </a>
            <RouterLink to="/marketing" class="btn-ghost">
              {{ pick({ en: 'Put me in both chairs', bn: 'দুই আসনেই রাখুন' }) }}
            </RouterLink>
            <RouterLink to="/life" class="btn-ghost">
              {{ pick({ en: 'Life & travel', bn: 'জীবন ও ভ্রমণ' }) }}
            </RouterLink>
            <RouterLink to="/systems" class="btn-ghost">
              {{ pick({ en: 'My Engineering Blog', bn: 'ইঞ্জিনিয়ারিং ব্লগ' }) }}
            </RouterLink>
          </div>
        </div>

        <ProfilePortrait
          variant="hero"
          src="/images/profile/about-panjabi.png"
          alt="Asif Hasan Tonmoy — professional portrait, relaxed formal wear"
        />
      </div>

      <div class="mt-9">
        <p class="mb-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-mist/70">
          {{ pick({ en: 'Profiles & coding platforms', bn: 'প্রোফাইল ও কোডিং প্ল্যাটফর্ম' }) }}
        </p>
        <ProfileLinksStrip />
      </div>

      <div class="mt-8 border-t border-steel/40 pt-6">
        <p class="mb-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-mist/70">
          {{
            pick({
              en: 'Vue, Quasar, Pinia, Laravel, PHP & JS OOP',
              bn: 'Vue, Quasar, Pinia, Laravel, PHP ও JS OOP',
            })
          }}
        </p>
        <TechMarquee />
      </div>
    </div>
  </section>
</template>
