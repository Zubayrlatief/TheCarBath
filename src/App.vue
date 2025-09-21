<template>
  <div class="app">
    <header class="site-header">
      <nav class="container nav">
        <RouterLink class="brand" to="/" aria-label="Elite Park Car Wash home">
          <div class="brand-logo">Elite Park Car Wash</div>
        </RouterLink>
        <button class="menu" @click="isOpen=!isOpen" aria-label="Toggle menu"></button>
        <ul :class="['links', { open: isOpen }]">
          <li><RouterLink to="/business-parks">Business Parks</RouterLink></li>
          <li><RouterLink to="/auto-detailing">Auto Detailing</RouterLink></li>
          <li><RouterLink to="/bookings">Bookings</RouterLink></li>
        </ul>
      </nav>
    </header>
    <main class="container">
      <RouterView />
    </main>
    <footer class="site-footer">
      <div class="container">
        <p> {{ new Date().getFullYear() }} Elite ParkWash. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
