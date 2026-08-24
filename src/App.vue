<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <AppHeader />
  <main id="main-content">
    <RouterView />
  </main>
  <AppFooter />
</template>
