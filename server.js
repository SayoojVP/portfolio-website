const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// For production, serve static files from the React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../portfolio-app/build')));
}

// API routes
app.get('/api/info', (req, res) => {
  // This could be connected to a database in a real application
  const personalInfo = {
    name: 'Sayooj VP',
    title: 'Full Stack Developer / Entrepreneur',
    bio: 'A passionate developer focused on creating beautiful and functional web applications.',
    email: 'sayoojvp55@gmail.com'
  };
  
  res.json(personalInfo);
});

// Create email transporter with a more reliable configuration
let transporter;

// Function to set up the email transporter
const setupEmailTransporter = () => {
  // Try to use SMTP configuration first (more reliable than service-based config)
  if (process.env.SMTP_HOST && process.env.SMTP_PORT) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'sayoojvp55@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false // Helps avoid certificate issues
      }
    });
  }
  
  // Fallback to service-based configuration
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'sayoojvp55@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // Helps avoid certificate issues
    }
  });
};

try {
  transporter = setupEmailTransporter();
  console.log('Email transporter configured successfully');
} catch (error) {
  console.error('Failed to configure email transporter:', error);
}

// Handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }
  
  // Create email content
  const mailOptions = {
    from: process.env.EMAIL_USER || 'sayoojvp55@gmail.com',
    to: process.env.RECIPIENT_EMAIL || 'sayoojvp55@gmail.com',
    replyTo: email, // Allows you to reply directly to the sender
    subject: `Portfolio Contact Form: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #4070f4;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #666; margin-top: 20px; font-size: 12px;">This message was sent from your portfolio website contact form.</p>
      </div>
    `
  };
  
  try {
    // Store the message in a text file as a backup
    const fs = require('fs');
    const contactsDir = path.join(__dirname, 'contacts');
    
    // Create contacts directory if it doesn't exist
    if (!fs.existsSync(contactsDir)) {
      fs.mkdirSync(contactsDir, { recursive: true });
    }
    
    // Save contact message to a file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const contactFile = path.join(contactsDir, `contact-${timestamp}-${name.replace(/\s+/g, '-')}.json`);
    
    fs.writeFileSync(contactFile, JSON.stringify({
      name,
      email,
      subject,
      message,
      date: new Date().toISOString()
    }, null, 2));
    
    console.log(`Contact message saved to ${contactFile}`);
    
    // Try to send email if transporter is configured
    if (transporter) {
      try {
        // Verify transporter connection
        const connectionResult = await transporter.verify();
        
        if (connectionResult) {
          // Send email
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent: ', info.messageId);
          
          // Return success
          return res.status(200).json({ 
            success: true, 
            message: 'Your message has been sent. Thank you!'
          });
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue to fallback option
      }
    }
    
    // If we reached here, email sending failed but we saved the message
    res.status(200).json({ 
      success: true, 
      message: 'Your message has been received. I will get back to you soon!',
      fallback: true
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Provide more specific error message based on the error
    let errorMessage = 'Failed to send message. Please try again later or send an email directly to sayoojvp55@gmail.com';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication error with email provider. Please send an email directly to sayoojvp55@gmail.com';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Connection error. Please send an email directly to sayoojvp55@gmail.com';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      directEmail: 'sayoojvp55@gmail.com'
    });
  }
});

// For production, handle any requests that don't match the ones above
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../portfolio-app/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
