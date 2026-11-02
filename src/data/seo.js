import { contact, rating, services } from './site.js'

export const SITE = 'https://thecarbath.co.za'
export const BUSINESS_ID = `${SITE}/#business`
export const OG_IMAGE = `${SITE}/img/og-the-car-bath.jpg`

/**
 * One line per page. Consumed by the page head and by scripts/generate-seo-files.mjs,
 * so the sitemap cannot drift from the routes.
 */
export const pages = {
  '/': {
    title: 'Mobile & On-Site Car Detailing, Cape Town | The Car Bath',
    description: 'Mobile car wash and detailing at your home or office, or on site at your business park or block in Cape Town. From R180. 5.0 stars from 21 Google reviews.',
    crumb: 'Home',
    image: '/img/hero-gti.webp',
    imageSrcset: '/img/hero-gti-900.webp 900w, /img/hero-gti.webp 1600w',
    imageSizes: '(max-width: 700px) 180vw, 100vw',
  },
  '/auto-detailing': {
    title: 'Car Detailing in Cape Town, Mobile or On Site | The Car Bath',
    description: 'Car detailing in Cape Town, at your home, office or business park. Essential Wash R180, Signature Valet R450, Executive Detail R2000. One price for every car.',
    crumb: 'Auto detailing',
  },
  '/mobile-car-wash-cape-town': {
    title: 'Mobile Car Wash in Cape Town, We Come to You | The Car Bath',
    description: 'A mobile car wash that comes to your home or office in Cape Town. We bring our own water. From R180 for any car, bakkie or SUV. 5.0 stars on Google.',
    crumb: 'Mobile car wash',
  },
  '/paint-correction-cape-town': {
    title: 'Paint Correction in Cape Town, Swirl Removal | The Car Bath',
    description: 'Paint correction in Cape Town: machine polishing that removes swirl marks and light scratches. Quoted after we see the car, at your place or our bay.',
    crumb: 'Paint correction',
  },
  '/headlight-restoration-cape-town': {
    title: 'Headlight Restoration in Cape Town | The Car Bath',
    description: 'Cloudy or yellowed headlights restored in Cape Town, at your home or office or by appointment at our bay. Send a photo for a quote.',
    crumb: 'Headlight restoration',
  },
  '/business-parks': {
    title: 'On-Site Car Wash at Business Parks, Cape Town | The Car Bath',
    description: 'On-site car wash at Cape Town business parks and apartment blocks, on a set day each week. Book for your car, or host us with just 2 parking bays.',
    crumb: 'Business parks',
  },
  '/prices': {
    title: 'Car Wash & Detailing Prices in Cape Town | The Car Bath',
    description: 'Essential Wash R180, Signature Valet R450, Executive Detail R2000, the same for cars, bakkies and SUVs, mobile or on site. Prices include VAT where applicable.',
    crumb: 'Prices',
  },
  '/faq': {
    title: 'Car Wash & Detailing Questions Answered | The Car Bath',
    description: 'Prices, what is included, where we work, insurance, payment and cancellation. Straight answers about car washing and detailing with The Car Bath in Cape Town.',
    crumb: 'FAQ',
  },
  '/about': {
    title: 'About The Car Bath, Cape Town Car Wash & Detailing',
    description: 'The Car Bath washes and details cars on site across Cape Town, with 4+ years on the job and 5.0 stars from 21 Google reviews. How to reach us and book.',
    crumb: 'About',
  },
  '/bookings': {
    title: 'Book a Car Wash or Detail in Cape Town | The Car Bath',
    description: 'Book a car wash, valet or detail in Cape Town online. Choose the service, the place and the time, and we will confirm your appointment.',
    crumb: 'Book',
  },
}

export const notFound = {
  title: 'Page not found | The Car Bath',
  description: 'That page does not exist. See our car wash and detailing services in Cape Town.',
}

const serviceOffers = services.map((s) => ({
  '@type': 'Offer',
  priceCurrency: 'ZAR',
  ...(s.fromPrice
    ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: s.amount, priceCurrency: 'ZAR' } }
    : { price: s.amount }),
  itemOffered: { '@type': 'Service', name: s.name, description: s.line },
}))

/**
 * Deliberately no aggregateRating or Review here: Google treats a business marking up
 * reviews of itself as self-serving, and asks sites not to aggregate from other sites.
 * The rating stays visible in the page text, and the Google listing is linked in sameAs.
 * Deliberately no openingHours either: the business works by appointment only.
 */
export const business = {
  '@type': 'AutoWash',
  '@id': BUSINESS_ID,
  name: 'The Car Bath',
  url: `${SITE}/`,
  description: 'Mobile and on-site car wash, valet and detailing business in Cape Town. The team comes to homes and offices, works on site at business parks and apartment blocks, and takes drop-offs by appointment in Frere Estate.',
  telephone: '+27685070088',
  email: contact.email,
  image: OG_IMAGE,
  logo: `${SITE}/img/logo-512.png`,
  priceRange: 'R180 to R2000',
  currenciesAccepted: 'ZAR',
  paymentAccepted: 'Cash, Card, EFT',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Honeyside Rd W',
    addressLocality: 'Frere Estate, Cape Town',
    addressRegion: 'Western Cape',
    postalCode: '7700',
    addressCountry: 'ZA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -33.9799268, longitude: 18.5107974 },
  hasMap: contact.google,
  areaServed: [
    { '@type': 'City', name: 'Cape Town' },
    { '@type': 'Place', name: 'Milnerton' },
    { '@type': 'Place', name: 'Woodstock' },
    { '@type': 'Place', name: 'Frere Estate' },
  ],
  sameAs: [contact.google, contact.facebook, contact.instagram, contact.tiktok, contact.linkedin],
  knowsAbout: ['Car washing', 'Car valeting', 'Car detailing', 'Paint correction', 'Swirl mark removal', 'Headlight restoration'],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Car wash and detailing services', itemListElement: serviceOffers },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Book a car wash or detail',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/bookings` },
  },
}

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: `${SITE}/`,
  name: 'The Car Bath',
  inLanguage: 'en-ZA',
  publisher: { '@id': BUSINESS_ID },
}

export function breadcrumbs(path) {
  const page = pages[path]
  if (path === '/' || !page) return null
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: page.crumb, item: `${SITE}${path}` },
    ],
  }
}

export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function serviceSchema({ path, name, serviceType, description, amount, fromPrice }) {
  return {
    '@type': 'Service',
    '@id': `${SITE}${path}#service`,
    name,
    serviceType,
    description,
    url: `${SITE}${path}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'Cape Town' },
    ...(amount
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'ZAR',
            url: `${SITE}/bookings`,
            ...(fromPrice ? { priceSpecification: { '@type': 'PriceSpecification', minPrice: amount, priceCurrency: 'ZAR' } } : { price: amount }),
          },
        }
      : {}),
  }
}

export const ratingLine = `${rating.score} stars from ${rating.count} Google reviews`
