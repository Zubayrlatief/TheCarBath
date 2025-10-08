<template>
  <div class="bookings-page">
    <section class="booking-form-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Quick & Easy Booking</span>
          <h2>Get Started in 3 Simple Steps</h2>
          <p class="section-subtitle">Fill out the form below and we'll confirm your appointment within 4 hours.</p>
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
                  <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div class="service-info">
                    <h4>Executive Detail</h4>
                    <p>Showroom-level finish inside and out</p>
                    <ul class="service-features">
                      <li>Ceramic-safe hand wash</li>
                      <li>Machine polish</li>
                      <li>Full interior reset</li>
                    </ul>
                  </div>
                  <div class="service-price">R2000</div>
                </div>
                
                <div class="service-option" :class="{ active: formData.service === 'mini-valet' }" @click="formData.service = 'mini-valet'">
                  <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v0"/>
                      <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
                      <path d="M12 3v18"/>
                    </svg>
                  </div>
                  <div class="service-info">
                    <h4>Mini Valet</h4>
                    <p>Quick and thorough interior cleaning for private call outs</p>
                    <ul class="service-features">
                      <li>Vacuum and wipe down</li>
                      <li>Glass cleaning</li>
                      <li>Dashboard shine</li>
                    </ul>
                  </div>
                  <div class="service-price">R200</div>
                </div>
                
                <div class="service-option" :class="{ active: formData.service === 'business-park-wash' }" @click="formData.service = 'business-park-wash'">
                  <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                  </div>
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
                <!-- Required Fields Notice -->
                <div class="required-notice">
                  <svg class="notice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                  <span>Fields marked with <span class="required-asterisk">*</span> are required</span>
                </div>

                <!-- Location Selection -->
                <div class="form-group">
                  <label for="businessPark">
                    <span class="label-text">Business Park / Location</span>
                    <span class="required-asterisk">*</span>
                  </label>
                  <div class="select-wrapper">
                    <svg class="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <select id="businessPark" v-model="formData.businessPark" required>
                      <option value="">Select your location</option>
                      <option value="arden-grove">Arden Grove, Milnerton</option>
                      <option value="other">Other Business Park</option>
                      <option value="private">Private Location</option>
                    </select>
                    <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>

                <!-- Custom Business Park -->
                <div v-if="formData.businessPark === 'other'" class="form-group">
                  <label for="customBusinessPark">
                    <span class="label-text">Business Park Name</span>
                    <span class="required-asterisk">*</span>
                  </label>
                  <input 
                    id="customBusinessPark"
                    type="text" 
                    v-model="formData.customBusinessPark"
                    placeholder="Enter your business park name"
                    required
                  />
                </div>

                <!-- Private Location Details -->
                <div v-if="formData.businessPark === 'private'" class="form-group">
                  <label for="privateLocation">
                    <span class="label-text">Your Location</span>
                    <span class="required-asterisk">*</span>
                  </label>
                  <input 
                    id="privateLocation"
                    type="text" 
                    v-model="formData.privateLocation"
                    placeholder="e.g., Your home address, office address, etc."
                    required
                  />
                </div>

                <!-- Personal Information -->
                <div class="form-section">
                  <h4>Contact Information</h4>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="firstName">
                        <span class="label-text">First Name</span>
                        <span class="required-asterisk">*</span>
                      </label>
                      <input 
                        id="firstName"
                        type="text" 
                        v-model="formData.firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="lastName">
                        <span class="label-text">Last Name</span>
                        <span class="required-asterisk">*</span>
                      </label>
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
                      <label for="email">
                        <span class="label-text">Email Address</span>
                        <span class="required-asterisk">*</span>
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        v-model="formData.email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone">
                        <span class="label-text">Phone Number</span>
                        <span class="required-asterisk">*</span>
                      </label>
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
                      <label for="vehicleMake">
                        <span class="label-text">Vehicle Make</span>
                        <span class="required-asterisk">*</span>
                      </label>
                      <input 
                        id="vehicleMake"
                        type="text" 
                        v-model="formData.vehicleMake"
                        placeholder="Toyota, BMW, etc."
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
              <!-- Scheduling -->
              <div class="form-section">
                <h4>Preferred Schedule</h4>
                <div class="form-row">
                  <div class="form-group">
                    <label for="preferredDate">
                      <span class="label-text">Preferred Date</span>
                      <span class="required-asterisk">*</span>
                    </label>
                    <input 
                      id="preferredDate"
                      type="date" 
                      v-model="formData.preferredDate"
                      :min="minDate"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="preferredTime">
                      <span class="label-text">Preferred Time</span>
                      <span class="required-asterisk">*</span>
                    </label>
                    <div class="select-wrapper">
                      <svg class="select-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
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
                      <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                    <!-- Time slot availability indicator -->
                    <div v-if="checkingAvailability" class="availability-checking">
                      <svg class="checking-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                      </svg>
                      <span>Checking availability...</span>
                    </div>
                    <div v-if="timeSlotError" class="time-slot-error">
                      <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                      <span>{{ timeSlotError }}</span>
                    </div>
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
                  <span>
                    I agree to The Car Bath's 
                    <a href="/terms-of-service.html" target="_blank" class="terms-link">Terms of Service</a> 
                    and 
                    <a href="/privacy-policy.html" target="_blank" class="terms-link">Privacy Policy</a>
                    <span class="required-asterisk">*</span>
                  </span>
                </label>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="submit-btn" :class="{ 'ready': isFormValid, 'submitting': isSubmitting }" :disabled="!isFormValid" @click="handleSubmit">
                <span class="btn-content">
                  <svg v-if="!isSubmitting" class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M13 12h3"/>
                    <path d="M8 12H5"/>
                  </svg>
                  <svg v-else class="btn-icon btn-spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12a9 9 0 11-6.219-8.56"/>
                  </svg>
                  <span class="btn-text">{{ isSubmitting ? 'Submitting...' : 'Complete Booking' }}</span>
                </span>
                <div class="btn-ripple" v-if="!isSubmitting && isFormValid"></div>
                <div class="btn-pulse" v-if="isFormValid && !isSubmitting"></div>
              </button>
            </div>
          </div>

          <!-- Booking Summary Card -->
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

            <!-- Contact Info Card -->
            <div class="contact-info">
              <h4>Need Help?</h4>
              <p>Contact us directly:</p>
              <div class="contact-item">
                <strong>Phone:</strong> 068 507 0088
              </div>
              <div class="contact-item">
                <strong>Email:</strong> thecarsbath@gmail.com
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>

  <!-- Hero Content Section -->
  <section class="booking-hero">
    <div class="hero-background">
      <div class="hero-pattern"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
          <span>Easy Booking</span>
        </div>
        <h1>Schedule Your Premium Car Care</h1>
        <p>Experience the convenience of professional car care at your fingertips. Our streamlined booking process makes it simple to schedule your next service with just a few clicks.</p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">4.9★</div>
            <div class="stat-label">Average Rating</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24hr</div>
            <div class="stat-label">Response Time</div>
          </div>
        </div>
        <div class="hero-guarantee">
          <svg class="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <span>100% Satisfaction Guaranteed - Book with Confidence</span>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// Form data
