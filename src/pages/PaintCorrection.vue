<template>
  <ServicePage
    crumb="Paint correction"
    title="Paint correction in Cape Town. The swirls come out."
    answer="Paint correction is machine polishing that removes swirl marks and light scratches from a car’s paint, so it reflects cleanly again. The Car Bath quotes it after seeing the car, because the work depends on its size and condition."
    image="/img/white-gti.webp"
    alt="Glossy bonnet of a white Golf GTI reflecting the sky"
    :faq="faq"
    faq-title="Paint correction questions."
    book-label="Ask for a quote"
  >
    <PolishStage />

    <section class="svc-block chapter-white">
      <div class="wrap care__grid">
        <h2 class="quiet" data-snap>Correction or polish?</h2>
        <ul class="ring-list" data-rows>
          <li><RingBullet /><span><strong>Paint correction</strong> Quoted per car. The aim is to take swirl marks and light scratches out of the paint.</span></li>
          <li><RingBullet /><span><strong>Executive Detail polish</strong> Included in the R1500 detail. It is for shine only and doesn’t add paint protection.</span></li>
          <li><RingBullet /><span><strong>Not sure?</strong> Send us a photo of the paint in direct sun, where swirl marks show most, and we’ll tell you which you need.</span></li>
        </ul>
      </div>
    </section>

    <section class="svc-block chapter-ink">
      <div class="wrap how__grid">
        <h2 class="quiet" data-snap>How to get a quote.</h2>
        <ol class="how__list how__list--dark" data-rows>
          <li><strong>Send photos</strong> WhatsApp us the car’s make and model and photos of the paint.</li>
          <li><strong>We look at it</strong> We check the condition of the paint with you before quoting.</li>
          <li><strong>Choose the place</strong> At your home or office, or by appointment at our bay in Frere Estate.</li>
        </ol>
      </div>
    </section>
  </ServicePage>
</template>

<script setup>
import PolishStage from '../components/PolishStage.vue'
import RingBullet from '../components/RingBullet.vue'
import ServicePage from '../components/ServicePage.vue'
import { useSeo } from '../composables/useSeo'
import { faqCare, faqService } from '../data/faq'
import { faqSchema, pages, serviceSchema } from '../data/seo'

const faq = [
  faqCare[2],
  { q: 'What causes swirl marks?', a: 'Swirl marks are fine scratches in a car’s clear coat, most often caused by poor washing and drying technique. They show as circular webs around a point of light, especially in direct sun.' },
  { q: 'Is paint correction the same as a polish?', a: 'No. Paint correction aims to remove defects such as swirl marks and light scratches. A shine polish, like the one in our Executive Detail, improves gloss and adds no paint protection.' },
  faqCare[4],
  faqCare[0],
  faqService[3],
]

useSeo('/paint-correction-cape-town', {
  schema: [
    serviceSchema({ path: '/paint-correction-cape-town', name: 'Paint correction in Cape Town', serviceType: 'Paint correction', description: pages['/paint-correction-cape-town'].description }),
    faqSchema(faq),
  ],
})
</script>
