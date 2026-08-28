<script setup lang="ts">
import { computed, ref } from 'vue'

import BrandIcon from '@/components/BrandIcon.vue'
import SkillMark from '@/components/SkillMark.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { CAPABILITIES } from '@/content/capabilities'
import { resolveTechIcon } from '@/content/tech-stack'

const { pick } = useLocaleText()
const activeId = ref(CAPABILITIES[0]?.id ?? '')

const lead = computed(() =>
  pick({
    en: `${CAPABILITIES.length} practice areas I work in. Brand icons mark frameworks and libraries; craft marks mark concepts. Click an area to read the language I use there.`,
    bn: `${CAPABILITIES.length}টি কাজের ক্ষেত্র। ফ্রেমওয়ার্ক ও লাইব্রেরিতে ব্র্যান্ড আইকন; ধারণায় ক্রাফট মার্ক। একটি ক্ষেত্র বেছে নিন।`,
  }),
)

function iconSlug(item: string) {
  return resolveTechIcon(item)
}
</script>

<template>
  <SectionShell
    id="expertise"
    :eyebrow="pick({ en: 'Depth', bn: 'গভীরতা' })"
    :title="pick({ en: 'How I actually work a problem', bn: 'একটা সমস্যা আমি কীভাবে ভাঙি' })"
    :lead="lead"
  >
    <div
      class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      role="tablist"
    >
      <button
        v-for="cap in CAPABILITIES"
        :key="cap.id"
        type="button"
        role="tab"
        :aria-selected="activeId === cap.id"
        class="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
        :class="
          activeId === cap.id
            ? 'border-accent bg-accent/15 text-accent-soft'
            : 'border-steel/70 text-mist hover:border-glow/50 hover:text-paper'
        "
        @click="activeId = cap.id"
      >
        {{ pick(cap.titles) }}
      </button>
    </div>

    <div v-for="cap in CAPABILITIES" :key="cap.id">
      <div v-if="activeId === cap.id" class="mt-6">
        <p class="max-w-3xl font-display text-xl text-paper sm:text-2xl">
          {{ pick(cap.headline) }}
        </p>

        <div class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div v-for="cluster in cap.clusters" :key="cluster.titles.en" class="surface-card p-5">
            <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-glow">
              {{ pick(cluster.titles) }}
            </h3>
            <ul class="mt-3 grid grid-cols-1 gap-2">
              <li
                v-for="item in cluster.items"
                :key="item"
                class="flex items-center gap-2.5 rounded-md border border-steel/40 bg-ink/30 px-2.5 py-2 text-sm text-paper/90"
              >
                <span class="shrink-0 text-mist">
                  <BrandIcon
                    v-if="iconSlug(item)"
                    :name="item"
                    :slug="iconSlug(item)"
                    :size="24"
                  />
                  <SkillMark v-else :label="item" />
                </span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <ul v-if="cap.proof?.length" class="mt-5 space-y-2">
          <li
            v-for="proof in cap.proof"
            :key="proof.en"
            class="rounded-md border border-glow/30 bg-glow/10 px-4 py-2.5 text-sm text-paper/90"
          >
            {{ pick(proof) }}
          </li>
        </ul>
      </div>
    </div>
  </SectionShell>
</template>