const formData = ref({
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
  agreedToTerms: false
})

const isSubmitting = ref(false)
const availableTimeSlots = ref([])
const checkingAvailability = ref(false)
const timeSlotError = ref('')

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
         (formData.value.businessPark !== 'private' || formData.value.privateLocation) &&
         formData.value.firstName && 
         formData.value.lastName && 
         formData.value.email && 
         formData.value.phone && 
         formData.value.vehicleMake && 
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
    'executive-detail': 'R2000',
    'mini-valet': 'R200',
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
    return formData.value.privateLocation || 'Private Location'
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

// Check time slot availability
const checkTimeSlotAvailability = async (date, time) => {
  if (!date || !time) return true
  
  checkingAvailability.value = true
  timeSlotError.value = ''
  
  try {
    const response = await fetch('https://thecarbath-mail.vercel.app/api/check-availability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        time: time,
        location: getLocationName()
      })
    })
    
    const result = await response.json()
    
    if (result.available) {
      return true
    } else {
      timeSlotError.value = `This time slot is already booked. Please choose another time.`
      return false
    }
  } catch (error) {
    console.error('Error checking availability:', error)
    timeSlotError.value = 'Unable to check availability. Please try again.'
    return false
  } finally {
    checkingAvailability.value = false
  }
}

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  // Check time slot availability before submitting
  const isAvailable = await checkTimeSlotAvailability(formData.value.preferredDate, formData.value.preferredTime)
  if (!isAvailable) {
    return // Don't submit if time slot is not available
  }
  
  isSubmitting.value = true
  
  try {
    // Prepare booking data - map privateLocation to customBusinessPark for the API
    const bookingData = {
      ...formData.value,
      // API expects customBusinessPark for both 'other' and 'private'
      customBusinessPark: formData.value.businessPark === 'private' 
        ? formData.value.privateLocation 
        : formData.value.customBusinessPark
    }
    
    // Submit booking to backend API
    const response = await fetch('https://thecarbath-mail.vercel.app/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    })
    
    const result = await response.json()
    
    if (response.ok) {
      // Show success message
      alert(result.message || 'Booking submitted successfully!')
      
      // Reset form
      resetForm()
    } else {
      // Show error message with details
      alert(result.error || result.message || 'There was an error submitting your booking. Please try again.')
      console.error('Booking error:', result)
    }
    
  } catch (error) {
    console.error('Error submitting booking:', error)
    alert('There was an error submitting your booking. Please try again or contact us directly at 068 507 0088.')
  } finally {
    isSubmitting.value = false
  }
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

// Watch for time changes to check availability
watch([() => formData.value.preferredDate, () => formData.value.preferredTime], async ([newDate, newTime]) => {
  if (newDate && newTime) {
    await checkTimeSlotAvailability(newDate, newTime)
  }
}, { debounce: 500 })

onMounted(() => {
  // Set minimum date to tomorrow
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  formData.value.preferredDate = tomorrow.toISOString().split('T')[0]
})
</script>

<style scoped>
/* Dark theme with grey cards - Updated 2024 */
.bookings-page {
  background: #000000 !important;
  color: #ffffff !important;
}

.bookings-page * {
  color: #ffffff !important;
}

/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* CSS Variables - Professional cyan blue and black theme */
:root {
  --bg: #000000;
  --bg-secondary: #1a1a1a;
  --card-bg: #404040;
  --card-bg-secondary: #505050;
  --text: #ffffff;
  --text-secondary: #b8b8b8;
  --accent: #00bcd4;
  --accent-hover: #0097a7;
  --accent-light: #26c6da;
  --border: #666666;
  --border-hover: #777777;
  --success: #10b981;
  --warning: #f59e0b;
  --gradient-primary: linear-gradient(135deg, #00bcd4 0%, #0097a7 50%, #26c6da 100%);
  --gradient-card: linear-gradient(145deg, #606060 0%, #707070 100%);
  --shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.3);
  --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.4);
  --shadow-strong: 0 15px 40px rgba(0, 0, 0, 0.5);
}

.bookings-page {
  background: #000000 !important;
  color: #ffffff !important;
  min-height: 100vh;
}

/* Hero Section - Consistent with Home page */
.booking-hero {
  position: relative;
  padding: 6rem 0;
  text-align: center;
  color: var(--text);
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  z-index: 1;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, rgba(0, 188, 212, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(38, 198, 218, 0.03) 0%, transparent 50%);
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
  gap: 0.75rem;
  background: var(--gradient-primary);
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: white;
  box-shadow: var(--shadow-soft);
  letter-spacing: 0.5px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.badge-icon {
  font-size: 1.2rem;
}

.hero-content h1 {
  font-size: 3.25rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.01em;
  line-height: 1.1;
}

.hero-content p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 650px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  font-weight: 400;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 3rem 0;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--accent);
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 188, 212, 0.3);
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  max-width: 400px;
  margin: 0 auto;
}

