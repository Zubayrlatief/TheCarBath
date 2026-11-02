<template>
  <section class="close">
    <SwirlField class="close__disc" :count="1500" :alpha="0.7" color="7,9,10" :thickness="1.1" :sweep-max="0.5" />
    <div class="close__body">
      <h2 class="quiet" data-snap>{{ title }}</h2>
      <p v-if="line" class="lead" data-rise>{{ line }}</p>
      <div class="close__actions" data-rise data-d="1">
        <a class="btn btn--ink" :href="contact.whatsapp" target="_blank" rel="noopener"><FlipLabel text="WhatsApp us" /></a>
        <RouterLink class="arrow-link" :to="to"><FlipLabel :text="toLabel" /><Arrow /></RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import FlipLabel from './FlipLabel.vue'
import SwirlField from './SwirlField.vue'
import Arrow from './Arrow.vue'
import { contact } from '../data/site'

defineProps({
  title: { type: String, default: 'Tell us where it’s parked.' },
  line: { type: String, default: '' },
  to: { type: String, default: '/bookings' },
  toLabel: { type: String, default: 'Or book online' },
})
</script>
