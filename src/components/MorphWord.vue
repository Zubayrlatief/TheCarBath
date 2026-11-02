<template>
  <span ref="box" class="morph" aria-hidden="true">
    <svg class="morph__defs" width="0" height="0" focusable="false">
      <filter :id="filterId">
        <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140" />
      </filter>
    </svg>
    <span v-for="w in words" :key="w" class="morph__size">{{ w }}</span>
    <span ref="a" class="morph__word">{{ words[0] }}</span>
    <span ref="b" class="morph__word" style="opacity: 0">{{ words[1] }}</span>
  </span>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, useId } from 'vue'
import { reduced } from '../lib/motion'

const props = defineProps({
  words: { type: Array, required: true },
  morph: { type: Number, default: 1.0 },
  hold: { type: Number, default: 2.4 },
})

const filterId = useId()
const box = ref(null)
const a = ref(null)
const b = ref(null)

let raf = 0
let visible = true
let io

function paint(f) {
  const set = (el, v) => {
    const k = Math.max(v, 0.0001)
    el.style.filter = `blur(${Math.min(8 / k - 8, 60).toFixed(2)}px)`
    el.style.opacity = Math.pow(k, 0.4).toFixed(3)
  }
  set(b.value, f)
  set(a.value, 1 - f)
}

function rest() {
  a.value.style.filter = ''
  a.value.style.opacity = '1'
  b.value.style.opacity = '0'
  box.value.style.filter = ''
}

onMounted(() => {
  if (reduced() || props.words.length < 2) return

  io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
  io.observe(box.value)

  let i = 0
  let phaseStart = performance.now()
  let morphing = false

  const tick = (now) => {
    raf = requestAnimationFrame(tick)
    if (!visible || document.hidden) {
      phaseStart = now
      return
    }
    const t = (now - phaseStart) / 1000
    if (!morphing) {
      if (t < props.hold) return
      morphing = true
      phaseStart = now
      b.value.textContent = props.words[(i + 1) % props.words.length]
      box.value.style.filter = `url(#${filterId})`
      return
    }
    const f = Math.min(1, t / props.morph)
    paint(f)
    if (f === 1) {
      i = (i + 1) % props.words.length
      a.value.textContent = props.words[i]
      rest()
      morphing = false
      phaseStart = now
    }
  }
  raf = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  io?.disconnect()
})
</script>
