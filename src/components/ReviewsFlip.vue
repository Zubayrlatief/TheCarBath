<template>
  <section id="reviews" class="reviews">
    <h2 class="loud reviews__title" data-snap data-velocity>Reviews</h2>
    <div class="reviews__grid">
      <div class="reviews__controls">
        <button type="button" class="square" aria-label="Previous review" @click="go(-1)"><Arrow style="transform: scaleX(-1)" /></button>
        <button type="button" class="square" aria-label="Next review" @click="go(1)"><Arrow /></button>
        <p class="reviews__count">{{ index + 1 }} of {{ reviews.length }}</p>
      </div>
      <div>
        <div class="reviews__top">
          <p class="reviews__stars" role="img" aria-label="Five stars out of five">
            <svg v-for="n in 5" :key="n" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="m10 1.5 2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.800l6.100-.7z" /></svg>
          </p>
          <a class="underlined" :href="contact.google" target="_blank" rel="noopener"><FlipLabel :text="`All ${rating.count} on Google`" /></a>
        </div>
        <figure ref="card" class="reviews__card" aria-live="polite">
          <blockquote>{{ reviews[index].text }}</blockquote>
          <figcaption>{{ reviews[index].name }}, on Google</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Arrow from './Arrow.vue'
import FlipLabel from './FlipLabel.vue'
import { contact, rating, reviews } from '../data/site'
import { loadGsap, reduced } from '../lib/motion'

const index = ref(0)
const card = ref(null)
let busy = false

async function go(step) {
  const next = (index.value + step + reviews.length) % reviews.length
  if (reduced()) {
    index.value = next
    return
  }
  if (busy) return
  busy = true
  const { gsap } = await loadGsap()
  gsap.timeline({ onComplete: () => { busy = false } })
    .to(card.value, { rotateX: step > 0 ? -90 : 90, duration: 0.22, ease: 'power2.in' })
    .call(() => { index.value = next })
    .set(card.value, { rotateX: step > 0 ? 90 : -90 })
    .to(card.value, { rotateX: 0, duration: 0.4, ease: 'expo.out' })
}
</script>
