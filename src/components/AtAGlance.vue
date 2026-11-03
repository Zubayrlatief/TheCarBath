<template>
  <section class="glance" :class="`chapter-${ground}`">
    <div class="wrap glance__grid">
      <div>
        <h2 class="quiet" data-snap>The Car Bath, in short.</h2>
        <p class="lead glance__lead">The Car Bath is a mobile and on-site car wash, valet and detailing business in Cape Town. We come to your home or office, or wash at your business park or apartment block on its set day. You can also drop off at our bay by appointment.</p>
      </div>
      <dl class="glance__facts">
        <div v-for="f in facts" :key="f.k"><dt>{{ f.k }}</dt><dd>{{ f.v }}</dd></div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { contact, rating, services, highEndNote } from '../data/site'

defineProps({ ground: { type: String, default: 'paper' } })

const facts = [
  { k: 'Services', v: 'Car washing, valeting, detailing, paint correction and headlight restoration' },
  { k: 'Prices', v: services.map((s) => `${s.name} ${s.priceLabel}`).join(', ') },
  { k: 'How', v: 'Mobile at your home or office, on site at your business park or block, or drop-off at 27 Honeyside Rd W, Frere Estate' },
  { k: 'Same price', v: 'Cars, bakkies and SUVs, mobile or on site' },
  { k: 'High-end cars', v: highEndNote },
  { k: 'Hours', v: contact.hours },
  { k: 'Reviews', v: `${rating.score} stars from ${rating.count} Google reviews` },
  { k: 'Experience', v: '4+ years, with public liability insurance' },
  { k: 'Book', v: `Online, on WhatsApp or on ${contact.phone}. Confirmed within 4 hours` },
]
</script>
