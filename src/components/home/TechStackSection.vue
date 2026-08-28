<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import SectionShell from '@/components/home/SectionShell.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { TECH_GROUPS } from '@/content/tech-stack'

const { pick } = useLocaleText()
</script>

<template>
  <SectionShell
    id="stack"
    :eyebrow="pick({ en: 'Toolkit', bn: 'টুলকিট' })"
    :title="pick({ en: 'Tech stack & technical vocabulary', bn: 'টেক স্ট্যাক ও কৌশলগত পরিভাষা' })"
    :lead="
      pick({
        en: 'Stack-agnostic in practice: I ramp quickly on new languages and frameworks. These are the tools I ship with most often today — listed plainly, without invented skill scores.',
        bn: 'স্ট্যাক-অ্যাগনস্টিক: নতুন ভাষা ও ফ্রেমওয়ার্কে দ্রুত ওঠি। নিচে আজকে যেগুলো দিয়ে বেশি শিপ করি — বানানো স্কোর ছাড়াই সরাসরি তালিকা।',
      })
    "
  >
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="group in TECH_GROUPS" :key="group.id" class="surface-card p-5">
        <h3 class="font-display text-lg font-semibold text-glow">{{ pick(group.titles) }}</h3>
        <ul class="mt-4 flex flex-wrap gap-2">
          <li
            v-for="item in group.items"
            :key="item.name"
            class="flex items-center gap-2 rounded-md border border-steel/60 bg-ink/40 px-2.5 py-2 text-xs text-paper/90"
          >
            <span class="text-mist"><BrandIcon :name="item.name" :slug="item.icon" :size="20" /></span>
            {{ item.name }}
          </li>
        </ul>
      </article>
    </div>
  </SectionShell>
</template>
