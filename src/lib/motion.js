export const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches

let core
/** Fetches the animation code once. Everything that moves waits for this. */
export const loadGsap = () => (core ??= import('./gsap-core.js'))

/** Runs a callback once the browser has a quiet moment after first paint. */
export const whenIdle = (fn) => {
  if ('requestIdleCallback' in window) requestIdleCallback(fn, { timeout: 1500 })
  else setTimeout(fn, 200)
}

const EXPO = 'expo.out'

let lenis = null

/** Smooth scroll for fine pointers only; off for touch and reduced motion. */
export async function startSmoothScroll() {
  if (lenis || reduced() || !matchMedia('(hover: hover) and (pointer: fine)').matches) return
  const { gsap, ScrollTrigger, Lenis } = await loadGsap()
  lenis = new Lenis({ lerp: 0.13 })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

export function resetScroll() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}

export function setScrollLocked(on) {
  if (lenis) on ? lenis.stop() : lenis.start()
}

const once = (el) => ({ trigger: el, start: 'top 88%', once: true })

/** Anything already on screen has been seen, so it must not vanish and re-enter. */
const below = (els) => [...els].filter((el) => el.getBoundingClientRect().top > innerHeight * 0.9)

/**
 * The page's shared choreography. Each manner is chosen per element in the
 * template, so sections do not all arrive the same way.
 *
 *   data-snap      heading arrives condensed and snaps out on the width axis
 *   data-rise      text rises; siblings with data-d stagger
 *   data-open      a picture opens from a thin slit and settles
 *   data-rows      children arrive one at a time
 *   data-velocity  type stretches with scroll speed and snaps back
 *   data-band      band of type grows from a sliver, locked to the scrollbar
 *   data-drift     picture drifts slightly inside its frame
 */
export async function choreograph(root) {
  if (reduced()) return []
  const { gsap, ScrollTrigger } = await loadGsap()
  if (!root.isConnected) return []

  const entrances = gsap.context(() => {
    below(root.querySelectorAll('[data-snap]')).forEach((el) => {
      const to = Number(getComputedStyle(el).getPropertyValue('--w')) || 110
      gsap.fromTo(el, { '--w': 62 }, { '--w': to, duration: 0.65, ease: EXPO, scrollTrigger: once(el) })
    })

    below(root.querySelectorAll('[data-rise]')).forEach((el) => {
      gsap.from(el, { y: 26, autoAlpha: 0, duration: 0.8, delay: Number(el.dataset.d || 0) * 0.08, ease: EXPO, scrollTrigger: once(el) })
    })

    below(root.querySelectorAll('[data-open]')).forEach((el) => {
      const pic = el.querySelector('img')
      const tl = gsap.timeline({ scrollTrigger: once(el) })
      tl.fromTo(el, { clipPath: 'inset(48% 0% 48% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power4.inOut', clearProps: 'clipPath' })
      if (pic) tl.from(pic, { scale: 1.18, duration: 1.4, ease: EXPO }, 0)
    })

    below(root.querySelectorAll('[data-rows]')).forEach((list) => {
      gsap.from(list.children, { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.07, ease: EXPO, scrollTrigger: once(list) })
    })

    const stretchers = [...root.querySelectorAll('[data-velocity]')]
    if (stretchers.length) {
      const setters = stretchers.map((el) => gsap.quickTo(el, 'scaleY', { duration: 0.45, ease: EXPO }))
      let settle
      ScrollTrigger.create({
        onUpdate: (self) => {
          const amount = gsap.utils.clamp(0, 0.38, Math.abs(self.getVelocity()) / 5200)
          setters.forEach((set) => set(1 + amount))
          clearTimeout(settle)
          settle = setTimeout(() => setters.forEach((set) => set(1)), 70)
        },
      })
    }

    root.querySelectorAll('[data-band]').forEach((band) => {
      const word = band.querySelector('[data-band-word]')
      gsap.fromTo(word, { scaleY: 0.05 }, { scaleY: () => (band.clientHeight / word.offsetHeight) * 0.98, ease: 'none', scrollTrigger: { trigger: band, start: 'top bottom', end: 'top 25%', scrub: true, invalidateOnRefresh: true } })
    })

    root.querySelectorAll('[data-drift]').forEach((frame) => {
      const pic = frame.querySelector('img')
      gsap.fromTo(pic, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } })
    })
  }, root)

  document.fonts?.ready.then(() => ScrollTrigger.refresh())
  return [entrances]
}
