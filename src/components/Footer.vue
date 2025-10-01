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
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+27685070088" class="contact-link">068 507 0088</a>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:thecarsbath@gmail.com" class="contact-link">thecarsbath@gmail.com</a>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
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
            <h4>Connect</h4>
            <div class="social-links">
              <a href="https://facebook.com/thecarbath" target="_blank" rel="noopener" class="social-link">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com/thecarbath" target="_blank" rel="noopener" class="social-link">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com/company/thecarbath" target="_blank" rel="noopener" class="social-link">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://wa.me/27821234567" target="_blank" rel="noopener" class="social-link">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
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
            <a href="tel:+27685070088" class="btn btn-primary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call Now</span>
            </a>
            <a href="mailto:thecarsbath@gmail.com" class="btn btn-secondary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
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
            <a href="/privacy-policy.pdf" target="_blank" rel="noopener">Privacy Policy</a>
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
/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --bg: #0a0a0a;
  --bg-secondary: #111111;
  --text: #ffffff;
  --text-secondary: #b3b3b3;
  --accent: #00bcd4;
  --accent-hover: #0097a7;
  --border: #1c1c1c;
  --border-hover: #2a2a2a;
}

.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 3rem 0 1.5rem 0;
  margin-top: auto;
  width: 100vw !important;
  margin-left: calc(-50vw + 50%) !important;
  position: relative;
  left: 0;
  right: 0;
  min-width: 100vw !important;
  max-width: 100vw !important;
  box-sizing: border-box;
}

.footer .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

/* Main Footer Layout */
.footer-main {
  display: grid;
  grid-template-columns: 2.5fr 1.5fr 1.5fr;
  gap: 4rem;
  margin-bottom: 2rem;
  align-items: start;
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
  min-height: 24px;
}

.contact-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--accent);
  stroke-width: 1.5;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
}

.links-column h4 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 1.25rem 0;
  color: var(--text);
  position: relative;
  padding-bottom: 0.5rem;
}

.links-column h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent);
  border-radius: 1px;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  padding: 0.25rem 0;
  border-radius: 0.25rem;
  display: block;
}

.footer-nav a:hover {
  color: var(--accent);
  padding-left: 0.5rem;
  background: rgba(0, 188, 212, 0.05);
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
  padding: 0.5rem 0;
  font-size: 0.9rem;
  min-height: 32px;
  border-radius: 0.375rem;
}

.social-link:hover {
  color: var(--accent);
  background: rgba(0, 188, 212, 0.1);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

.social-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: all 0.3s ease;
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
  box-shadow: 0 6px 20px rgba(0, 188, 212, 0.3);
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
  width: 18px;
  height: 18px;
  flex-shrink: 0;
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
  
  .social-link {
    justify-content: center;
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
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 2.5rem;
    align-items: start;
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
    gap: 4rem;
  }
  
  .footer-links {
    gap: 2rem;
  }
  
  .footer-cta {
    padding: 2rem;
  }
}
</style>
