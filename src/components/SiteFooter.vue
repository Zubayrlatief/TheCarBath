<template>
  <footer class="foot">
    <div class="foot__cols">
      <nav class="foot__nav" aria-label="Footer">
        <RouterLink to="/auto-detailing"><FlipLabel text="Car Detailing" /></RouterLink>
        <RouterLink to="/mobile-car-wash-cape-town"><FlipLabel text="Mobile Car Wash" /></RouterLink>
        <RouterLink to="/paint-correction-cape-town"><FlipLabel text="Paint Correction" /></RouterLink>
        <RouterLink to="/headlight-restoration-cape-town"><FlipLabel text="Headlight Restoration" /></RouterLink>
        <RouterLink to="/business-parks"><FlipLabel text="On Site" /></RouterLink>
        <RouterLink to="/prices"><FlipLabel text="Prices" /></RouterLink>
        <RouterLink to="/faq"><FlipLabel text="FAQ" /></RouterLink>
        <RouterLink to="/about"><FlipLabel text="About" /></RouterLink>
        <RouterLink to="/bookings"><FlipLabel text="Book" /></RouterLink>
      </nav>
      <p class="foot__info">
        <strong>The Car Bath</strong><br />
        {{ contact.address }}<br />
        {{ contact.hours }}<br />
        <a :href="contact.phoneHref">{{ contact.phone }}</a> ·
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </p>
      <div class="foot__side">
        <SocialApps />
        <p class="foot__info">
          <a href="/terms-of-service.html" target="_blank" rel="noopener">Terms of service</a> ·
          <a href="/privacy-policy.html" target="_blank" rel="noopener">Privacy policy</a><br />
          © {{ year }} The Car Bath
        </p>
      </div>
    </div>
    <p class="foot__name" aria-hidden="true">The Car Bath</p>
  </footer>
</template>

<script setup>
import FlipLabel from './FlipLabel.vue'
import SocialApps from './SocialApps.vue'
import { contact } from '../data/site'
const year = new Date().getFullYear()
</script>
