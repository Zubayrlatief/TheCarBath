<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Professional Car Wash Services for Business Parks</h1>
        <p>Elite Park Car Wash provides premium car wash and detailing services for business parks and corporate clients.</p>
        <div class="hero-buttons">
          <RouterLink to="/business-parks" class="btn btn-primary">Business Parks</RouterLink>
          <RouterLink to="/auto-detailing" class="btn btn-secondary">Auto Detailing</RouterLink>
        </div>
      </div>
    </section>
    
    <section class="services-preview">
      <div class="container">
        <h2>Our Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>Business Park Services</h3>
            <p>Convenient car wash services for your business park tenants and employees.</p>
            <RouterLink to="/business-parks" class="btn btn-outline">Learn More</RouterLink>
          </div>
          <div class="service-card">
            <h3>Auto Detailing</h3>
            <p>Premium detailing services to keep your vehicle looking its best.</p>
            <RouterLink to="/auto-detailing" class="btn btn-outline">Learn More</RouterLink>
          </div>
          <div class="service-card">
            <h3>Bookings</h3>
            <p>Schedule your car wash or detailing appointment online.</p>
            <RouterLink to="/bookings" class="btn btn-outline">Book Now</RouterLink>
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
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #fff;
  color: #667eea;
}

.btn-primary:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background: #fff;
  color: #667eea;
}

.services-preview {
  padding: 4rem 0;
  background: #f8f9fa;
}

.services-preview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.service-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>