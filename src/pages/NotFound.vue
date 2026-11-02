<template>
  <div ref="root">
    <section class="svc-head svc-head--text chapter-ink">
      <div class="wrap">
        <h1 class="quiet svc-head__title">That page washed away.</h1>
        <p class="lead svc-head__answer">It doesn’t exist, or it has moved. Here’s where to go instead.</p>
        <div class="svc-head__actions">
          <RouterLink class="btn btn--teal" to="/"><FlipLabel text="Back home" /></RouterLink>
          <RouterLink class="arrow-link" to="/prices"><FlipLabel text="See prices" /><Arrow /></RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Arrow from '../components/Arrow.vue'
import FlipLabel from '../components/FlipLabel.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'

const root = useChoreography()
useSeo('/404', { noindex: true })
</script>
