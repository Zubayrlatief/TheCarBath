// Writes sitemap.xml, robots.txt and llms.txt into public/ before each build,
// from the same page list the site's head tags use, so they cannot drift apart.
import { writeFileSync } from 'node:fs'
import { pages, SITE } from '../src/data/seo.js'
import { contact, includesSentence, rating, services } from '../src/data/site.js'

const today = new Date().toISOString().slice(0, 10)
const priority = { '/': '1.0', '/bookings': '0.9', '/auto-detailing': '0.9', '/mobile-car-wash-cape-town': '0.9', '/prices': '0.8', '/our-work': '0.8' }

const urls = Object.keys(pages).map((p) => `  <url>
    <loc>${SITE}${p === '/' ? '/' : p}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority[p] ?? '0.7'}</priority>
  </url>`)

writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`)

// Search and answer crawlers are welcome by name, so nobody has to guess the policy.
const bots = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'DuckDuckBot']

writeFileSync('public/robots.txt', `User-agent: *
Allow: /

${bots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

Sitemap: ${SITE}/sitemap.xml
`)

const line = (p, label, note) => `- [${label}](${SITE}${p}): ${note}`

writeFileSync('public/llms.txt', `# The Car Bath

> Mobile and on-site car wash, valet and detailing business in Cape Town, South Africa. Comes to homes and offices, works on site at business parks and apartment blocks on a set day, and takes drop-offs by appointment at ${contact.address}. ${rating.score} stars from ${rating.count} Google reviews (November 2026). In business for 4+ years, with public liability insurance.

## Key facts

${services.map((s) => `- ${s.name}: ${s.priceLabel}. ${includesSentence(s)}.`).join('\n')}
- Headlight restoration: priced by quote.
- Paint correction: not offered.
- Ceramic coating: not offered.
- Prices are the same for cars, bakkies and SUVs, mobile or on site. Prices for high-end cars may go up after we inspect the car, because of the extra care they need. We’ll tell you the new price before we start.
- Hours: ${contact.hours}. Closed Monday to Friday. One car at a time. No walk-ins. Bookings confirmed within 4 hours.
- Service area: 15km from Milnerton as standard; also Woodstock and Frere Estate. Further areas may carry a travel charge.
- Payment: cash, card or electronic transfer on completion.
- Contact: ${contact.phone} (phone and WhatsApp), ${contact.email}
- Book: ${SITE}/bookings

## Pages

${line('/auto-detailing', 'Car detailing', 'the three services and what each includes')}
${line('/mobile-car-wash-cape-town', 'Mobile car wash', 'how on-site washing works and where')}
${line('/headlight-restoration-cape-town', 'Headlight restoration', 'clearing cloudy lenses')}
${line('/business-parks', 'Business parks and apartment blocks', 'what hosting needs and how it works')}
${line('/prices', 'Prices', 'every price in one table')}
${line('/our-work', 'Our work', 'video clips and photos of recent cars we washed and detailed, November 2026')}
${line('/faq', 'FAQ', 'answers about prices, booking, cover and care')}
${line('/about', 'About', 'who we are and how to reach us')}
`)

console.log(`SEO files written for ${urls.length} pages`)
