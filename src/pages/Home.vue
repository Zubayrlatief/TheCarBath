<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <div class="hero-images">
          <img src="/20220430_115624.jpg" alt="Professional car wash service" class="hero-image-left" />
          <img src="/20220430_134409.jpg" alt="Professional car wash service" class="hero-image-right" />
        </div>
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <h1>Professional Car Wash Services for Business Parks</h1>
        <p>4+ years providing excellent customer care.</p>
        <div class="hero-buttons">
          <RouterLink to="/business-parks" class="btn btn-primary">Business Parks</RouterLink>
          <RouterLink to="/auto-detailing" class="btn btn-secondary">Auto Detailing</RouterLink>
        </div>
      </div>
    </section>
    
    <section class="services-preview">
      <div class="container">
        <h2>Premium Services</h2>
        <div class="services-grid">
          <div class="service-card premium">
            <div class="service-label">Most Popular</div>
            <h3>Executive Detail</h3>
            <p>Showroom-level finish inside and out with protection that lasts.</p>
            <ul class="service-list">
              <li>Ceramic-safe hand wash + dry</li>
              <li>Decontamination, clay, and machine polish</li>
              <li>Full interior reset: deep vacuum, interior detail treatment</li>
            </ul>
            <div class="service-footer">
              <span class="price">R2000</span>
              <RouterLink to="/bookings" class="btn btn-primary">Book Executive</RouterLink>
            </div>
          </div>

          <div class="service-card">
            <h3>Mini Valet</h3>
            <p>Quick and thorough interior & exterior cleaning for busy professionals on the go.</p>
            <ul class="service-list">
              <li>Ceramic-safe hand wash + dry</li>
              <li>Vacuum and wipe down all surfaces</li>
              <li>Glass cleaning and dashboard shine</li>
            </ul>
            <div class="service-footer">
              <span class="price">R200</span>
              <RouterLink to="/bookings" class="btn btn-secondary">Book Mini Valet</RouterLink>
            </div>
          </div>

          <div class="service-card">
            <h3>Business Park Wash</h3>
            <p>On‑site, zero‑hassle washes while you work at participating parks.</p>
            <ul class="service-list">
              <li>Ceramic-safe hand wash + dry</li>
              <li>Streak‑free glass and interior detail</li>
              <li>Flexible recurring 1 day/week schedules for teams</li>
            </ul>
            <div class="service-footer">
              <span class="price">R150</span>
              <RouterLink to="/bookings" class="btn btn-outline">Book Service</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transform Your Business Park Section -->
    <section class="benefits-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Why Partner With The Car Bath</span>
          <h2>Transform Your Business Park Into a Premium Destination</h2>
          <p class="section-subtitle">We help business park owners provide exceptional value to their tenants while generating additional revenue streams.</p>
        </div>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/20220430_134422.jpg" alt="Revenue generation" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                  <circle cx="12" cy="16" r="2"/>
                  <path d="M8 2v4"/>
                  <path d="M16 2v4"/>
                </svg>
              </div>
              <h3>Additional Revenue Stream</h3>
              <p>Generate passive income through our partnership model. We handle all operations while you earn from every wash service provided on your property.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/20220430_142652.jpg" alt="Business park advantage" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.3 0 2.5.28 3.6.8"/>
                  <path d="M12 3v6l4 2"/>
                </svg>
              </div>
              <h3>Competitive Advantage</h3>
              <p>Stand out from other business parks by offering premium amenities. Car wash services are a unique value proposition that attracts quality tenants.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/20220502_175038.jpg" alt="Zero maintenance service" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                </svg>
              </div>
              <h3>Zero Maintenance for You</h3>
              <p>We handle all equipment, supplies, staffing, and operations. Your involvement is minimal - we just need access to a suitable location on your property.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/20220430_134432.jpg" alt="Flexible scheduling" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                  <path d="M8 12h8"/>
                  <path d="M12 8v8"/>
                </svg>
              </div>
              <h3>Flexible Scheduling</h3>
              <p>We work around your business park's needs with flexible scheduling. Whether weekly, bi-weekly, or monthly visits, we adapt to your requirements.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2>Your Car's Safety is Our Priority</h2>
        <p class="trust-subtitle">We understand your vehicle is a significant investment. That's why we treat every car with the utmost care and respect.</p>
        
        <div class="trust-grid">
          <div class="trust-card">
            <div class="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Premium Products Only</h3>
            <p>We use only high-quality, pH-balanced soaps and waxes that protect your paint and won't cause damage or fading.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h3>Expert Technicians</h3>
            <p>Our team is trained in proper washing techniques, using soft microfiber cloths and gentle methods to prevent scratches.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <circle cx="12" cy="16" r="1"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3>Secure Process</h3>
            <p>We work with your keys safely, never leaving your vehicle unattended, and always return it exactly as we found it.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h3>Quality Checklist</h3>
            <p>Every wash includes a thorough inspection to ensure your vehicle meets our high standards before completion.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3>Damage Protection</h3>
            <p>We're fully insured and take every precaution to protect your vehicle's finish, wheels, and interior.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>4+ Years Experience</h3>
            <p>Our proven track record of satisfied customers speaks to our commitment to excellence and vehicle care.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="business-parks-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">For Business Parks</span>
        </div>
        
        <div class="business-content">
          <div class="business-text">
            <h3>Our Unique Booking Approach</h3>
            <p class="business-intro">We offer dedicated service days for each business park, ensuring consistent, reliable car wash services for your tenants and employees. Every vehicle receives meticulous care with premium products and gentle techniques.</p>
            
            <div class="approach-grid">
              <div class="approach-card">
                <h4>Dedicated Service Days</h4>
                <p>Each business park gets one dedicated day per week for maximum convenience and consistent scheduling.</p>
              </div>
              
              <div class="approach-card">
                <h4>On-Site Convenience</h4>
                <p>We come directly to your business park - no need for tenants to leave the premises or find parking elsewhere.</p>
              </div>
              
              <div class="approach-card">
                <h4>Premium Care Standards</h4>
                <p>Every vehicle receives meticulous attention with premium products and gentle techniques that protect your investment.</p>
              </div>
              
              <div class="approach-card">
                <h4>Reliable Scheduling</h4>
                <p>Consistent weekly service that your tenants can count on, building trust and routine for your business community.</p>
              </div>
            </div>
            
            <div class="approach-cta">
              <RouterLink to="/business-parks" class="btn btn-primary">Partner With Us</RouterLink>
            </div>
          </div>
        </div>
        
        <div class="business-images">
          <figure class="image-card">
            <img class="image-media" src="/Arden-Grove-Milnerton-aerial-view-1.jpg" alt="Arden Grove Business Park, Milnerton" />
            <figcaption>Arden Grove, Milnerton</figcaption>
          </figure>
          <figure class="image-card">
            <img class="image-media" src="/Lovemore_02-1-scaled (1).jpg" alt="Partner Business Park" />
            <figcaption>Brickfield Canvas, Woodstock</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <div class="cta-background">
        <div class="cta-pattern"></div>
      </div>
      <div class="container">
        <div class="cta-content">
            <div class="cta-badge">
              <span class="badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span>
              <span>Premium Service</span>
            </div>
          <div class="cta-main">
            <h2>Experience Professional Car Care Excellence</h2>
            <p>Join hundreds of satisfied customers who trust The Car Bath for their premium vehicle care needs. Book your service today and discover why we're the preferred choice for discerning car owners.</p>
            <div class="cta-stats">
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
          </div>
          <div class="cta-actions">
            <RouterLink to="/bookings" class="btn btn-primary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              <span>Schedule Your Service</span>
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Speak with Our Team</span>
            </RouterLink>
            <div class="cta-guarantee">
              <svg class="guarantee-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page component
