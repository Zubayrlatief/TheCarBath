// Our own recent work, filmed on the job in November 2026.
// Captions say only what the footage shows.
import { SITE } from './seo.js'

const reel = (slug, name, caption, alt, seconds) => ({
  slug,
  name,
  caption,
  alt,
  seconds,
  src: `/video/${slug}.mp4`,
  poster: `/video/${slug}.webp`,
})

export const cars = [
  {
    id: 'bmw-m340i',
    name: 'BMW M340i',
    date: '2026-11-06',
    dateLabel: '6 November 2026',
    summary: 'A white BMW M340i sedan: paint, rear lights, wheels and the black leather cabin.',
    still: { src: '/img/bmw-m340i-rear-three-quarter-cape-town.webp', src600: '/img/bmw-m340i-rear-three-quarter-cape-town-600.webp', width: 1200, height: 1600, alt: 'White BMW M340i parked on a Cape Town street, rear three-quarter view with clean paint and glowing tail lights' },
    reels: [
      reel('bmw-m340i-rear-lights-after-wash-cape-town', 'BMW M340i under the carport', 'Tail lights on, the floor still wet.', 'White BMW M340i under a carport with its tail lights on and a wet floor after washing', 6.2),
      reel('bmw-m340i-rear-walkaround-cape-town', 'BMW M340i walk-around', 'Round the back, in full sun.', 'Walking around the rear of a clean white BMW M340i in bright sunshine', 6),
      reel('bmw-m340i-headlight-front-cape-town', 'BMW M340i headlight', 'Headlight, grille and front wheel.', 'Front of a white BMW M340i: LED headlight, kidney grille and alloy wheel', 4.1),
      reel('bmw-m340i-side-detailed-cape-town', 'BMW M340i in the sun', 'Down the side, in full sun.', 'Camera moving along the side of a clean white BMW M340i in bright sunlight', 4.1),
      reel('bmw-m340i-interior-leather-cape-town', 'BMW M340i cabin', 'Steering wheel, console and leather seats.', 'Inside a BMW M340i: steering wheel, centre console and black leather seats', 4.3),
    ],
  },
  {
    id: 'vw-golf-gti',
    name: 'Volkswagen Golf GTI',
    date: '2026-11-04',
    dateLabel: '4 November 2026',
    summary: 'A white Golf 7 GTI: drying by hand, headlights and tail lights, and the cabin.',
    still: { src: '/img/golf-gti-front-carport-cape-town.webp', src600: '/img/golf-gti-front-carport-cape-town-600.webp', width: 1200, height: 1600, alt: 'White Volkswagen Golf GTI under a carport, low front view of its glossy bonnet and red-striped headlight' },
    reels: [
      reel('golf-gti-hand-drying-cape-town', 'Drying a Golf GTI by hand', 'Dried by hand with a towel.', 'Drying a white Volkswagen Golf GTI by hand with a yellow towel', 4.3),
      reel('golf-gti-headlights-carport-cape-town', 'Golf GTI headlights', 'Headlights on, under the carport.', 'White Volkswagen Golf GTI under a carport with its headlights on', 4.2),
      reel('golf-gti-rear-lights-carport-cape-town', 'Golf GTI rear lights', 'Tail lights and rear fog light glowing.', 'Rear of a white Volkswagen Golf GTI under a carport with its tail lights and rear fog light on', 8.2),
      reel('golf-gti-interior-clean-cape-town', 'Golf GTI cabin', 'Steering wheel and seats.', 'Inside a Volkswagen Golf GTI: steering wheel, gear lever and leather seats', 4.9),
    ],
  },
  {
    id: 'vw-tiguan-r-line',
    name: 'Volkswagen Tiguan R-Line',
    date: '2026-11-06',
    dateLabel: '6 November 2026',
    summary: 'A white Tiguan R-Line SUV: running lights, bodywork, tail lights and leather seats.',
    reels: [
      reel('vw-tiguan-r-line-side-walkaround-cape-town', 'Tiguan R-Line walk-around', 'Running lights on, then down the side.', 'White Volkswagen Tiguan R-Line with its running lights on, filmed along the side of the SUV', 8.8),
      reel('vw-tiguan-r-line-front-detailed-cape-town', 'Tiguan R-Line front', 'Bonnet, headlight and wheel.', 'Front of a clean white Volkswagen Tiguan R-Line: bonnet, headlight and alloy wheel', 5.5),
      reel('vw-tiguan-r-line-tail-light-cape-town', 'Tiguan R-Line tail light', 'Tail light and rear quarter.', 'Rear quarter and tail light of a white Volkswagen Tiguan R-Line', 4.3),
      reel('vw-tiguan-r-line-tailgate-cape-town', 'Tiguan R-Line tailgate', 'Tailgate and rear window.', 'Tailgate, rear window and tail lights of a white Volkswagen Tiguan R-Line', 3.7),
      reel('vw-tiguan-r-line-leather-seats-cape-town', 'Tiguan R-Line seats', 'Black leather seats, front row.', 'Front leather seats inside a Volkswagen Tiguan R-Line', 5.9),
    ],
  },
]

