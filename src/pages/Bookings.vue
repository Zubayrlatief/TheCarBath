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
          <fieldset>
            <legend class="book__legend">Mobile or on site?</legend>
            <label v-for="m in modes" :key="m.id" class="svc svc--mode" :class="{ 'is-on': mode === m.id }">
              <input v-model="mode" type="radio" name="mode" :value="m.id" required />
              <span class="svc__name">{{ m.name }}</span>
              <span class="svc__line">{{ m.line }}</span>
            </label>
          </fieldset>

          <fieldset>
            <legend class="book__legend">Which service?</legend>
            <label v-for="s in services" :key="s.id" class="svc" :class="{ 'is-on': form.service === s.id }">
              <input v-model="form.service" type="radio" name="service" :value="s.id" required />
              <span class="svc__name">{{ s.name }}</span>
              <span class="svc__line">{{ s.includes.slice(0, 2).join('. ') }}.</span>
              <span class="svc__price">{{ s.priceLabel }}</span>
            </label>
          </fieldset>

          <fieldset>
            <legend class="book__legend">Where should we do it?</legend>
            <div v-if="mode === 'mobile'" class="field">
              <label for="privateLocation">Your home or office address</label>
              <input id="privateLocation" v-model="form.privateLocation" type="text" autocomplete="street-address" required />
            </div>
            <template v-else-if="mode === 'onsite'">
              <div class="field">
                <label for="customBusinessPark">Your business park or apartment block</label>
                <input id="customBusinessPark" v-model="form.customBusinessPark" type="text" autocomplete="organization" required />
              </div>
            </template>
            <p v-else-if="mode === 'dropoff'" class="book__drop">Bring your car to <a :href="contact.google" target="_blank" rel="noopener">{{ contact.address }}</a> at your booked time.</p>
            <p v-else class="field-note">Choose mobile, on site or drop-off above.</p>
          </fieldset>

          <fieldset>
            <legend class="book__legend">Who and what car?</legend>
            <div class="field-row">
              <div class="field"><label for="firstName">First name</label><input id="firstName" v-model="form.firstName" type="text" autocomplete="given-name" required /></div>
              <div class="field"><label for="lastName">Last name</label><input id="lastName" v-model="form.lastName" type="text" autocomplete="family-name" required /></div>
            </div>
            <div class="field-row">
              <div class="field"><label for="email">Email</label><input id="email" v-model="form.email" type="email" autocomplete="email" required /></div>
              <div class="field"><label for="phone">Phone</label><input id="phone" v-model="form.phone" type="tel" autocomplete="tel" required /></div>
            </div>
            <div class="field"><label for="vehicleMake">Car make</label><input id="vehicleMake" v-model="form.vehicleMake" type="text" required /></div>
          </fieldset>

          <fieldset>
            <legend class="book__legend">When?</legend>
            <div class="field-row">
              <div class="field"><label for="preferredDate">Date</label><input id="preferredDate" v-model="form.preferredDate" type="date" :min="minDate" required /></div>
              <div class="field">
                <label for="preferredTime">Time</label>
                <select id="preferredTime" v-model="form.preferredTime" required aria-describedby="slot-note">
                  <option value="">Choose a time</option>
                  <option v-for="t in times" :key="t" :value="t">{{ formatTime(t) }}</option>
                </select>
              </div>
            </div>
            <p id="slot-note" class="field-note" :class="{ 'is-error': slotError }" aria-live="polite">
              {{ checking ? 'Checking that time…' : slotError }}
            </p>
            <div class="field"><label for="notes">Anything we should know? (optional)</label><textarea id="notes" v-model="form.notes" rows="3"></textarea></div>
          </fieldset>

          <label class="agree">
            <input v-model="form.agreedToTerms" type="checkbox" required />
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
          <p v-else-if="tried && missing.length" class="book__error" role="alert">Still needed: {{ missing.join(', ') }}.</p>
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

const API = 'https://thecarbath-mail.vercel.app/api'

const root = useChoreography()
useSeo('/bookings')
const route = useRoute()

function localDate(offsetDays) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

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
const minDate = ref('')
const times = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']

onMounted(() => {
  // Date and query are per-visitor, so they are set after the pre-rendered page hydrates.
  minDate.value = localDate(1)
  form.preferredDate = localDate(1)
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

const missing = computed(() => {
  const out = []
  if (!form.service) out.push('a service')
  if (!mode.value) out.push('mobile, on site or drop-off')
  else if (!form.businessPark) out.push('a location')
  if (form.businessPark === 'other' && !form.customBusinessPark) out.push('the business park or block name')
  if (form.businessPark === 'private' && !form.privateLocation) out.push('your address')
  if (!form.firstName) out.push('first name')
  if (!form.lastName) out.push('last name')
  if (!form.email) out.push('email')
  if (!form.phone) out.push('phone')
  if (!form.vehicleMake) out.push('car make')
  if (!form.preferredDate) out.push('a date')
  if (!form.preferredTime) out.push('a time')
  if (!form.agreedToTerms) out.push('agreement to the terms')
  return out
})

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
  if (missing.value.length) return
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
      Object.assign(form, blank(), { preferredDate: localDate(1) })
      mode.value = ''
      tried.value = false
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
