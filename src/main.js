import { ViteSSG } from 'vite-ssg'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/young-serif/400.css'
import './styles/site.css'
import App from './App.vue'
import { coverPage } from './lib/curtain'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ router, isClient }) => {
  if (!isClient) return
  router.beforeEach(async (to, from) => {
    if (from.matched.length && to.path !== from.path) {
      await coverPage()
    }
  })
})
