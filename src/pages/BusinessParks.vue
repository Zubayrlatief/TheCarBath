<template>
  <div ref="root">
    <section class="hero hero--short">
      <div class="hero__media">
        <img src="/img/business-park-cape-town-parking-bays.webp" width="1257" height="889" alt="Cars parked in the bays outside a brick office block at a Cape Town business park" fetchpriority="high" />
      </div>
      <div class="hero__copy">
        <p class="loud hero__stack" data-velocity aria-hidden="true">
          <span class="line line--1"><span>Two bays.</span></span>
          <span class="line line--2"><span>One day</span></span>
          <span class="line line--3"><span>A week.</span></span>
        </p>
        <div class="hero__foot">
          <h1 class="lead hero__h1">On-site car wash at business parks and apartment blocks in Cape Town.</h1>
          <div class="hero__actions">
            <RouterLink class="btn btn--teal" to="/bookings?mode=onsite"><FlipLabel text="Book on site" /></RouterLink>
            <a class="arrow-link arrow-link--light" href="#contact"><FlipLabel text="Host us at your property" /><Arrow /></a>
          </div>
        </div>
      </div>
    </section>

    <div class="over">
      <section class="svc-block chapter-white">
        <div class="wrap care__grid">
          <h2 class="quiet" data-snap>Work or live at a park we visit?</h2>
          <div>
            <p class="lead">Book for your property’s set day and leave the car in its bay. It’s the same price as our mobile service, for any car, bakkie or SUV.</p>
            <p class="svc-block__more"><RouterLink class="btn btn--ink" to="/bookings?mode=onsite"><FlipLabel text="Book on site" /></RouterLink></p>
            <p class="svc-block__more">Not at a business park? <RouterLink to="/mobile-car-wash-cape-town">Our mobile service comes to you</RouterLink>.</p>
          </div>
        </div>
      </section>

      <section class="needs chapter-paper">
        <div class="wrap">
          <h2 class="quiet" data-snap>Manage a property? Here’s what we need.</h2>
          <dl class="needs__list" data-rows>
            <div v-for="n in needs" :key="n.title">
              <dt>{{ n.title }}</dt>
              <dd>{{ n.text }}</dd>
            </div>
          </dl>
          <table class="price-table price-table--facts">
            <caption class="sr-only">A service day at a glance</caption>
            <tbody>
              <tr><th scope="row">On site</th><td>6 to 8 hours</td></tr>
              <tr><th scope="row">How often</th><td>Weekly or bi-weekly</td></tr>
              <tr><th scope="row">Equipment</th><td>Compact and mobile</td></tr>
              <tr><th scope="row">Footprint</th><td>Minimal impact</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="band band--ink" data-band aria-hidden="true">
        <span class="band__word" data-band-word>We bring the water</span>
      </div>

      <section class="gets chapter-ink">
        <div class="wrap care__grid">
          <h2 class="quiet" data-snap>What you get for two parking bays.</h2>
          <ul class="ring-list" data-rows>
            <li v-for="g in gets" :key="g.title"><RingBullet /><span><strong>{{ g.title }}</strong> {{ g.text }}</span></li>
          </ul>
        </div>
      </section>

      <section class="tabs-sec chapter-ink">
        <div class="wrap">
          <h2 class="quiet" data-snap>How the partnership starts.</h2>
          <div class="big-tabs" role="tablist" aria-label="Partnership steps">
            <button
              v-for="(s, i) in steps" :id="`step-tab-${i}`" :key="s.tab" type="button" role="tab" class="big-tabs__tab"
              :class="{ 'is-on': step === i }" :aria-selected="step === i" aria-controls="step-panel" @click="step = i"
            >{{ s.tab }}</button>
          </div>
          <div id="step-panel" class="big-tabs__panel" role="tabpanel" :aria-labelledby="`step-tab-${step}`">
            <Transition name="flip" mode="out-in">
              <figure :key="step" class="big-tabs__pic"><img :src="steps[step].image" :alt="steps[step].alt" width="1000" height="667" loading="lazy" /></figure>
            </Transition>
            <div>
              <p class="lead">{{ steps[step].text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="places chapter-paper">
        <div class="wrap">
          <h2 class="sr-only">We come to your business park</h2>
          <div v-for="p in places" :key="p.name" class="place">
            <figure class="place__pic" data-open><img :src="p.image" :alt="p.alt" width="1000" height="667" loading="lazy" /></figure>
            <div>
              <p class="place__name" data-snap>{{ p.name }}</p>
              <p class="lead" data-rise>{{ p.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="svc-faq chapter-white">
        <div class="wrap svc-faq__grid">
          <h2 class="quiet" data-snap>Questions from property managers.</h2>
          <FaqList :items="faqParks" />
        </div>
      </section>

      <div id="contact">
        <ClosingCall title="Let’s look at your parking." line="We visit, find the right spot and talk through scheduling and terms." to="/bookings" toLabel="Or book a wash" />
        <section class="contact-row chapter-ink">
          <a :href="contact.phoneHref"><span>Call</span>{{ contact.phone }}</a>
          <a :href="`mailto:${contact.email}`"><span>Email</span>{{ contact.email }}</a>
          <p><span>Hours</span>{{ contact.hours }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ClosingCall from '../components/ClosingCall.vue'
import Arrow from '../components/Arrow.vue'
import FaqList from '../components/FaqList.vue'
import FlipLabel from '../components/FlipLabel.vue'
import RingBullet from '../components/RingBullet.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { faqParks } from '../data/faq'
import { faqSchema, pages, serviceSchema } from '../data/seo'
import { contact } from '../data/site'

const root = useChoreography()
useSeo('/business-parks', {
  schema: [
    serviceSchema({ path: '/business-parks', name: 'On-site car wash for business parks and apartment blocks', serviceType: 'On-site car wash', description: pages['/business-parks'].description }),
    faqSchema(faqParks),
  ],
})
const step = ref(0)

const needs = [
  { title: 'Parking', text: '2 parking bays, or a small free space to work from. Easy access is all we ask.' },
  { title: 'Water', text: 'None. We bring our own supply, so no connection is needed.' },
  { title: 'Power', text: 'Optional. A standard 220V outlet, or we bring our own generators.' },
  { title: 'A word to your tenants', text: 'Tell them through your usual channels: email, notices or announcements.' },
]

const gets = [
  { title: 'A revenue stream', text: 'Earn from every wash through our partnership. We run the operation.' },
  { title: 'An edge', text: 'A car wash on site is an amenity that helps attract quality tenants and residents.' },
  { title: 'Nothing to maintain', text: 'We handle all equipment, supplies, staffing and operations.' },
  { title: 'A schedule that fits', text: 'One dedicated day, weekly or bi-weekly, around how your property runs.' },
]

const steps = [
  { tab: 'Visit', image: '/img/business-park-cape-town-courtyard.webp', alt: 'Office buildings and parking around a landscaped courtyard at a Cape Town business park', text: 'We visit your business park or apartment block to find the best spot, then talk through scheduling, access and terms.' },
  { tab: 'Agree', image: '/img/business-park-cape-town-parking-bays.webp', alt: 'Parking bays outside a brick office block at a Cape Town business park', text: 'We set out a clear agreement covering revenue sharing, scheduling, access and operations, with no hidden fees.' },
  { tab: 'Launch', image: '/img/blue-doors.webp', alt: 'Clean blue sedan on wet paving', text: 'We start washing on the agreed schedule. Our team handles everything from there.' },
  { tab: 'Keep going', image: '/img/white-gti.webp', alt: 'Polished white Golf GTI bonnet', text: 'We stay in regular contact, send usage reports and keep improving service for your tenants.' },
]

const places = [
  { name: 'Your business park.', image: '/img/business-park-cape-town-courtyard.webp', alt: 'Office buildings and parking around a landscaped courtyard at a Cape Town business park', text: 'We will service your business park or apartment block anywhere in Cape Town, on a set day each week. You give us two bays; we bring the water, the equipment and the team.' },
]
</script>
