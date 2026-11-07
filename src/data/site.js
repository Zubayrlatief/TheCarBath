export const contact = {
  phone: '068 507 0088',
  phoneHref: 'tel:+27685070088',
  email: 'thecarsbath@gmail.com',
  whatsapp: 'https://wa.me/27685070088',
  address: '27 Honeyside Rd W, Frere Estate, Cape Town',
  hours: 'By appointment only',
  facebook: 'https://www.facebook.com/profile.php?id=61581993734031',
  instagram: 'https://www.instagram.com/thecar.bath/',
  tiktok: 'https://www.tiktok.com/@thecarbath',
  linkedin: 'https://www.linkedin.com/company/the-car-bath/',
  google: 'https://www.google.com/maps/place/The+Car+Bath/data=!4m2!3m1!1s0x1dcc43832d05cf6b:0x15664932bc784450',
}

export const highEndNote = 'Prices for high-end cars may go up after we inspect the car, because of the extra care they need. We’ll tell you the new price before we start.'

export const rating = { score: '5.0', count: 24 }

export const services = [
  {
    id: 'essential-wash',
    tab: 'Essential',
    name: 'Essential Wash',
    price: 'R180',
    priceLabel: 'R180',
    amount: 180,
    image: '/img/bmw-x6m-matte-black-rear.webp',
    alt: 'Matte black BMW X6 M under a carport, rear view with its tail lights on',
    line: 'Quick and affordable, for weekly or biweekly bookings.',
    includes: ['Exterior wash and dry', 'Tyre shine', 'Window cleaning', 'Full interior detail: vacuum, all surfaces wiped, upholstery spot clean, leather and fabric conditioning'],
  },
  {
    id: 'signature-valet',
    tab: 'Signature',
    name: 'Signature Valet',
    price: 'R450',
    priceLabel: 'R450',
    amount: 450,
    image: '/img/bmw-m340i-interior-cape-town.webp',
    alt: 'Steering wheel, console and leather seat inside a BMW M340i',
    line: 'A complete clean, for biweekly or monthly bookings.',
    includes: ['Everything in the Essential Wash', 'Engine bay clean'],
  },
  {
    id: 'executive-detail',
    tab: 'Executive',
    name: 'Executive Detail',
    price: 'R1500',
    priceLabel: 'R1500',
    amount: 1500,
    image: '/img/bmw-x6m-matte-black-front.webp',
    alt: 'Matte black BMW X6 M under a carport, front view of its grille and headlight',
    line: 'A thorough clean inside and out, for monthly or occasional use.',
    includes: ['Everything in the Signature Valet', 'Exterior deep clean', 'Clay bar treatment and polish, for shine only, no paint protection', 'Engine bay detailing'],
  },
]

// Verbatim from the Google listing, read 1 Nov 2026.
export const reviews = [
  { text: 'Absolutely amazing service! My car looks spotless, inside and out. The team was friendly, professional and paid great attention to detail. You can really see the effort they put into making sure everything is done properly. Definitely worth the visit, and I’ll be coming back again. Highly recommend!', name: 'Caitlin D.' },
  { text: 'Amazing service - very happy with my car.', name: 'Raniya H.' },
  { text: 'Amazing work. Effective and exactly what I was looking for', name: 'Haadi M.' },
  { text: 'The Car Bath is next-level. My car looked brand new—inside and out. Super friendly staff, fast service, and flawless results. They don’t miss a spot. Won’t go anywhere else!', name: 'Liam Z.' },
  { text: 'Very good service would definitely come here again they did a very good job and I’ve never seen my car this clean before', name: 'Naledi A.' },
  { text: 'I absolutely recommend you to leverage off their services. They use quality products and their prices are competitive. What makes them unique is the quality of their products, their speedy services and mostly the attention to detail!', name: 'Nadia G.' },
  { text: 'Best ever, my car literally looked brand new!!!', name: 'Siddiq C.' },
  { text: 'Amazing service with an amazing crew. The work ethic is admirable.', name: 'Trey S.' },
  { text: 'Great value for money! Cheap price but great quality service.', name: 'Gerard U.' },
  { text: 'Amazing service !!! Highly recommend.', name: 'Zubair M.' },
  { text: 'Amazing service Highly recommend', name: 'Tara A.' },
  { text: 'On time with the wash best experience', name: 'Dayaan I.' },
  { text: 'top tier service', name: 'Nurjehan D.' },
  { text: 'Great service. Quick and easy', name: 'Mohamed K.' },
  { text: 'Professional and effective', name: 'Taulgah R.' },
]

export const care = [
  { title: 'The right products', text: 'pH-balanced soaps and waxes that protect your paint and won’t cause damage or fading.' },
  { title: 'Trained hands', text: 'Proper washing technique, soft microfibre cloths and gentle methods that prevent scratches.' },
  { title: 'Your keys stay safe', text: 'We never leave your vehicle unattended, and it comes back exactly as we found it.' },
  { title: 'A check before handover', text: 'Every wash ends with an inspection against our checklist.' },
  { title: 'Covered', text: 'We carry public liability insurance and take every precaution with your finish, wheels and interior.' },
]

/** A service's inclusions as one readable sentence. */
export const includesSentence = (service) =>
  service.includes.map((item, i) => (i === 0 || item.startsWith('Essential') ? item : item.charAt(0).toLowerCase() + item.slice(1))).join(', ')
