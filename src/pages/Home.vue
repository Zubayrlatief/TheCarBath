<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <div class="hero-images">
          <img src="/dd86365ba5169a74a2a0c5dede7b308d.jpg" alt="Professional car wash service" class="hero-image-left" />
          <img src="/37a6bd2321404def31b29951d5f26b2e.jpg" alt="Professional car wash service" class="hero-image-right" />
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
              <li>Ceramic-safe hand wash + blow dry</li>
              <li>Decontamination, clay, and machine polish</li>
              <li>Full interior reset: deep vacuum, steam, leather treatment</li>
            </ul>
            <div class="service-footer">
              <span class="price">R350</span>
              <RouterLink to="/auto-detailing" class="btn btn-primary">Book Executive</RouterLink>
            </div>
          </div>

          <div class="service-card">
            <h3>Mini Valet</h3>
            <p>Quick and thorough interior cleaning for busy professionals on the go.</p>
            <ul class="service-list">
              <li>Vacuum and wipe down all surfaces</li>
              <li>Glass cleaning and dashboard shine</li>
              <li>Door panels and center console clean</li>
            </ul>
            <div class="service-footer">
              <span class="price">R100</span>
              <RouterLink to="/auto-detailing" class="btn btn-secondary">Book Mini Valet</RouterLink>
            </div>
          </div>

          <div class="service-card">
            <h3>Business Park Wash</h3>
            <p>On‑site, zero‑hassle washes while you work at participating parks.</p>
            <ul class="service-list">
              <li>Hand wash, wheel clean, tire shine</li>
              <li>Streak‑free glass and light interior tidy</li>
              <li>Flexible recurring schedules for teams</li>
            </ul>
            <div class="service-footer">
              <span class="price">R150</span>
              <RouterLink to="/business-parks" class="btn btn-outline">View Parks</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="business-parks-section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">For Business Parks</span>
          <h2>How We Cater to Business Parks</h2>
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
            <img class="image-media" src="/download.jpg" alt="Partner Business Park" />
            <figcaption>Partner Business Park</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <h2>Your Car's Safety is Our Priority</h2>
        <p class="trust-subtitle">We understand your vehicle is a significant investment. That's why we treat every car with the utmost care and respect.</p>
        
        <div class="trust-grid">
          <div class="trust-card">
            <div class="trust-icon">🧽</div>
            <h3>Premium Products Only</h3>
            <p>We use only high-quality, pH-balanced soaps and waxes that protect your paint and won't cause damage or fading.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">👨‍🔧</div>
            <h3>Expert Technicians</h3>
            <p>Our team is trained in proper washing techniques, using soft microfiber cloths and gentle methods to prevent scratches.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">🔒</div>
            <h3>Secure Process</h3>
            <p>We work with your keys safely, never leaving your vehicle unattended, and always return it exactly as we found it.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">📋</div>
            <h3>Quality Checklist</h3>
            <p>Every wash includes a thorough inspection to ensure your vehicle meets our high standards before completion.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">🛡️</div>
            <h3>Damage Protection</h3>
            <p>We're fully insured and take every precaution to protect your vehicle's finish, wheels, and interior.</p>
          </div>
          
          <div class="trust-card">
            <div class="trust-icon">⭐</div>
            <h3>4+ Years Experience</h3>
            <p>Our proven track record of satisfied customers speaks to our commitment to excellence and vehicle care.</p>
          </div>
        </div>
        
        <div class="trust-footer">
          <p class="trust-guarantee"><strong>100% Satisfaction Guarantee</strong> - Your complete satisfaction is our commitment. We stand behind every service with our quality promise.</p>
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
              <img src="/dd86365ba5169a74a2a0c5dede7b308d.jpg" alt="Professional car wash service" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">🏢</div>
              <h3>Enhanced Tenant Satisfaction</h3>
              <p>Provide convenient car wash services that save your tenants time and keep their vehicles looking professional. Happy tenants stay longer and pay on time.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/37a6bd2321404def31b29951d5f26b2e.jpg" alt="Revenue generation" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">💰</div>
              <h3>Additional Revenue Stream</h3>
              <p>Generate passive income through our partnership model. We handle all operations while you earn from every wash service provided on your property.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/Arden-Grove-Milnerton-aerial-view-1.jpg" alt="Business park advantage" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">🎯</div>
              <h3>Competitive Advantage</h3>
              <p>Stand out from other business parks by offering premium amenities. Car wash services are a unique value proposition that attracts quality tenants.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/download.jpg" alt="Zero maintenance service" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">🔧</div>
              <h3>Zero Maintenance for You</h3>
              <p>We handle all equipment, supplies, staffing, and operations. Your involvement is minimal - we just need access to a suitable location on your property.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/dd86365ba5169a74a2a0c5dede7b308d.jpg" alt="Flexible scheduling" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">📅</div>
              <h3>Flexible Scheduling</h3>
              <p>We work around your business park's needs with flexible scheduling. Whether weekly, bi-weekly, or monthly visits, we adapt to your requirements.</p>
            </div>
          </div>
          
          <div class="benefit-card">
            <div class="benefit-image">
              <img src="/37a6bd2321404def31b29951d5f26b2e.jpg" alt="Insurance and licensing" />
            </div>
            <div class="benefit-content">
              <div class="benefit-icon">🛡️</div>
              <h3>Fully Insured & Licensed</h3>
              <p>Complete peace of mind with full insurance coverage and all necessary licenses. We're a professional, established business with a proven track record.</p>
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

.hero {
  position: relative;
  min-height: calc(100svh - 80px);
  height: calc(100svh - 80px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
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
  width: 100%;
  height: 100%;
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

.service-card.premium {
  padding: 2rem;
}

.service-card:hover {
  transform: translateY(-6px) scale(1.015);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border-color: #2a2a2a;
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
    font-size: 3.5rem;
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
  padding: 6px 12px;
  border: 1px solid #2a2a2a;
  border-radius: 999px;
  font-size: 0.85rem;
  color: #b3b3b3;
  margin-bottom: 12px;
}


.approach-cta {
  margin-top: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.business-parks-section h2 {
  font-size: 3rem;
  margin: 0;
  color: #fff;
  font-weight: 800;
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
    font-size: 2.2rem;
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
  padding: 4rem 0;
  background: #0a0a0a;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.trust-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.trust-section h2 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #fff;
  font-weight: 800;
}

.trust-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: #b3b3b3;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.trust-card {
  background: #111111;
  padding: 2.5rem;
  border-radius: 1.25rem;
  border: 1px solid #1c1c1c;
  text-align: center;
  transition: all 0.3s ease;
}

.trust-card:hover {
  transform: translateY(-4px);
  border-color: #2a2a2a;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.trust-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.trust-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 700;
}

.trust-card p {
  color: #b3b3b3;
  line-height: 1.6;
  margin: 0;
}

.trust-footer {
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid #1c1c1c;
}

.trust-guarantee {
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
  font-weight: 600;
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
  background: var(--bg-secondary);
}

.benefits-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

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
  line-height: 1.2;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.benefit-card {
  background: var(--bg);
  border-radius: 1rem;
  border: 1px solid var(--border);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.benefit-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-hover);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.benefit-image {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.benefit-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-image img {
  transform: scale(1.05);
}

.benefit-content {
  padding: 2rem;
  text-align: center;
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.benefit-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: var(--text);
}

.benefit-content p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}
</style>