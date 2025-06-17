
/**
 * Scroll to a specific section by ID with smooth scrolling
 * @param {string} id - The ID of the element to scroll to
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
};

/**
 * Handle navigation for hash links (like #skills) in a single page app context
 * @param {string} hash - The hash portion of the URL (e.g., "#skills")
 */
export const handleHashNavigation = (hash) => {
  if (!hash) return;
  
  // Remove the # character from the hash
  const id = hash.substring(1);
  
  // Add a small delay to ensure the DOM is ready
  setTimeout(() => {
    scrollToSection(id);
  }, 100);
};
