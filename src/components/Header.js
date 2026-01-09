import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark";
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const ThemeIcon = () => {
    if (isDark) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      );
    }
  };

  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Link to="/" className="site-title">
          Rohith Kizhakekkara (RK)
          <svg 
            style={{ 
              marginLeft: '8px', 
              width: '22px', 
              height: '22px', 
              verticalAlign: 'middle'
            }} 
            viewBox="0 0 48 48"
          >
            <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/>
            <polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/>
          </svg>
        </Link>
        {/* <button
          onClick={() => {
            // Create audio element and play pronunciation
            const audio = new Audio('/assets/name-pronunciation.mp3');
            audio.play().catch(e => console.log('Audio playback failed:', e));
          }}
          style={{
            background: 'none',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '4px 8px',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--card-bg)';
            e.target.style.color = 'var(--text-primary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'var(--text-secondary)';
          }}
          title="Hear pronunciation"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          
        </button> */}
      </div>
      <span className="site-subtitle">
        Masters in Software Engineering at UMD
        <span title="Fear the Turtle"> 🐢</span> (Go Terps!)
      </span>

      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <a 
          href="mailto:rohithk@umd.edu"
          onClick={(e) => {
            // Fallback for systems without email client
            if (!window.confirm('This will open your email client to send an email to rohithk@umd.edu. Continue?')) {
              e.preventDefault();
              // Copy email to clipboard as fallback
              navigator.clipboard.writeText('rohithk@umd.edu').then(() => {
                alert('Email address copied to clipboard: rohithk@umd.edu');
              }).catch(() => {
                alert('Email: rohithk@umd.edu');
              });
            }
          }}
        >
          Contact
        </a>
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginLeft: '10px',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ThemeIcon />
        </button>
      </nav>
    </header>
  );
};

export default Header;