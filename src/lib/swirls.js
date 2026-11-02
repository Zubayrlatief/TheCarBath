/**
 * Draws swirl marks: short fine arcs concentric around a point of light, the
 * way machine-buffing scratches catch the sun on real paint. Seeded so the
 * marks look the same on every visit.
 */
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function drawSwirls(ctx, width, height, { cx = 0.55, cy = 0.35, count = 1400, reach = 0.72, alpha = 0.34, color = '255,255,255', seed = 4217, thickness = 0.7, sweepMax = 0.22 } = {}) {
  const rand = seeded(seed)
  const ox = width * cx
  const oy = height * cy
  const maxR = Math.hypot(width, height) * reach
  ctx.lineCap = 'round'
  for (let i = 0; i < count; i++) {
    const r = Math.pow(rand(), 0.7) * maxR + 6
    const start = rand() * Math.PI * 2
    const sweep = (0.03 + rand() * sweepMax) * (rand() > 0.5 ? 1 : -1)
    // Marks are brightest near the light and thin out away from it.
    const falloff = 1 - Math.min(1, r / maxR)
    ctx.strokeStyle = `rgba(${color},${(alpha * (0.2 + rand() * 0.8) * (0.25 + falloff)).toFixed(3)})`
    ctx.lineWidth = thickness * (0.5 + rand() * 0.8)
    ctx.beginPath()
    ctx.arc(ox, oy, r, start, start + sweep)
    ctx.stroke()
  }
}

/** Flat ring arcs for SVG bullets and the close disc. */
export function swirlPaths(size, { rings = 26, seed = 91 } = {}) {
  const rand = seeded(seed)
  const c = size / 2
  const out = []
  for (let i = 0; i < rings; i++) {
    const r = c * (0.1 + (i / rings) * 0.88)
    const parts = 2 + Math.floor(rand() * 2)
    for (let p = 0; p < parts; p++) {
      const a = rand() * Math.PI * 2
      const b = a + 0.5 + rand() * 1.5
      const x1 = c + r * Math.cos(a)
      const y1 = c + r * Math.sin(a)
      const x2 = c + r * Math.cos(b)
      const y2 = c + r * Math.sin(b)
      out.push(`M${x1.toFixed(1)} ${y1.toFixed(1)}A${r.toFixed(1)} ${r.toFixed(1)} 0 ${b - a > Math.PI ? 1 : 0} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`)
    }
  }
  return out
}
