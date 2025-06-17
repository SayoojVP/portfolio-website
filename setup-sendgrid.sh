#!/bin/bash

# Script to set up SendGrid as an email provider for your portfolio

echo "Setting up SendGrid email provider for your portfolio contact form..."

# Navigate to the server directory
cd "$(dirname "$0")"

# Install SendGrid
echo "Installing SendGrid package..."
npm install @sendgrid/mail

# Create SendGrid implementation file
echo "Creating SendGrid email implementation..."
cat > email-service-sendgrid.js << EOL
// SendGrid email service implementation for portfolio contact form
const sgMail = require('@sendgrid/mail');

// Initialize the email service
const initEmailService = () => {
  // Set API key from environment
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY not found in environment variables');
    return null;
  }
  
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('SendGrid email service initialized');
  return true;
};

// Send an email using SendGrid
const sendEmail = async (to, from, subject, text, html) => {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SendGrid API key not configured');
  }
  
  const msg = {
    to,
    from,
    subject,
    text,
    html
  };
  
  try {
    const response = await sgMail.send(msg);
    return {
      success: true,
      messageId: response[0]?.headers['x-message-id'],
      response
    };
  } catch (error) {
    console.error('Error sending email with SendGrid:', error);
    throw error;
  }
};

module.exports = {
  initEmailService,
  sendEmail
};
EOL

# Update .env with SendGrid configuration
echo "Adding SendGrid configuration to .env..."
if ! grep -q "SENDGRID_API_KEY" .env; then
  cat >> .env << EOL

# SendGrid Configuration
# EMAIL_PROVIDER=sendgrid
# SENDGRID_API_KEY=your_api_key_here
# SENDER_NAME=Sayooj VP
EOL
fi

echo "Creating Formspree alternative implementation..."
cat > formspree-setup.js << EOL
// Formspree integration (client-side only solution)
// 
// Instead of configuring a mail server, you can use Formspree
// to handle form submissions. This is a simpler alternative.

/* 

// 1. Update your Contact.js component like this:
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");
  
  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      
      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  );
}

// 2. Install formspree/react package
// npm install @formspree/react

// 3. Create a form at https://formspree.io/forms/
// 4. Replace YOUR_FORMSPREE_FORM_ID with your form ID

*/
EOL

echo "Setup completed!"
echo ""
echo "Next steps:"
echo "1. Sign up for SendGrid at sendgrid.com and get an API key"
echo "2. Add your SendGrid API key to the .env file"
echo "3. Update server.js to use the SendGrid implementation"
echo "   or consider the Formspree alternative for an even simpler solution"
echo ""
echo "See setup-email.md for detailed instructions on all email options"
