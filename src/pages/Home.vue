<template>
  <div ref="root">
    <div class="hero-run">
    <section class="hero">
      <div class="hero__media">
        <img class="hero__photo--gti" src="/img/hero-gti.webp" srcset="/img/hero-gti-900.webp 900w, /img/hero-gti.webp 1600w" sizes="(max-width: 700px) 180vw, 100vw" width="1600" height="1117" alt="Freshly washed white Golf GTI, its bonnet glossy in low sun" fetchpriority="high" />
        <SwirlField class="hero__swirls" desktop-only :count="620" :alpha="0.2" :thickness="0.75" :sweep-max="0.16" />
      </div>
      <div class="hero__copy">
        <p class="loud hero__stack" data-velocity aria-hidden="true">
          <span class="line line--1"><span>Your car.</span></span>
          <span class="line line--2"><span><MorphWord :words="['Washed.', 'Valeted.', 'Detailed.']" /></span></span>
          <span class="line line--3"><span>Your way.</span></span>
        </p>
        <div class="hero__foot">
          <h1 class="lead hero__h1">Mobile and on-site car wash and detailing in Cape Town, whichever suits you.</h1>
          <div class="hero__actions">
            <RouterLink class="btn btn--teal" to="/bookings"><FlipLabel text="Book a wash" /></RouterLink>
            <a class="hero__rating" :href="contact.google" target="_blank" rel="noopener">{{ rating.score }} stars from {{ rating.count }} Google reviews</a>
          </div>
        </div>
      </div>
    </section>

    <div class="over">
      <section class="doors chapter-white">
        <div class="wrap doors__head">
          <h2 class="quiet" data-snap>Mobile or on site. You choose.</h2>
          <p class="lead">The same services and the same prices, for any car, bakkie or SUV.</p>
        </div>
        <div class="doors__grid">
          <RouterLink class="door door--teal" to="/mobile-car-wash-cape-town">
            <span class="door__pic"><img src="/img/bmw-m340i-rear-three-quarter-cape-town.webp" width="1200" height="1600" alt="White BMW M340i parked on a Cape Town street, clean paint and glowing tail lights" loading="lazy" /></span>
            <span class="flipbox">
              <span class="flipbox__in">
                <span class="flipbox__face">
                  <span class="flipbox__title">Mobile</span>
                  <span>We come to your home or office, at a time you book.</span>
                </span>
                <span class="flipbox__face flipbox__face--back">
                  <span class="flipbox__title">We come to you</span>
                  <span>We bring our own water. You stay where you are. <Arrow /></span>
                </span>
              </span>
            </span>
          </RouterLink>
          <RouterLink class="door" to="/business-parks">
            <span class="door__pic"><img src="/img/arden-grove.webp" width="640" height="507" alt="Aerial view of Arden Grove business park in Milnerton" loading="lazy" /></span>
            <span class="flipbox">
              <span class="flipbox__in">
                <span class="flipbox__face">
                  <span class="flipbox__title">On site</span>
                  <span>At your business park or apartment block, on its set day.</span>
                </span>
                <span class="flipbox__face flipbox__face--back">
                  <span class="flipbox__title">Already there</span>
                  <span>Leave the car in its bay while you work. <Arrow /></span>
                </span>
              </span>
            </span>
          </RouterLink>
        </div>
        <p class="wrap doors__other">Prefer to bring it to us? <RouterLink to="/bookings?mode=dropoff">Drop off by appointment</RouterLink> at 27 Honeyside Rd W, Frere Estate.</p>
      </section>

    </div>
    </div>

    <div class="over">
      <section class="triptych" aria-labelledby="services-title">
        <h2 id="services-title" class="sr-only">Three services</h2>
        <RouterLink v-for="s in services" :key="s.id" class="panel" :to="`/auto-detailing?tier=${s.id}`">
          <img :src="s.image" :alt="s.alt" width="1000" height="750" loading="lazy" />
          <span class="panel__copy">
            <span class="panel__title">{{ s.name }}</span>
            <span class="panel__line">{{ s.line }} <b>{{ s.priceLabel }}</b></span>
            <span class="arrow-link"><FlipLabel text="Enter" /><Arrow /></span>
          </span>
        </RouterLink>
      </section>

      <PolishStage />

      <div class="band" data-band aria-hidden="true">
        <span class="band__word" data-band-word>A bath, not a rinse</span>
      </div>


      <AtAGlance />

      <section class="how chapter-white">
        <div class="wrap how__grid">
          <h2 class="quiet" data-snap>Book it. Leave it parked. Drive it home clean.</h2>
          <ol class="how__list" data-rows>
            <li><strong>Book</strong> Pick a service, mobile or on site, and a time. We confirm within 4 hours.</li>
            <li><strong>Leave it parked</strong> Mobile comes to your address. On site runs on your park or block’s set day. Either way, you don’t move your car.</li>
            <li><strong>Drive it home</strong> We inspect it, then hand it back the way it should look.</li>
          </ol>
        </div>
      </section>

      <section class="care chapter-ink">
        <div class="wrap care__grid">
          <h2 class="quiet" data-snap>Your car is a big investment. We wash it like we know that.</h2>
          <ul class="ring-list" data-rows>
            <li v-for="c in care" :key="c.title"><RingBullet /><span><strong>{{ c.title }}</strong> {{ c.text }}</span></li>
          </ul>
        </div>
      </section>

      <WorkReels />

      <ReviewsFlip />

      <section class="svc-faq chapter-paper">
        <div class="wrap svc-faq__grid">
          <h2 class="quiet" data-snap>What people ask first.</h2>
          <div>
            <FaqList :items="faqHome" />
            <RouterLink class="arrow-link svc-faq__more" to="/faq"><FlipLabel text="All questions" /><Arrow /></RouterLink>
          </div>
        </div>
      </section>

      <ProofStrip />
      <ClosingCall />
    </div>
  </div>
</template>

<script setup>
import Arrow from '../components/Arrow.vue'
import AtAGlance from '../components/AtAGlance.vue'
import FaqList from '../components/FaqList.vue'
import ClosingCall from '../components/ClosingCall.vue'
import FlipLabel from '../components/FlipLabel.vue'
import MorphWord from '../components/MorphWord.vue'
import PolishStage from '../components/PolishStage.vue'
import ProofStrip from '../components/ProofStrip.vue'
import ReviewsFlip from '../components/ReviewsFlip.vue'
import WorkReels from '../components/WorkReels.vue'
import RingBullet from '../components/RingBullet.vue'
import SwirlField from '../components/SwirlField.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { faqHome } from '../data/faq'
import { faqSchema } from '../data/seo'
import { contact, care, rating, services } from '../data/site'

const root = useChoreography()
useSeo('/', { schema: [faqSchema(faqHome)] })
</script>
