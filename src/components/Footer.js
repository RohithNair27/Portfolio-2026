import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>&copy; {getCurrentYear()} Rohith Kizhakekkara. All rights reserved.</footer>
  );
};

export default Footer;