<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'

import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

const SiteAtmosphere = defineAsyncComponent(() => import('@/components/SiteAtmosphere.vue'))
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <SiteAtmosphere />
  <div class="relative z-10">
    <AppHeader />
    <main id="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
