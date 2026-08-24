<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useLocaleText } from '@/composables/useLocaleText'
import { DOMAINS, getTopicsByDomain } from '@/content/industry-topics'
import { SYSTEM_CONCEPTS, getSystemConceptBySlug } from '@/content/systems'
import { useUiStore } from '@/stores/ui'

const { pick } = useLocaleText()
const route = useRoute()
const ui = useUiStore()
const query = ref('')

const activeDomain = computed(() => String(route.params.domain ?? ''))
const activeSlug = computed(() => String(route.params.slug ?? ''))

const openDomains = ref<Set<string>>(new Set(DOMAINS.map((domain) => domain.slug)))

watch(
  activeDomain,
  (domain) => {
    if (domain) {
      const next = new Set(openDomains.value)
      next.add(domain)
      openDomains.value = next
    }
  },
  { immediate: true },
)

function toggle(domain: string) {
  const next = new Set(openDomains.value)
  if (next.has(domain)) next.delete(domain)
  else next.add(domain)
  openDomains.value = next
}

function conceptTitle(slug: string) {
  return getSystemConceptBySlug(slug)
}

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  return DOMAINS.map((domain) => {
    const topics = getTopicsByDomain(domain.slug).filter((topic) => {
      if (!q) return true
      return `${topic.titles.en} ${topic.titles.bn} ${topic.slug}`.toLowerCase().includes(q)
    })
    const domainHit = !q || `${domain.titles.en} ${domain.titles.bn} ${domain.slug}`.toLowerCase().includes(q)
    return { domain, topics: q && !domainHit ? topics : q ? topics : getTopicsByDomain(domain.slug) }
  }).filter((entry) => (q ? entry.topics.length > 0 : true))
})

const conceptHits = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return SYSTEM_CONCEPTS.slice(0, 8)
  return SYSTEM_CONCEPTS.filter((concept) =>
    `${concept.titles.en} ${concept.titles.bn} ${concept.slug}`.toLowerCase().includes(q),
  )
})
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="border-b border-steel/50 p-3">
      <p class="px-1 font-display text-sm font-semibold text-paper">
        {{ pick({ en: 'My Engineering Blog', bn: 'আমার ইঞ্জিনিয়ারিং ব্লগ' }) }}
      </p>
      <input
        v-model="query"
        type="search"
        class="mt-2 w-full rounded-md border border-steel/70 bg-ink px-3 py-2 text-sm text-paper placeholder:text-mist/50"
        :placeholder="pick({ en: 'Filter topics…', bn: 'টপিক খুঁজুন…' })"
      />
    </div>

    <nav class="flex-1 overflow-y-auto px-2 py-3" aria-label="Engineering blog topics">
      <RouterLink
        to="/systems"
        class="mb-2 block rounded px-2 py-1.5 text-sm no-underline"
        :class="route.path === '/systems' ? 'bg-accent/15 text-accent-soft' : 'text-mist hover:text-paper'"
        @click="ui.closeBlogNav()"
      >
        {{ pick({ en: 'All domains', bn: 'সব ডোমেইন' }) }}
      </RouterLink>

      <div v-for="entry in filtered" :key="entry.domain.slug" class="mb-1">
        <button
          type="button"
          class="flex w-full items-center justify-between rounded px-2 py-1.5 text-left text-sm font-semibold text-paper hover:bg-steel/30"
          :aria-expanded="openDomains.has(entry.domain.slug) || Boolean(query)"
          @click="toggle(entry.domain.slug)"
        >
          <span>{{ pick(entry.domain.titles) }}</span>
          <span class="text-[0.75rem] font-normal text-mist/70">{{ entry.topics.length }}</span>
        </button>
        <ul v-if="openDomains.has(entry.domain.slug) || query" class="ml-2 border-l border-steel/50 pl-2">
          <li v-for="topic in entry.topics" :key="topic.slug" class="py-0.5">
            <RouterLink
              :to="`/systems/${entry.domain.slug}/${topic.slug}`"
              class="block rounded px-2 py-1.5 text-xs leading-snug no-underline"
              :class="
                activeSlug === topic.slug && activeDomain === entry.domain.slug
                  ? 'bg-glow/15 text-glow'
                  : 'text-mist hover:text-paper'
              "
              @click="ui.closeBlogNav()"
            >
              {{ pick(topic.titles) }}
            </RouterLink>
            <ul
              v-if="topic.systemsLinks.length"
              class="ml-2 border-l border-steel/40 pl-2"
            >
              <li v-for="slug in topic.systemsLinks" :key="slug">
                <RouterLink
                  v-if="conceptTitle(slug)"
                  :to="`/systems/concepts/${slug}`"
                  class="block rounded px-2 py-1 text-xs leading-snug no-underline"
                  :class="
                    route.path === `/systems/concepts/${slug}`
                      ? 'bg-glow/15 text-glow'
                      : 'text-mist/80 hover:text-paper'
                  "
                  @click="ui.closeBlogNav()"
                >
                  {{ pick(conceptTitle(slug)!.titles) }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <p class="mt-4 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-mist/60">
        {{ pick({ en: 'Core concepts', bn: 'মূল ধারণা' }) }}
      </p>
      <ul class="mt-1">
        <li v-for="concept in conceptHits" :key="concept.slug">
          <RouterLink
            :to="`/systems/concepts/${concept.slug}`"
            class="block rounded px-2 py-1.5 text-xs no-underline"
            :class="
              route.params.slug === concept.slug && route.path.includes('/concepts/')
                ? 'bg-glow/15 text-glow'
                : 'text-mist hover:text-paper'
            "
            @click="ui.closeBlogNav()"
          >
            {{ pick(concept.titles) }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
