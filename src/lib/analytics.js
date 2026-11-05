// Google Analytics 4. Loads only in the browser and only when VITE_GA_ID is
// set at build time (.env.production), so dev builds and the pre-rendered
// HTML stay tag-free. SPA route changes are counted by GA4's enhanced
// measurement ("page changes based on browser history events"), which is on
// by default, so no manual page_view calls are needed.
export function loadAnalytics() {
  const id = import.meta.env.VITE_GA_ID
  if (!id || typeof window === 'undefined' || window.gtag) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', id)
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(s)
}