.guarantee-icon {
  font-size: 1.2rem;
}

/* Section Header - Consistent with site */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
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
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: var(--text);
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Booking Form Section */
.booking-form-section {
  padding: 3rem 0;
  background: #000000 !important;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.booking-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Booking Cards - Professional vibrant design */
.booking-card {
  background: var(--gradient-card) !important;
  border-radius: 1.5rem;
  border: 1px solid var(--border) !important;
  box-shadow: 
    var(--shadow-soft),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);
}

.booking-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-primary);
  opacity: 0.6;
  z-index: 1;
}

.booking-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.8),
    0 20px 40px rgba(0, 188, 212, 0.1),
    0 0 0 1px rgba(0, 188, 212, 0.3) !important;
  border-color: var(--accent) !important;
}

.card-header {
  background: linear-gradient(145deg, #505050 0%, #404040 100%) !important;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  border-bottom: 1px solid #666666 !important;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
}

.card-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00bcd4, transparent);
  opacity: 0.3;
}

.step-indicator {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.4rem;
  box-shadow: 
    var(--shadow-medium),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;
  animation: pulse-glow 2s ease-in-out infinite;
}

.step-indicator::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00bcd4, #0097a7);
  opacity: 0.3;
  z-index: -1;
  filter: blur(8px);
}