</script>

<style scoped>
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* CSS Variables */
:root {
  --bg: #000000;
  --bg-secondary: #111111;
  --text: #ffffff;
  --text-secondary: #b3b3b3;
  --accent: #00bcd4;
  --accent-hover: #0097a7;
  --border: #1c1c1c;
  --border-hover: #2a2a2a;
}

.hero {
  position: relative;
  min-height: 100vh;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: -80px;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.hero-images {
  display: flex;
  width: 100vw;
  height: 100%;
}

.hero-image-left,
.hero-image-right {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

/* Remove global main padding on this page so the hero truly fills the screen */
:global(main){
  padding: 0;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-content p {
  font-size: 1.4rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  color: #333;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5);
}

.services-preview {
  padding: 4rem 0;
  background: var(--bg);
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.services-preview::before { content: none }

.services-preview .container{
  max-width: none;
  padding: 0 20px;
}

.services-preview h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #fff;
  font-weight: 800;
  position: relative;
  z-index: 2;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}


.service-card {
  background: #111111;
  padding: 2rem;
  border-radius: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #1c1c1c;
  color: #eaeaea;
}

.service-image {
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #1c1c1c;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.service-card.premium {
  padding: 2rem;
}

.service-card:hover {
  transform: translateY(-6px) scale(1.015);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border-color: #2a2a2a;
}

.service-card:hover .service-image img {
  transform: scale(1.05);
}

.service-card h3 {
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: #ffffff;
  font-weight: 800;
}

.service-card p {
  color: #b3b3b3;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  font-weight: 700;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.btn-outline:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .hero-content {
    padding: 0 1rem;
  }
  
  .services-preview h2 {
    font-size: 2.2rem;
  }
  
  .service-card {
    padding: 1.25rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }
  
  .services-preview .container {
    padding: 0 16px;
  }
  
  .business-parks-section {
    padding: 0.75rem 0;
  }
}

/* Business Parks Section */
.business-parks-section {
  padding: 0.5rem 0;
  background: var(--bg);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* Laptop/Tablet screens (769px - 1199px) */
@media (min-width: 769px) and (max-width: 1199px) {
  .business-parks-section {
    padding: 0.25rem 0 !important;
  }
  
  .benefits-section {
    padding: 0.25rem 0 !important;
  }
}

/* Large screens (1200px+) */
@media (min-width: 1200px) {
  .business-parks-section {
    padding: 1.5rem 0;
  }
  
  .business-parks-section h2 {
    font-size: 5rem;
  }
  
  .business-text h3 {
    font-size: 2.5rem;
  }
  
  .business-intro {
    font-size: 1.4rem;
  }
  
  .approach-grid {
    gap: 2.5rem;
  }
  
  .approach-card {
    padding: 2.5rem;
  }
  
  .business-images {
    max-width: 1400px;
    gap: 3rem;
  }
  
  .image-media {
    height: 450px;
  }
}

/* Large screens for Services */
@media (min-width: 1200px) {
  .services-preview {
    padding: 6rem 0;
  }
  
  .services-preview h2 {
    font-size: 3.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1400px;
  }
  
  .service-card {
    padding: 2.5rem;
  }
  
  .service-card h3 {
    font-size: 1.8rem;
  }
  
  .service-card p {
    font-size: 1.1rem;
  }
  
  .service-list {
    font-size: 1rem;
  }
  
  .price {
    font-size: 1.4rem;
  }
}

/* Large screens for Hero */
@media (min-width: 1200px) {
  .hero-content h1 {
    font-size: 4.5rem;
  }
  
  .hero-content p {
    font-size: 1.5rem;
  }
  
  .btn {
    padding: 1.2rem 2.5rem;
    font-size: 1.2rem;
  }
}

/* Large screens for Trust */
@media (min-width: 1200px) {
  .trust-section {
    padding: 6rem 0;
  }
  
  .trust-section h2 {
    font-size: 3.5rem;
  }
  
  .trust-subtitle {
    font-size: 1.4rem;
    max-width: 900px;
  }
  
  .trust-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    max-width: 1400px;
  }
  
  .trust-card {
    padding: 3rem;
  }
  
  .trust-card h3 {
    font-size: 1.5rem;
  }
  
  .trust-card p {
    font-size: 1.1rem;
  }
  
  .trust-guarantee {
    font-size: 1.3rem;
  }
}

.business-parks-section .container {
  max-width: none;
  padding: 0 20px;
}

.section-eyebrow {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  font-size: 1.1rem;
  color: #b3b3b3;
  margin-bottom: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}


.approach-cta {
  margin-top: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.business-parks-section h2 {
  font-size: 4.5rem;
  margin: 0;
  color: #fff;
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.business-content {
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  text-align: center;
}

.business-text h3 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  font-weight: 800;
}

.business-intro {
  font-size: 1.3rem;
  color: #b3b3b3;
  margin-bottom: 3rem;
  line-height: 1.7;
  font-weight: 500;
}

.approach-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.approach-card {
  background: #111111;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #1c1c1c;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .approach-card {
    padding: 1.2rem;
  }
}

.approach-card:hover {
  transform: translateY(-2px);
  border-color: #2a2a2a;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.approach-card h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 700;
}

.approach-card p {
  color: #b3b3b3;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.business-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
}

.image-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.image-card figcaption {
  color: #e0e0e0;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}

.image-media {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid #1c1c1c;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;
}

.image-media:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
}

@media (max-width: 768px) {
  .business-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }
  
  .approach-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  
  .business-images {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .business-parks-section h2 {
    font-size: 3.2rem;
  }
  
  .business-text h3 {
    font-size: 1.8rem;
  }
  
  .business-intro {
    font-size: 1.1rem;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .business-parks-section .container {
    padding: 0 16px;
  }
}

/* Trust Section */
.trust-section {
  padding: 5rem 0 3rem 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #111111 100%);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  overflow: hidden;
}

.trust-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 40%, rgba(0, 188, 212, 0.04) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(0, 188, 212, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.trust-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.trust-section h2 {
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: 2rem;
  color: #fff;
  font-weight: 800;
  position: relative;
  z-index: 1;
}

.trust-subtitle {
  text-align: center;
  font-size: 1.4rem;
  color: #b3b3b3;
  margin-bottom: 5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  position: relative;
  z-index: 1;
  font-weight: 400;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2.5rem;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
}

.trust-card {
  background: #111111;
  padding: 3rem 2.5rem;
  border-radius: 1.5rem;
  border: 1px solid #1c1c1c;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.trust-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.02) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.trust-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--accent);
  box-shadow: 0 25px 50px rgba(0, 188, 212, 0.15), 0 10px 30px rgba(0, 0, 0, 0.2);
}

.trust-card:hover::before {
  opacity: 1;
}

.trust-icon {
  font-size: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem auto;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 188, 212, 0.3);
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.trust-icon svg {
  width: 2.8rem;
  height: 2.8rem;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.trust-card:hover .trust-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 15px 40px rgba(0, 188, 212, 0.4);
}

.trust-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  transition: color 0.3s ease;
  position: relative;
  z-index: 2;
}

.trust-card:hover .trust-card h3 {
  color: var(--accent);
}

.trust-card p {
  color: #b3b3b3;
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
  z-index: 2;
}

.trust-card:hover .trust-card p {
  color: #fff;
}

.trust-footer {
  text-align: center;
  padding: 4rem 0;
  border-top: 1px solid rgba(0, 188, 212, 0.2);
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.02) 0%, transparent 50%);
  border-radius: 1rem;
  margin-top: 2rem;
}

.trust-guarantee {
  font-size: 1.3rem;
  color: #fff;
  margin: 0;
  font-weight: 600;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  padding: 1rem 2rem;
  border: 2px solid var(--accent);
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(0, 188, 212, 0.2);
}

@media (max-width: 768px) {
  .trust-section h2 {
    font-size: 2.2rem;
  }
  
  .trust-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .trust-card {
    padding: 1.5rem;
  }
  
  .trust-section .container {
    padding: 0 16px;
  }
  
  .trust-section {
    padding: 3rem 0;
  }
  
  .trust-subtitle {
    font-size: 1.1rem;
    padding: 0 1rem;
  }
}

/* Premium section extras */
.service-card .service-list{
  list-style: none;
  margin: 0 0 1.25rem 0;
  padding: 0;
  color: #d0d0d0;
}
.service-card .service-list li{
  padding-left: 1.25rem;
  position: relative;
  margin: .5rem 0;
}
.service-card .service-list li:before{
  content: '✔';
  position: absolute;
  left: 0;
  top: 0;
  color: #90ee90;
}
.service-footer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.price{
  font-weight: 800;
  font-size: 1.25rem;
  color: #ffffff;
}
.premium{
  position: relative;
  border: 1px solid #2a2a2a;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
}
.premium .service-label{
  position: absolute;
  top: -12px;
  left: 16px;
  background: #000000;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: .85rem;
  font-weight: 700;
  border: 1px solid #2a2a2a;
}

/* Transform Your Business Park Section */
.benefits-section {
  padding: 0.5rem 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: linear-gradient(135deg, var(--bg) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.benefits-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(0, 188, 212, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 188, 212, 0.02) 0%, transparent 50%);
  pointer-events: none;
}

.benefits-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
}

