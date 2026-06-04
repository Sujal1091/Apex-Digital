import React from 'react';
import { Smartphone, CreditCard, Truck, Shield, Zap, Star, Heart, Watch } from 'lucide-react';
import './Products.css';

const brands = [
  { name: 'Vivo', img: '/vivo.png' },
  { name: 'OPPO', img: '/oppo.jpeg' },
  { name: 'Realme', img: '/realme.jpeg' },
  { name: 'Xiaomi', img: '/MI.png' },
  { name: 'iQOO', img: '/IQOO.jpeg' },
  { name: 'Motorola', img: '/motorola.png' },
];

const categories = [
  { icon: <Smartphone size={32} />, title: 'Smartphones', desc: 'Latest smartphones from top brands with genuine warranty.' },
  { icon: <Heart size={32} />, title: 'Accessories', desc: 'Chargers, earbuds, smartwatches, power banks, and more.' },
  { icon: <Watch size={32} />, title: 'Smart Wearables', desc: 'Smartwatches and fitness devices from leading brands.' },
  { icon: <Zap size={32} />, title: 'Pre-Bookings', desc: 'Reserve the newest smartphones before launch.' },
  { icon: <Star size={32} />, title: 'Exchange Offers', desc: 'Upgrade your phone with attractive exchange benefits.' },
  { icon: <CreditCard size={32} />, title: 'EMI & Finance', desc: 'Bajaj, HDB, TVS, IDFC easy payment options for every budget.' },
  { icon: <Truck size={32} />, title: 'Home Delivery', desc: 'Fast and secure doorstep delivery.' },
  { icon: <Shield size={32} />, title: 'Support Services', desc: 'Device setup, updates, and customer assistance.' },
];

const displayImages = [
  { img: '/mobile-display 1.jpeg', alt: 'Mobile Display Zone 1' },
  { img: '/mobile-display 2.jpeg', alt: 'Mobile Display Zone 2' },
  { img: '/mobile-display 3.jpeg', alt: 'Mobile Display Zone 3' },
  { img: '/mobile display 4.jpeg', alt: 'Mobile Display Zone 4' },
  { img: '/mobile display 5.jpeg', alt: 'Mobile Display Zone 5' },
  { img: '/inside-store.jpeg', alt: 'Store Inside full'}
];

const Products = () => {
  return (
    <div className="products-page">
      {/* Products Hero */}
      <section className="products-hero">
        <div className="container">
          <div className="animate-fade-in" style={{ textAlign: 'center' }}>
            
            <h1 className="products-title">
              Everything You Need, <span className="text-gradient">Under One Roof</span>
            </h1>
            <p className="products-desc">
              From the latest flagship phones to everyday accessories we stock genuine products from all major brands with official warranty and financing options.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Our <span className="text-gradient">Services</span></h2>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <div key={i} className="glass-card category-card animate-fade-in">
                <div className="cat-icon-wrapper">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="products-brands">
        <div className="container">
          <h2 className="section-title animate-fade-in">Brands <span className="text-gradient">We Carry</span></h2>
          <p className="section-subtitle animate-fade-in">Official retailer for all major smartphone manufacturers</p>
          <div className="brands-showcase">
            {brands.map((brand, i) => (
              <div key={i} className="glass-card brand-showcase-card animate-fade-in">
                <img src={brand.img} alt={brand.name} className="brand-showcase-logo" />
                <h3>{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Display Gallery */}
      <section className="display-gallery-section">
        <div className="container">
          <h2 className="section-title animate-fade-in">Experience <span className="text-gradient">In-Store</span></h2>
          <p className="section-subtitle animate-fade-in">Get hands-on with the latest devices in our experience zones</p>
          <div className="display-gallery">
            {displayImages.map((display, i) => (
              <div key={i} className="glass-card display-gallery-item">
                <img src={display.img} alt={display.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="payment-section">
        <div className="container">
          <div className="glass-card payment-banner animate-fade-in">
            <div className="payment-content">
              <h2>Flexible <span className="text-gradient">Payment Options</span></h2>
              <p>All debit &amp; credit cards accepted. EMI available through Bajaj, HDB, TVS, and IDFC finance.</p>
            </div>
            <div className="payment-badges">
              <span className="payment-badge">💳 All Cards Accepted</span>
              <span className="payment-badge">🏦 Bajaj Finance</span>
              <span className="payment-badge">🏦 HDB Finance</span>
              <span className="payment-badge">🏦 TVS Credit</span>
              <span className="payment-badge">🏦 IDFC Finance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
