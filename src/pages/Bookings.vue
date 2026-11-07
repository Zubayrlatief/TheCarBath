<template>
  <div ref="root">
    <section class="book-head chapter-ink">
      <div class="wrap">
        <h1 class="quiet" data-snap>Book a car wash or detail in Cape Town.</h1>
        <p class="lead" data-rise>Tell us the car, the place and the time. We’ll confirm your appointment within 4 hours.</p>
      </div>
    </section>

    <section class="book chapter-paper">
      <div v-if="sent" class="wrap book__done" role="status">
        <h2 class="quiet">Booking received.</h2>
        <p class="lead">{{ sent }}</p>
        <div class="book__done-actions">
          <RouterLink class="btn btn--ink" to="/"><FlipLabel text="Back home" /></RouterLink>
          <button class="arrow-link" type="button" @click="sent = ''"><FlipLabel text="Book another" /><Arrow /></button>
        </div>
      </div>

      <form v-else class="wrap book__grid" novalidate @submit.prevent="handleSubmit">
        <div class="book__form">
          <fieldset id="step-service" class="step" :class="{ 'is-missing': show('service') }">
            <legend class="book__legend"><span class="step__n">1</span> Which service?</legend>
            <div class="svc-list">
              <label v-for="s in services" :key="s.id" class="svc" :class="{ 'is-on': form.service === s.id }">
                <input v-model="form.service" type="radio" name="service" :value="s.id" />
                <span class="svc__name">{{ s.name }}</span>
                <span class="svc__line">{{ s.includes.slice(0, 2).join('. ') }}.</span>
                <span class="svc__price">{{ s.priceLabel }}</span>
              </label>
            </div>
            <p v-if="show('service')" class="step__error">Choose a service.</p>
          </fieldset>

          <fieldset id="step-where" class="step" :class="{ 'is-missing': show('mode') || show('place') }">
            <legend class="book__legend"><span class="step__n">2</span> Where is the car?</legend>
            <div class="svc-list">
              <label v-for="m in modes" :key="m.id" class="svc svc--mode" :class="{ 'is-on': mode === m.id }">
                <input v-model="mode" type="radio" name="mode" :value="m.id" />
                <span class="svc__name">{{ m.name }}</span>
                <span class="svc__line">{{ m.line }}</span>
              </label>
            </div>
            <div v-if="mode === 'mobile'" class="field step__more">
              <label for="privateLocation">Your home or office address</label>
              <input id="privateLocation" v-model="form.privateLocation" type="text" autocomplete="street-address" placeholder="Street and suburb" />
            </div>
            <div v-else-if="mode === 'onsite'" class="field step__more">
              <label for="customBusinessPark">Your business park or apartment block</label>
              <input id="customBusinessPark" v-model="form.customBusinessPark" type="text" autocomplete="organization" placeholder="Its name and area" />
            </div>
            <p v-else-if="mode === 'dropoff'" class="book__drop step__more">Book first, then bring your car to <a :href="contact.google" target="_blank" rel="noopener">{{ contact.address }}</a> at your booked time. No walk-ins.</p>
            <p v-if="show('mode')" class="step__error">Choose mobile, on site or drop off.</p>
            <p v-else-if="show('place')" class="step__error">{{ mode === 'onsite' ? 'Tell us the business park or block.' : 'Tell us the address.' }}</p>
          </fieldset>

          <fieldset id="step-when" class="step" :class="{ 'is-missing': show('date') || show('time') }">
            <legend class="book__legend"><span class="step__n">3</span> When?</legend>
            <p class="field-note book__hours">We're open {{ hoursText }}. One car at a time, so a booked time disappears for everyone else.</p>
            <p id="day-label" class="book__label">Day</p>
            <div class="times days" role="radiogroup" aria-labelledby="day-label">
              <label v-for="d in days" :key="d" class="time day" :class="{ 'is-on': form.preferredDate === d }">
                <input v-model="form.preferredDate" type="radio" name="day" :value="d" /><span>{{ dayName(d) }}</span><small>{{ dayDate(d) }}</small>
              </label>
            </div>
            <p id="time-label" class="book__label">Time</p>
            <div class="times" role="radiogroup" aria-labelledby="time-label" aria-describedby="slot-note">
              <label v-for="t in times" :key="t" class="time" :class="{ 'is-on': form.preferredTime === t, 'is-taken': taken.includes(t) }">
                <input v-model="form.preferredTime" type="radio" name="time" :value="t" :disabled="taken.includes(t)" />{{ taken.includes(t) ? 'Booked' : formatTime(t) }}
              </label>
            </div>
            <p id="slot-note" class="field-note" :class="{ 'is-error': slotError }" aria-live="polite">
              {{ loadingSlots ? 'Checking which times are free…' : slotError || (times.length && taken.length === times.length ? 'That day is fully booked. Please choose another day.' : '') }}
            </p>
            <p v-if="show('date') || show('time')" class="step__error">Choose a {{ show('date') ? 'day' : 'time' }}.</p>
          </fieldset>

          <fieldset id="step-you" class="step" :class="{ 'is-missing': show('you') }">
            <legend class="book__legend"><span class="step__n">4</span> Your details</legend>
            <div class="field-row">
              <div class="field" :class="{ 'is-missing': show('firstName') }"><label for="firstName">First name</label><input id="firstName" v-model="form.firstName" type="text" autocomplete="given-name" /></div>
              <div class="field" :class="{ 'is-missing': show('lastName') }"><label for="lastName">Last name</label><input id="lastName" v-model="form.lastName" type="text" autocomplete="family-name" /></div>
            </div>
            <div class="field-row">
              <div class="field" :class="{ 'is-missing': show('phone') }"><label for="phone">Phone</label><input id="phone" v-model="form.phone" type="tel" inputmode="tel" autocomplete="tel" /></div>
              <div class="field" :class="{ 'is-missing': show('email') }"><label for="email">Email</label><input id="email" v-model="form.email" type="email" inputmode="email" autocomplete="email" /></div>
            </div>
            <div class="field" :class="{ 'is-missing': show('vehicleMake') }"><label for="vehicleMake">Your car</label><input id="vehicleMake" v-model="form.vehicleMake" type="text" placeholder="Make and model, e.g. VW Golf" /></div>
            <div class="field"><label for="notes">Anything we should know? (optional)</label><textarea id="notes" v-model="form.notes" rows="2"></textarea></div>
            <p v-if="show('you')" class="step__error">Fill in the fields marked in red.</p>
          </fieldset>

          <label id="agree" class="agree" :class="{ 'is-missing': show('agree') }">
            <input v-model="form.agreedToTerms" type="checkbox" />
            <span>I agree to The Car Bath’s <a href="/terms-of-service.html" target="_blank" rel="noopener">terms of service</a> and <a href="/privacy-policy.html" target="_blank" rel="noopener">privacy policy</a>.</span>
          </label>
        </div>

        <aside class="book__summary" aria-label="Your booking">
          <p class="book__summary-title">{{ serviceName }}</p>
          <FlipPrice v-if="servicePrice" :value="servicePrice" class="book__summary-price" :on-view="false" />
          <dl>
            <div><dt>Where</dt><dd>{{ mode ? locationName : 'Not chosen yet' }}</dd></div>
            <div><dt>When</dt><dd>{{ whenText }}</dd></div>
          </dl>
          <p v-if="error" class="book__error" role="alert">{{ error }}</p>
          <p v-else-if="tried && missing.length" class="book__error" role="alert">{{ missing.length === 1 ? 'One thing is' : missing.length + ' things are' }} still needed, marked in red.</p>
          <button class="btn btn--teal book__submit" type="submit" :disabled="submitting">
            <FlipLabel :text="submitting ? 'Sending…' : 'Complete booking'" />
          </button>
          <p class="book__help">{{ highEndNote }}</p>
          <p class="book__help">Rather talk? <a :href="contact.phoneHref">{{ contact.phone }}</a> or <a :href="contact.whatsapp" target="_blank" rel="noopener">WhatsApp</a>.</p>
        </aside>
      </form>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Arrow from '../components/Arrow.vue'
