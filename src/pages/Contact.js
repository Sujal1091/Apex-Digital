import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="animate-fade-in" style={{ textAlign: 'center' }}>
            <h1 className="contact-title">
              We'd Love to <span className="text-gradient">Hear From You</span>
            </h1>
            <p className="contact-desc">
              Whether you have a question about a product, pricing, or just want to say hello our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-info-section">
        <div className="container contact-grid">
          <div className="glass-card contact-card animate-fade-in">
            <div className="contact-icon-wrapper"><Phone size={28} /></div>
            <h3>Call Us</h3>
            <a href="tel:9515147666" className="contact-value">9515147666</a>
            <p className="contact-note">Mon - Sat, 10 AM to 9 PM</p>
          </div>

          <div className="glass-card contact-card animate-fade-in delay-100">
            <div className="contact-icon-wrapper"><Mail size={28} /></div>
            <h3>Email Us</h3>
            <a href="mailto:Apexdigitalpvtltd2026@gmail.com" className="contact-value">Apexdigitalpvtltd2026@gmail.com</a>
            <p className="contact-note">We reply within 24 hours</p>
          </div>

          <div className="glass-card contact-card animate-fade-in delay-200">
            <div className="contact-icon-wrapper"><MapPin size={28} /></div>
            <h3>Visit Us</h3>
            <p className="contact-value">41, Green City, Eluru Rural, Andhra Pradesh 534001</p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="social-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Follow Us <span className="text-gradient">Online</span></h2>
          <div className="social-cards">
            <a
              href="https://www.facebook.com/share/1D1ENJmZEz/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card social-card animate-fade-in"
            >
              <ExternalLink size={24} />
              <h3>Facebook</h3>
              <p>Follow us for the latest offers and updates</p>
            </a>
            <a
              href="https://www.instagram.com/apexdigitalstores?igsh=aXVtNndsOThmeWR6"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card social-card animate-fade-in delay-100"
            >
              <ExternalLink size={24} />
              <h3>Instagram</h3>
              <p>@apexdigitalstores See our latest arrivals</p>
            </a>
          </div>
        </div>
      </section>

      {/* Map / Store Image */}
      <section className="store-location-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Find <span className="text-gradient">Our Store</span></h2>
          <div className="location-visual">
            <div className="glass-card location-image-card">
              <img src="/store-front.jpeg" alt="Apex Digital Store Location" />
            </div>
            <div className="glass-card location-details-card">
              <h3>Apex Digital Pvt. Ltd.</h3>
              <ul className="location-info-list">
                <li>
                  <MapPin size={18} className="loc-icon" />
                  <span>41, Green City, Eluru Rural, Andhra Pradesh 534001</span>
                </li>
                <li>
                  <Phone size={18} className="loc-icon" />
                  <a href="tel:9515147666">9515147666</a>
                </li>
                <li>
                  <Mail size={18} className="loc-icon" />
                  <a href="mailto:Apexdigitalpvtltd2026@gmail.com">Apexdigitalpvtltd2026@gmail.com</a>
                </li>
              </ul>
              <div className="serving-areas">
                <h4>Serving Areas</h4>
                <div className="area-tags">
                  {['Eluru', 'Bhimavaram', 'Palakollu', 'Narasapuram', 'Machilipatnam', 'Visannapeta'].map((area) => (
                    <span key={area} className="area-tag">{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
