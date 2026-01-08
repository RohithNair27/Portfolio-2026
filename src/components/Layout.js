import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className = '' }) => {
  useEffect(() => {
    // Animation logic
    const selector = "h1, h2, h3, p, ul, ol, li, img, pre, .project-card, blockquote, hr, .post-meta";
    const candidates = Array.from(document.querySelectorAll(selector));

    const topLevelElements = candidates.filter((el) => {
      return !candidates.some((parent) => parent !== el && parent.contains(el));
    });

    topLevelElements.sort((a, b) => {
      const rectA = a.getBoundingClientRect();
      const rectB = b.getBoundingClientRect();
      return rectA.top - rectB.top; 
    });

    topLevelElements.forEach((element, index) => {
      element.classList.add("animate-in");
      element.style.animationDelay = index * 0.1 + "s";
    });
  }, []);

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