<template>
  <div ref="root">
    <section class="svc-head svc-head--text chapter-ink">
      <div class="wrap svc-head__grid">
        <div>
        <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Home</RouterLink> <span aria-hidden="true">/</span> <span aria-current="page">About</span></nav>
        <h1 class="quiet svc-head__title" data-snap>About The Car Bath, Cape Town.</h1>
        <p class="lead svc-head__answer" data-rise>We’ve been washing and detailing cars for more than 4 years. Most of our work happens where the car is already parked, because nobody should lose a morning to a car wash.</p>
      </div>
        <figure class="svc-head__pic"><img src="/img/hero-gti.webp" alt="Freshly washed white Golf GTI, its bonnet glossy in low sun" width="1000" height="750" fetchpriority="high" /></figure>
      </div>
    </section>

    <AtAGlance />

    <section class="svc-block chapter-white">
      <div class="wrap care__grid">
        <h2 class="quiet" data-snap>How we treat your car.</h2>
        <ul class="ring-list" data-rows>
          <li v-for="c in care" :key="c.title"><RingBullet /><span><strong>{{ c.title }}</strong> {{ c.text }}</span></li>
        </ul>
      </div>
    </section>

    <section class="svc-block chapter-ink">
      <div class="wrap">
        <h2 class="quiet" data-snap>Where to find us.</h2>
      </div>
      <address class="contact-row">
        <a :href="contact.phoneHref"><span>Call</span>{{ contact.phone }}</a>
        <a :href="`mailto:${contact.email}`"><span>Email</span>{{ contact.email }}</a>
        <a :href="contact.google" target="_blank" rel="noopener"><span>Our bay, by appointment</span>{{ contact.address }}</a>
      </address>
    </section>

    <ProofStrip />
    <ClosingCall />
  </div>
</template>

<script setup>
import AtAGlance from '../components/AtAGlance.vue'
import ClosingCall from '../components/ClosingCall.vue'
import ProofStrip from '../components/ProofStrip.vue'
import RingBullet from '../components/RingBullet.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { care, contact } from '../data/site'

const root = useChoreography()
useSeo('/about')
</script>
