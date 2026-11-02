<template>
  <ul class="proof">
    <li><a :href="contact.google" target="_blank" rel="noopener">{{ rating.score }} stars from {{ rating.count }} Google reviews</a></li>
    <li>4+ years on the job</li>
    <li>Mobile or on site, Cape Town</li>
  </ul>
</template>

<script setup>
import { contact, rating } from '../data/site'
</script>
