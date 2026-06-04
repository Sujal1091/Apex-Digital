import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-section">
          <div className="footer-brand">
            <img src="/logo.jpeg" alt="Apex Digital Logo" className="footer-logo-img" />
            <span className="logo-text-main">Apex Digital</span>
          </div>
          <p className="footer-desc">
            Your trusted mobile &amp; digital store in Godavari. Genuine smartphones, accessories, and complete mobile solutions under one roof.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1D1ENJmZEz/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <ExternalLink size={16} />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/apexdigitalstores?igsh=aXVtNndsOThmeWR6" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <ExternalLink size={16} />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-section">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-links footer-contact">
            <li>
              <Phone size={16} className="footer-icon" />
              <a href="tel:9515147666">+91 95151 47666</a>
            </li>
            <li>
              <Mail size={16} className="footer-icon" />
              <a href="mailto:Apexdigitalpvtltd2026@gmail.com">Apexdigitalpvtltd2026@gmail.com</a>
            </li>
            <li>
              <MapPin size={16} className="footer-icon" />
              <span>41, Green City, Eluru Rural, Andhra Pradesh 534001</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Apex Digital Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
