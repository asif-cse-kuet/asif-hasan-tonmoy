<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import ExpandableText from '@/components/ExpandableText.vue'
import ProfilePortrait from '@/components/ProfilePortrait.vue'
import ProfileLinksStrip from '@/components/home/ProfileLinksStrip.vue'
import TechMarquee from '@/components/home/TechMarquee.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { heroPortraitSrc } from '@/content/portraits'
import { PROFILE } from '@/content/profile'

const { pick } = useLocaleText()
const stackExpanded = ref(false)
</script>

<template>
  <section id="top" class="relative overflow-hidden pb-10 pt-6 sm:pb-16 sm:pt-14">
    <div class="page-wrap relative z-10">
      <div class="hero-flow">
        <ProfilePortrait
          variant="hero"
          class="hero-flow__portrait"
          :src="heroPortraitSrc()"
          alt="Asif Hasan Tonmoy, portfolio portrait"
        />

        <h1 class="font-display text-[1.85rem] font-bold leading-[1.08] text-paper sm:text-5xl lg:text-7xl">
          {{ PROFILE.name }}
        </h1>

        <ExpandableText
          :text="pick(PROFILE.brandLine)"
          :max-lines="2"
          :min-chars="80"
          class="mt-3 max-w-4xl text-sm font-semibold leading-relaxed text-glow sm:mt-4 sm:text-base"
        />

        <p class="hero-flow__copy mt-4 text-base leading-relaxed text-mist sm:mt-5 sm:text-xl">
          {{ pick(PROFILE.tagline) }}
        </p>

        <ExpandableText
          :text="pick(PROFILE.shortBio)"
          :max-lines="4"
          class="hero-flow__copy mt-3 text-sm leading-relaxed text-mist/80 sm:text-base"
        />

        <div class="hero-flow__actions mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
          <a :href="PROFILE.telHref" class="btn-primary">
            {{ pick({ en: 'Call me', bn: 'কল করুন' }) }}
          </a>
          <a :href="`mailto:${PROFILE.email}`" class="btn-ghost">
            {{ pick({ en: 'Email a brief', bn: 'ব্রিফ পাঠান' }) }}
          </a>
          <RouterLink to="/marketing" class="btn-ghost max-sm:hidden">
            {{ pick({ en: 'Put me in both chairs', bn: 'দুই আসনেই রাখুন' }) }}
          </RouterLink>
          <RouterLink to="/life" class="btn-ghost max-sm:hidden">
            {{ pick({ en: 'Life & travel', bn: 'জীবন ও ভ্রমণ' }) }}
          </RouterLink>
          <RouterLink to="/systems" class="btn-ghost max-sm:hidden">
            {{ pick({ en: 'My Engineering Blog', bn: 'ইঞ্জিনিয়ারিং ব্লগ' }) }}
          </RouterLink>
        </div>
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
              en: 'Comfortable on any stack — deepest hours here',
              bn: 'যেকোনো স্ট্যাকে স্বাচ্ছন্দ্য — সবচেয়ে বেশি ঘণ্টা এখানে',
            })
          }}
        </p>
        <div :class="stackExpanded ? '' : 'hidden sm:block'">
          <TechMarquee />
        </div>
        <button
          type="button"
          class="expandable-text__toggle mt-1 inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-glow sm:hidden"
          :aria-expanded="stackExpanded"
          @click="stackExpanded = !stackExpanded"
        >
          <span class="text-base leading-none" aria-hidden="true">{{ stackExpanded ? '−' : '⋯' }}</span>
          {{
            pick(
              stackExpanded
                ? { en: 'Hide stack', bn: 'স্ট্যাক লুকান' }
                : { en: 'Show stack', bn: 'স্ট্যাক দেখুন' },
            )
          }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-flow {
  overflow: hidden;
}

.hero-flow__portrait {
  float: left;
  margin: 0 0.9rem 0.7rem 0;
  shape-outside: inset(0 round 1.15rem);
}

.hero-flow__copy,
.hero-flow :deep(.hero-flow__copy) {
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
}

.hero-flow__actions {
  clear: both;
}

@media (min-width: 640px) {
  .hero-flow__portrait {
    margin: 0 1.4rem 0.9rem 0;
  }
}

@media (min-width: 1024px) {
  .hero-flow__portrait {
    margin: 0 1.85rem 1.1rem 0;
  }
}
</style>
