import { onMounted, onUnmounted, ref } from 'vue'

export function usePrefersReducedMotion() {
  const prefersReducedMotion = ref(false)

  let media: MediaQueryList | null = null

  function update() {
    prefersReducedMotion.value = media?.matches ?? false
  }

  onMounted(() => {
    if (typeof window.matchMedia !== 'function') return
    media = window.matchMedia('(prefers-reduced-motion: reduce)')
    update()
    media.addEventListener('change', update)
  })

  onUnmounted(() => {
    media?.removeEventListener('change', update)
  })

  return { prefersReducedMotion }
}
