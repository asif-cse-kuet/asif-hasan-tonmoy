<script setup lang="ts">
import { useLocaleText } from '@/composables/useLocaleText'
import { PROOF_METRICS } from '@/content/profile'

const { pick } = useLocaleText()
</script>

<template>
  <section id="proof" class="scroll-mt-24 border-t border-steel/40 py-10 sm:py-12">
    <div class="page-wrap">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
        {{ pick({ en: 'Verifiable proof', bn: 'যাচাইযোগ্য প্রমাণ' }) }}
      </p>
      <dl class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div
          v-for="metric in PROOF_METRICS"
          :key="metric.id"
          class="surface-card px-4 py-3.5"
        >
          <dt class="font-display text-2xl font-bold text-glow sm:text-3xl">{{ metric.value }}</dt>
          <dd class="mt-1 text-xs leading-snug text-mist sm:text-sm">
            {{ pick(metric.label) }}
            <span v-if="metric.source" class="block text-[0.75rem] text-mist/60">
              {{ metric.source }}
            </span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
