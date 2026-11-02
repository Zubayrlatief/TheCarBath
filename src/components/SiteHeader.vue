<template>
  <header class="bar" :class="{ 'is-solid': solid || open }">
    <RouterLink class="bar__brand" to="/" aria-label="The Car Bath home" @click="open = false">
      <img src="/img/logo-96.png" width="44" height="44" alt="" />
      <span>The Car <b>Bath</b></span>
    </RouterLink>

    <button class="bar__menu" type="button" :aria-expanded="open" aria-controls="site-links" @click="open = !open">
      {{ open ? 'Close' : 'Menu' }}
    </button>

    <nav id="site-links" class="bar__links" :class="{ 'is-open': open }" aria-label="Main">
      <RouterLink to="/mobile-car-wash-cape-town" @click="open = false"><FlipLabel text="Mobile" /></RouterLink>
      <RouterLink to="/business-parks" @click="open = false"><FlipLabel text="On Site" /></RouterLink>
      <RouterLink to="/auto-detailing" @click="open = false"><FlipLabel text="Detailing" /></RouterLink>
      <RouterLink to="/prices" @click="open = false"><FlipLabel text="Prices" /></RouterLink>
      <a :href="contact.phoneHref" @click="open = false"><FlipLabel :text="contact.phone" /></a>
      <RouterLink class="bar__book" to="/bookings" @click="open = false"><FlipLabel text="Book" /></RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import FlipLabel from './FlipLabel.vue'
import { contact } from '../data/site'

const open = ref(false)
const solid = ref(false)
const onScroll = () => { solid.value = window.scrollY > 40 }

onMounted(() => {
  onScroll()
  addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => removeEventListener('scroll', onScroll))
</script>
