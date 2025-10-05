import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many booking requests from this IP, please try again later.'
});
app.use('/api/bookings', limiter);

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER || 'thecarsbath@gmail.com',
      pass: process.env.EMAIL_PASS // App password for Gmail
    }
  });
};

// Email templates
const createBookingEmail = (bookingData) => {
  const serviceNames = {
    'executive-detail': 'Executive Detail',
    'mini-valet': 'Mini Valet',
    'business-park-wash': 'Business Park Wash'
  };

  const servicePrices = {
    'executive-detail': 'R350',
    'mini-valet': 'R180',
    'business-park-wash': 'R120'
  };

  const locationNames = {
    'arden-grove': 'Arden Grove, Milnerton',
    'other': bookingData.customBusinessPark || 'Custom Business Park',
    'private': 'Private Location'
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'Not specified';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return {
    subject: `🔔 NEW BOOKING REQUEST - ${serviceNames[bookingData.service]} - ${bookingData.firstName} ${bookingData.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Booking Request - The Car Bath</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #00bcd4, #0097a7); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .section { margin-bottom: 20px; }
          .section h3 { color: #00bcd4; border-bottom: 2px solid #00bcd4; padding-bottom: 5px; }
          .info-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
          .label { font-weight: bold; color: #555; }
          .value { color: #333; }
          .highlight { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 10px 0; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚗 New Booking Request - The Car Bath</h1>
            <p>A new service booking has been submitted through the website.</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3>📋 Service Details</h3>
              <div class="info-row">
                <span class="label">Service:</span>
                <span class="value">${serviceNames[bookingData.service]} - ${servicePrices[bookingData.service]}</span>
              </div>
              <div class="info-row">
                <span class="label">Location:</span>
                <span class="value">${locationNames[bookingData.businessPark]}</span>
              </div>
              <div class="info-row">
                <span class="label">Preferred Date:</span>
                <span class="value">${formatDate(bookingData.preferredDate)}</span>
              </div>
              <div class="info-row">
                <span class="label">Preferred Time:</span>
                <span class="value">${formatTime(bookingData.preferredTime)}</span>
              </div>
            </div>

            <div class="section">
              <h3>👤 Customer Information</h3>
              <div class="info-row">
                <span class="label">Name:</span>
                <span class="value">${bookingData.firstName} ${bookingData.lastName}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value">${bookingData.email}</span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value">${bookingData.phone}</span>
              </div>
            </div>

            <div class="section">
              <h3>🚙 Vehicle Information</h3>
              <div class="info-row">
                <span class="label">Make:</span>
                <span class="value">${bookingData.vehicleMake}</span>
              </div>
              <div class="info-row">
                <span class="label">Model:</span>
                <span class="value">${bookingData.vehicleModel}</span>
              </div>
              <div class="info-row">
                <span class="label">Year:</span>
                <span class="value">${bookingData.vehicleYear}</span>
              </div>
              <div class="info-row">
                <span class="label">Color:</span>
                <span class="value">${bookingData.vehicleColor}</span>
              </div>
            </div>

            ${bookingData.notes ? `
            <div class="section">
              <h3>📝 Additional Notes</h3>
              <div class="highlight">
                ${bookingData.notes}
              </div>
            </div>
            ` : ''}

            <div class="section">
              <h3>⚡ Next Steps</h3>
              <div class="highlight">
                <strong>Please contact the customer within 24 hours to:</strong>
                <ul>
                  <li>Confirm availability for the requested date/time</li>
                  <li>Provide any additional information needed</li>
                  <li>Finalize the booking details</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>This booking request was automatically generated from The Car Bath website.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-ZA')}</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
NEW BOOKING REQUEST - The Car Bath

SERVICE DETAILS:
Service: ${serviceNames[bookingData.service]} - ${servicePrices[bookingData.service]}
Location: ${locationNames[bookingData.businessPark]}
Date: ${formatDate(bookingData.preferredDate)}
Time: ${formatTime(bookingData.preferredTime)}

CUSTOMER INFORMATION:
Name: ${bookingData.firstName} ${bookingData.lastName}
Email: ${bookingData.email}
Phone: ${bookingData.phone}

VEHICLE INFORMATION:
Make: ${bookingData.vehicleMake}
Model: ${bookingData.vehicleModel}
Year: ${bookingData.vehicleYear}
Color: ${bookingData.vehicleColor}

${bookingData.notes ? `ADDITIONAL NOTES:\n${bookingData.notes}\n` : ''}

Please contact the customer within 24 hours to confirm availability and finalize the booking.

Submitted on: ${new Date().toLocaleString('en-ZA')}
    `
  };
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'The Car Bath API is running',
    timestamp: new Date().toISOString()
  });
});

// Booking submission endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = req.body;

    // Validate required fields
    const requiredFields = [
      'service', 'businessPark', 'firstName', 'lastName', 
      'email', 'phone', 'vehicleMake', 'vehicleModel', 
      'vehicleYear', 'vehicleColor', 'preferredDate', 'preferredTime'
    ];

    const missingFields = requiredFields.filter(field => !bookingData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        missingFields
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Create email content
    const emailContent = createBookingEmail(bookingData);

    // Send email
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"The Car Bath Website" <${process.env.EMAIL_USER || 'thecarsbath@gmail.com'}>`,
      to: process.env.EMAIL_USER || 'thecarsbath@gmail.com',
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html
    };

    await transporter.sendMail(mailOptions);

    // Log the booking (in a real app, you'd save to database)
    console.log('New booking received:', {
      customer: `${bookingData.firstName} ${bookingData.lastName}`,
      service: bookingData.service,
      date: bookingData.preferredDate,
      time: bookingData.preferredTime,
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'Booking request submitted successfully! We will contact you within 24 hours to confirm your appointment.',
      bookingId: `TCB-${Date.now()}` // Simple booking ID
    });

  } catch (error) {
    console.error('Error processing booking:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to submit booking request. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚗 The Car Bath API server running on port ${PORT}`);
  console.log(`📧 Email notifications will be sent to: ${process.env.EMAIL_USER || 'thecarsbath@gmail.com'}`);
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});

export default app;

