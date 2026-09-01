<script setup lang="ts">
import { computed, ref } from 'vue'

import BrandIcon from '@/components/BrandIcon.vue'
import ImageLightbox from '@/components/ImageLightbox.vue'
import ProjectCover from '@/components/ProjectCover.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROJECTS } from '@/content/projects'
import { resolveTechIcon } from '@/content/tech-stack'
import type { ProjectTier } from '@/content/types'

const { pick } = useLocaleText()

type Filter = 'featured' | ProjectTier | 'all'

const filters = computed<{ id: Filter; label: string }[]>(() => [
  { id: 'featured', label: pick({ en: 'Featured', bn: 'নির্বাচিত' }) },
  { id: 'T1', label: pick({ en: 'Production', bn: 'প্রোডাকশন' }) },
  { id: 'T2', label: pick({ en: 'Supporting', bn: 'সহায়ক' }) },
  { id: 'archive', label: pick({ en: 'Archive', bn: 'আর্কাইভ' }) },
  { id: 'all', label: pick({ en: 'All', bn: 'সব' }) },
])

const active = ref<Filter>('featured')
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const lightboxImages = ref<string[]>([])
const lightboxAlt = ref('')

function liveLinkScore(project: (typeof PROJECTS)[number]) {
  return project.links.some((link) => !link.url.includes('github.com')) ? 0 : project.links.length ? 1 : 2
}

/** Large production builds get a full row on desktop — nothing else shares that row. */
const FULL_ROW_SLUGS = new Set(['supercards', 'ticketing-system'])

function isFullRowProject(slug: string) {
  return FULL_ROW_SLUGS.has(slug)
}

const visible = computed(() => {
  let list = PROJECTS
  if (active.value === 'featured') list = PROJECTS.filter((project) => project.featured)
  else if (active.value !== 'all') list = PROJECTS.filter((project) => project.tier === active.value)

  return [...list].sort((a, b) => liveLinkScore(a) - liveLinkScore(b))
})

function projectImages(project: (typeof PROJECTS)[number]) {
  const cover = coverFor(project.slug)
  const gallery = project.gallery ?? []
  return cover ? [cover, ...gallery.filter((src) => src !== cover)] : gallery
}

function coverFor(slug: string) {
  const map: Record<string, string> = {
    'ticketing-system': '/images/projects/supportpro-live.png',
    supercards: '/images/projects/supercards-dashboard.png',
    'tree-explorer': '/images/projects/tree-explorer.png',
  }
  return map[slug]
}

function openGallery(project: (typeof PROJECTS)[number], start = 0) {
  const images = projectImages(project)
  if (!images.length) return
  lightboxImages.value = images
  lightboxIndex.value = start
  lightboxAlt.value = pick(project.titles)
  lightboxOpen.value = true
}
</script>

<template>
  <SectionShell
    id="projects"
    :eyebrow="pick({ en: 'Projects', bn: 'প্রজেক্ট' })"
    :title="pick({ en: 'Things that left the laptop', bn: 'ল্যাপটপ ছেড়ে যাওয়া কাজ' })"
    :lead="
      pick({
        en: 'Live products first — then demos and repos where they exist. Company builds like SuperCards ship without public code.',
        bn: 'আগে লাইভ প্রোডাক্ট — তারপর ডেমো ও রিপো। SuperCards-এর মতো কোম্পানি বিল্ডে পাবলিক কোড নেই।',
      })
    "
  >
    <div class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
      <button
        v-for="filter in filters"
        :key="filter.id"
        type="button"
        class="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
        :class="
          active === filter.id
            ? 'border-accent bg-accent/15 text-accent-soft'
            : 'border-steel/70 text-mist hover:border-glow/50 hover:text-paper'
        "
        @click="active = filter.id"
      >
        {{ filter.label }}
      </button>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="project in visible"
        :key="project.slug"
        class="surface-card flex flex-col overflow-hidden transition-colors hover:border-glow/40"
        :class="isFullRowProject(project.slug) ? 'md:col-span-2 xl:col-span-3' : ''"
      >
        <button
          type="button"
          class="block w-full text-left"
          :class="project.gallery?.length ? 'cursor-zoom-in' : 'cursor-default'"
          :disabled="!project.gallery?.length"
          @click="project.gallery?.length ? openGallery(project, 0) : undefined"
        >
          <ProjectCover :slug="project.slug" :title="pick(project.titles)" :tags="project.tags" />
        </button>
        <div
          v-if="project.gallery?.length"
          class="grid grid-cols-2 gap-1 border-b border-steel/40 bg-ink/30 p-2 md:grid-cols-4"
        >
          <button
            v-for="(shot, shotIndex) in project.gallery"
            :key="shot"
            type="button"
            class="group overflow-hidden rounded border border-steel/50 hover:border-glow/60"
            @click="openGallery(project, shotIndex + 1)"
          >
            <img
              :src="shot"
              :alt="`${pick(project.titles)} screenshot`"
              class="h-20 w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </button>
        </div>
        <div class="flex flex-1 flex-col p-5">
          <div class="flex items-start justify-between gap-3">
            <h3 class="font-display text-lg font-semibold leading-snug text-paper">
              {{ pick(project.titles) }}
            </h3>
            <span
              class="shrink-0 rounded border border-steel/60 px-1.5 py-0.5 text-[0.75rem] uppercase tracking-wide text-mist/70"
            >
              {{ project.tier }}
            </span>
          </div>
          <p class="mt-2.5 flex-1 text-sm leading-relaxed text-mist">{{ pick(project.summary) }}</p>
          <ul class="mt-4 flex flex-wrap gap-1.5">
            <li
              v-for="tech in project.stack"
              :key="tech"
              class="flex items-center gap-1 rounded border border-steel/60 bg-ink/40 px-2 py-1 text-[0.75rem] text-paper/85"
            >
              <span class="text-mist"><BrandIcon :name="tech" :slug="resolveTechIcon(tech)" :size="12" /></span>
              {{ tech }}
            </li>
          </ul>
          <div v-if="project.links.length" class="mt-4 flex flex-wrap gap-3">
            <a
              v-for="link in project.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-semibold"
            >
              {{ link.label }} ↗
            </a>
          </div>
          <button
            v-if="project.gallery?.length"
            type="button"
            class="mt-4 self-start text-sm font-semibold text-glow hover:text-accent-soft"
            @click="openGallery(project, 0)"
          >
            {{ pick({ en: 'View screenshots', bn: 'স্ক্রিনশট দেখুন' }) }}
          </button>
        </div>
      </article>
    </div>

    <ImageLightbox
      v-model:open="lightboxOpen"
      v-model:index="lightboxIndex"
      :images="lightboxImages"
      :alt="lightboxAlt"
    />
  </SectionShell>
</template>
