<template>
  <div class="bookings-page">
    <section class="booking-hero">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Premium Car Care</span>
          <h1>Book Your Service</h1>
          <p class="section-subtitle">Schedule your premium car wash service at your convenience. Professional care, guaranteed results.</p>
        </div>
        
        <div class="trust-indicators">
          <div class="trust-card">
            <div class="trust-icon">⭐</div>
            <h3>4+ Years Experience</h3>
            <p>Proven track record of excellence</p>
          </div>
          <div class="trust-card">
            <div class="trust-icon">💯</div>
            <h3>100% Satisfaction</h3>
            <p>Guaranteed quality service</p>
          </div>
          <div class="trust-card">
            <div class="trust-icon">⚡</div>
            <h3>24hr Response</h3>
            <p>Quick booking confirmation</p>
          </div>
        </div>
      </div>
    </section>

    <section class="booking-form-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Quick & Easy Booking</span>
          <h2>Get Started in 3 Simple Steps</h2>
          <p class="section-subtitle">Fill out the form below and we'll confirm your appointment within 24 hours.</p>
        </div>
        
        <div class="booking-grid">
          <!-- Service Selection Card -->
          <div class="booking-card">
            <div class="card-header">
              <div class="step-indicator">1</div>
              <h3>Choose Your Service</h3>
            </div>
            <div class="card-content">
              <div class="service-options">
                <div class="service-option" :class="{ active: formData.service === 'executive-detail' }" @click="formData.service = 'executive-detail'">
                  <div class="service-icon">✨</div>
                  <div class="service-info">
                    <h4>Executive Detail</h4>
                    <p>Showroom-level finish inside and out</p>
                    <ul class="service-features">
                      <li>Ceramic-safe hand wash</li>
                      <li>Machine polish</li>
                      <li>Full interior reset</li>
                    </ul>
                  </div>
                  <div class="service-price">R350</div>
                </div>
                
                <div class="service-option" :class="{ active: formData.service === 'mini-valet' }" @click="formData.service = 'mini-valet'">
                  <div class="service-icon">🧽</div>
                  <div class="service-info">
                    <h4>Mini Valet</h4>
                    <p>Quick and thorough interior cleaning</p>
                    <ul class="service-features">
                      <li>Vacuum and wipe down</li>
                      <li>Glass cleaning</li>
                      <li>Dashboard shine</li>
                    </ul>
                  </div>
                  <div class="service-price">R100</div>
                </div>
                
                <div class="service-option" :class="{ active: formData.service === 'business-park-wash' }" @click="formData.service = 'business-park-wash'">
                  <div class="service-icon">🏢</div>
                  <div class="service-info">
                    <h4>Business Park Wash</h4>
                    <p>On-site, zero-hassle washes</p>
                    <ul class="service-features">
                      <li>Hand wash + wheel clean</li>
                      <li>Streak-free glass</li>
                      <li>Light interior tidy</li>
                    </ul>
                  </div>
                  <div class="service-price">R150</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Customer Details Card -->
          <div class="booking-card">
            <div class="card-header">
              <div class="step-indicator">2</div>
              <h3>Your Details</h3>
            </div>
            <div class="card-content">
              <form @submit.prevent="handleSubmit" class="booking-form">
                <!-- Location Selection -->
                <div class="form-group">
                  <label for="businessPark">Business Park / Location</label>
                  <select id="businessPark" v-model="formData.businessPark" required>
                    <option value="">Select your location</option>
                    <option value="arden-grove">Arden Grove, Milnerton</option>
                    <option value="other">Other Business Park</option>
                    <option value="private">Private Location</option>
                  </select>
                </div>

                <!-- Custom Business Park -->
                <div v-if="formData.businessPark === 'other'" class="form-group">
                  <label for="customBusinessPark">Business Park Name</label>
                  <input 
                    id="customBusinessPark"
                    type="text" 
                    v-model="formData.customBusinessPark"
                    placeholder="Enter your business park name"
                    required
                  />
                </div>

                <!-- Personal Information -->
                <div class="form-section">
                  <h4>Contact Information</h4>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="firstName">First Name</label>
                      <input 
                        id="firstName"
                        type="text" 
                        v-model="formData.firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="lastName">Last Name</label>
                      <input 
                        id="lastName"
                        type="text" 
                        v-model="formData.lastName"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input 
                        id="email"
                        type="email" 
                        v-model="formData.email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone">Phone Number</label>
                      <input 
                        id="phone"
                        type="tel" 
                        v-model="formData.phone"
                        placeholder="+27 XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                <!-- Vehicle Information -->
                <div class="form-section">
                  <h4>Vehicle Information</h4>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="vehicleMake">Vehicle Make</label>
                      <input 
                        id="vehicleMake"
                        type="text" 
                        v-model="formData.vehicleMake"
                        placeholder="Toyota, BMW, etc."
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="vehicleModel">Model</label>
                      <input 
                        id="vehicleModel"
                        type="text" 
                        v-model="formData.vehicleModel"
                        placeholder="Camry, X3, etc."
                        required
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="vehicleYear">Year</label>
                      <input 
                        id="vehicleYear"
                        type="number" 
                        v-model="formData.vehicleYear"
                        placeholder="2020"
                        min="1990"
                        :max="new Date().getFullYear() + 1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="vehicleColor">Color</label>
                      <input 
                        id="vehicleColor"
                        type="text" 
                        v-model="formData.vehicleColor"
                        placeholder="White, Black, Silver, etc."
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Scheduling Card -->
          <div class="booking-card">
            <div class="card-header">
              <div class="step-indicator">3</div>
              <h3>Schedule Your Service</h3>
            </div>
            <div class="card-content">
              
              <div class="form-step" data-step="2">
                <h3>Your Details</h3>

                <!-- Business Park Selection -->
                <div class="form-group">
                  <label for="businessPark">Business Park / Location</label>
                  <select id="businessPark" v-model="formData.businessPark" required>
                    <option value="">Select your location</option>
                    <option value="arden-grove">Arden Grove, Milnerton</option>
                    <option value="other">Other Business Park</option>
                    <option value="private">Private Location</option>
                  </select>
                </div>

                <!-- Custom Business Park -->
                <div v-if="formData.businessPark === 'other'" class="form-group">
                  <label for="customBusinessPark">Business Park Name</label>
                  <input 
                    id="customBusinessPark"
                    type="text" 
                    v-model="formData.customBusinessPark"
                    placeholder="Enter your business park name"
                    required
                  />
                </div>

                <!-- Personal Details -->
                <div class="form-section">
                  <h4>Contact Information</h4>
              
                  <div class="form-row">
                    <div class="form-group">
                      <label for="firstName">First Name</label>
                      <input 
                        id="firstName"
                        type="text" 
                        v-model="formData.firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="lastName">Last Name</label>
                      <input 
                        id="lastName"
                        type="text" 
                        v-model="formData.lastName"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input 
                        id="email"
                        type="email" 
                        v-model="formData.email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone">Phone Number</label>
                      <input 
                        id="phone"
                        type="tel" 
                        v-model="formData.phone"
                        placeholder="+27 X XXX XXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                <!-- Vehicle Details -->
                <div class="form-section">
                  <h4>Vehicle Information</h4>
              
                  <div class="form-row">
                    <div class="form-group">
                      <label for="vehicleMake">Vehicle Make</label>
                      <input 
                        id="vehicleMake"
                        type="text" 
                        v-model="formData.vehicleMake"
                        placeholder="Toyota, BMW, etc."
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="vehicleModel">Model</label>
                      <input 
                        id="vehicleModel"
                        type="text" 
                        v-model="formData.vehicleModel"
                        placeholder="Camry, X3, etc."
                        required
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="vehicleYear">Year</label>
                      <input 
                        id="vehicleYear"
                        type="number" 
                        v-model="formData.vehicleYear"
                        placeholder="2020"
                        min="1990"
                        :max="new Date().getFullYear() + 1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="vehicleColor">Color</label>
                      <input 
                        id="vehicleColor"
                        type="text" 
                        v-model="formData.vehicleColor"
                        placeholder="White, Black, Silver, etc."
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="form-step" data-step="3">
                <h3>Schedule Your Service</h3>
                
                <div class="form-row">
                <div class="form-group">
                  <label for="preferredDate">Preferred Date</label>
                  <input 
                    id="preferredDate"
                    type="date" 
                    v-model="formData.preferredDate"
                    :min="minDate"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="preferredTime">Preferred Time</label>
                  <select id="preferredTime" v-model="formData.preferredTime" required>
                    <option value="">Select time</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>

                <!-- Scheduling -->
                <div class="form-section">
                  <h4>Preferred Schedule</h4>
                  
                  <div class="form-row">
                    <div class="form-group">
                      <label for="preferredDate">Preferred Date</label>
                      <input 
                        id="preferredDate"
                        type="date" 
                        v-model="formData.preferredDate"
                        :min="minDate"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="preferredTime">Preferred Time</label>
                      <select id="preferredTime" v-model="formData.preferredTime" required>
                        <option value="">Select time</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Additional Notes -->
                <div class="form-section">
                  <h4>Additional Information</h4>
                  
                  <div class="form-group">
                    <label for="notes">Special Requests or Notes</label>
                    <textarea 
                      id="notes"
                      v-model="formData.notes"
                      placeholder="Any special requests, vehicle condition notes, or accessibility requirements..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <!-- Terms Agreement -->
                <div class="form-group checkbox-group">
                  <label class="checkbox-label">
                    <input 
                      type="checkbox" 
                      v-model="formData.agreedToTerms"
                      required
                    />
                    <span class="checkmark"></span>
                    I agree to The Car Bath's terms of service and privacy policy
                  </label>
                </div>

                <!-- Form Navigation -->
                <div class="form-navigation">
                  <button type="button" class="nav-btn secondary" @click="previousStep" v-if="currentStep > 1">
                    ← Previous
                  </button>
                  <button type="button" class="nav-btn primary" @click="nextStep" v-if="currentStep < 3">
                    Next →
                  </button>
                  <button type="submit" class="submit-btn" :disabled="!isFormValid" v-if="currentStep === 3">
                    {{ isSubmitting ? 'Submitting...' : 'Complete Booking' }}
                  </button>
                </div>
        </div>
      </form>
          </div>

          <!-- Booking Summary -->
          <div class="booking-summary">
            <div class="summary-card">
              <h3>Booking Summary</h3>
              <div class="summary-item">
                <span class="label">Service:</span>
                <span class="value">{{ getServiceName() }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Price:</span>
                <span class="value">{{ getServicePrice() }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Location:</span>
                <span class="value">{{ getLocationName() }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Date:</span>
                <span class="value">{{ formatDate(formData.preferredDate) }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Time:</span>
                <span class="value">{{ formatTime(formData.preferredTime) }}</span>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="contact-info">
              <h4>Need Help?</h4>
              <p>Contact us directly:</p>
              <div class="contact-item">
                <strong>Phone:</strong> +27 82 123 4567
              </div>
              <div class="contact-item">
                <strong>Email:</strong> hello@thecarbath.com
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Form data
const formData = ref({
  service: '',
  businessPark: '',
  customBusinessPark: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleYear: '',
  vehicleColor: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
  agreedToTerms: false
})

const isSubmitting = ref(false)
const currentStep = ref(1)

// Computed properties
const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

const isFormValid = computed(() => {
  return formData.value.service && 
         formData.value.businessPark && 
         (formData.value.businessPark !== 'other' || formData.value.customBusinessPark) &&
         formData.value.firstName && 
         formData.value.lastName && 
         formData.value.email && 
         formData.value.phone && 
         formData.value.vehicleMake && 
         formData.value.vehicleModel && 
         formData.value.vehicleYear && 
         formData.value.vehicleColor && 
         formData.value.preferredDate && 
         formData.value.preferredTime && 
         formData.value.agreedToTerms
})

// Methods
const getServiceName = () => {
  const services = {
    'executive-detail': 'Executive Detail',
    'mini-valet': 'Mini Valet',
    'business-park-wash': 'Business Park Wash'
  }
  return services[formData.value.service] || 'Select a service'
}

const getServicePrice = () => {
  const prices = {
    'executive-detail': 'R350',
    'mini-valet': 'R100',
    'business-park-wash': 'R150'
  }
  return prices[formData.value.service] || ''
}

const getLocationName = () => {
  if (formData.value.businessPark === 'arden-grove') {
    return 'Arden Grove, Milnerton'
  } else if (formData.value.businessPark === 'other') {
    return formData.value.customBusinessPark || 'Custom Location'
  } else if (formData.value.businessPark === 'private') {
    return 'Private Location'
  }
  return 'Select location'
}

const formatDate = (date) => {
  if (!date) return 'Select date'
  return new Date(date).toLocaleDateString('en-ZA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatTime = (time) => {
  if (!time) return 'Select time'
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

// Step navigation methods
const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
    updateProgressSteps()
    updateFormSteps()
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    updateProgressSteps()
    updateFormSteps()
  }
}

const updateProgressSteps = () => {
  const steps = document.querySelectorAll('.progress-step')
  steps.forEach((step, index) => {
    step.classList.toggle('active', index + 1 === currentStep.value)
    step.classList.toggle('completed', index + 1 < currentStep.value)
  })
}

const updateFormSteps = () => {
  const formSteps = document.querySelectorAll('.form-step')
  formSteps.forEach((step, index) => {
    step.classList.toggle('active', index + 1 === currentStep.value)
  })
}

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  
  try {
    // Option 1: Use Formspree (recommended)
    await submitToFormspree()
    
    // Option 2: Fallback to mailto
    // await submitViaMailto()
    
    // Show success message
    alert('Thank you for your booking request! We\'ll contact you within 24 hours to confirm your appointment.')
    
    // Reset form
    resetForm()
    
  } catch (error) {
    console.error('Error submitting booking:', error)
    
    // Fallback to mailto if Formspree fails
    try {
      await submitViaMailto()
      alert('Thank you for your booking request! Your email client should open with the booking details.')
      resetForm()
    } catch (mailtoError) {
      alert('There was an error submitting your booking. Please try again or contact us directly at hello@thecarbath.com')
    }
  } finally {
    isSubmitting.value = false
  }
}

// Submit via Formspree (immediate Gmail notification)
const submitToFormspree = async () => {
  const formData = new FormData()
  
  // Add all form fields
  formData.append('service', getServiceName() + ' - ' + getServicePrice())
  formData.append('location', getLocationName())
  formData.append('date', formatDate(formData.preferredDate))
  formData.append('time', formatTime(formData.preferredTime))
  formData.append('firstName', formData.value.firstName)
  formData.append('lastName', formData.value.lastName)
  formData.append('email', formData.value.email)
  formData.append('phone', formData.value.phone)
  formData.append('vehicleMake', formData.value.vehicleMake)
  formData.append('vehicleModel', formData.value.vehicleModel)
  formData.append('vehicleYear', formData.value.vehicleYear)
  formData.append('vehicleColor', formData.value.vehicleColor)
  formData.append('notes', formData.value.notes || 'None')
  formData.append('_subject', `🔔 NEW BOOKING: ${getServiceName()} - ${formData.value.firstName} ${formData.value.lastName}`)
  formData.append('_replyto', formData.value.email)
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  
  if (!response.ok) {
    throw new Error('Form submission failed')
  }
}

// Fallback: Submit via mailto
const submitViaMailto = async () => {
  const emailContent = createEmailContent()
  const subject = `🔔 BOOKING REQUEST - ${getServiceName()} - ${formData.value.firstName} ${formData.value.lastName}`
  const body = encodeURIComponent(emailContent)
  const mailtoLink = `mailto:hello@thecarbath.com?subject=${encodeURIComponent(subject)}&body=${body}`
  
  window.location.href = mailtoLink
}

const createEmailContent = () => {
  return `
BOOKING REQUEST DETAILS

Service: ${getServiceName()} - ${getServicePrice()}
Location: ${getLocationName()}
Date: ${formatDate(formData.value.preferredDate)}
Time: ${formatTime(formData.value.preferredTime)}

CONTACT INFORMATION
Name: ${formData.value.firstName} ${formData.value.lastName}
Email: ${formData.value.email}
Phone: ${formData.value.phone}

VEHICLE INFORMATION
Make: ${formData.value.vehicleMake}
Model: ${formData.value.vehicleModel}
Year: ${formData.value.vehicleYear}
Color: ${formData.value.vehicleColor}

ADDITIONAL NOTES
${formData.value.notes || 'None'}

---
This booking request was submitted through The Car Bath website.
Please confirm availability and contact the customer to finalize the booking.
  `.trim()
}

const resetForm = () => {
  Object.keys(formData.value).forEach(key => {
    if (key === 'agreedToTerms') {
      formData.value[key] = false
    } else {
      formData.value[key] = ''
    }
  })
}

onMounted(() => {
  // Set minimum date to tomorrow
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  formData.value.preferredDate = tomorrow.toISOString().split('T')[0]
})
</script>

<style scoped>
/* CSS Variables */
:root {
  --bg: #0a0a0a;
  --bg-secondary: #111111;
  --text: #ffffff;
  --text-secondary: #b3b3b3;
  --accent: #ff6b35;
  --accent-hover: #e55a2b;
  --border: #1c1c1c;
  --border-hover: #2a2a2a;
}

.bookings-page {
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

.booking-hero {
  position: relative;
  padding: 6rem 0;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%);
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.badge-icon {
  font-size: 1.2rem;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: inline-block;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: var(--text);
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.booking-form-section {
  padding: 4rem 0;
}

.booking-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.booking-form-container {
  background: var(--bg-secondary);
  border-radius: 1.5rem;
  padding: 2.5rem;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Form Progress */
.form-progress {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
}

.form-progress::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: var(--border);
  z-index: 1;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
  background: var(--bg-secondary);
  padding: 0 1rem;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--border);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.progress-step.active .step-number {
  background: var(--accent);
  color: white;
  transform: scale(1.1);
}

.progress-step.completed .step-number {
  background: #10b981;
  color: white;
}

.progress-step span {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.progress-step.active span {
  color: var(--text);
  font-weight: 600;
}

/* Form Steps */
.form-step {
  display: none;
}

.form-step.active {
  display: block;
  animation: fadeInUp 0.5s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.booking-form h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--text);
  text-align: center;
}

.form-section {
  margin-bottom: 2rem;
}

.form-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

/* Service Cards */
.service-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.service-card {
  background: var(--bg);
  border: 2px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.service-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.1);
}

.service-card.active {
  border-color: var(--accent);
  background: rgba(255, 107, 53, 0.05);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
}

.service-card.active::before {
  content: '✓';
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 24px;
  height: 24px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
}

.service-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
}

.service-content {
  flex: 1;
}

.service-content h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--text);
  border: none;
  padding: 0;
}

.service-content p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
}

