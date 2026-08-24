<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import LangToggle from '@/components/LangToggle.vue'
import { PROFILE } from '@/content/profile'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()
const route = useRoute()
const problemsOpen = ref(false)

const primaryLinks = [
  { to: '/engineering', labelKey: 'nav.engineering' },
  { to: '/architecture', labelKey: 'nav.architecture' },
  { to: '/ai', labelKey: 'nav.ai' },
  { to: '/marketing', labelKey: 'nav.marketing' },
  { to: '/work', labelKey: 'nav.work' },
  { to: '/lab', labelKey: 'nav.lab' },
  { to: '/systems', labelKey: 'nav.systems' },
  { to: '/contact', labelKey: 'nav.contact' },
]

const problemLinks = [
  { to: '/problems/solved', labelKey: 'nav.solved' },
  { to: '/problems/industry', labelKey: 'nav.industry' },
]

function isActive(path: string) {
  return route.path === path || route.path.startsWith(`${path}/`)
}

function closeMobile() {
  ui.closeMobileNav()
  problemsOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-steel/60 bg-ink/90 backdrop-blur-md">
    <div class="page-wrap flex items-center justify-between gap-4 py-4">
      <RouterLink
        to="/"
        class="font-display text-lg font-semibold tracking-tight text-paper no-underline hover:text-glow sm:text-xl"
        @click="closeMobile"
      >
        {{ PROFILE.name }}
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
        <RouterLink
          v-for="link in primaryLinks.slice(0, 4)"
          :key="link.to"
          :to="link.to"
          class="rounded px-2.5 py-1.5 text-sm font-medium no-underline transition-colors"
          :class="isActive(link.to) ? 'text-glow' : 'text-mist hover:text-paper'"
        >
          {{ $t(link.labelKey) }}
        </RouterLink>

        <RouterLink
          v-for="link in primaryLinks.slice(4, 7)"
          :key="link.to"
          :to="link.to"
          class="rounded px-2.5 py-1.5 text-sm font-medium no-underline transition-colors"
          :class="isActive(link.to) ? 'text-glow' : 'text-mist hover:text-paper'"
        >
          {{ $t(link.labelKey) }}
        </RouterLink>

        <div class="relative" @mouseleave="problemsOpen = false">
          <button
            type="button"
            class="rounded px-2.5 py-1.5 text-sm font-medium transition-colors"
            :class="route.path.startsWith('/problems') ? 'text-glow' : 'text-mist hover:text-paper'"
            aria-haspopup="true"
            :aria-expanded="problemsOpen"
            @mouseenter="problemsOpen = true"
            @click="problemsOpen = !problemsOpen"
          >
            {{ $t('nav.problems') }} ▾
          </button>
          <div
            v-show="problemsOpen"
            class="absolute left-0 top-full z-50 mt-1 min-w-[11rem] rounded-md border border-steel/80 bg-ink-soft py-1 shadow-lg"
          >
            <RouterLink
              v-for="link in problemLinks"
              :key="link.to"
              :to="link.to"
              class="block px-4 py-2 text-sm no-underline hover:bg-steel/40"
              :class="isActive(link.to) ? 'text-glow' : 'text-mist'"
              @click="problemsOpen = false"
            >
              {{ $t(link.labelKey) }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          :to="primaryLinks[7]!.to"
          class="rounded px-2.5 py-1.5 text-sm font-medium no-underline transition-colors"
          :class="isActive(primaryLinks[7]!.to) ? 'text-glow' : 'text-mist hover:text-paper'"
        >
          {{ $t(primaryLinks[7]!.labelKey) }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <LangToggle class="hidden sm:inline-flex" />
        <button
          type="button"
          class="rounded border border-steel px-3 py-1.5 text-sm text-paper lg:hidden"
          :aria-expanded="ui.mobileNavOpen"
          @click="ui.toggleMobileNav()"
        >
          {{ ui.mobileNavOpen ? $t('nav.close') : $t('nav.menu') }}
        </button>
      </div>
    </div>

    <nav
      v-if="ui.mobileNavOpen"
      class="border-t border-steel/60 bg-ink-soft lg:hidden"
      aria-label="Mobile"
    >
      <div class="page-wrap flex flex-col gap-1 py-4">
        <RouterLink
          v-for="link in primaryLinks"
          :key="link.to"
          :to="link.to"
          class="rounded px-3 py-2 text-sm no-underline hover:bg-steel/30"
          @click="closeMobile"
        >
          {{ $t(link.labelKey) }}
        </RouterLink>
        <p class="px-3 pt-2 text-xs uppercase tracking-wide text-mist">{{ $t('nav.problems') }}</p>
        <RouterLink
          v-for="link in problemLinks"
          :key="link.to"
          :to="link.to"
          class="rounded px-3 py-2 pl-6 text-sm no-underline hover:bg-steel/30"
          @click="closeMobile"
        >
          {{ $t(link.labelKey) }}
        </RouterLink>
        <div class="px-3 pt-3">
          <LangToggle />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
a {
  color: inherit;
}
</style>