import FlipLabel from '../components/FlipLabel.vue'
import FlipPrice from '../components/FlipPrice.vue'
import { useChoreography } from '../composables/useChoreography'
import { useSeo } from '../composables/useSeo'
import { contact, services, highEndNote } from '../data/site'
import { hoursText, nextOpenDays, slotsFor } from '../data/hours'

const API = 'https://thecarbath-mail.vercel.app/api'

const root = useChoreography()
useSeo('/bookings')
const route = useRoute()

const blank = () => ({
  service: '',
  businessPark: '',
  customBusinessPark: '',
  privateLocation: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  vehicleMake: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
  agreedToTerms: false,
})

const form = reactive(blank())

const modes = [
  { id: 'mobile', name: 'Mobile', line: 'We come to your home or office.' },
  { id: 'onsite', name: 'On site', line: 'At your business park or apartment block, on its set day.' },
  { id: 'dropoff', name: 'Drop off', line: 'You bring it to our bay in Frere Estate, by appointment.' },
]
const mode = ref('')
const DROP_OFF = `Drop-off at our bay, ${contact.address}`

// The booking API only knows locations, so each mode maps onto the fields it expects.
watch(mode, (m) => {
  if (m === 'mobile') {
    form.businessPark = 'private'
    form.privateLocation = ''
  } else if (m === 'dropoff') {
    form.businessPark = 'private'
    form.privateLocation = DROP_OFF
  } else if (m === 'onsite') {
    // On site: the visitor names their own park or block.
    form.businessPark = 'other'
    form.privateLocation = ''
  } else {
    form.businessPark = ''
    form.privateLocation = ''
  }
})
// Only open days (Saturday and Sunday) are offered, and only their opening hours.
const days = ref([])
const times = computed(() => (form.preferredDate ? slotsFor(form.preferredDate) : []))
const taken = ref([])
const loadingSlots = ref(false)
const dayName = (d) => new Date(`${d}T12:00:00`).toLocaleDateString('en-ZA', { weekday: 'short' })
const dayDate = (d) => new Date(`${d}T12:00:00`).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short' })

