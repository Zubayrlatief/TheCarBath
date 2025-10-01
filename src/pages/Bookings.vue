<template>
  <div class="bookings-page">
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
                  <div class="service-price">R350</div>
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
                  <div class="service-price">R180</div>
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
                  <div class="service-price">R120</div>
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
                  I agree to The Car Bath's 
                  <a href="/terms-of-service.pdf" target="_blank" class="terms-link">Terms of Service</a> 
                  and 
                  <a href="/privacy-policy.pdf" target="_blank" class="terms-link">Privacy Policy</a>
                </label>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="submit-btn" :disabled="!isFormValid" @click="handleSubmit">
                {{ isSubmitting ? 'Submitting...' : 'Complete Booking' }}
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
    'mini-valet': 'R180',
    'business-park-wash': 'R120'
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

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  
  try {
    // Create email content
    const emailContent = createEmailContent()
    
    // Create mailto link
    const subject = `🔔 BOOKING REQUEST - ${getServiceName()} - ${formData.value.firstName} ${formData.value.lastName}`
    const body = encodeURIComponent(emailContent)
    const mailtoLink = `mailto:thecarsbath@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    alert('Thank you for your booking request! Your email client should open with the booking details.')
    
    // Reset form
    resetForm()
    
  } catch (error) {
    console.error('Error submitting booking:', error)
    alert('There was an error submitting your booking. Please try again or contact us directly.')
  } finally {
    isSubmitting.value = false
  }
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 100%;
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
  padding: 2rem 2rem 1.5rem 2rem;
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
  padding: 2rem;
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
  gap: 1rem;
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
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1.5rem;
  box-shadow: var(--shadow-medium);
  position: relative;
  overflow: hidden;
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

.submit-btn:hover:not(:disabled) {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 
    var(--shadow-strong),
    0 0 30px rgba(0, 188, 212, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
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
}
</style>