.service-features {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.service-features span {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.service-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  text-align: right;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text);
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--text);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-secondary);
}

.checkbox-group {
  margin: 2rem 0;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1.4;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin: 0;
  transform: scale(1.2);
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Form Navigation */
.form-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.nav-btn.secondary {
  background: var(--bg);
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.nav-btn.secondary:hover {
  background: var(--bg-secondary);
  color: var(--text);
  border-color: var(--border-hover);
}

.nav-btn.primary {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
  color: white;
}

.nav-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
}

.booking-summary {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.summary-card {
  background: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--border);
}

.summary-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text);
  border-bottom: 2px solid var(--accent);
  padding-bottom: 0.5rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.summary-item:last-child {
  border-bottom: none;
}

.summary-item .label {
  font-weight: 600;
  color: var(--text-secondary);
}

.summary-item .value {
  font-weight: 700;
  color: var(--text);
}

.contact-info {
  background: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid var(--border);
}

.contact-info h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text);
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.contact-item {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.contact-item strong {
  color: var(--text);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
  
  .hero-stats {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .booking-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .booking-form-container {
    padding: 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .booking-form h3 {
    font-size: 1.3rem;
  }
  
  .form-progress {
    margin-bottom: 2rem;
  }
  
  .form-progress::before {
    width: 80%;
  }
  
  .progress-step span {
    font-size: 0.75rem;
  }
  
  .service-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .service-price {
    text-align: center;
  }
  
  .form-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-btn {
    width: 100%;
  }
  
  .hero-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (min-width: 1200px) {
  .booking-hero {
    padding: 6rem 0;
  }
  
  .booking-hero h1 {
    font-size: 3.5rem;
  }
  
  .booking-form-section {
    padding: 6rem 0;
  }
}
</style>