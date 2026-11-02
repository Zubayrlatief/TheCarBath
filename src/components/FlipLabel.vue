<template>
  <span class="flip-label"><span class="sr-only">{{ text }}</span><span
      v-for="word in words" :key="word.at" class="flip-label__word" aria-hidden="true"><span
        v-for="(ch, i) in word.chars" :key="i" class="flip-label__ch" :style="{ '--i': word.at + i }"
        :data-ch="ch">{{ ch }}</span></span></span>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ text: { type: String, required: true } })

/* Letters are grouped by word so a long label wraps between words on a narrow screen. */
const words = computed(() => {
  let at = 0
  return props.text.split(' ').map((word) => {
    const entry = { at, chars: [...word] }
    at += entry.chars.length + 1
    return entry
  })
})
</script>
