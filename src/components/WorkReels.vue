<template>
  <section class="reels chapter-ink" aria-labelledby="reels-title">
    <div class="wrap reels__head">
      <h2 id="reels-title" class="quiet" data-snap>Fresh off the wash.</h2>
      <p class="lead">Short clips of cars we worked on in November 2026: a BMW M340i, a Golf GTI and a Tiguan R-Line.</p>
    </div>
    <ReelRow label="Video clips of cars we have washed and detailed">
      <li v-for="(r, i) in homeReels" :key="r.slug"><WorkReel :item="r" :badge="i === 0 ? 'Nov 2026' : ''" /></li>
      <li v-for="c in concepts" :key="c.src">
        <figure class="reel reel--concept" data-open>
          <div class="reel__frame"><img class="reel__video" :src="c.src" :alt="c.alt" :width="c.width" :height="c.height" loading="lazy" /><span class="reel__badge">AI concept</span></div>
          <figcaption class="reel__caption"><strong>{{ c.name }}</strong><span>{{ c.caption }}</span></figcaption>
        </figure>
      </li>
      <template #foot>
        <RouterLink class="arrow-link" to="/our-work"><FlipLabel text="See all our work" /><Arrow /></RouterLink>
      </template>
    </ReelRow>
  </section>
</template>

<script setup>
import Arrow from './Arrow.vue'
import FlipLabel from './FlipLabel.vue'
import ReelRow from './ReelRow.vue'
import WorkReel from './WorkReel.vue'
import { concepts, homeReels } from '../data/work'
</script>
