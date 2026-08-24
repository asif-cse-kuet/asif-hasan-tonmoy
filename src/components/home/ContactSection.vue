<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE, PROFILE_LINKS } from '@/content/profile'

const { pick } = useLocaleText()
</script>

<template>
  <SectionShell
    id="contact"
    :eyebrow="pick({ en: 'Contact', bn: 'যোগাযোগ' })"
    :title="pick({ en: 'Reach me today', bn: 'আজই যোগাযোগ করুন' })"
    :lead="
      pick({
        en: 'Call, email, or Upwork. I answer like an owner - with a next step, not a brochure.',
        bn: 'কল, ইমেইল বা Upwork। পরবর্তী ধাপ দিয়ে উত্তর - ব্রোশার নয়।',
      })
    "
  >
    <div class="flex flex-wrap gap-3">
      <a :href="PROFILE.telHref" class="btn-primary">{{ pick({ en: 'Call', bn: 'কল' }) }} {{ PROFILE.phone }}</a>
      <a :href="`mailto:${PROFILE.email}`" class="btn-ghost">{{ PROFILE.email }}</a>
      <a
        href="https://www.upwork.com/workwith/asifhasantonmoy"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-ghost"
      >
        {{ pick({ en: 'Hire on Upwork', bn: 'Upwork-এ নিয়োগ' }) }}
      </a>
    </div>

    <ul class="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="link in PROFILE_LINKS" :key="link.id">
        <a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 rounded-lg border border-steel/60 px-3.5 py-3 no-underline transition-colors hover:border-glow/60 hover:bg-ink-soft/60"
        >
          <span class="text-mist transition-colors group-hover:text-glow">
            <BrandIcon :name="link.label" :slug="link.icon" :size="18" />
          </span>
          <span class="min-w-0">
            <span class="block truncate text-sm font-semibold text-paper">{{ link.label }}</span>
            <span v-if="link.handle" class="block truncate text-[0.75rem] text-mist/70">
              {{ link.handle }}
            </span>
          </span>
        </a>
      </li>
    </ul>
  </SectionShell>
</template>
