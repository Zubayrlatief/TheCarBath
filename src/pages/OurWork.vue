<template>
  <div ref="root">
    <section class="svc-head svc-head--text chapter-ink">
      <div class="wrap svc-head__grid">
        <div>
          <nav class="crumbs" aria-label="Breadcrumb"><RouterLink to="/">Home</RouterLink> <span aria-hidden="true">/</span> <span aria-current="page">Our work</span></nav>
          <h1 class="quiet svc-head__title" data-snap>Our work, car by car.</h1>
          <p class="lead svc-head__answer" data-rise>Recent cars we washed and detailed in Cape Town, filmed on the job in November 2026: a BMW M340i, a Volkswagen Golf GTI and a Volkswagen Tiguan R-Line.</p>
        </div>
        <figure class="svc-head__pic"><img :src="cars[0].still.src" :srcset="`${cars[0].still.src600} 600w, ${cars[0].still.src} 1200w`" sizes="(max-width: 700px) 100vw, 40vw" :alt="cars[0].still.alt" width="1200" height="1600" fetchpriority="high" /></figure>
      </div>
    </section>

    <section v-for="(car, n) in cars" :key="car.id" :id="car.id" class="work-car" :class="n % 2 ? 'chapter-paper' : 'chapter-white'" :aria-labelledby="`${car.id}-title`">
      <div class="wrap work-car__head">
        <h2 :id="`${car.id}-title`" class="quiet" data-snap>{{ car.name }}.</h2>
        <p class="lead">{{ car.summary }} <time :datetime="car.date">{{ car.dateLabel }}</time>.</p>
      </div>
      <ReelRow :label="`Clips and photos of the ${car.name}`">
        <li v-for="r in car.reels" :key="r.slug"><WorkReel :item="r" /></li>
        <li v-if="car.still && n > 0">
          <figure class="reel" data-open>
            <div class="reel__frame"><img class="reel__video" :src="car.still.src600" :srcset="`${car.still.src600} 600w, ${car.still.src} 1200w`" sizes="(max-width: 700px) 70vw, 300px" :alt="car.still.alt" width="1200" height="1600" loading="lazy" /></div>
            <figcaption class="reel__caption"><strong>{{ car.name }}</strong><span>Photo, {{ car.dateLabel }}.</span></figcaption>
          </figure>
        </li>
      </ReelRow>
    </section>

    <section class="work-car chapter-ink" aria-labelledby="concept-title">
      <div class="wrap work-car__head">
        <h2 id="concept-title" class="quiet" data-snap>Concept: matte black.</h2>
        <p class="lead">A matte black BMW X6 M under our own carport. These two pictures were made with AI from our photos. They are not a car we have worked on.</p>
      </div>
      <ReelRow label="AI concept images of a matte black BMW X6 M">
        <li v-for="c in concepts" :key="c.src">
          <figure class="reel reel--concept" data-open>
            <div class="reel__frame"><img class="reel__video" :src="c.src" :alt="c.alt" :width="c.width" :height="c.height" loading="lazy" /><span class="reel__badge">AI concept</span></div>
            <figcaption class="reel__caption"><strong>{{ c.name }}</strong><span>{{ c.caption }}</span></figcaption>
          </figure>
        </li>
      </ReelRow>
    </section>

    <section class="svc-block chapter-ink">
      <div class="wrap care__grid">
        <h2 class="quiet" data-snap>Which cars do you work on?</h2>
        <div>
          <p class="lead">Any car, bakkie or SUV, from a hatchback like the Golf to an SUV like the Tiguan. The price is the same for all of them: {{ services.map((s) => `${s.name} ${s.priceLabel}`).join(', ') }}, at your home or office, at your business park, or at our bay by appointment.</p>
          <p>{{ highEndNote }}</p>
          <RouterLink class="arrow-link" to="/prices"><FlipLabel text="See what each service includes" /><Arrow /></RouterLink>
        </div>
      </div>
    </section>

    <ClosingCall />
  </div>
</template>

<script setup>
import Arrow from '../components/Arrow.vue'
import ClosingCall from '../components/ClosingCall.vue'
import FlipLabel from '../components/FlipLabel.vue'
import ReelRow from '../components/ReelRow.vue'
import WorkReel from '../components/WorkReel.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { highEndNote, services } from '../data/site'
import { cars, concepts, workSchema } from '../data/work'

const root = useChoreography()
useSeo('/our-work', { schema: [workSchema()] })
</script>
