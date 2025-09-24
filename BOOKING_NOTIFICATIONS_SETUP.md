# Gmail Notification Setup for Booking System

## 🚀 Quick Setup (Recommended)

### Step 1: Set up Formspree (Immediate Notifications)

1. **Create Formspree Account:**
   - Go to [formspree.io](https://formspree.io)
   - Sign up with your Gmail account
   - Create a new form

2. **Get Your Form ID:**
   - Copy the form ID (looks like: `xpzgqkny`)
   - Replace `YOUR_FORM_ID` in the booking form code with your actual ID

3. **Configure Email Settings:**
   - Set your email as the recipient
   - Enable notifications
   - Set up email templates if desired

### Step 2: Gmail Configuration

1. **Enable Gmail Notifications:**
   - Go to Gmail → Settings → General
   - Enable "Desktop notifications"
   - Set notification frequency to "All"

2. **Create Gmail Filter:**
   - Go to Gmail → Settings → Filters and Blocked Addresses
   - Click "Create a new filter"
   - Set criteria:
     - **From:** `noreply@formspree.io`
     - **Subject contains:** `🔔 NEW BOOKING`
   - Choose actions:
     - Apply label: "🔔 Bookings"
     - Mark as important
     - Never send to spam

## 📧 Alternative Methods

### Method 1: Email Forwarding
1. Set up email forwarding from your business email to Gmail
2. Enable Gmail notifications for forwarded emails

### Method 2: IFTTT/Zapier Automation
1. Create an automation that triggers when booking emails arrive
2. Set up push notifications to your phone

### Method 3: Gmail API Integration (Advanced)
1. Use Gmail API to monitor incoming emails
2. Send push notifications via service workers

## 🔧 Code Implementation

The booking form now includes:

```javascript
// Formspree integration for immediate notifications
const submitToFormspree = async () => {
  const formData = new FormData()
  
  // All form fields are sent
  formData.append('_subject', `🔔 NEW BOOKING: ${serviceName} - ${customerName}`)
  formData.append('_replyto', customerEmail)
  
  // Sends to your configured email immediately
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData
  })
}
```

## 📱 Mobile Notifications

### Gmail App Setup:
1. Download Gmail app on your phone
2. Enable push notifications
3. Set "High priority" notifications for booking emails

### iOS/Android Settings:
- **iOS:** Settings → Notifications → Gmail → Allow Notifications
- **Android:** Settings → Apps → Gmail → Notifications → On

## 🎯 Testing Your Setup

1. **Test the booking form:**
   - Fill out a test booking
   - Submit the form
   - Check if you receive email within 1-2 minutes

2. **Test Gmail notifications:**
   - Send yourself a test email with subject "🔔 NEW BOOKING"
   - Verify you get desktop/mobile notification

## 🔔 Notification Features

- **Instant email delivery** via Formspree
- **Gmail push notifications** on mobile/desktop
- **Important marking** for booking emails
- **Custom labels** for organization
- **Reply-to customer** for easy responses

## 📞 Support

If you need help setting this up:
1. Check Formspree documentation
2. Verify Gmail notification settings
3. Test with a sample booking
4. Contact support if issues persist

---

**Next Steps:**
1. Sign up for Formspree
2. Replace `YOUR_FORM_ID` in the code
3. Configure Gmail filters
4. Test the system
5. Go live with your booking system!
