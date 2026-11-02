import { useHead } from '@unhead/vue'
import { business, breadcrumbs, notFound, OG_IMAGE, pages, SITE, website } from '../data/seo'

/** Sets a page's head: unique title and description, canonical, social cards and JSON-LD. */
export function useSeo(path, { schema = [], noindex = false } = {}) {
  const page = noindex ? notFound : pages[path]
  const url = `${SITE}${path === '/' ? '/' : path}`
  const crumbs = noindex ? null : breadcrumbs(path)
  const graph = [website, business, crumbs, ...schema].filter(Boolean)

  useHead({
    htmlAttrs: { lang: 'en-ZA' },
    title: page.title,
    link: noindex ? [] : [
      { rel: 'canonical', href: url },
      ...(page.image ? [{ rel: 'preload', as: 'image', href: page.image, imagesrcset: page.imageSrcset, imagesizes: page.imageSizes, type: 'image/webp', fetchpriority: 'high' }] : []),
    ],
    meta: [
      { name: 'description', content: page.description },
      { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'The Car Bath' },
      { property: 'og:locale', content: 'en_ZA' },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'A freshly washed white Golf GTI, The Car Bath, Cape Town' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
    }],
  })
}
