<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
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
  { label: pick({ en: 'Projects', bn: 'প্রজেক্ট' }), hash: '#projects' },
  { label: pick({ en: 'Experience', bn: 'অভিজ্ঞতা' }), hash: '#experience' },
  { label: pick({ en: 'Problems solved', bn: 'সমাধান' }), to: '/problems/solved' },
  { label: pick({ en: 'My Engineering Blog', bn: 'ইঞ্জিনিয়ারিং ব্লগ' }), to: '/systems' },
  { label: pick({ en: 'Software to business', bn: 'সফটওয়্যার থেকে ব্যবসা' }), to: '/marketing' },
])

function target(item: NavItem) {
  return item.to ?? { path: '/', hash: item.hash }
}

function isActive(item: NavItem) {
  if (!item.to) return false
  return route.path === item.to || route.path.startsWith(`${item.to}/`)
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') ui.closeMobileNav()
}

watch(
  () => ui.mobileNavOpen,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-steel/50 bg-ink/80 backdrop-blur-md">
    <div class="page-wrap flex items-center justify-between gap-3 py-3">
      <RouterLink
        to="/"
        class="min-w-0 font-display text-sm font-semibold leading-tight tracking-tight text-paper no-underline hover:text-glow sm:text-lg"
        @click="ui.closeMobileNav()"
      >
        {{ PROFILE.name }}
      </RouterLink>

      <nav class="hidden items-center lg:flex" aria-label="Main">
        <RouterLink
          v-for="item in items"
          :key="item.label"
          :to="target(item)"
          class="rounded px-2 py-1.5 text-[0.8rem] font-medium no-underline transition-colors lg:text-sm"
          :class="isActive(item) ? 'text-glow' : 'text-mist hover:text-paper'"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="flex shrink-0 items-center gap-2">
        <LangToggle />
        <a
          :href="PROFILE.telHref"
          class="hidden rounded-md border border-steel px-3 py-1.5 text-sm font-semibold text-paper no-underline hover:border-glow hover:text-glow md:inline-block"
        >
          {{ pick({ en: 'Call', bn: 'কল' }) }}
        </a>
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
  </header>

  <Teleport to="body">
    <div
      v-if="ui.mobileNavOpen"
      class="fixed inset-0 z-[60] lg:hidden"
    >
      <button
        type="button"
        class="absolute inset-0 bg-ink/65 backdrop-blur-[2px]"
        :aria-label="pick({ en: 'Close menu', bn: 'মেনু বন্ধ' })"
        @click="ui.closeMobileNav()"
      />
      <nav
        id="mobile-nav"
        class="absolute right-3 top-[4.35rem] w-[min(22rem,calc(100vw-1.5rem))] rounded-xl border border-steel/70 bg-ink-soft p-2 shadow-[0_18px_50px_rgb(0_0_0_/_0.45)]"
        aria-label="Mobile"
      >
        <RouterLink
          v-for="item in items"
          :key="item.label"
          :to="target(item)"
          class="block rounded-lg px-3 py-2.5 text-sm no-underline hover:bg-steel/30"
          @click="ui.closeMobileNav()"
        >
          {{ item.label }}
        </RouterLink>
        <a
          :href="PROFILE.telHref"
          class="block rounded-lg px-3 py-2.5 text-sm no-underline hover:bg-steel/30"
          @click="ui.closeMobileNav()"
        >
          {{ pick({ en: 'Call me', bn: 'কল করুন' }) }} · {{ PROFILE.phone }}
        </a>
        <RouterLink
          :to="{ path: '/', hash: '#contact' }"
          class="mt-1 block rounded-lg bg-accent px-3 py-2.5 text-center text-sm font-semibold text-paper no-underline"
          @click="ui.closeMobileNav()"
        >
          {{ pick({ en: 'Hire me', bn: 'নিয়োগ' }) }}
        </RouterLink>
      </nav>
    </div>
  </Teleport>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
