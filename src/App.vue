<template>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
  <SiteFooter />
  <a class="wa-box" :href="contact.whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp The Car Bath">
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.2.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.2.2 1.9 2.9 4.5 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.3-.3-.3-.6-.4Z"/></svg>
    <FlipLabel text="WhatsApp" />
  </a>
  <div ref="sheet" class="page-sheet" aria-hidden="true">
    <span ref="word" class="page-sheet__word">The Car Bath</span>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { onMounted, ref } from 'vue'
import archivoLatin from '@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import FlipLabel from './components/FlipLabel.vue'
import { contact } from './data/site'
import { registerCurtain } from './lib/curtain'
import { startSmoothScroll, whenIdle } from './lib/motion'

useHead({ link: [{ rel: 'preload', as: 'font', type: 'font/woff2', href: archivoLatin, crossorigin: 'anonymous' }] })

const sheet = ref(null)
const word = ref(null)

onMounted(() => {
  registerCurtain(sheet.value, word.value)
  whenIdle(startSmoothScroll)
})
</script>
