<script setup lang="ts">
import { Marked } from 'marked'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{ markdown: string }>()

const root = ref<HTMLElement | null>(null)

/** Mermaid fences become placeholders so we can render them after mount. */
const md = new Marked({ gfm: true, breaks: false }).use({
  renderer: {
    code(token) {
      if (token.lang !== 'mermaid') return false
      return `<div class="mermaid-host" data-graph="${encodeURIComponent(token.text)}"></div>`
    },
  },
})

const html = computed(() => md.parse(props.markdown, { async: false }))

let mermaidReady: Promise<typeof import('mermaid').default> | null = null

function loadMermaid() {
  if (!mermaidReady) {
    mermaidReady = import('mermaid').then((mod) => {
      mod.default.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'strict',
        fontFamily: '"Source Sans 3", system-ui, sans-serif',
        themeVariables: {
          background: '#100c0a',
          primaryColor: '#1c1612',
          primaryTextColor: '#f4ece4',
          primaryBorderColor: '#3cb8a4',
          lineColor: '#d5c9bc',
          secondaryColor: '#3d322c',
          tertiaryColor: '#1c1612',
          fontSize: '14px',
        },
      })
      return mod.default
    })
  }
  return mermaidReady
}

async function renderDiagrams() {
  const hosts = root.value?.querySelectorAll<HTMLElement>('.mermaid-host[data-graph]')
  if (!hosts?.length) return

  const mermaid = await loadMermaid()
  let index = 0
  for (const host of hosts) {
    const source = decodeURIComponent(host.dataset.graph ?? '')
    if (!source) continue
    host.removeAttribute('data-graph')
    try {
      const id = `mmd-${index}-${Math.random().toString(36).slice(2, 8)}`
      index += 1
      const { svg } = await Promise.race([
        mermaid.render(id, source),
        new Promise<never>((_, reject) => {
          window.setTimeout(() => reject(new Error('diagram timed out')), 8000)
        }),
      ])
      host.innerHTML = svg
    } catch (error) {
      const message = error instanceof Error ? error.message : 'diagram failed'
      host.innerHTML = `<pre class="mermaid-fallback">${message}\n${source.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c] ?? c)}</pre>`
    }
  }
}

onMounted(async () => {
  await nextTick()
  await renderDiagrams()
})
watch(html, async () => {
  await nextTick()
  await renderDiagrams()
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -- content is local, authored markdown -->
  <div ref="root" class="prose-article" v-html="html" />
</template>
