import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, FaGithub, FaLinkedin, FaTwitter, FaHeart } from '../utils/iconExports';
import { scrollToSection } from '../utils/scrollUtils';

const FooterContainer = styled.footer`
  padding: 2rem 0;
  margin-top: 3rem;
  background-color: var(--container-color);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterTitle = styled.h3`
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-1);
  color: var(--title-color);
`;

const FooterSubtitle = styled.span`
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-2);
  color: var(--text-color);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: var(--mb-2);
`;

const FooterLink = styled(Link)`
  color: var(--title-color);
  font-weight: var(--font-medium);
  text-decoration: none;
  border-bottom: none;
  transition: color 0.3s;
  cursor: pointer;
  
  &:hover {
    color: var(--first-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: var(--mb-2);
`;

const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: var(--title-color);
  border-bottom: none;
  transition: 0.3s;
  
  &:hover {
    color: var(--first-color);
    transform: translateY(-4px);
    opacity: 1;
  }
`;

const Copyright = styled.p`
  font-size: var(--small-font-size);
  color: var(--text-color-light);
  margin-top: var(--mb-2);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  svg {
    color: #ff6b6b;
  }
`;

const Footer = () => {
  const location = useLocation();
  
  const handleLinkClick = (sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      // Navigate to home and then scroll
      // Assuming you have a way to navigate programmatically
      // For example, using useHistory from react-router-dom
      // history.push('/');
      // setTimeout(() => scrollToSection(sectionId), 100);
    }
  };
  
  return (
    <FooterContainer className="footer" data-theme="dark">
      <FooterContent className="container">
        <FooterTitle>Sayooj VP</FooterTitle>
        <FooterSubtitle>Full Stack Developer / Entrepreneur</FooterSubtitle>
        
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/projects">Projects</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLinks>
        
        <SocialLinks>
          <SocialIcon href="https://github.com/SayoojVP" target="_blank" rel="noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/sayoojvp/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://x.com/_sayooj_vp" target="_blank" rel="noreferrer">
            <FaTwitter />
          </SocialIcon>
        </SocialLinks>
        
        <Copyright>
          &copy; {new Date().getFullYear()} SayoojVP. Made with <FaHeart /> in React.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;