// Ask the server which times on the chosen day are already booked, so they can't be picked.
async function loadTaken(date) {
  taken.value = []
  if (!date) return
  loadingSlots.value = true
  try {
    const r = await fetch(`${API}/slots?date=${date}`, { cache: 'no-store' })
    const j = await r.json()
    if (form.preferredDate === date) taken.value = Array.isArray(j.taken) ? j.taken : []
  } catch {
    // If the check fails, every time stays open; the server still refuses a double booking.
  } finally {
    loadingSlots.value = false
  }
}
watch(() => form.preferredDate, (d) => {
  if (form.preferredTime && !slotsFor(d).includes(form.preferredTime)) form.preferredTime = ''
  slotError.value = ''
  loadTaken(d)
})
watch(taken, (t) => { if (t.includes(form.preferredTime)) form.preferredTime = '' })

onMounted(() => {
  // Date and query are per-visitor, so they are set after the pre-rendered page hydrates.
  days.value = nextOpenDays(8)
  form.preferredDate = days.value[0]
  if (services.some((s) => s.id === route.query.service)) form.service = route.query.service
  if (modes.some((m) => m.id === route.query.mode)) mode.value = route.query.mode
})

const submitting = ref(false)
const checking = ref(false)
const slotError = ref('')
const error = ref('')
const sent = ref('')
const tried = ref(false)

