<template>
  <figure class="reel" :class="{ 'is-playing': playing }" data-open>
    <div class="reel__frame">
      <video
        ref="video"
        class="reel__video"
        :poster="item.poster"
        :aria-label="item.alt"
        width="720"
        height="1280"
        muted
        loop
        playsinline
        preload="none"
        disablepictureinpicture
        @timeupdate="onTime"
      >
        <source :src="item.src" type="video/mp4" />
      </video>
      <span class="reel__progress" aria-hidden="true"><i :style="{ transform: `scaleX(${progress})` }" /></span>
      <span v-if="badge" class="reel__badge">{{ badge }}</span>
    </div>
    <figcaption class="reel__caption">
      <strong>{{ item.name }}</strong>
    </figcaption>
  </figure>
</template>

<script setup>
// One vertical clip of our own work. It plays only while it is on screen, stays on its
// poster for anyone who prefers reduced motion, and shows a teal line as it plays.
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({ item: { type: Object, required: true }, badge: { type: String, default: '' } })

const video = ref(null)
const playing = ref(false)
const progress = ref(0)
let io

const onTime = () => {
  const v = video.value
  if (v && v.duration) progress.value = v.currentTime / v.duration
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  io = new IntersectionObserver(([entry]) => {
    const v = video.value
    if (!v) return
    if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
      v.play().then(() => { playing.value = true }).catch(() => {})
    } else {
      v.pause()
      playing.value = false
    }
  }, { threshold: [0, 0.55, 1] })
  io.observe(video.value)
})
onBeforeUnmount(() => io?.disconnect())
</script>
