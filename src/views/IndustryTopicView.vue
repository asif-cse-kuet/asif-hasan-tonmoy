<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { marked } from 'marked'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import DisclaimerBanner from '@/components/DisclaimerBanner.vue'
import PageHero from '@/components/PageHero.vue'
import { loadArticle } from '@/content/articles/loadArticle'
import { getDomainBySlug, getTopicBySlug } from '@/content/industry-topics'
import type { DomainSlug } from '@/content/industry-topics/domains'
import { useLocaleText } from '@/composables/useLocaleText'

const route = useRoute()
const { t, locale } = useI18n()
const { pick, currentLocale } = useLocaleText()

const articleHtml = ref('')
const showArticle = ref(false)

const domainSlug = computed(() => String(route.params.domain) as DomainSlug)
const slug = computed(() => String(route.params.slug))
const topic = computed(() => getTopicBySlug(slug.value))
const domainLabel = computed(() => {
  const d = getDomainBySlug(domainSlug.value)
  return d ? pick(d.titles) : domainSlug.value
})

const canRead = computed(() => topic.value?.status === 'full')
const hasContent = computed(
  () => topic.value && (topic.value.status === 'full' || topic.value.status === 'partial'),
)

async function loadContent() {
  if (!topic.value || topic.value.status === 'stub') return
  const raw = await loadArticle(slug.value, currentLocale.value)
  if (raw) {
    articleHtml.value = marked.parse(raw) as string
  } else {
    articleHtml.value = `<p>${pick(topic.value.summary)}</p>`
  }
}

onMounted(loadContent)
</script>

<template>
  <div class="page-wrap py-10">
    <RouterLink
      :to="`/problems/industry/${domainSlug}`"
      class="text-sm text-glow"
    >
      ← {{ domainLabel }}
    </RouterLink>

    <template v-if="topic">
      <PageHero :title="pick(topic.titles)" :subtitle="pick(topic.summary)" />
      <DisclaimerBanner />

      <p
        class="mb-4 inline-block rounded px-2 py-1 text-xs uppercase tracking-wide"
        :class="{
          'bg-steel/60 text-mist': topic.status === 'stub',
          'bg-accent/20 text-accent-soft': topic.status === 'partial',
          'bg-glow/20 text-glow': topic.status === 'full',
        }"
      >
        {{ topic.status }}
      </p>

      <p v-if="topic.status === 'stub'" class="text-mist">{{ t('common.stubNotice') }}</p>
      <p v-else-if="topic.status === 'partial'" class="text-mist">{{ t('common.partialNotice') }}</p>

      <div v-if="hasContent" class="mt-6 rounded-md border border-steel/60 bg-ink-soft/50 p-5">
        <p class="text-mist">{{ pick(topic.summary) }}</p>
      </div>

      <div v-if="topic.status !== 'stub'" class="mt-6">
        <button
          type="button"
          class="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          :disabled="!canRead"
          @click="showArticle = !showArticle"
        >
          {{
            t('common.readFull', {
              lang: locale === 'bn' ? t('common.bn') : t('common.en'),
            })
          }}
        </button>

        <div
          v-if="showArticle"
          class="prose-invert mt-8 max-w-3xl space-y-4 text-mist"
          v-html="articleHtml"
        />
      </div>
    </template>

    <p v-else class="mt-8 text-mist">{{ t('common.comingSoon') }}</p>
  </div>
</template>
