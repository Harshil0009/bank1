import React from 'react';
import './Mix.css'; 
import Banklogo from './Banklogo.png';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section: Logo and Navigation Links */}
      <div className="footer-top">
        <img
          src={Banklogo}
          alt="YourBank Logo"
          className="footer-logo"
        />
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/">Careers</a>
          <a href="/">About</a>
          <a href="/">Security</a>
        </nav>
      </div>

      {/* Middle Section: Contact Information */}
      <div className="footer-middle">
        <div className="contact-item">
          <span>📧</span> hello@skillbridge.com
        </div>
        <div className="contact-item">
          <span>📞</span> +91 91813 23 2309
        </div>
        <div className="contact-item">
          <span>📍</span> Somewhere in the World
        </div>
      </div>

      {/* Bottom Section: Social Media Icons and Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="/" className="icon">🌐</a>
          <a href="/" className="icon">🐦</a>
          <a href="/" className="icon">📘</a>
          <a href="/" className="icon">💼</a>
        </div>
        <p>YourBank © All Rights Reserved</p>
        <div className="footer-terms">
          <a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
