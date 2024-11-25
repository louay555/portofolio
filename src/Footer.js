import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <a className="footer-logo" href="#">LOGO</a> */}
        <div className="footer-right">
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="footer-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" />
            </a>
          </div>
          <p className="footer-copyright">
            --Copyrights 2024-- All rights reserved by Louay Al Aliwi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