.section-eyebrow {
  display: inline-block;
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  border-radius: 999px;
  font-size: 1.2rem;
  color: white;
  margin: 2rem auto 20px auto;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.3);
  text-align: center;
}

.section-header h2 {
  font-size: 3.2rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  color: var(--text);
  line-height: 1.1;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.benefit-card {
  background: var(--bg);
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);
}

.benefit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.02) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.benefit-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--accent);
  box-shadow: 0 25px 50px rgba(0, 188, 212, 0.15), 0 10px 30px rgba(0, 0, 0, 0.2);
}

.benefit-card:hover::before {
  opacity: 1;
}

.benefit-image {
  height: 320px;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.benefit-image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  z-index: 1;
}

.benefit-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-image img {
  transform: scale(1.05);
}

/* Enhanced quality for the flexible scheduling image */
.benefit-card:nth-child(4) .benefit-image img {
  filter: brightness(1.08) contrast(1.15) saturate(1.15);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: auto;
}

.benefit-content {
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  background: var(--bg);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem auto;
  background: linear-gradient(135deg, var(--accent), var(--accent-hover));
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(0, 188, 212, 0.3);
  transition: all 0.4s ease;
}

.benefit-icon svg {
  width: 2.2rem;
  height: 2.2rem;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 35px rgba(0, 188, 212, 0.4);
}

