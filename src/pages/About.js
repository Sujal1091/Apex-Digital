import React from 'react';
import { Heart, Eye, Star } from 'lucide-react';
import './About.css';

const coreValues = [
  'Customer First', 'Trust', 'Quality', 'Innovation',
  'Integrity', 'Excellence', 'Community', 'Growth'
];

const locations = [
  { name: 'Eluru', address: 'RR peta, Eluru district, Andhra Pradesh' },
  { name: 'Bhimavaram', address: 'Beside Annapurna theatre, West godavari, Andhra Pradesh' },
  { name: 'Palakollu', address: 'main road, west Godavari, Andhra Pradesh' },
  { name: 'Narasapuram', address: 'Steamer road, West godavari, Andhra Pradesh' },
  { name: 'Machilipatnam', address: 'Raja gari centre, krishna district, Andhra Pradesh' },
  { name: 'Visannapeta', address: 'Near bustand, krishna district, Andhra Pradesh' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content animate-fade-in">
            <h1 className="about-title">
              Your Trusted Mobile &amp; Digital Store in <span className="text-gradient">Godavari</span>
            </h1>
            <p className="about-desc">
              Apex Digital offers the latest smartphones, accessories, wearables, and mobile solutions from leading brands. From device selection to setup and support, we deliver a complete technology experience under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Store Images */}
      <section className="about-gallery">
        <div className="container">
          <div className="gallery-grid">
            <div className="glass-card gallery-item">
              <img src="/store-front.jpeg" alt="Apex Digital Store Front" />
            </div>
            <div className="glass-card gallery-item">
              <img src="/store-inside-full.jpeg" alt="Inside Apex Digital" />
            </div>
            <div className="glass-card gallery-item">
              <img src="/inside-store.jpeg" alt="Store Interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container mv-grid">
          <div className="glass-card mv-card animate-fade-in">
            <div className="mv-icon-wrapper"><Heart size={32} /></div>
            <h2>Our Mission</h2>
            <p>To deliver genuine mobile technology, exceptional service, and the best value to every customer.</p>
          </div>
          <div className="glass-card mv-card animate-fade-in delay-200">
            <div className="mv-icon-wrapper"><Eye size={32} /></div>
            <h2>Our Vision</h2>
            <p>To be the most trusted mobile retail brand in Andhra Pradesh.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2 className="section-title animate-fade-in">Our <span className="text-gradient">Core Values</span></h2>
          <div className="values-grid">
            {coreValues.map((value, i) => (
              <div key={i} className="glass-card value-chip animate-fade-in">
                <Star size={16} className="value-star" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Serving Across <span className="text-gradient">Andhra Pradesh</span></h2>
          <p className="section-subtitle animate-fade-in">We serve customers in the following towns across West Godavari and East Godavari districts</p>
          <div className="locations-grid">
            {locations.map((loc, i) => (
              <div key={i} className="glass-card location-card animate-fade-in">
                <span className="location-pin">📍</span>
                <span className="location-name">{loc.name}</span>
                <span className="location-address">{loc.address}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="brand-partners">
        <div className="container">
          <h2 className="section-title animate-fade-in">Premium <span className="text-gradient">Brand Partnerships</span></h2>
          <p className="section-subtitle animate-fade-in">Working with top smartphone manufacturers</p>
          <div className="brands-grid">
            {[
              { name: 'Vivo', img: '/vivo.png' },
              { name: 'OPPO', img: '/oppo.jpeg' },
              { name: 'Realme', img: '/realme.jpeg' },
              { name: 'Xiaomi', img: '/MI.png' },
              { name: 'iQOO', img: '/IQOO.jpeg' },
              { name: 'Motorola', img: '/motorola.png' },
            ].map((brand, i) => (
              <div key={i} className="glass-card brand-card animate-fade-in">
                <img src={brand.img} alt={brand.name} className="brand-logo" />
                <h3>{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
