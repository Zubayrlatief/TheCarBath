# The Car Bath Backend Setup

## Prerequisites
- Node.js (version 16 or higher)
- Gmail account with App Password enabled

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Email Settings

1. **Enable 2-Factor Authentication** on your Gmail account (thecarsbath@gmail.com)

2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Create Environment File**:
   ```bash
   cp env.example .env
   ```

4. **Update .env file** with your email credentials:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=thecarsbath@gmail.com
   EMAIL_PASS=your_16_character_app_password_here
   
   PORT=3001
   NODE_ENV=development
   
   FRONTEND_URL=http://localhost:5173
   ```

### 3. Start the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3001`

### 4. Test the API

Visit `http://localhost:3001/api/health` to verify the server is running.

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/bookings` - Submit booking request

## Email Notifications

When a booking is submitted:
1. The system validates the form data
2. Sends a formatted email to thecarsbath@gmail.com
3. Returns a success response to the frontend
4. Logs the booking details to the console

## Troubleshooting

### Email Issues
- Ensure 2FA is enabled on Gmail
- Use App Password, not regular password
- Check firewall settings for port 587

### CORS Issues
- Update FRONTEND_URL in .env to match your frontend URL
- Ensure the frontend is running on the specified URL

### Port Issues
- Change PORT in .env if 3001 is already in use
- Update frontend API URL accordingly

