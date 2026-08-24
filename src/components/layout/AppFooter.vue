<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import BrandIcon from '@/components/BrandIcon.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE, PROFILE_LINKS } from '@/content/profile'

const { pick } = useLocaleText()

const pages = computed(() => [
  { to: '/', label: pick({ en: 'Home', bn: 'হোম' }) },
  { to: '/problems/solved', label: pick({ en: 'Problems solved', bn: 'সমাধান করা সমস্যা' }) },
  { to: '/systems', label: pick({ en: 'My Engineering Blog', bn: 'ইঞ্জিনিয়ারিং ব্লগ' }) },
  { to: '/marketing', label: pick({ en: 'Software to business', bn: 'সফটওয়্যার থেকে ব্যবসা' }) },
])
</script>

<template>
  <footer class="mt-16 border-t border-steel/60 bg-ink-soft/50">
    <div class="page-wrap py-10">
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <p class="font-display text-lg font-semibold text-paper">{{ PROFILE.name }}</p>
          <p class="mt-1.5 max-w-sm text-sm text-mist">{{ pick(PROFILE.brandLine) }}</p>
          <a :href="PROFILE.telHref" class="mt-3 mr-4 inline-block text-sm font-semibold">
            {{ PROFILE.phone }}
          </a>
          <a :href="`mailto:${PROFILE.email}`" class="mt-3 inline-block text-sm font-semibold">
            {{ PROFILE.email }}
          </a>
        </div>

        <nav aria-label="Footer pages">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-mist/60">
            {{ pick({ en: 'Pages', bn: 'পেজ' }) }}
          </p>
          <ul class="mt-3 space-y-1.5">
            <li v-for="page in pages" :key="page.to">
              <RouterLink :to="page.to" class="text-sm text-mist no-underline hover:text-glow">
                {{ page.label }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>

      <nav class="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-steel/40 pt-6" aria-label="Profiles">
        <a
          v-for="link in PROFILE_LINKS"
          :key="link.id"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm text-mist no-underline hover:text-glow"
        >
          <BrandIcon :name="link.label" :slug="link.icon" :size="14" />
          {{ link.label }}
        </a>
      </nav>

      <p class="mt-6 text-xs text-mist/70">
        {{ $t('footer.copyright', { year: new Date().getFullYear(), name: PROFILE.name }) }}
      </p>
    </div>
  </footer>
</template>
