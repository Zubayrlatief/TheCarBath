<template>
  <div ref="root" class="page-detail">
    <section class="svc-head chapter-ink">
      <div class="wrap svc-head__grid">
        <div>
          <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Home</RouterLink> <span aria-hidden="true">/</span> <span aria-current="page">{{ crumb }}</span></nav>
          <h1 class="quiet svc-head__title" data-snap>{{ title }}</h1>
          <p class="lead svc-head__answer" data-rise>{{ answer }}</p>
          <div class="svc-head__actions" data-rise data-d="1">
            <RouterLink class="btn btn--teal" :to="bookTo"><FlipLabel :text="bookLabel" /></RouterLink>
            <a class="arrow-link" :href="contact.whatsapp" target="_blank" rel="noopener"><FlipLabel text="WhatsApp us" /><Arrow /></a>
          </div>
        </div>
        <figure class="svc-head__pic"><img :src="image" :alt="alt" width="1000" height="750" fetchpriority="high" /></figure>
      </div>
    </section>

    <slot />

    <section class="svc-faq chapter-paper">
      <div class="wrap svc-faq__grid">
        <h2 class="quiet" data-snap>{{ faqTitle }}</h2>
        <div>
          <FaqList :items="faq" />
          <RouterLink class="arrow-link svc-faq__more" to="/faq"><FlipLabel text="All questions" /><Arrow /></RouterLink>
        </div>
      </div>
    </section>

    <ProofStrip />
    <ClosingCall />
  </div>
</template>

<script setup>
import Arrow from './Arrow.vue'
import ClosingCall from './ClosingCall.vue'
import FaqList from './FaqList.vue'
import FlipLabel from './FlipLabel.vue'
import ProofStrip from './ProofStrip.vue'
import { useChoreography } from '../composables/useChoreography'
import { contact } from '../data/site'

defineProps({
  crumb: { type: String, required: true },
  title: { type: String, required: true },
  answer: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  faq: { type: Array, required: true },
  faqTitle: { type: String, default: 'Common questions.' },
  bookTo: { type: String, default: '/bookings' },
  bookLabel: { type: String, default: 'Book now' },
})

const root = useChoreography()
</script>
