import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaExclamationCircle } from 'react-icons/fa';

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

const ContactInfo = styled.div`
  display: flex;
  margin-bottom: var(--mb-2);
  align-items: center;
`;

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

// REPLACE YOUR_FORMSPREE_FORM_ID with the actual form ID from formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_FORM_ID";

const ContactFormspree = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting your form. Please try again or email me directly.');
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
            <ContactInfoSubtitle>New York, NY - USA</ContactInfoSubtitle>
          </ContactInfoBox>
        </ContactContent>
        
        <ContactContent>
          {!submitted ? (
            <ContactForm onSubmit={handleSubmit}>
              <ContactFormTitle>Write me your concerns</ContactFormTitle>
              
              <ContactInputGroup>
                <ContactLabel htmlFor="name">Name</ContactLabel>
                <ContactInput 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </ContactInputGroup>
              
              <ContactInputGroup>
                <ContactLabel htmlFor="email">Email</ContactLabel>
                <ContactInput 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </ContactInputGroup>
              
              <ContactInputGroup>
                <ContactLabel htmlFor="subject">Subject</ContactLabel>
                <ContactInput 
                  type="text" 
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  required
                />
              </ContactInputGroup>
              
              <ContactInputGroup>
                <ContactLabel htmlFor="message">Message</ContactLabel>
                <ContactTextarea 
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry"
                  required
                />
              </ContactInputGroup>
              
              <ContactButton type="submit">
                Send Message <FaPaperPlane />
              </ContactButton>
            </ContactForm>
          ) : (
            <SubmittedMessage>
              Thank you! Your message has been sent.
            </SubmittedMessage>
          )}
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactFormspree;
