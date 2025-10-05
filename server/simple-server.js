import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'The Car Bath API is running',
    timestamp: new Date().toISOString()
  });
});

// Simple booking endpoint (without email for now)
app.post('/api/bookings', (req, res) => {
  try {
    const bookingData = req.body;
    
    console.log('New booking received:', {
      customer: `${bookingData.firstName} ${bookingData.lastName}`,
      service: bookingData.service,
      email: bookingData.email,
      phone: bookingData.phone,
      date: bookingData.preferredDate,
      time: bookingData.preferredTime,
      timestamp: new Date().toISOString()
    });

    // For now, just return success without sending email
    res.json({
      success: true,
      message: 'Booking request received! We will contact you within 24 hours to confirm your appointment.',
      bookingId: `TCB-${Date.now()}`
    });

  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit booking request. Please try again or contact us directly.',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚗 The Car Bath API server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});

export default app;




