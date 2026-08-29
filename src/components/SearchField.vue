<script setup lang="ts">
const model = defineModel<string>({ default: '' })

defineProps<{
  placeholder?: string
  inputClass?: string
}>()

/** Prevent duplicate paste on some macOS / IME + browser combos. */
function onPaste(event: ClipboardEvent) {
  const pasted = event.clipboardData?.getData('text/plain')
  if (!pasted) return

  event.preventDefault()
  const input = event.currentTarget as HTMLInputElement
  const start = input.selectionStart ?? model.value.length
  const end = input.selectionEnd ?? start
  model.value = model.value.slice(0, start) + pasted + model.value.slice(end)

  requestAnimationFrame(() => {
    const pos = start + pasted.length
    input.setSelectionRange(pos, pos)
  })
}
</script>

<template>
  <input
    v-model="model"
    type="search"
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
    :class="inputClass"
    :placeholder="placeholder"
    @paste="onPaste"
  />
</template>
