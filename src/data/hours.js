// Opening hours from the Google Business Profile (read 8 Nov 2026): Saturday 09:00-18:00,
// Sunday 10:00-18:00, closed Monday to Friday. One-hour slots, one car at a time.
// The booking server (TheCarBath_mail, lib/hours.js) enforces the same hours: keep them in step.

export const OPEN = {
  6: { open: 9, close: 18 }, // Saturday
  0: { open: 10, close: 18 }, // Sunday
}

export const hoursText = 'Saturday 9am to 6pm, Sunday 10am to 6pm'

const pad = (n) => String(n).padStart(2, '0')
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

/** Start times ('HH:00') on a 'YYYY-MM-DD' date; [] when closed. */
export function slotsFor(date) {
  const h = OPEN[new Date(`${date}T12:00:00`).getDay()]
  if (!h) return []
  const out = []
  for (let t = h.open; t < h.close; t++) out.push(`${pad(t)}:00`)
  return out
}

/** The next `count` open days, starting tomorrow. */
export function nextOpenDays(count = 8, from = new Date()) {
  const out = []
  const d = new Date(from)
  d.setHours(12, 0, 0, 0)
  for (let i = 0; out.length < count && i < 120; i++) {
    d.setDate(d.getDate() + 1)
    if (OPEN[d.getDay()]) out.push(iso(d))
  }
  return out
}
