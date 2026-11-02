import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { choreograph, whenIdle } from '../lib/motion'
import { revealPage } from '../lib/curtain'

/** Opens the page sheet when the page is ready, then starts its motion once the browser is idle. */
export function useChoreography() {
  const root = ref(null)
  let contexts = []
  let gone = false

  onMounted(async () => {
    await nextTick()
    revealPage()
    whenIdle(async () => {
      if (gone || !root.value) return
      contexts = await choreograph(root.value)
      if (gone) contexts.forEach((c) => c.revert())
    })
  })

  onBeforeUnmount(() => {
    gone = true
    contexts.forEach((c) => c.revert())
  })

  return root
}
