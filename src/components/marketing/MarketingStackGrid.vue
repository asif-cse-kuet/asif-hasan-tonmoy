<script setup lang="ts">
import BrandIcon from '@/components/BrandIcon.vue'
import { useLocaleText } from '@/composables/useLocaleText'
import { MARKETING_TECH_GROUPS } from '@/content/tech-stack'

const { pick } = useLocaleText()
</script>

<template>
  <section>
    <h2 class="font-display text-xl font-semibold text-paper">
      {{ pick({ en: 'Channels & stack', bn: 'চ্যানেল ও স্ট্যাক' }) }}
    </h2>
    <div class="mt-4 space-y-6">
      <div v-for="group in MARKETING_TECH_GROUPS" :key="group.id" class="surface-card p-5">
        <h3 class="font-display text-lg text-paper">{{ pick(group.titles) }}</h3>
        <ul class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <li
            v-for="item in group.items"
            :key="item.name"
            class="flex min-h-11 items-center gap-2 rounded-md bg-steel/30 px-3 py-2"
          >
            <BrandIcon :name="item.name" :slug="item.icon" :size="20" />
            <span class="text-sm text-mist">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
