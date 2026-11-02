import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  ssr: { noExternal: ['gsap', 'lenis'] },
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'flat',
    // The catch-all route is client-side only; /404 becomes the static 404.html.
    includedRoutes: (paths) => paths.filter((p) => !p.includes(':')),
  },
})
