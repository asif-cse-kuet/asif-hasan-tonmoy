<script setup lang="ts">
import { ref } from 'vue'

import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { CAPABILITIES } from '@/content/capabilities'

const { pick } = useLocaleText()
const activeId = ref(CAPABILITIES[0]?.id ?? '')
</script>

<template>
  <SectionShell
    id="expertise"
    :eyebrow="pick({ en: 'Depth', bn: 'গভীরতা' })"
    :title="pick({ en: 'Engineering expertise', bn: 'ইঞ্জিনিয়ারিং দক্ষতা' })"
    :lead="
      pick({
        en: 'Five practice areas, from shipping features to designing systems that survive failure.',
        bn: 'পাঁচটি ক্ষেত্র — ফিচার শিপ করা থেকে ব্যর্থতা সহ্য করা সিস্টেম ডিজাইন পর্যন্ত।',
      })
    "
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

        <div class="mt-6 grid gap-5 md:grid-cols-3">
          <div v-for="cluster in cap.clusters" :key="cluster.titles.en" class="surface-card p-5">
            <h3 class="text-xs font-semibold uppercase tracking-[0.14em] text-glow">
              {{ pick(cluster.titles) }}
            </h3>
            <ul class="mt-3 space-y-1.5">
              <li
                v-for="item in cluster.items"
                :key="item"
                class="flex gap-2 text-sm text-mist"
              >
                <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {{ item }}
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
