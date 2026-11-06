<template>
  <section class="reels chapter-ink" aria-labelledby="reels-title">
    <div class="wrap reels__head">
      <h2 id="reels-title" class="quiet" data-snap>Fresh off the wash.</h2>
      <p class="lead">Short clips of cars we worked on in November 2026, with number plates blurred.</p>
    </div>
    <ul class="reels__row" tabindex="0" aria-label="Video clips of cars we have washed and detailed">
      <li v-for="(r, i) in homeReels" :key="r.slug"><WorkReel :item="r" :badge="i === 0 ? 'Nov 2026' : ''" /></li>
    </ul>
    <div class="wrap reels__foot">
      <RouterLink class="arrow-link" to="/our-work"><FlipLabel text="See all our work" /><Arrow /></RouterLink>
    </div>
  </section>
</template>

<script setup>
import Arrow from './Arrow.vue'
import FlipLabel from './FlipLabel.vue'
import WorkReel from './WorkReel.vue'
import { homeReels } from '../data/work'
</script>