.card-header h3 {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(19, 19, 19, 0.5);
  letter-spacing: -0.02em;
}

.card-content {
  padding: 2.5rem;
  position: relative;
  background: linear-gradient(145deg, #111111 0%, #0c0c0c 100%) !important;
  background-color: #505050 !important;
}

/* Service Options */
.service-options {
  display: grid;
  gap: 1rem;
}

.service-option {
  background: linear-gradient(145deg, #282828 0%, #1a1a1a 100%) !important;
  border: 2px solid #666666 !important;
  border-radius: 1.25rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.service-option:hover {
  border-color: #00bcd4 !important;
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 12px 30px rgba(0, 188, 212, 0.2),
    0 0 0 1px rgba(0, 188, 212, 0.1) !important;
}

.service-option.active {
  border-color: #00bcd4 !important;
  background: linear-gradient(145deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%) !important;
  box-shadow: 
    0 8px 25px rgba(0, 188, 212, 0.3),
    0 0 0 1px rgba(0, 188, 212, 0.2) !important;
  transform: scale(1.02);
}

.service-option.active::before {
  content: '✓';
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.4);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes pulse-glow {
  0%, 100% { 
    box-shadow: 
      var(--shadow-medium),
      inset 0 2px 4px rgba(255, 255, 255, 0.3),
      0 0 20px rgba(0, 188, 212, 0.3);
  }
  50% { 
    box-shadow: 
      var(--shadow-medium),
      inset 0 2px 4px rgba(255, 255, 255, 0.3),
      0 0 30px rgba(0, 188, 212, 0.5);
  }
}

.service-icon {
  font-size: 2.2rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 1rem;
  border: 1px solid #333333;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.service-info {
  flex: 1;
}

.service-info h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--text);
}

.service-info p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.service-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  text-align: right;
}

/* Form Styles - Consistent with site */
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

