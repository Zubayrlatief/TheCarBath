<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Company Branding Section -->
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/The_Car-removebg-preview.png" alt="The Car Bath Logo" class="logo" />
            <h3>The Car Bath</h3>
          </div>
          <p class="footer-description">
            Premium mobile car wash services for business parks and corporate clients across South Africa.
          </p>
          
          <!-- Contact Quick Info -->
          <div class="contact-quick">
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <a href="tel:+27821234567" class="contact-link">+27 82 123 4567</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <a href="mailto:info@thecarbath.co.za" class="contact-link">info@thecarbath.co.za</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🕒</span>
              <span class="contact-text">Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
        </div>

        <!-- Navigation & Services -->
        <div class="footer-links">
          <div class="links-column">
            <h4>Navigate</h4>
            <ul class="footer-nav">
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/business-parks">Business Parks</RouterLink></li>
              <li><RouterLink to="/services">Services</RouterLink></li>
              <li><RouterLink to="/auto-detailing">Auto Detailing</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
          </div>
          
          <div class="links-column">
            <h4>Services</h4>
            <ul class="footer-nav">
              <li><span class="service-item">Executive Detail - R350</span></li>
              <li><span class="service-item">Mini Valet - R100</span></li>
              <li><span class="service-item">Business Park Wash - R150</span></li>
              <li><RouterLink to="/bookings" class="book-link">Book Now</RouterLink></li>
            </ul>
          </div>
          
          <div class="links-column">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="https://facebook.com/thecarbath" target="_blank" rel="noopener" class="social-link">
                <span class="social-icon">📘</span>
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com/thecarbath" target="_blank" rel="noopener" class="social-link">
                <span class="social-icon">📷</span>
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com/company/thecarbath" target="_blank" rel="noopener" class="social-link">
                <span class="social-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="https://wa.me/27821234567" target="_blank" rel="noopener" class="social-link">
                <span class="social-icon">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="footer-cta">
          <h4>Ready to Get Started?</h4>
          <p>Partner with us for professional car wash services at your business park.</p>
          <div class="cta-buttons">
            <a href="tel:+27821234567" class="btn btn-primary">
              <span class="btn-icon">📞</span>
              <span>Call Now</span>
            </a>
            <a href="mailto:info@thecarbath.co.za" class="btn btn-secondary">
              <span class="btn-icon">✉️</span>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2024 The Car Bath. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
/* Footer Variables */
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

.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 3rem 0 1.5rem 0;
  margin-top: auto;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Main Footer Layout */
.footer-main {
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo .logo {
  height: 40px;
  width: auto;
}

.footer-logo h3 {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0;
  color: var(--text);
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
}

.contact-quick {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.contact-icon {
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.contact-link {
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--accent);
}

.contact-text {
  color: var(--text-secondary);
}

/* Navigation & Links Section */
.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.links-column h4 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: var(--text);
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.footer-nav a:hover {
  color: var(--accent);
}

.service-item {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.book-link {
  color: var(--accent) !important;
  font-weight: 600;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  font-size: 0.9rem;
}

.social-link:hover {
  color: var(--accent);
}

.social-icon {
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

/* Call to Action Section */
.footer-cta {
  background: var(--bg);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-cta h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: var(--text);
}

.footer-cta p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.btn-primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.btn-secondary:hover {
  background: var(--bg);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1rem;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.85rem;
}

.footer-bottom-links a:hover {
  color: var(--accent);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    padding: 2.5rem 0 1.5rem 0;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .footer-brand {
    text-align: center;
    gap: 1.25rem;
  }
  
  .footer-logo {
    justify-content: center;
  }
  
  .contact-quick {
    align-items: center;
    gap: 0.75rem;
  }
  
  .contact-item {
    justify-content: center;
    text-align: center;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .links-column {
    text-align: center;
  }
  
  .social-links {
    align-items: center;
  }
  
  .footer-cta {
    padding: 1.75rem;
    gap: 1.25rem;
  }
  
  .cta-buttons {
    gap: 0.75rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
  
  .container {
    padding: 0 16px;
  }
}

/* Tablet Design */
@media (max-width: 1024px) and (min-width: 769px) {
  .footer-main {
    grid-template-columns: 1.5fr 1.5fr 1fr;
    gap: 2.5rem;
  }
  
  .footer-links {
    gap: 1.75rem;
  }
  
  .footer-cta {
    padding: 1.75rem;
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .footer-main {
    gap: 3rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
  
  .footer-cta {
    padding: 2rem;
  }
}
</style>
