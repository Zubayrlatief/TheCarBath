<template>
  <ServicePage
    crumb="Mobile car wash"
    title="A mobile car wash in Cape Town that comes to you."
    answer="Our mobile service washes and details your car at your home or office in Cape Town, at a time you book. We bring our own water. An Essential Wash costs R180, whether it’s a car, bakkie or SUV."
    image="/img/bmw-m340i-rear-sunshine-cape-town.webp"
    alt="Rear light and glossy white paint of a BMW M340i in Cape Town sunshine"
    :faq="faq"
    faq-title="Mobile car wash questions."
    book-to="/bookings?mode=mobile&service=essential-wash"
    book-label="Book a wash"
  >
    <section class="svc-block chapter-paper">
      <div class="wrap care__grid">
        <h2 class="quiet" data-snap>Three levels, all at your door.</h2>
        <ul class="ring-list" data-rows>
          <li v-for="s in services" :key="s.id"><RingBullet /><span><strong>{{ s.name }}, {{ s.priceLabel }}</strong> {{ includesSentence(s) }}.</span></li>
        </ul>
      </div>
    </section>

    <section class="svc-block chapter-white">
      <div class="wrap how__grid">
        <h2 class="quiet" data-snap>How a mobile wash works.</h2>
        <ol class="how__list" data-rows>
          <li><strong>Book</strong> Choose a service, an address and a time, at least 24 hours ahead.</li>
          <li><strong>Stay where you are</strong> Leave the car parked and clear out your valuables. You don’t need to give us water.</li>
          <li><strong>Check it and pay</strong> Inspect the car before we leave, then pay by cash, card or transfer.</li>
        </ol>
      </div>
    </section>

    <section class="svc-block chapter-ink">
      <div class="wrap care__grid">
        <h2 class="quiet" data-snap>Where we work.</h2>
        <div>
          <p class="lead">Our standard radius is 15km from Milnerton. We also work in Woodstock and Frere Estate. Further areas may be possible with a travel charge, so ask us.</p>
          <p class="svc-block__more"><RouterLink class="arrow-link" to="/business-parks"><FlipLabel text="At a business park? See on site" /><Arrow /></RouterLink></p>
        </div>
      </div>
    </section>
  </ServicePage>
</template>

<script setup>
import Arrow from '../components/Arrow.vue'
import FlipLabel from '../components/FlipLabel.vue'
import RingBullet from '../components/RingBullet.vue'
import ServicePage from '../components/ServicePage.vue'
import { useSeo } from '../composables/useSeo'
import { faqCare, faqPricing, faqService } from '../data/faq'
import { faqSchema, pages, serviceSchema } from '../data/seo'
import { includesSentence, services } from '../data/site'

const faq = [faqService[0], faqService[1], faqService[2], faqService[5], faqPricing[4], faqPricing[0], faqService[6], faqCare[1]]

useSeo('/mobile-car-wash-cape-town', {
  schema: [
    serviceSchema({ path: '/mobile-car-wash-cape-town', name: 'Mobile car wash in Cape Town', serviceType: 'Mobile car wash', description: pages['/mobile-car-wash-cape-town'].description, amount: 180 }),
    faqSchema(faq),
  ],
})
</script>
