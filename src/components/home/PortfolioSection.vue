<script setup lang="ts">
import { computed, ref } from 'vue'

import ImageLightbox from '@/components/ImageLightbox.vue'
import ProjectCard from '@/components/home/ProjectCard.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { PROJECTS } from '@/content/projects'
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

/** SuperCards + SupportPro share one row (2-up); everything else grids 3-up on xl. */
const FLAGSHIP_SLUGS = new Set(['supercards', 'ticketing-system'])

function liveLinkScore(project: (typeof PROJECTS)[number]) {
  return project.links.some((link) => !link.url.includes('github.com')) ? 0 : project.links.length ? 1 : 2
}

const visible = computed(() => {
  let list = PROJECTS
  if (active.value === 'featured') list = PROJECTS.filter((project) => project.featured)
  else if (active.value !== 'all') list = PROJECTS.filter((project) => project.tier === active.value)

  return [...list].sort((a, b) => liveLinkScore(a) - liveLinkScore(b))
})

const flagshipProjects = computed(() => visible.value.filter((project) => FLAGSHIP_SLUGS.has(project.slug)))

const gridProjects = computed(() => visible.value.filter((project) => !FLAGSHIP_SLUGS.has(project.slug)))

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

    <div v-if="flagshipProjects.length" class="mt-6 grid gap-4 md:grid-cols-2">
      <ProjectCard
        v-for="project in flagshipProjects"
        :key="project.slug"
        :project="project"
        @open-gallery="openGallery(project, $event)"
      />
    </div>

    <div
      v-if="gridProjects.length"
      class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      :class="flagshipProjects.length ? 'mt-4' : 'mt-6'"
    >
      <ProjectCard
        v-for="project in gridProjects"
        :key="project.slug"
        :project="project"
        @open-gallery="openGallery(project, $event)"
      />
    </div>

    <ImageLightbox
      v-model:open="lightboxOpen"
      v-model:index="lightboxIndex"
      :images="lightboxImages"
      :alt="lightboxAlt"
    />
  </SectionShell>
</template>