const chosen = computed(() => services.find((s) => s.id === form.service))
const serviceName = computed(() => chosen.value?.name ?? 'Choose a service')
const servicePrice = computed(() => chosen.value?.priceLabel ?? '')

const locationName = computed(() => {
  if (form.businessPark === 'other') return form.customBusinessPark || 'Your business park or block'
  if (form.businessPark === 'private') return form.privateLocation || 'Your address'
  return 'Not chosen yet'
})

function formatTime(t) {
  const [h, m] = t.split(':').map(Number)
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`
}

const whenText = computed(() => {
  if (!form.preferredDate) return 'Not chosen yet'
  const date = new Date(`${form.preferredDate}T12:00:00`).toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' })
  return form.preferredTime ? `${date}, ${formatTime(form.preferredTime)}` : date
})

// Each gap is keyed, so the form can mark the exact step or field and jump to the first one.
const YOU = ['firstName', 'lastName', 'phone', 'email', 'vehicleMake']
const missing = computed(() => {
  const out = []
  if (!form.service) out.push('service')
  if (!mode.value) out.push('mode')
  else if ((form.businessPark === 'other' && !form.customBusinessPark) || (form.businessPark === 'private' && !form.privateLocation)) out.push('place')
  if (!form.preferredDate) out.push('date')
  if (!form.preferredTime) out.push('time')
  for (const f of YOU) if (!form[f]) out.push(f)
  if (!form.agreedToTerms) out.push('agree')
  return out
})
const show = (key) => tried.value && (key === 'you' ? YOU.some((k) => missing.value.includes(k)) : missing.value.includes(key))
const STEP = { service: 'step-service', mode: 'step-where', place: 'step-where', date: 'step-when', time: 'step-when', agree: 'agree' }

function jumpToFirstGap() {
  const key = missing.value[0]
  const el = document.getElementById(STEP[key] || key)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: reduce ? 'auto' : 'smooth' })
  if (!STEP[key]) setTimeout(() => el.focus({ preventScroll: true }), reduce ? 0 : 450)
}

async function slotIsFree() {
  if (!form.preferredDate || !form.preferredTime) return true
  checking.value = true
  slotError.value = ''
  try {
    const response = await fetch(`${API}/check-availability`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: form.preferredDate, time: form.preferredTime, location: locationName.value }),
    })
    const result = await response.json()
    if (result.available) return true
    slotError.value = 'That time is already booked. Please choose another.'
    return false
  } catch {
    // A failed check should not lose the customer; the team confirms every booking anyway.
    return true
  } finally {
    checking.value = false
  }
}

watch(() => [form.preferredDate, form.preferredTime], ([d, t]) => {
  if (d && t) slotIsFree()
})

async function handleSubmit() {
  tried.value = true
  error.value = ''
  if (missing.value.length) { jumpToFirstGap(); return }
  if (!(await slotIsFree())) return

  submitting.value = true
  try {
    const response = await fetch(`${API}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        // The API expects customBusinessPark for both 'other' and 'private'.
        customBusinessPark: form.businessPark === 'private' ? form.privateLocation : form.customBusinessPark,
      }),
    })
    const result = await response.json()
    if (response.ok) {
      sent.value = result.message || 'Tell us the car, the place and the time. We’ll confirm your appointment within 4 hours.'
      Object.assign(form, blank(), { preferredDate: days.value[0] })
      mode.value = ''
      tried.value = false
      return
    }
    if (response.status === 409) {
      slotError.value = result.message || 'That time is no longer free. Please choose another.'
      form.preferredTime = ''
      loadTaken(form.preferredDate)
      document.getElementById('step-when')?.scrollIntoView({ block: 'start' })
      return
    }
    error.value = result.error || result.message || `We couldn’t send your booking. Please call ${contact.phone}.`
  } catch {
    error.value = `We couldn’t send your booking. Please try again, or call ${contact.phone}.`
  } finally {
    submitting.value = false
  }
}
</script>
