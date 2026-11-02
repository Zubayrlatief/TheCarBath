<template>
  <span ref="el" class="flip-price">
    <span class="sr-only">{{ value }}</span>
    <span v-for="(c, i) in chars" :key="`${value}-${i}`" class="flip-price__cell" aria-hidden="true">{{ c }}</span>
  </span>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { loadGsap, reduced } from '../lib/motion'

const props = defineProps({ value: { type: String, required: true }, onView: { type: Boolean, default: true } })
const chars = computed(() => [...props.value])
const el = ref(null)
let io

async function play() {
  if (reduced() || !el.value) return
  const { gsap } = await loadGsap()
  el.value?.querySelectorAll('.flip-price__cell').forEach((cell, i) => {
    const final = cell.textContent
    if (!/\d/.test(final)) return
    const flips = 3 + (i % 4)
    const tl = gsap.timeline({ delay: i * 0.05 })
    for (let n = 0; n < flips; n++) {
      tl.to(cell, { rotateX: -90, duration: 0.045, ease: 'power1.in' })
        .call(() => { cell.textContent = n === flips - 1 ? final : String(Math.floor(Math.random() * 10)) })
        .set(cell, { rotateX: 90 })
        .to(cell, { rotateX: 0, duration: 0.045, ease: 'power1.out' })
    }
  })
}

watch(() => props.value, () => nextTick(play))

onMounted(() => {
  if (!props.onView) return
  io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    io.disconnect()
    play()
  }, { rootMargin: '0px 0px -10% 0px' })
  io.observe(el.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>
