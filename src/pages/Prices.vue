<template>
  <div ref="root" class="page-detail">
    <section class="svc-head svc-head--text chapter-ink">
      <div class="wrap svc-head__grid">
        <div>
        <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Home</RouterLink> <span aria-hidden="true">/</span> <span aria-current="page">Prices</span></nav>
        <h1 class="quiet svc-head__title" data-snap>Car wash and detailing prices in Cape Town.</h1>
        <p class="lead svc-head__answer" data-rise>An Essential Wash costs R180, a Signature Valet costs R450, and an Executive Detail costs R2000. Those prices are the same for cars, bakkies and SUVs, mobile or on site. They include VAT where applicable, and you pay when the work is done.</p>
      </div>
        <figure class="svc-head__pic"><img src="/img/interior.webp" alt="Clean black leather interior and dashboard of a BMW" width="1000" height="750" fetchpriority="high" /></figure>
      </div>
    </section>

    <section class="prices prices--page chapter-paper">
      <div class="wrap">
        <h2 class="sr-only">Fixed prices</h2>
        <table class="price-table">
          <caption class="sr-only">Car wash, valet and detail prices</caption>
          <thead class="sr-only"><tr><th scope="col">Service</th><th scope="col">What’s included</th><th scope="col">Price</th></tr></thead>
          <tbody>
            <tr v-for="s in services" :key="s.id">
              <th scope="row">{{ s.name }}</th>
              <td>{{ s.line }}</td>
              <td class="price-table__price">{{ s.priceLabel }}</td>
            </tr>
            <tr>
              <th scope="row"><RouterLink to="/paint-correction-cape-town">Paint correction</RouterLink></th>
              <td>Machine polishing to remove swirl marks and light scratches.</td>
              <td class="price-table__price price-table__price--quote">By quote</td>
            </tr>
            <tr>
              <th scope="row"><RouterLink to="/headlight-restoration-cape-town">Headlight restoration</RouterLink></th>
              <td>Clears cloudy and yellowed headlight lenses.</td>
              <td class="price-table__price price-table__price--quote">By quote</td>
            </tr>
          </tbody>
        </table>
        <h2 class="quiet prices__compare-title" data-snap>What each step up adds.</h2>
        <div class="compare-wrap">
          <table class="compare">
            <caption class="sr-only">What each service includes</caption>
            <thead>
              <tr><th scope="col">Included</th><th v-for="s in services" :key="s.id" scope="col">{{ s.tab }}<span>{{ s.priceLabel }}</span></th></tr>
            </thead>
            <tbody>
              <tr v-for="row in compare" :key="row.label">
                <th scope="row">{{ row.label }}</th>
                <td v-for="(on, i) in row.tiers" :key="i">
                  <svg v-if="on" viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" role="img" aria-label="Included"><path d="m4 10.500 4 4 8-9" /></svg>
                  <span v-else class="sr-only">Not included</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="prices__why">Signature adds the engine bay and upholstery to a full clean. Executive is a different job: a deep clean, clay bar and polish on the paint, and conditioned leather and fabric. That’s where the step up to R2000 goes.</p>
        <p class="prices__note">Extra charges may apply for added services, difficult conditions, or travel beyond our standard 15km radius from Arden Grove, Milnerton. We’ll tell you before we start. Business parks and apartment blocks: <RouterLink to="/business-parks">see how hosting works</RouterLink>.</p>
        <RouterLink class="btn btn--ink" to="/bookings"><FlipLabel text="Book now" /></RouterLink>
      </div>
    </section>

    <section class="svc-faq chapter-white">
      <div class="wrap svc-faq__grid">
        <h2 class="quiet" data-snap>Price questions.</h2>
        <FaqList :items="faqPricing" />
      </div>
    </section>

    <ProofStrip />
    <ClosingCall />
  </div>
</template>

<script setup>
import ClosingCall from '../components/ClosingCall.vue'
import FaqList from '../components/FaqList.vue'
import FlipLabel from '../components/FlipLabel.vue'
import ProofStrip from '../components/ProofStrip.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { faqPricing } from '../data/faq'
import { faqSchema } from '../data/seo'
import { includesSentence, services } from '../data/site'

const root = useChoreography()

// One row per thing the customer gets; each column is Essential, Signature, Executive.
const compare = [
  { label: 'Exterior wash and dry', tiers: [true, true, true] },
  { label: 'Tyre shine and window cleaning', tiers: [true, true, true] },
  { label: 'Interior vacuum, surfaces wiped', tiers: [true, true, true] },
  { label: 'Engine bay clean', tiers: [false, true, true] },
  { label: 'Upholstery spot clean', tiers: [false, true, true] },
  { label: 'Full interior and exterior deep clean', tiers: [false, false, true] },
  { label: 'Clay bar treatment and polish', tiers: [false, false, true] },
  { label: 'Leather and fabric conditioning', tiers: [false, false, true] },
  { label: 'Engine bay detailing', tiers: [false, false, true] },
]
useSeo('/prices', { schema: [faqSchema(faqPricing)] })
</script>
