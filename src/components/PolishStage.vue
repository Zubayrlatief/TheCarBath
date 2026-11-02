<template>
  <section class="polish chapter-paper">
    <div class="wrap polish__grid">
      <div class="polish__copy">
        <h2 class="quiet polish__title" data-snap>Press the polisher. Bring the paint back.</h2>
        <p class="polish__figure" aria-hidden="true">{{ done ? 'Gone.' : `${gone}%` }}</p>
        <p class="polish__status" role="status" aria-live="polite">{{ status }}</p>
        <button class="btn btn--ink" type="button" @click="done ? restore() : autoPolish()">
          <FlipLabel :text="done ? 'Dull it again' : 'Polish it for me'" />
        </button>
        <p class="polish__note">The dull finish and swirl marks are added, so you can see what a polish removes. The bakkie is one we washed.</p>
      </div>

      <div
        ref="stage"
        class="polish__stage"
        :class="{ 'is-pressing': pressing, 'is-done': done }"
        @pointerdown="down"
        @pointermove="move"
        @pointerup="up"
        @pointercancel="up"
        @pointerleave="up"
      >
        <img ref="photo" src="/img/blue-polish.webp" width="1040" height="780" alt="Bonnet and headlight of a glossy blue bakkie" loading="lazy" draggable="false" />
        <canvas ref="canvas" aria-hidden="true"></canvas>
        <span class="polish__glint" aria-hidden="true"></span>
        <span ref="tool" class="polish__tool" aria-hidden="true">
          <svg viewBox="0 0 140 120">
            <rect x="30" y="16" width="96" height="30" rx="14" fill="#12171a" />
            <rect x="38" y="22" width="66" height="4" rx="2" fill="#5b6770" />
            <rect x="108" y="20" width="14" height="22" rx="6" fill="#00c4cf" />
            <rect x="6" y="28" width="34" height="12" rx="6" fill="#07090a" />
            <path d="M52 44h36l6 26H46z" fill="#07090a" />
            <ellipse cx="70" cy="74" rx="40" ry="11" fill="#2a3237" />
            <ellipse cx="70" cy="88" rx="56" ry="17" fill="#008f98" />
            <ellipse cx="70" cy="83" rx="56" ry="17" fill="#00c4cf" />
            <ellipse class="polish__pad" cx="70" cy="83" rx="38" ry="11" fill="none" stroke="#07090a" stroke-opacity=".45" stroke-width="2" stroke-dasharray="22 16" />
            <ellipse class="polish__pad polish__pad--in" cx="70" cy="83" rx="20" ry="6" fill="none" stroke="#07090a" stroke-opacity=".45" stroke-width="2" stroke-dasharray="12 9" />
          </svg>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import FlipLabel from './FlipLabel.vue'
import { drawSwirls } from '../lib/swirls'
import { loadGsap, reduced } from '../lib/motion'

const stage = ref(null)
const photo = ref(null)
const canvas = ref(null)
const tool = ref(null)
const pressing = ref(false)
const gone = ref(0)
const done = ref(false)

const status = computed(() => {
  if (done.value) return 'That’s the paint underneath.'
  if (gone.value < 2) return 'Press and drag across the bonnet.'
  return 'of the dull finish gone. Keep going.'
})

const W = 1040
const H = 780
const BRUSH = 112
let ctx
let probe
let last = null
let auto
let trigger
let baseline = 1
let nearby
let gsap
let ScrollTrigger

/** The "before": the real photograph, faded, hazed and marked. Polishing removes this layer. */
function paintDull() {
  ctx.globalCompositeOperation = 'source-over'
  ctx.clearRect(0, 0, W, H)
  ctx.drawImage(photo.value, 0, 0, W, H)
  ctx.globalCompositeOperation = 'saturation'
  ctx.fillStyle = 'rgba(128,128,128,0.72)'
  ctx.fillRect(0, 0, W, H)
  ctx.globalCompositeOperation = 'source-over'
  ctx.fillStyle = 'rgba(176,182,188,0.3)'
  ctx.fillRect(0, 0, W, H)
  // Fine marks gather around each point where the sky reflects, as they do in real sun.
  drawSwirls(ctx, W, H, { cx: 0.34, cy: 0.16, count: 1300, reach: 0.34, alpha: 0.2, thickness: 0.5, sweepMax: 0.2, seed: 4217 })
  drawSwirls(ctx, W, H, { cx: 0.72, cy: 0.3, count: 1100, reach: 0.3, alpha: 0.18, thickness: 0.5, sweepMax: 0.2, seed: 913 })
  drawSwirls(ctx, W, H, { cx: 0.2, cy: 0.72, count: 700, reach: 0.26, alpha: 0.14, thickness: 0.5, sweepMax: 0.2, seed: 2719 })
}

function erase(x, y) {
  ctx.globalCompositeOperation = 'destination-out'
  const g = ctx.createRadialGradient(x, y, BRUSH * 0.4, x, y, BRUSH)
  g.addColorStop(0, 'rgba(0,0,0,0.8)')
  g.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(x, y, BRUSH, 0, Math.PI * 2)
  ctx.fill()
}

