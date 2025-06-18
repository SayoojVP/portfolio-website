import React, { createContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Always use dark mode
  const isDarkMode = true;
  
  // Apply dark theme when component mounts
  useEffect(() => {
    localStorage.setItem('theme', 'dark');
    
    // Apply theme class to document body
    document.body.dataset.theme = 'dark';
  }, []);
  
  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
