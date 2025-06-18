import { Router, Routes, Route, useLocation } from './utils/iconExports';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

// Components
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './components/Skills';

// Theme Context
import { ThemeProvider } from './context/ThemeContext';
import { handleHashNavigation } from './utils/scrollUtils';

const AppContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

// Component to handle scrolling to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to handle hash navigation
const HashNavigationHandler = () => {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      handleHashNavigation(hash);
    }
  }, [hash]);
  
  return null;
};

function App() {
  // Set dark theme on body element
  useEffect(() => {
    document.body.dataset.theme = 'dark';
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <ScrollToTop />
          <HashNavigationHandler />
          <header className="header" id="header">
            <div className="container">
              <Navbar />
            </div>
          </header>

          <main className="main">
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <Skills />
                </>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