/** The home strip: BMW first, then a mix of all three cars. */
export const homeReels = [cars[0].reels[0], cars[1].reels[0], cars[0].reels[3], cars[2].reels[0], cars[0].reels[1], cars[1].reels[1], cars[0].reels[4], cars[2].reels[4]]

const iso = (s) => `PT${Math.round(s)}S`

/** VideoObject and ImageObject markup, so search and answer engines can read each clip. */
export function workSchema() {
  const items = []
  for (const car of cars) {
    for (const r of car.reels) {
      items.push({
        '@type': 'VideoObject',
        name: `${r.name}, The Car Bath, Cape Town`,
        description: r.alt + '.',
        thumbnailUrl: `${SITE}${r.poster}`,
        contentUrl: `${SITE}${r.src}`,
        uploadDate: `${car.date}T12:00:00+02:00`,
        duration: iso(r.seconds),
        width: 720,
        height: 1280,
      })
    }
    if (car.still) {
      items.push({ '@type': 'ImageObject', name: `${car.name}, The Car Bath, Cape Town`, description: car.still.alt + '.', contentUrl: `${SITE}${car.still.src}`, width: car.still.width, height: car.still.height })
    }
  }
  return {
    '@type': 'ItemList',
    '@id': `${SITE}/our-work#work`,
    name: 'Recent car detailing work by The Car Bath in Cape Town',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, item })),
  }
}

/**
 * Concept images, made with AI from our own carport photos: a matte black BMW X6 M.
 * Not a car we have worked on, so they are always labelled as concepts and kept out
 * of the work schema. The model's invented number plates are blurred.
 */
export const concepts = [
  { src: '/img/ai-concept-matte-black-bmw-x6m-front.webp', width: 896, height: 1200, name: 'Matte black BMW X6 M', caption: 'AI concept image, not a customer car.', alt: 'AI-generated concept image of a matte black BMW X6 M under our carport, front view' },
  { src: '/img/ai-concept-matte-black-bmw-x6m-rear.webp', width: 900, height: 1600, name: 'Matte black BMW X6 M', caption: 'AI concept image, not a customer car.', alt: 'AI-generated concept image of a matte black BMW X6 M under our carport, rear view with tail lights on' },
  { src: '/img/ai-concept-matte-black-bmw-x6m-side.webp', width: 1376, height: 768, wide: true, name: 'Matte black BMW X6 M', caption: 'AI concept image, not a customer car.', alt: 'AI-generated concept image of a matte black BMW X6 M parked under our carport, front three-quarter view' },
  { src: '/img/ai-concept-matte-black-bmw-x6m-side-sunlit.webp', width: 1360, height: 768, wide: true, name: 'Matte black BMW X6 M', caption: 'AI concept image, not a customer car.', alt: 'AI-generated concept image of a matte black BMW X6 M in sunlight beside our carport, side view' },
]
