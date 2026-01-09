import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className = '' }) => {
  useEffect(() => {
    // Skip animation for projects page as it uses inline CSS animations
    if (className.includes('projects-page')) {
      return;
    }

    // Simple animation logic for other pages - only animate main sections
    const elements = document.querySelectorAll('h1, h2, p:not(.logo-box p), ul:not(.skills-list), blockquote, .post-list');
    
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
      element.classList.add('animate-in');
    });
  }, [className]);

  return (
    <div className={`container ${className}`}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;