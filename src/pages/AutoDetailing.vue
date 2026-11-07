<template>
  <div ref="root" class="page-detail">
    <section class="tier chapter-ink">
      <div class="wrap">
        <h1 class="quiet tier__title" data-snap>Car detailing in Cape Town, mobile or on site.</h1>
        <div class="tier__bar">
          <div class="tier__tabs" role="tablist" aria-label="Choose a service">
            <button
              v-for="s in services" :id="`tier-${s.id}`" :key="s.id" type="button" role="tab" class="tier__tab"
              :class="{ 'is-on': current.id === s.id }" :aria-selected="current.id === s.id" aria-controls="tier-panel"
              @click="select(s.id)"
            >{{ s.tab }}</button>
          </div>
          <p class="tier__price">
            <span>{{ current.name }}</span>
            <FlipPrice :value="current.priceLabel" class="tier__amount" />
          </p>
        </div>
        <div id="tier-panel" class="tier__panel" role="tabpanel" :aria-labelledby="`tier-${current.id}`">
          <div class="tier__frame">
            <Transition name="stretch" mode="out-in">
              <img :key="current.id" :src="current.image" :alt="current.alt" width="1000" height="750" />
            </Transition>
          </div>
          <div class="tier__detail">
            <p class="lead">{{ current.line }}</p>
            <ul class="ring-list ring-list--tight">
              <li v-for="item in current.includes" :key="item"><RingBullet /><span>{{ item }}</span></li>
            </ul>
            <RouterLink class="btn btn--teal" :to="`/bookings?service=${current.id}`"><FlipLabel :text="`Book ${current.tab}`" /></RouterLink>
          </div>
        </div>
      </div>
    </section>

    <PolishStage />

    <section class="work chapter-paper">
      <h2 class="quiet wrap" data-snap>Cars we’ve done.</h2>
      <ul class="work__row" tabindex="0" aria-label="Photographs of cars we have cleaned">
        <li v-for="w in work" :key="w.src"><figure data-open><img :src="w.src" :alt="w.alt" width="704" height="528" loading="lazy" /></figure></li>
      </ul>
      <p class="wrap work__more"><RouterLink class="arrow-link" to="/our-work"><FlipLabel text="Watch clips of recent cars" /><Arrow /></RouterLink></p>
      <figure class="wrap concept-banner" data-open>
        <div class="concept-banner__pic"><img :src="concepts[3].src" :alt="concepts[3].alt" :width="concepts[3].width" :height="concepts[3].height" loading="lazy" /><span class="reel__badge">AI concept</span></div>
        <figcaption><strong>Matte black, imagined.</strong> A BMW X6 M by our carport, made with AI from our own photos. Not a customer car. <RouterLink to="/our-work#concept-title">See the concepts</RouterLink>.</figcaption>
      </figure>
    </section>

    <section class="prices chapter-paper">
      <div class="wrap">
        <h2 class="quiet" data-snap>Prices.</h2>
        <table class="price-table">
          <caption class="sr-only">Services and prices</caption>
          <thead class="sr-only"><tr><th scope="col">Service</th><th scope="col">Best for</th><th scope="col">Price</th></tr></thead>
          <tbody>
            <tr v-for="s in services" :key="s.id">
              <th scope="row">{{ s.name }}</th>
              <td>{{ s.line }}</td>
              <td class="price-table__price"><FlipPrice :value="s.priceLabel" /></td>
            </tr>
          </tbody>
        </table>
        <p class="prices__note">{{ highEndNote }}</p>
        <p class="prices__links">Also by quote: <RouterLink to="/paint-correction-cape-town">paint correction</RouterLink> and <RouterLink to="/headlight-restoration-cape-town">headlight restoration</RouterLink>. Every price is the same for cars, bakkies and SUVs. Choose <RouterLink to="/mobile-car-wash-cape-town">mobile</RouterLink> or <RouterLink to="/business-parks">on site</RouterLink>.</p>
      </div>
    </section>
    <ProofStrip />

    <section class="process chapter-ink">
      <div class="wrap process__grid">
        <figure class="process__pic" data-open data-drift><img src="/img/white-gti.webp" width="1300" height="800" alt="Polished white Golf GTI bonnet with reflections" loading="lazy" /></figure>
        <div>
          <h2 class="quiet" data-snap>How a detail goes.</h2>
          <ol class="how__list how__list--dark" data-rows>
            <li><strong>Look</strong> We check your car’s condition and talk through what you want done.</li>
            <li><strong>Set up</strong> Professional equipment and products suited to your car.</li>
            <li><strong>Detail</strong> The work itself, done methodically, panel by panel.</li>
            <li><strong>Check</strong> A final inspection before we hand it back.</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="svc-faq chapter-paper">
      <div class="wrap svc-faq__grid">
        <h2 class="quiet" data-snap>Detailing questions.</h2>
        <div>
          <FaqList :items="faq" />
          <RouterLink class="arrow-link svc-faq__more" to="/faq"><FlipLabel text="All questions" /><Arrow /></RouterLink>
        </div>
      </div>
    </section>

    <ClosingCall />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Arrow from '../components/Arrow.vue'