function stroke(x, y) {
  if (last) {
    const d = Math.hypot(x - last.x, y - last.y)
    const steps = Math.max(1, Math.floor(d / 22))
    for (let s = 1; s <= steps; s++) erase(last.x + ((x - last.x) * s) / steps, last.y + ((y - last.y) * s) / steps)
  } else erase(x, y)
  last = { x, y }
}

function coverage() {
  const small = probe.getContext('2d', { willReadFrequently: true })
  small.clearRect(0, 0, 65, 49)
  small.drawImage(canvas.value, 0, 0, 65, 49)
  const px = small.getImageData(0, 0, 65, 49).data
  let total = 0
  for (let i = 3; i < px.length; i += 4) total += px[i]
  return total
}

let measureQueued = false
function measure() {
  if (measureQueued) return
  measureQueued = true
  setTimeout(() => {
    measureQueued = false
    if (!canvas.value || done.value) return
    const pct = Math.round(100 - Math.min(100, (coverage() / baseline) * 100))
    gone.value = Math.max(gone.value, pct)
    if (pct >= 88) finish()
  }, 90)
}

function finish() {
  done.value = true
  gone.value = 100
  pressing.value = false
  canvas.value.classList.add('is-gone')
  tool.value.classList.add('is-gone')
}

function restore() {
  auto?.kill()
  paintDull()
  done.value = false
  gone.value = 0
  canvas.value.classList.remove('is-gone')
  tool.value.classList.remove('is-gone')
  placeTool(W * 0.5, H * 0.74)
}

function local(e) {
  const r = stage.value.getBoundingClientRect()
  return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H }
}

function placeTool(x, y) {
  tool.value.style.left = `${(x / W) * 100}%`
  tool.value.style.top = `${(y / H) * 100}%`
}

function down(e) {
  if (done.value) return
  auto?.kill()
  pressing.value = true
  stage.value.setPointerCapture?.(e.pointerId)
  last = null
  const p = local(e)
  placeTool(p.x, p.y)
  stroke(p.x, p.y)
  measure()
}

function move(e) {
  if (!pressing.value) return
  const p = local(e)
  placeTool(p.x, p.y)
  stroke(p.x, p.y)
  measure()
}

function up() {
  pressing.value = false
  last = null
}

async function autoPolish() {
  auto?.kill()
  if (reduced()) {
    finish()
    return
  }
  if (!gsap) ({ gsap } = await loadGsap())
  const state = { t: 0 }
  pressing.value = true
  last = null
  auto = gsap.to(state, {
    t: 1,
    duration: 2.8,
    ease: 'none',
    onUpdate() {
      // Overlapping passes across the panel, the way a polisher is actually worked.
      const rows = 5
      const pos = state.t * rows
      const row = Math.min(rows - 1, Math.floor(pos))
      const along = pos - row
      const x = W * (row % 2 ? 1 - along : along)
      const y = H * ((row + 0.5) / rows)
      placeTool(gsap.utils.clamp(50, W - 50, x), y)
      stroke(x, y)
      measure()
    },
    onComplete() {
      last = null
      finish()
    },
  })
}

async function startMotion() {
  ;({ gsap, ScrollTrigger } = await loadGsap())
  if (!stage.value) return
  // One short pass when it comes into view, so the control explains itself.
  trigger = ScrollTrigger.create({
    trigger: stage.value,
    start: 'top 60%',
    once: true,
    onEnter() {
      if (gone.value > 0 || !painted) return
      const s = { p: 0 }
      last = null
      pressing.value = true
      auto = gsap.to(s, {
        p: 1,
        duration: 1.1,
        ease: 'power2.inOut',
        onUpdate() {
          const x = W * (0.26 + s.p * 0.48)
          const y = H * (0.74 - Math.sin(s.p * Math.PI) * 0.1)
          placeTool(x, y)
          stroke(x, y)
        },
        onComplete() {
          pressing.value = false
          last = null
          measure()
        },
      })
    },
  })
}

let painted = false
function ready() {
  if (painted) return
  painted = true
  paintDull()
  baseline = coverage() || 1
  placeTool(W * 0.5, H * 0.74)
}

onMounted(() => {
  canvas.value.width = W
  canvas.value.height = H
  ctx = canvas.value.getContext('2d')
  probe = document.createElement('canvas')
  probe.width = 65
  probe.height = 49

  // The canvas is costly to paint, so it waits until it is nearly on screen.
  const paintWhenLoaded = () => {
    if (photo.value.complete && photo.value.naturalWidth) ready()
    else photo.value.addEventListener('load', ready, { once: true })
  }
  nearby = new IntersectionObserver(async ([e]) => {
    if (!e.isIntersecting) return
    nearby.disconnect()
    paintWhenLoaded()
    if (!reduced()) await startMotion()
  }, { rootMargin: '700px 0px' })
  nearby.observe(stage.value)

})

onBeforeUnmount(() => {
  nearby?.disconnect()
  auto?.kill()
  trigger?.kill()
})
</script>
