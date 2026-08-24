import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const mobileNavOpen = ref(false)
  const blogNavOpen = ref(false)

  function closeMobileNav() {
    mobileNavOpen.value = false
  }

  function toggleMobileNav() {
    mobileNavOpen.value = !mobileNavOpen.value
  }

  function closeBlogNav() {
    blogNavOpen.value = false
  }

  function toggleBlogNav() {
    blogNavOpen.value = !blogNavOpen.value
  }

  return {
    mobileNavOpen,
    blogNavOpen,
    closeMobileNav,
    toggleMobileNav,
    closeBlogNav,
    toggleBlogNav,
  }
})
