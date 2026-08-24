import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const mobileNavOpen = ref(false)

  function openMobileNav() {
    mobileNavOpen.value = true
  }

  function closeMobileNav() {
    mobileNavOpen.value = false
  }

  function toggleMobileNav() {
    mobileNavOpen.value = !mobileNavOpen.value
  }

  return { mobileNavOpen, openMobileNav, closeMobileNav, toggleMobileNav }
})