import ClosingCall from '../components/ClosingCall.vue'
import FaqList from '../components/FaqList.vue'
import FlipLabel from '../components/FlipLabel.vue'
import FlipPrice from '../components/FlipPrice.vue'
import PolishStage from '../components/PolishStage.vue'
import ProofStrip from '../components/ProofStrip.vue'
import RingBullet from '../components/RingBullet.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { faqCare, faqPricing, faqService } from '../data/faq'
import { faqSchema, pages, serviceSchema } from '../data/seo'
import { services, highEndNote } from '../data/site'
import { concepts } from '../data/work'

const root = useChoreography()
const faq = [faqPricing[1], faqPricing[2], faqPricing[4], faqService[0], faqCare[1], faqCare[4]]
useSeo('/auto-detailing', {
  schema: [
    serviceSchema({ path: '/auto-detailing', name: 'Car detailing in Cape Town', serviceType: 'Car detailing', description: pages['/auto-detailing'].description, amount: 1500 }),
    faqSchema(faq),
  ],
})
const route = useRoute()

const work = [
  { src: '/img/bmw-m340i-rear-three-quarter-cape-town-600.webp', alt: 'White BMW M340i on a Cape Town street, clean paint and glowing tail lights, November 2026' },
  { src: '/img/golf-gti-hand-drying-cape-town.webp', alt: 'Drying a white Volkswagen Golf GTI by hand with a towel, November 2026' },
  { src: '/img/bmw-m340i-tail-lights-carport-cape-town.webp', alt: 'White BMW M340i under a carport, tail lights on, November 2026' },
  { src: '/img/vw-tiguan-r-line-front-cape-town.webp', alt: 'Front wing and headlight of a white Volkswagen Tiguan R-Line, November 2026' },
  { src: '/img/golf-gti-front-carport-cape-town-600.webp', alt: 'White Volkswagen Golf GTI under a carport, glossy bonnet and headlight, November 2026' },
  { src: '/img/white-side.webp', alt: 'White BMW convertible, polished bonnet and headlight' },
  { src: '/img/blue-doors.webp', alt: 'Blue sedan, clean doors and alloy wheel on wet paving' },
  { src: '/img/interior.webp', alt: 'Clean black leather interior and dashboard' },
  { src: '/img/white-gti.webp', alt: 'White Golf GTI with a glossy bonnet' },
]

const active = ref('executive-detail')
onMounted(() => {
  // Read after hydration, so the pre-rendered page and the first client render match.
  const wanted = services.find((s) => s.id === route.query.tier)
  if (wanted) active.value = wanted.id
})
const current = computed(() => services.find((s) => s.id === active.value))
const select = (id) => { active.value = id }
</script>
