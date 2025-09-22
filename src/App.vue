<template>
  <div class="app">
    <header class="site-header">
      <nav class="container nav">
        <RouterLink class="brand" to="/" aria-label="The Car Bath home">
          <img class="brand-logo" src="/The_Car-removebg-preview.png" alt="The Car Bath logo" />
        </RouterLink>
        <button class="menu" @click="isOpen=!isOpen" aria-label="Toggle menu"></button>
        <ul :class="['links', { open: isOpen }]">
          <li><RouterLink to="/business-parks">Business Parks</RouterLink></li>
          <li><RouterLink to="/auto-detailing">Auto Detailing</RouterLink></li>
          <li><RouterLink to="/bookings">Bookings</RouterLink></li>
          <li><a href="tel:+27821234567" class="nav-cta">Call Us</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue'

const isOpen = ref(false)
</script>
