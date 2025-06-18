import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBriefcase, FaHome, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import { scrollToSection } from '../utils/scrollUtils';

const NavbarContainer = styled.nav`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
`;

// Theme button removed - using dark mode only

const Logo = styled(Link)`
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  font-size: 1.25rem;
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--first-color);
  }
`;

const NavList = styled.ul`
  display: flex;
  column-gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-weight: var(--font-medium);
  color: var(--title-color);
  text-decoration: none;
  border-bottom: none;
  transition: color 0.3s;
  position: relative;
  
  &:hover {
    color: var(--first-color);
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--first-color);
    transition: width 0.3s;
  }
`;

const Navbar = () => {
  
  const handleLinkClick = (to) => {
    if (to.startsWith('#')) {
      // Scroll to section
      scrollToSection(to);
    } else {
      // Regular navigation
      window.scrollTo(0, 0);
    }
  };
  
  return (
    <NavbarContainer className="nav container">
      <Logo to="/">Sayooj VP</Logo>
      
      <NavActions>
        <NavList>
          <NavItem>
            <NavLink 
              to="/"
              onClick={() => handleLinkClick('/')}
            >
              <FaHome /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/projects"
              onClick={() => handleLinkClick('/projects')}
            >
              <FaBriefcase /> Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              to="/contact"
              onClick={() => handleLinkClick('/contact')}
            >
              <FaEnvelope /> Contact
            </NavLink>
          </NavItem>
        </NavList>
      </NavActions>
    </NavbarContainer>
  );
};

export default Navbar;
