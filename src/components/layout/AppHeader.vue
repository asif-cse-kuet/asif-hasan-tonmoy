<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import LangToggle from '@/components/LangToggle.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROFILE } from '@/content/profile'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()
const route = useRoute()
const { pick } = useLocaleText()

type NavItem = {
  label: string
  hash?: string
  to?: string
}

const items = computed<NavItem[]>(() => [
  { label: pick({ en: 'Expertise', bn: 'দক্ষতা' }), hash: '#expertise' },
  { label: pick({ en: 'Work', bn: 'কাজ' }), hash: '#work' },
  { label: pick({ en: 'Experience', bn: 'অভিজ্ঞতা' }), hash: '#experience' },
  { label: pick({ en: 'Problems solved', bn: 'সমাধান করা সমস্যা' }), to: '/problems/solved' },
  { label: pick({ en: 'System design', bn: 'সিস্টেম ডিজাইন' }), to: '/systems' },
  { label: pick({ en: 'Marketing', bn: 'মার্কেটিং' }), to: '/marketing' },
])

function target(item: NavItem) {
  return item.to ?? { path: '/', hash: item.hash }
}

function isActive(item: NavItem) {
  if (!item.to) return false
  return route.path === item.to || route.path.startsWith(`${item.to}/`)
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-steel/60 bg-ink/90 backdrop-blur-md">
    <div class="page-wrap flex items-center justify-between gap-3 py-3">
      <RouterLink
        to="/"
        class="min-w-0 font-display text-base font-semibold tracking-tight text-paper no-underline hover:text-glow sm:text-lg"
        @click="ui.closeMobileNav()"
      >
        <span class="block truncate">{{ PROFILE.name }}</span>
      </RouterLink>

      <nav class="hidden items-center gap-0.5 lg:flex" aria-label="Main">
        <RouterLink
          v-for="item in items"
          :key="item.label"
          :to="target(item)"
          class="rounded px-2.5 py-1.5 text-sm font-medium no-underline transition-colors"
          :class="isActive(item) ? 'text-glow' : 'text-mist hover:text-paper'"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <LangToggle />
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="hidden rounded-md bg-accent px-3.5 py-1.5 text-sm font-semibold text-paper no-underline hover:bg-accent-soft hover:text-ink sm:inline-block"
        >
          {{ pick({ en: 'Hire me', bn: 'নিয়োগ' }) }}
        </RouterLink>
        <button
          type="button"
          class="rounded border border-steel px-3 py-1.5 text-sm text-paper lg:hidden"
          :aria-expanded="ui.mobileNavOpen"
          aria-controls="mobile-nav"
          @click="ui.toggleMobileNav()"
        >
          {{ ui.mobileNavOpen ? $t('nav.close') : $t('nav.menu') }}
        </button>
      </div>
    </div>

    <nav
      v-if="ui.mobileNavOpen"
      id="mobile-nav"
      class="border-t border-steel/60 bg-ink-soft lg:hidden"
      aria-label="Mobile"
    >
      <div class="page-wrap flex flex-col gap-1 py-3">
        <RouterLink
          v-for="item in items"
          :key="item.label"
          :to="target(item)"
          class="rounded px-3 py-2.5 text-sm no-underline hover:bg-steel/30"
          @click="ui.closeMobileNav()"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="mt-1 rounded bg-accent px-3 py-2.5 text-center text-sm font-semibold text-paper no-underline"
          @click="ui.closeMobileNav()"
        >
          {{ pick({ en: 'Hire me', bn: 'নিয়োগ' }) }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
