<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useLocaleText } from '@/composables/useLocaleText'
import SearchField from '@/components/SearchField.vue'
import { formatLesson, TOPICS } from '@/content/industry-topics'
import { SYSTEM_CONCEPTS, getSystemConceptBySlug } from '@/content/systems'
import type { TopicDifficulty } from '@/content/types'
import { useUiStore } from '@/stores/ui'

const { pick } = useLocaleText()
const route = useRoute()
const ui = useUiStore()
const query = ref('')

const activeSlug = computed(() => String(route.params.slug ?? ''))

const tracks: { id: TopicDifficulty; titles: { en: string; bn: string } }[] = [
  { id: 'intro', titles: { en: 'Beginner', bn: 'শুরুর ধাপ' } },
  { id: 'intermediate', titles: { en: 'Intermediate', bn: 'মাঝারি ধাপ' } },
  { id: 'advanced', titles: { en: 'Advanced', bn: 'উন্নত ধাপ' } },
]

function conceptTitle(slug: string) {
  return getSystemConceptBySlug(slug)
}

const filteredTracks = computed(() => {
  const q = query.value.trim().toLowerCase()
  return tracks.map((track) => {
    const topics = TOPICS.filter((topic) => {
      if (topic.difficulty !== track.id) return false
      if (!q) return true
      return `${formatLesson(topic.lesson)} ${topic.titles.en} ${topic.titles.bn} ${topic.slug} ${topic.domain}`
        .toLowerCase()
        .includes(q)
    })
    return { track, topics }
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
      <p class="mt-1 px-1 text-xs leading-snug text-mist/80">
        {{
          pick({
            en: 'Read in order: beginner → intermediate → advanced.',
            bn: 'ক্রম ধরে পড়ুন: শুরু → মাঝারি → উন্নত।',
          })
        }}
      </p>
      <SearchField
        v-model="query"
        input-class="mt-2 w-full rounded-md border border-steel/70 bg-ink px-3 py-2 text-sm text-paper placeholder:text-mist/50"
        :placeholder="pick({ en: 'Filter numbered topics…', bn: 'নম্বর দিয়ে টপিক খুঁজুন…' })"
      />
    </div>

    <nav class="flex-1 overflow-y-auto px-2 py-3" aria-label="Engineering blog topics">
      <RouterLink
        to="/systems"
        class="mb-2 block rounded px-2 py-1.5 text-sm no-underline"
        :class="route.path === '/systems' ? 'bg-accent/15 text-accent-soft' : 'text-mist hover:text-paper'"
        @click="ui.closeBlogNav()"
      >
        {{ pick({ en: 'Reading path', bn: 'পড়ার পথ' }) }}
      </RouterLink>

      <div v-for="entry in filteredTracks" :key="entry.track.id" class="mb-3">
        <p class="px-2 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-glow">
          {{ pick(entry.track.titles) }}
          <span class="font-normal text-mist/70">{{ entry.topics.length }}</span>
        </p>
        <ul class="ml-1">
          <li v-for="topic in entry.topics" :key="topic.slug" class="py-0.5">
            <RouterLink
              :to="`/systems/${topic.domain}/${topic.slug}`"
              class="block rounded px-2 py-1.5 text-xs leading-snug no-underline"
              :class="
                activeSlug === topic.slug && route.path.includes(topic.slug)
                  ? 'bg-glow/15 text-glow'
                  : 'text-mist hover:text-paper'
              "
              @click="ui.closeBlogNav()"
            >
              <span class="font-mono text-accent-soft">{{ formatLesson(topic.lesson) }}.</span>
              {{ pick(topic.titles) }}
            </RouterLink>
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