.form-group {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 700;
  color: #ffffff !important;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%) !important;
  border: 2px solid #444444 !important;
  border-radius: 12px;
  color: #ffffff !important;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* Fix dropdown text color */
.form-group select option {
  background: #2a2a2a !important;
  color: #ffffff !important;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00bcd4 !important;
  background: linear-gradient(145deg, #2f2f2f 0%, #242424 100%) !important;
  box-shadow: 
    0 0 0 4px rgba(0, 188, 212, 0.2),
    0 6px 20px rgba(0, 188, 212, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.form-group input:hover,
.form-group select:hover,
.form-group textarea:hover {
  border-color: #666666 !important;
  background: linear-gradient(145deg, #2d2d2d 0%, #222222 100%) !important;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999999 !important;
  font-weight: 400;
  opacity: 0.8;
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

/* Submit Button - Professional vibrant design */
.submit-btn {
  width: 100%;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #666666 0%, #555555 100%);
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: not-allowed;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1.5rem;
  box-shadow: var(--shadow-medium);
  position: relative;
  overflow: hidden;
  opacity: 0.6;
}

/* Ready state - when form is valid */
.submit-btn.ready {
  background: var(--gradient-primary);
  cursor: pointer;
  opacity: 1;
  animation: ready-glow 2s ease-in-out infinite alternate;
}

@keyframes ready-glow {
  0% {
    box-shadow: 
      var(--shadow-medium),
      0 0 20px rgba(0, 188, 212, 0.3);
  }
  100% {
    box-shadow: 
      var(--shadow-medium),
      0 0 30px rgba(0, 188, 212, 0.5);
  }
}

/* Submitting state */
.submit-btn.submitting {
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  cursor: not-allowed;
  opacity: 0.8;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn.ready:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 
    var(--shadow-strong),
    0 0 40px rgba(0, 188, 212, 0.6);
  animation: none;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Button Content */
.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  position: relative;
  z-index: 2;
}

.btn-icon {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

.btn-spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.btn-text {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}

/* Button Ripple Effect */
.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  animation: ripple 2s infinite;
  z-index: 1;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

/* Button Pulse Effect for Ready State */
.btn-pulse {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 188, 212, 0.05) 100%);
  animation: pulse-border 2s ease-in-out infinite;
  z-index: 0;
}

@keyframes pulse-border {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.8;
  }
}

/* Click Animation */
.submit-btn.ready:active {
  transform: translateY(-2px) scale(0.98);
}

/* Success State */
.submit-btn.success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  animation: success-pulse 0.6s ease-out;
}

@keyframes success-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Booking Summary - Consistent with site cards */
.booking-summary {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.summary-card,
.contact-info {
  background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%) !important;
  border-radius: 1.5rem;
  padding: 2.5rem;
  border: 1px solid #333333 !important;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 8px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.summary-card::before,
.contact-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 188, 212, 0.3), transparent);
}

.summary-card:hover,
.contact-info:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.7),
    0 12px 24px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(0, 188, 212, 0.2) !important;
  border-color: #00bcd4 !important;
}

.summary-card h3,
.contact-info h4 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #ffffff;
  border-bottom: 2px solid #00bcd4;
  padding-bottom: 0.75rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
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

/* Terms Links */
.terms-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.terms-link:hover {
  color: var(--accent-light);
  border-bottom-color: var(--accent);
  text-shadow: 0 0 8px rgba(0, 188, 212, 0.3);
}

/* Required Field Styling */
.required-notice {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(145deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 188, 212, 0.08) 100%);
  border: 2px solid rgba(0, 188, 212, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  color: #ffffff !important;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.15);
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.notice-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #00bcd4 !important;
  stroke: #00bcd4;
}

.required-asterisk {
  color: #ff4757 !important;
  font-weight: 700;
  font-size: 1.1em;
  margin-left: 0.25rem;
  text-shadow: 0 0 8px rgba(255, 71, 87, 0.5);
  animation: pulse-asterisk 2s ease-in-out infinite;
}

@keyframes pulse-asterisk {
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 8px rgba(255, 71, 87, 0.5);
  }
  50% {
    opacity: 0.7;
    text-shadow: 0 0 12px rgba(255, 71, 87, 0.8);
  }
}

.label-text {
  display: inline;
}

/* Enhanced Select Dropdown Styling */
.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.select-icon {
  position: absolute;
  left: 1.25rem;
  width: 20px;
  height: 20px;
  color: #00bcd4 !important;
  stroke: #00bcd4;
  pointer-events: none;
  z-index: 2;
  transition: all 0.3s ease;
}

