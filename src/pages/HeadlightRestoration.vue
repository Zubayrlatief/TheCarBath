<template>
  <ServicePage
    crumb="Headlight restoration"
    title="Headlight restoration in Cape Town."
    answer="Headlight restoration clears cloudy, yellowed headlight lenses so they look clean again. The Car Bath does it at your home or office in Cape Town, or by appointment at our bay. Send us a photo for a quote."
    image="/img/white-headlight.webp"
    alt="Clear headlight on a polished white BMW"
    :faq="faq"
    faq-title="Headlight questions."
    book-label="Ask for a quote"
  >
    <section class="svc-block chapter-paper">
      <div class="wrap how__grid">
        <h2 class="quiet" data-snap>How to get it done.</h2>
        <ol class="how__list" data-rows>
          <li><strong>Send a photo</strong> WhatsApp us a clear photo of each headlight, with the car’s make and model.</li>
          <li><strong>Get a quote</strong> We’ll quote based on the condition of the lenses.</li>
          <li><strong>Choose the place</strong> Your home or office, or our bay in Frere Estate by appointment.</li>
        </ol>
      </div>
    </section>

    <section class="svc-block chapter-ink">
      <div class="wrap care__grid">
        <h2 class="quiet" data-snap>Add it to a wash or detail.</h2>
        <ul class="ring-list" data-rows>
          <li v-for="s in services" :key="s.id"><RingBullet /><span><strong>{{ s.name }}, {{ s.priceLabel }}</strong> {{ s.line }}</span></li>
        </ul>
      </div>
    </section>
  </ServicePage>
</template>

<script setup>
import RingBullet from '../components/RingBullet.vue'
import ServicePage from '../components/ServicePage.vue'
import { useSeo } from '../composables/useSeo'
import { faqCare, faqService } from '../data/faq'
import { faqSchema, pages, serviceSchema } from '../data/seo'
import { services } from '../data/site'

const faq = [
  faqCare[3],
  { q: 'Why do headlights go cloudy?', a: 'Most modern headlight lenses are plastic. Sun and weather wear the lens surface over time, which makes it look cloudy or yellow.' },
  { q: 'How much does headlight restoration cost?', a: 'We quote headlight restoration per car, based on the condition of the lenses. Send a photo on WhatsApp to 068 507 0088 for a quote.' },
  faqService[1],
  faqService[3],
]

useSeo('/headlight-restoration-cape-town', {
  schema: [
    serviceSchema({ path: '/headlight-restoration-cape-town', name: 'Headlight restoration in Cape Town', serviceType: 'Headlight restoration', description: pages['/headlight-restoration-cape-town'].description }),
    faqSchema(faq),
  ],
})
</script>
