<template>
  <div class="reel-row">
    <ul ref="row" class="reels__row" tabindex="0" :aria-label="label" @scroll.passive="update">
      <slot />
    </ul>
    <div class="wrap reel-row__bar">
      <slot name="foot" />
      <div class="reel-row__nav">
        <button type="button" class="square reel-row__btn" :disabled="atStart" aria-label="Previous clips" @click="step(-1)"><Arrow style="transform: scaleX(-1)" /></button>
        <button type="button" class="square reel-row__btn" :disabled="atEnd" aria-label="Next clips" @click="step(1)"><Arrow /></button>
      </div>
    </div>
  </div>
</template>

<script setup>
// A horizontal row of reels with previous and next buttons. Each press moves one card;
// the buttons switch off at either end. Swipe and drag still work as before.
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Arrow from './Arrow.vue'

defineProps({ label: { type: String, required: true } })

const row = ref(null)
const atStart = ref(true)
const atEnd = ref(false)

const update = () => {
  const el = row.value
  if (!el) return
  atStart.value = el.scrollLeft <= 4
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
}

const step = (dir) => {
  const el = row.value
  const card = el?.querySelector(':scope > li')
  if (!card) return
  const gap = parseFloat(getComputedStyle(el).columnGap) || 0
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: reduce ? 'auto' : 'smooth' })
}

onMounted(() => {
  update()
  window.addEventListener('resize', update)
})
onBeforeUnmount(() => window.removeEventListener('resize', update))
</script>
