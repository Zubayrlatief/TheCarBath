<template>
  <canvas ref="el" class="swirl-field" aria-hidden="true"></canvas>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { drawSwirls } from '../lib/swirls'
import { loadGsap, reduced, whenIdle } from '../lib/motion'

const props = defineProps({
  cx: { type: Number, default: 0.5 },
  cy: { type: Number, default: 0.5 },
  count: { type: Number, default: 1500 },
  alpha: { type: Number, default: 0.5 },
  color: { type: String, default: '255,255,255' },
  desktopOnly: { type: Boolean, default: false },
  thickness: { type: Number, default: 0.7 },
  sweepMax: { type: Number, default: 0.22 },
})
const el = ref(null)
let tween
let nearby

async function paint() {
  const size = 1400
  el.value.width = size
  el.value.height = size
  drawSwirls(el.value.getContext('2d'), size, size, { cx: 0.5, cy: 0.5, count: props.count, reach: 0.5, alpha: props.alpha, color: props.color, thickness: props.thickness, sweepMax: props.sweepMax })
  if (reduced()) return
  const { gsap } = await loadGsap()
  if (!el.value) return
  tween = gsap.to(el.value, {
    rotate: 70,
    ease: 'none',
    scrollTrigger: { trigger: el.value.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
  })
}

onMounted(() => {
  if (props.desktopOnly && innerWidth < 900) return
  // Drawn just before it is needed, after the page has finished its first paint.
  nearby = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return
    nearby.disconnect()
    whenIdle(paint)
  }, { rootMargin: '400px 0px' })
  nearby.observe(el.value)
})
onBeforeUnmount(() => {
  nearby?.disconnect()
  tween?.scrollTrigger?.kill()
  tween?.kill()
})
</script>