.benefit-content h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1.25rem 0;
  color: var(--text);
  line-height: 1.3;
  transition: color 0.3s ease;
}

.benefit-card:hover .benefit-content h3 {
  color: var(--accent);
}

.benefit-content p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  transition: color 0.3s ease;
}

.benefit-card:hover .benefit-content p {
  color: var(--text);
}

/* Responsive Design for Benefits Section */
@media (max-width: 768px) {
  .benefits-section {
    padding: 0.75rem 0;
  }
  
  .benefits-section .container {
    padding: 0 16px;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .benefit-content {
    padding: 1.5rem;
  }
}

/* Large screens (1200px+) for benefits */
@media (min-width: 1200px) {
  .benefits-section {
    padding: 1.5rem 0;
  }
  
  .benefits-section h2 {
    font-size: 3.5rem;
  }
  
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

/* Call to Action Section */
.cta-section {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.cta-section .container {
  max-width: 1200px;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  z-index: 1;
}

.cta-pattern {
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

.cta-content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  background: var(--gradient-primary);
  border: none;
  padding: 2rem 4rem;
  border-radius: 50px;
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  box-shadow: var(--shadow-soft);
  letter-spacing: 0.5px;
}

.badge-icon {
  font-size: 1.6rem;
}

.cta-main h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.01em;
  line-height: 1.1;
}

.cta-main p {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  font-weight: 400;
}

.cta-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
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

.cta-actions {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.cta-actions .btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  justify-content: center;
  font-size: 1.1rem;
  flex: 1;
  max-width: 400px;
}

.cta-actions .btn-primary {
  background: var(--gradient-primary);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.3);
}

.cta-actions .btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 188, 212, 0.4);
}

.cta-actions .btn-outline {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--accent);
  box-shadow: 0 4px 15px rgba(0, 188, 212, 0.2);
}

.cta-actions .btn-outline:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 188, 212, 0.3);
}

.btn-icon {
  font-size: 1.1rem;
}

.cta-guarantee {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.guarantee-icon {
  font-size: 1.2rem;
}

/* Responsive Design for CTA */
@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 0;
  }
  
  .cta-main h2 {
    font-size: 2.2rem;
  }
  
  .cta-main p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .cta-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .cta-actions {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .cta-actions .btn {
    flex: none;
    min-width: 250px;
    max-width: none;
  }
}

@media (min-width: 1200px) {
  .cta-section {
    padding: 7rem 0;
  }
  
  .cta-main h2 {
    font-size: 3.5rem;
  }
  
  .cta-main p {
    font-size: 1.25rem;
  }
}
</style>