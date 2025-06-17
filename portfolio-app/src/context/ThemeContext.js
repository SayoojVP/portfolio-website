import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user has previously selected theme
  const storedTheme = localStorage.getItem('theme');
  // Default to light theme or stored preference
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  // Update localStorage and apply theme classes when theme changes
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Apply theme class to document body
    document.body.dataset.theme = theme;
  }, [isDarkMode]);
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