.select-wrapper:hover .select-icon {
  color: #26c6da !important;
  stroke: #26c6da;
  transform: scale(1.1);
}

.select-wrapper:focus-within .select-icon {
  color: #26c6da !important;
  stroke: #26c6da;
  transform: scale(1.15);
  filter: drop-shadow(0 0 6px rgba(0, 188, 212, 0.6));
}

.select-arrow {
  position: absolute;
  right: 1.25rem;
  width: 18px;
  height: 18px;
  color: #888888 !important;
  stroke: #888888;
  pointer-events: none;
  z-index: 2;
  transition: all 0.3s ease;
}

.select-wrapper:hover .select-arrow {
  color: #00bcd4 !important;
  stroke: #00bcd4;
  transform: translateY(2px);
}

.select-wrapper:focus-within .select-arrow {
  color: #00bcd4 !important;
  stroke: #00bcd4;
  transform: translateY(3px) rotate(180deg);
}

.select-wrapper select {
  padding-left: 3.5rem !important;
  padding-right: 3rem !important;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: none !important;
  position: relative;
}

.select-wrapper select::-ms-expand {
  display: none;
}

/* Enhanced dropdown hover and focus states */
.select-wrapper select:hover {
  border-color: #00bcd4 !important;
  box-shadow: 
    0 0 0 2px rgba(0, 188, 212, 0.1),
    0 4px 12px rgba(0, 188, 212, 0.15);
}

.select-wrapper select:focus {
  padding-left: 3.5rem !important;
  padding-right: 3rem !important;
}

/* Improved dropdown option styling */
.select-wrapper select option {
  background: #2a2a2a !important;
  color: #ffffff !important;
  padding: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.select-wrapper select option:hover {
  background: #00bcd4 !important;
  color: #ffffff !important;
}

.select-wrapper select option:checked {
  background: linear-gradient(145deg, #00bcd4 0%, #0097a7 100%) !important;
  color: #ffffff !important;
  font-weight: 600;
}

/* Empty option (placeholder) styling */
.select-wrapper select option[value=""] {
  color: #999999 !important;
  font-style: italic;
}

/* Checkbox group improvements */
.checkbox-group .required-asterisk {
  margin-left: 0.5rem;
}

/* Label improvements */
.form-group label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

/* Time slot availability indicators */
.availability-checking {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(0, 188, 212, 0.1);
  border: 1px solid rgba(0, 188, 212, 0.3);
  border-radius: 8px;
  font-size: 0.9rem;
  color: #00bcd4;
  animation: pulse-checking 1.5s ease-in-out infinite;
}

@keyframes pulse-checking {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.checking-icon {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

.time-slot-error {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 71, 87, 0.1);
  border: 1px solid rgba(255, 71, 87, 0.3);
  border-radius: 8px;
  font-size: 0.9rem;
  color: #ff4757;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.error-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .hero-guarantee {
    max-width: 100%;
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .booking-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 100%;
  }
  
  .card-header,
  .card-content {
    padding: 1.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .service-option {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .service-price {
    text-align: center;
  }
  
  .hero-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .select-wrapper select {
    padding-left: 3rem !important;
    padding-right: 2.5rem !important;
  }

  .select-icon {
    left: 1rem;
    width: 18px;
    height: 18px;
  }

  .select-arrow {
    right: 1rem;
    width: 16px;
    height: 16px;
  }

  .required-notice {
    font-size: 0.85rem;
    padding: 0.875rem 1.25rem;
  }
}

@media (min-width: 1200px) {
  .booking-hero {
    padding: 8rem 0;
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
  }
  
  .booking-form-section {
    padding: 8rem 0;
  }
  
  .section-header h2 {
    font-size: 3.5rem;
  }
  
  .booking-grid {
    max-width: 1600px;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    gap: 3rem;
  }
  
  .card-header {
    padding: 3rem 3rem 2rem 3rem;
  }
  
  .card-content {
    padding: 3rem;
  }
  
  .form-row {
    gap: 2rem;
  }
}
</style>