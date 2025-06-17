# Setting Up Email for Your Portfolio Contact Form

This guide provides multiple solutions to get your contact form working reliably.

## Option 1: Gmail App Password (Most Common)

Gmail requires you to set up an App Password for third-party applications.

### Steps to create an App Password for Gmail

1. Go to your Google Account by visiting [myaccount.google.com](https://myaccount.google.com/)
2. Click on "Security" in the left navigation panel
3. Under "Signing in to Google," make sure 2-Step Verification is enabled
   - If not enabled, you'll need to set it up first
4. After enabling 2-Step Verification, go back to the Security page
5. Look for "App passwords" (you might need to click on "2-Step Verification" again to find it)
6. Generate a new app password:
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter "Portfolio Website" as the name
   - Click "Generate"
7. Google will display a 16-character password. Copy this password.

### Update your .env file

```
EMAIL_SERVICE=gmail
EMAIL_USER=sayoojvp55@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=sayoojvp55@gmail.com
```

Replace `your-16-character-app-password` with the app password you generated.

## Option 2: Use SMTP Configuration (More Reliable)

SMTP configuration often works more reliably than service-based configuration.

### For Gmail SMTP

Uncomment and update the SMTP settings in your `.env` file:

```
# Option 2: SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=sayoojvp55@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=sayoojvp55@gmail.com
```

## Option 3: Use a Free Email API Service (Most Reliable)

### SendGrid (Recommended)

1. Create a free account at [sendgrid.com](https://sendgrid.com/)
2. Get an API key from the SendGrid dashboard
3. Install SendGrid: `npm install @sendgrid/mail`
4. Update your `.env` file:

```
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=your_api_key
RECIPIENT_EMAIL=sayoojvp55@gmail.com
SENDER_EMAIL=sayoojvp55@gmail.com
```

### Implement SendGrid in your server.js

Replace the email sending code in your server.js with:

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// In your API route:
const msg = {
  to: process.env.RECIPIENT_EMAIL,
  from: process.env.SENDER_EMAIL,
  subject: `Portfolio Contact: ${subject}`,
  text: `From: ${name} (${email})\n\nMessage: ${message}`,
  html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Message:</strong> ${message}</p>`,
};

const result = await sgMail.send(msg);
```

## Option 4: Use Formspree (No Backend Required)

If email server setup continues to be problematic:

1. Create a free account at [formspree.io](https://formspree.io/)
2. Create a form and get your form ID
3. Update your React contact form to use Formspree's endpoint instead of your backend

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

## Current Fallback Solution

We've implemented a fallback solution in your app that:

1. Saves all form submissions to files in the server's `contacts` directory
2. Displays a success message even if email sending fails
3. Provides a direct mailto: link for users to contact you directly

This ensures you never miss a contact message, even if there are email delivery issues.

These services often provide better deliverability and more detailed error information.
