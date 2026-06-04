import React from 'react';
import { ArrowRight, Star, Shield, Zap, Truck, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { number: '10,000+', label: 'Happy Customers' },
  { number: '10,000+', label: 'Smartphones Sold' },
  { number: '50+', label: 'Product Launches' },
  { number: '98%', label: 'Customer Satisfaction' },
];

const services = [
  { icon: <Smartphone size={28} />, title: 'Smartphones', desc: 'Latest smartphones from top brands with genuine warranty.' },
  { icon: <CreditCard size={28} />, title: 'EMI & Finance', desc: 'Bajaj, HDB, TVS, IDFC easy payment options for every budget.' },
  { icon: <Truck size={28} />, title: 'Home Delivery', desc: 'Fast and secure doorstep delivery across West & East Godavari.' },
  { icon: <Shield size={28} />, title: 'Official Warranty', desc: '100% genuine products with complete manufacturer warranty.' },
  { icon: <Zap size={28} />, title: 'Data Transfer', desc: 'Hassle-free migration from old to new devices.' },
  { icon: <Star size={28} />, title: 'Exchange Offers', desc: 'Upgrade your phone with attractive exchange benefits.' },
];

const trustBadges = [
  '100% Genuine Products',
  'Official Brand Warranty',
  'Secure Payments',
  'Easy EMI Options',
  'Home Delivery Available',
  'Expert Customer Support',
];

const testimonials = [
  { name: 'Ravi Kumar', location: 'Bhimavaram', text: 'Purchased my Vivo smartphone from Apex Digital. The staff explained every feature clearly and helped me choose the best model within my budget. Genuine products and excellent customer support.' },
  { name: 'Sowjanya Reddy', location: 'Bhimavaram', text: 'I compared prices online and was surprised to find better offers at Apex Digital. The buying experience was smooth, and the delivery was on time.' },
  { name: 'Prasad Naidu', location: 'Eluru', text: 'Apex Digital is my go-to mobile store. Whether it\'s smartphones, accessories, or exchange offers, they always provide transparent pricing and honest advice.' },
  { name: 'Harsha Vardhan', location: 'Narasapuram', text: 'I pre-booked my phone and received it on launch day without any hassle. Great service and professional staff.' },
  { name: 'Lakshmi Devi', location: 'Palakollu', text: 'The team helped me transfer all my data from my old phone and set up everything perfectly. Highly recommended for anyone looking for a stress-free mobile purchase.' },
  { name: 'Kiran Kumar', location: 'Tanuku', text: 'Excellent collection of Vivo, Samsung, OPPO, Realme, and Apple devices. Friendly staff and genuine products with warranty.' },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <p className="hero-tag">Your Trusted Mobile & Digital Store in Godavari</p>
            <h1 className="hero-title">
              Experience the Future of <span className="text-gradient">Mobile Technology</span>
            </h1>
            <p className="hero-subtitle">
              Apex Digital offers the latest smartphones, accessories, wearables, and mobile solutions from leading brands. From device selection to setup and support a complete technology experience under one roof.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Visit Us
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in delay-200">
            <div className="hero-image-card">
              <img src="/store-front.jpeg" alt="Apex Digital Store Front" className="hero-image" />
            </div>
            <div className="hero-image-card hero-image-card-overlay">
              <img src="/store-front(2).jpeg" alt="Apex Digital Store" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item animate-fade-in">
              <span className="stat-number text-gradient">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">What We <span className="text-gradient">Offer</span></h2>
          <p className="section-subtitle animate-fade-in">Complete mobile solutions for every need</p>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="glass-card service-card animate-fade-in">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Showcase */}
      <section className="store-showcase">
        <div className="container">
          <h2 className="section-title animate-fade-in">Step Inside <span className="text-gradient">Our Store</span></h2>
          <div className="showcase-grid">
            <div className="glass-card showcase-item showcase-large">
              <img src="/store-inside-full.jpeg" alt="Inside Apex Digital" />
            </div>
            <div className="glass-card showcase-item">
              <img src="/inside-store.jpeg" alt="Apex Digital Displays" />
            </div>
            <div className="glass-card showcase-item">
              <img src="/mobile-display 1.jpeg" alt="Mobile Display" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Why Choose <span className="text-gradient">Apex Digital</span></h2>
          <div className="trust-grid">
            {trustBadges.map((badge, i) => (
              <div key={i} className="trust-badge glass-card animate-fade-in">
                <span className="trust-check">✔️</span>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">What Our <span className="text-gradient">Customers Say</span></h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card testimonial-card animate-fade-in">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-container glass-card">
          <h2>Ready to Find Your Perfect Phone?</h2>
          <p>Visit our store or explore our products online</p>
          <div className="cta-actions">
            <Link to="/products" className="btn-primary">Browse Products <ArrowRight size={20} /></Link>
            <Link to="/contact" className="btn-secondary">Get Directions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
