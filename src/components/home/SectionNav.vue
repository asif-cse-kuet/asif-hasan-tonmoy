<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import { useLocaleText } from '@/composables/useLocaleText'

const { pick } = useLocaleText()

const sections = computed(() => [
  { id: 'proof', label: pick({ en: 'Proof', bn: 'প্রমাণ' }) },
  { id: 'expertise', label: pick({ en: 'Expertise', bn: 'দক্ষতা' }) },
  { id: 'stack', label: pick({ en: 'Stack', bn: 'স্ট্যাক' }) },
  { id: 'work', label: pick({ en: 'Work', bn: 'কাজ' }) },
  { id: 'experience', label: pick({ en: 'Experience', bn: 'অভিজ্ঞতা' }) },
  { id: 'research', label: pick({ en: 'Research', bn: 'গবেষণা' }) },
  { id: 'coding', label: pick({ en: 'Coding', bn: 'কোডিং' }) },
  { id: 'deep-dives', label: pick({ en: 'Libraries', bn: 'লাইব্রেরি' }) },
  { id: 'services', label: pick({ en: 'Services', bn: 'সেবা' }) },
  { id: 'about', label: pick({ en: 'About', bn: 'পরিচিতি' }) },
  { id: 'contact', label: pick({ en: 'Contact', bn: 'যোগাযোগ' }) },
])

const active = ref('')
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) active.value = visible.target.id
    },
    { rootMargin: '-30% 0px -60% 0px' },
  )

  for (const section of sections.value) {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <nav
    class="sticky top-[3.75rem] z-30 border-y border-steel/40 bg-ink/85 backdrop-blur-md"
    aria-label="Page sections"
  >
    <div class="page-wrap">
      <ul class="-mx-4 flex gap-1 overflow-x-auto px-4 py-2 sm:mx-0 sm:px-0">
        <li v-for="section in sections" :key="section.id" class="shrink-0">
          <a
            :href="`#${section.id}`"
            class="block rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-wide no-underline transition-colors sm:text-[0.7rem]"
            :class="active === section.id ? 'text-accent-soft' : 'text-mist/70 hover:text-paper'"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
ul {
  scrollbar-width: none;
}

ul::-webkit-scrollbar {
  display: none;
}
</style>
