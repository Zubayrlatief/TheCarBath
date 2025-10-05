# 📧 Email Setup Guide for The Car Bath

## Step 1: Enable 2-Factor Authentication on Gmail

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Sign in with thecarsbath@gmail.com
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the steps to enable 2FA

## Step 2: Generate App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. Select "Mail" as the app
4. Click **Generate**
5. **Copy the 16-character password** (it looks like: abcd efgh ijkl mnop)

## Step 3: Configure Backend

1. Open the file: `server/.env`
2. Replace `your_app_password_here` with your 16-character app password:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=thecarsbath@gmail.com
EMAIL_PASS=your_16_character_app_password_here
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Step 4: Start the Backend Server

Open a new terminal/command prompt and run:

```bash
cd server
npm run dev
```

You should see:
```
🚗 The Car Bath API server running on port 3001
📧 Email notifications will be sent to: thecarsbath@gmail.com
```

## Step 5: Test the Booking System

1. Start your frontend (if not already running):
   ```bash
   npm run dev
   ```

2. Go to your website and try submitting a booking
3. Check your email (thecarsbath@gmail.com) for the booking notification

## Troubleshooting

### If you get "Authentication failed" error:
- Make sure you're using the App Password, not your regular Gmail password
- Ensure 2FA is enabled on your Gmail account
- Double-check the 16-character app password in the .env file

### If you get "Connection refused" error:
- Make sure the backend server is running on port 3001
- Check that no other application is using port 3001

### If emails don't arrive:
- Check your spam folder
- Verify the .env file has the correct email settings
- Check the server console for error messages




