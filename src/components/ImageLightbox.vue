<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'

const open = defineModel<boolean>('open', { default: false })
const index = defineModel<number>('index', { default: 0 })

const props = defineProps<{
  images: string[]
  alt?: string
}>()

function close() {
  open.value = false
}

function prev() {
  if (!props.images.length) return
  index.value = (index.value - 1 + props.images.length) % props.images.length
}

function next() {
  if (!props.images.length) return
  index.value = (index.value + 1) % props.images.length
}

function onKey(event: KeyboardEvent) {
  if (!open.value) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowLeft') prev()
  if (event.key === 'ArrowRight') next()
}

watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})

watch(open, (isOpen) => {
  if (isOpen) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open && images.length"
      class="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="alt ?? 'Screenshot gallery'"
      @click.self="close"
    >
      <button
        type="button"
        class="absolute right-4 top-4 rounded border border-steel px-3 py-1.5 text-sm text-paper hover:border-glow"
        @click="close"
      >
        Close
      </button>

      <button
        v-if="images.length > 1"
        type="button"
        class="absolute left-3 top-1/2 -translate-y-1/2 rounded border border-steel px-3 py-2 text-paper hover:border-glow sm:left-6"
        aria-label="Previous image"
        @click="prev"
      >
        ‹
      </button>

      <img
        :src="images[index]"
        :alt="alt ?? 'Project screenshot'"
        class="max-h-[85vh] max-w-[min(96vw,72rem)] rounded border border-steel/60 object-contain shadow-2xl"
      />

      <button
        v-if="images.length > 1"
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-steel px-3 py-2 text-paper hover:border-glow sm:right-6"
        aria-label="Next image"
        @click="next"
      >
        ›
      </button>

      <p v-if="images.length > 1" class="absolute bottom-4 text-sm text-mist">
        {{ index + 1 }} / {{ images.length }}
      </p>
    </div>
  </Teleport>
</template>
