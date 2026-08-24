<script setup lang="ts">
import { RouterView } from 'vue-router'

import SiteAtmosphere from '@/components/SiteAtmosphere.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
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
