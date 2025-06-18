import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaExclamationCircle } from '../utils/iconExports';
import { useForm } from 'react-hook-form';

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const ContactContainer = styled.div`
  display: grid;
  row-gap: 3rem;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const ContactContent = styled.div``;
const ContactInfo = styled.div``; // This will be used as a container

const ContactInfoBox = styled.div`
  background-color: var(--container-color);
  border-radius: .75rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  color: var(--title-color);
`;

const ContactInfoSubtitle = styled.span`
  font-size: var(--small-font-size);
  display: block;
  margin-bottom: .75rem;
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: var(--first-color);
  margin-bottom: var(--mb-0-75);
`;

const ContactForm = styled.form`
  background-color: var(--container-color);
  border-radius: .75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContactFormTitle = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  color: var(--title-color);
  margin-bottom: var(--mb-1);
`;

const ContactLabel = styled.label`
  display: block;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-5);
`;

const ContactInputGroup = styled.div`
  margin-bottom: var(--mb-1-5);
  position: relative;
`;

const ContactInput = styled.input`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: .5rem;
  transition: 0.3s;
  
  &:focus {
    box-shadow: 0 0 0 2px var(--first-color-alt);
  }
  
  &.error {
    box-shadow: 0 0 0 2px #ff6b6b;
  }
`;

const ContactTextarea = styled.textarea`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: .5rem;
  resize: none;
  height: 11rem;
  transition: 0.3s;
  
  &:focus {
    box-shadow: 0 0 0 2px var(--first-color-alt);
  }
  
  &.error {
    box-shadow: 0 0 0 2px #ff6b6b;
  }
`;

const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: .5rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: #fff;
  background-color: var(--first-color);
  transition: 0.3s;
  
  svg {
    font-size: 1.1rem;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
  }
  
  &:hover {
    background-color: var(--first-color-alt);
    
    svg {
      transform: translateX(4px);
    }
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: var(--smaller-font-size);
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SubmittedMessage = styled.div`
  background-color: var(--first-color-lighter);
  color: var(--first-color-alt);
  padding: 1.5rem;
  border-radius: .75rem;
  text-align: center;
  font-weight: var(--font-medium);
  margin-top: var(--mb-2);
`;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Initialize react-hook-form
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm({
    mode: 'onBlur', // Validate on blur
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send the data to our server
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        // Clear form
        reset();
        
        // Show success message
        setSubmitted(true);
        
        // If this was a fallback success (message saved but email not sent)
        if (result.fallback) {
          setSubmitError('Your message has been received, but email delivery may be delayed. As a backup, consider emailing me directly at sayoojvp55@gmail.com');
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 8000);
      } else {
        // If server returned an error message, use it
        throw new Error(result.message || 'Failed to submit form');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Check if we have internet connection
      if (!navigator.onLine) {
        setSubmitError('You appear to be offline. Please check your internet connection.');
      } else if (error.message.includes('Failed to fetch')) {
        // Server might be down
        setSubmitError('Unable to connect to the server. Please email me directly at sayoojvp55@gmail.com');
      } else {
        // Use server error or fallback
        setSubmitError(error.message || 'There was an error submitting your message. Please email me directly at sayoojvp55@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection className="section container" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      
      <ContactContainer className="container grid">
        <ContactContent>
          <ContactInfoBox>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactInfoTitle>Call Me</ContactInfoTitle>
            <ContactInfoSubtitle>+91 9496763470</ContactInfoSubtitle>
          </ContactInfoBox>
          
          <ContactInfoBox>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactInfoTitle>Email</ContactInfoTitle>
            <ContactInfoSubtitle>sayoojvp55@gmail.com</ContactInfoSubtitle>
          </ContactInfoBox>
          
          <ContactInfoBox>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactInfoTitle>Location</ContactInfoTitle>
            <ContactInfoSubtitle>Thalassery, Kannur, Kerala, India</ContactInfoSubtitle>
          </ContactInfoBox>
        </ContactContent>
        
        <ContactContent>
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <ContactFormTitle>Write me your concerns</ContactFormTitle>
            
            <ContactInputGroup>
              <ContactLabel htmlFor="name">Name</ContactLabel>
              <ContactInput 
                type="text" 
                id="name"
                placeholder="Name"
                className={errors.name ? 'error' : ''}
                {...register('name', { 
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name should be at least 2 characters'
                  }
                })}
              />
              {errors.name && (
                <ErrorMessage>
                  <FaExclamationCircle /> {errors.name.message}
                </ErrorMessage>
              )}
            </ContactInputGroup>
            
            <ContactInputGroup>
              <ContactLabel htmlFor="email">Email</ContactLabel>
              <ContactInput 
                type="email" 
                id="email"
                placeholder="Your email address"
                className={errors.email ? 'error' : ''}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email'
                  }
                })}
              />
              {errors.email && (
                <ErrorMessage>
                  <FaExclamationCircle /> {errors.email.message}
                </ErrorMessage>
              )}
            </ContactInputGroup>
            
            <ContactInputGroup>
              <ContactLabel htmlFor="subject">Subject</ContactLabel>
              <ContactInput 
                type="text" 
                id="subject"
                placeholder="What is this regarding?"
                className={errors.subject ? 'error' : ''}
                {...register('subject', { 
                  required: 'Subject is required',
                  minLength: {
                    value: 3,
                    message: 'Subject should be at least 3 characters'
                  }
                })}
              />
              {errors.subject && (
                <ErrorMessage>
                  <FaExclamationCircle /> {errors.subject.message}
                </ErrorMessage>
              )}
            </ContactInputGroup>
            
            <ContactInputGroup>
              <ContactLabel htmlFor="message">Message</ContactLabel>
              <ContactTextarea 
                id="message"
                placeholder="Tell me about your project or inquiry"
                className={errors.message ? 'error' : ''}
                {...register('message', { 
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message should be at least 10 characters'
                  }
                })}
              />
              {errors.message && (
                <ErrorMessage>
                  <FaExclamationCircle /> {errors.message.message}
                </ErrorMessage>
              )}
            </ContactInputGroup>
            
            {submitError && (
              <SubmittedMessage style={{ backgroundColor: '#ffe0e0', color: '#ff6b6b' }}>
                {submitError}
              </SubmittedMessage>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <ContactButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <FaPaperPlane />
              </ContactButton>
              
              {submitError && (
                <a 
                  href={`mailto:sayoojvp55@gmail.com?subject=${encodeURIComponent('Website Contact: ' + (document.getElementById('subject')?.value || ''))}&body=${encodeURIComponent('Name: ' + (document.getElementById('name')?.value || '') + '\n\n' + (document.getElementById('message')?.value || ''))}`} 
                  style={{ 
                    marginLeft: '10px', 
                    color: 'var(--first-color)',
                    textDecoration: 'underline',
                    fontSize: 'var(--small-font-size)'
                  }}
                >
                  Send email directly instead
                </a>
              )}
            </div>
            
            {submitted && (
              <SubmittedMessage>
                Thank you! Your message has been sent.
              </SubmittedMessage>
            )}
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
