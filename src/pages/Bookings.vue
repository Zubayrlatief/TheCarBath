<template>
  <section class="section">
    <h1>Bookings</h1>
    <div class="card">
      <p>Select your location, preferred day, and vehicle details. Well confirm availability.</p>
      <form style="margin-top:12px" @submit.prevent="onSubmit">
        <div style="display:grid; gap:12px; max-width:520px">
          <input placeholder="Name" required style="padding:12px; background:#0f0f0f; border:1px solid #1c1c1c; color:#fff; border-radius:8px" />
          <input placeholder="Email" type="email" required style="padding:12px; background:#0f0f0f; border:1px solid #1c1c1c; color:#fff; border-radius:8px" />
          <input placeholder="Business Park / Company" required style="padding:12px; background:#0f0f0f; border:1px solid #1c1c1c; color:#fff; border-radius:8px" />
          <input placeholder="Preferred Day" type="date" style="padding:12px; background:#0f0f0f; border:1px solid #1c1c1c; color:#fff; border-radius:8px" />
          <textarea placeholder="Vehicle + Notes" rows="4" style="padding:12px; background:#0f0f0f; border:1px solid #1c1c1c; color:#fff; border-radius:8px"></textarea>
          <button class="cta" type="submit">Request Booking</button>
        </div>
      </form>
      <p style="margin-top:12px; color:#b3b3b3">Or email <a href="mailto:hello@eliteparkwash.com">hello@eliteparkwash.com</a></p>
    </div>
  </section>
</template>
<script setup>
function onSubmit(){ window.location.href = "mailto:hello@eliteparkwash.com" }
</script>
