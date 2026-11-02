<template>
  <div class="faq-list">
    <details v-for="f in items" :key="f.q" class="faq-item">
      <summary>
        <component :is="headingTag" class="faq-item__q">{{ f.q }}</component>
        <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 10h14M10 3v14" /></svg>
      </summary>
      <p class="faq-item__a">{{ f.a }}</p>
    </details>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
  headingTag: { type: String, default: 'h3' },
})
</script>
