import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header animate-fade-in">
          <h1>Privacy <span className="text-gradient">Policy</span></h1>
          <p className="legal-updated">Last updated: June 2026</p>
        </div>

        <div className="legal-content animate-fade-in">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>At Apex Digital Pvt. Ltd., we value your privacy. When you visit our store or interact with us, we may collect the following information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number, email address, and delivery address when you make a purchase or enquiry.</li>
              <li><strong>Transaction Data:</strong> Details of products purchased, payment method used, and EMI/finance details if applicable.</li>
              <li><strong>Device Information:</strong> IMEI numbers and device details for warranty registration and exchange transactions.</li>
              <li><strong>Communication Data:</strong> Records of your communication with us via phone, email, or social media.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process your purchases and provide after-sales support.</li>
              <li>Register product warranties with the respective brand manufacturers.</li>
              <li>Facilitate EMI and finance applications through our partners (Bajaj, HDB, TVS, IDFC).</li>
              <li>Send you updates about new product launches, offers, and promotions (only with your consent).</li>
              <li>Improve our services and customer experience.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Information Sharing</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul>
              <li><strong>Brand Partners:</strong> For warranty registration (Vivo, OPPO, Realme, Xiaomi, iQOO, Motorola, Samsung, Apple, OnePlus).</li>
              <li><strong>Finance Partners:</strong> For processing EMI applications (Bajaj Finance, HDB Financial Services, TVS Credit, IDFC First Bank).</li>
              <li><strong>Delivery Partners:</strong> For home delivery of products.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure. All payment transactions are processed through secure, encrypted channels. We do not store credit/debit card details on our systems.</p>
          </section>

          <section className="legal-section">
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Opt out of promotional communications at any time.</li>
              <li>Request deletion of your data (subject to legal and warranty obligations).</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Cookies & Website Analytics</h2>
            <p>Our website may use cookies and analytics tools to understand visitor behaviour and improve our online experience. You can control cookie preferences through your browser settings.</p>
          </section>

          <section className="legal-section">
            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Phone:</strong> +91 95151 47666</li>
              <li><strong>Email:</strong> Apexdigitalpvtltd2026@gmail.com</li>
              <li><strong>Address:</strong> 41, Green City, Eluru Rural, Andhra Pradesh 534001</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
