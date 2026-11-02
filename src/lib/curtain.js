import { loadGsap, reduced, resetScroll, setScrollLocked } from './motion'

let sheet = null
let word = null
let raised = false

export function registerCurtain(sheetEl, wordEl) {
  sheet = sheetEl
  word = wordEl
}

/** Stretches the teal sheet up the screen. Resolves once the page is hidden. */
export async function coverPage() {
  if (!sheet || reduced()) return
  const { gsap } = await loadGsap()
  setScrollLocked(true)
  raised = true
  await new Promise((resolve) => {
    gsap.killTweensOf([sheet, word])
    gsap.set(sheet, { display: 'grid', scaleY: 0, transformOrigin: 'bottom' })
    gsap.set(word, { scaleY: 3.2, '--w': 62, autoAlpha: 0 })
    gsap.timeline({ onComplete: resolve })
      .to(sheet, { scaleY: 1, duration: 0.32, ease: 'power4.inOut' })
      .to(word, { scaleY: 1, '--w': 125, autoAlpha: 1, duration: 0.3, ease: 'expo.out' }, 0.1)
  })
}

/** Lets go through the top once the new page is mounted. */
export async function revealPage() {
  // First load has no sheet up: leave the browser's own scroll position alone.
  if (!raised) return
  raised = false
  resetScroll()
  const { gsap } = await loadGsap()
  gsap.timeline({
    onComplete: () => {
      gsap.set(sheet, { display: 'none' })
      setScrollLocked(false)
    },
  })
    .set(sheet, { transformOrigin: 'top' })
    .to(word, { scaleY: 0.2, autoAlpha: 0, duration: 0.2, ease: 'power2.in' }, 0)
    .to(sheet, { scaleY: 0, duration: 0.42, ease: 'power4.inOut' }, 0.02)
}
