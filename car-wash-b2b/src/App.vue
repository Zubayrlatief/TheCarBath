<template>
  <div class="app">
    <header class="site-header">
      <nav class="container nav">
        <a class="brand" href="/">Elite ParkWash</a>
        <button class="menu" @click="isOpen=!isOpen" aria-label="Toggle menu"></button>
        <ul :class="['links', { open: isOpen }]">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/services">Services</RouterLink></li>
          <li><RouterLink to="/corporate">Corporate</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
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
import { ref } from "vue"
const isOpen = ref(false)
</script>
