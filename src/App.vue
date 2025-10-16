<template>
  <div class="app">
    <header class="site-header">
      <nav class="container nav">
        <RouterLink class="brand" to="/" aria-label="The Car Bath home" @click="isOpen = false">
          <img class="brand-logo" src="/The_Car-removebg-preview.png" alt="The Car Bath logo" />
        </RouterLink>
        <button class="menu" @click="isOpen = !isOpen" :class="{ active: isOpen }" aria-label="Toggle menu">
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </button>
        <ul :class="['links', { open: isOpen }]">
          <li><RouterLink to="/business-parks" @click="isOpen = false">Business Parks & Apartment Blocks</RouterLink></li>
          <li><RouterLink to="/auto-detailing" @click="isOpen = false">Auto Detailing</RouterLink></li>
          <li><RouterLink to="/bookings" @click="isOpen = false">Bookings</RouterLink></li>
          <li><a href="tel:+27685070088" class="nav-cta" @click="isOpen = false">+27 68 507 0088</a></li>
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

<style scoped>
/* Hamburger Menu Icon */
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  padding: 8px;
  position: relative;
}

.hamburger {
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu.active .hamburger:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu.active .hamburger:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu.active .hamburger:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (min-width: 769px) {
  .menu {
    display: none;
  }
}
</style>
