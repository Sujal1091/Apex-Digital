import React from 'react';
import './Legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header animate-fade-in">
          <h1>Terms of <span className="text-gradient">Service</span></h1>
          <p className="legal-updated">Last updated: June 2026</p>
        </div>

        <div className="legal-content animate-fade-in">
          <section className="legal-section">
            <h2>1. General</h2>
            <p>These Terms of Service govern your purchase of products and services from Apex Digital Pvt. Ltd. By making a purchase or using our services, you agree to these terms. Apex Digital operates as an authorized retail partner for multiple smartphone brands across West Godavari and East Godavari districts, Andhra Pradesh.</p>
          </section>

          <section className="legal-section">
            <h2>2. Products & Pricing</h2>
            <ul>
              <li>All products sold at Apex Digital are 100% genuine and sourced directly from authorized brand distributors.</li>
              <li>Prices are subject to change without prior notice and may vary based on offers, promotions, and market conditions.</li>
              <li>Product images on our website and social media are for illustrative purposes. Actual product appearance may vary slightly.</li>
              <li>All prices are inclusive of applicable GST unless stated otherwise.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Payment Terms</h2>
            <ul>
              <li>We accept all major debit and credit cards, UPI, net banking, and cash payments.</li>
              <li>EMI and finance options are available through Bajaj Finance, HDB Financial Services, TVS Credit, and IDFC First Bank, subject to their respective terms and approval criteria.</li>
              <li>EMI processing fees, interest rates, and eligibility are determined by the respective finance partner.</li>
              <li>All payments are final and processed at the time of purchase.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Warranty</h2>
            <ul>
              <li>All smartphones and accessories come with the manufacturer's official warranty as specified by the respective brand.</li>
              <li>Warranty claims must be made through the brand's authorized service centre or through Apex Digital's support team.</li>
              <li>Warranty does not cover physical damage, water damage, unauthorized modifications, or damage caused by third-party accessories.</li>
              <li>Apex Digital is not responsible for warranty disputes between the customer and the manufacturer.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Exchange & Returns</h2>
            <ul>
              <li>Exchange offers are subject to device condition assessment at the time of exchange. The exchange value is determined by Apex Digital based on the device's condition, model, and market value.</li>
              <li>Products once sold are not eligible for return unless they are found to be defective or dead-on-arrival (DOA). DOA claims must be raised within 7 days of purchase.</li>
              <li>Accessories (chargers, earbuds, cases, etc.) are non-returnable once opened.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Home Delivery</h2>
            <ul>
              <li>Home delivery is available across our serving areas: Eluru, Bhimavaram, Palakollu, Narasapuram, Machilipatnam, and Visannapeta.</li>
              <li>Delivery timelines are estimates and may vary depending on location and product availability.</li>
              <li>Risk of loss and damage transfers to the customer upon delivery.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Pre-Bookings</h2>
            <ul>
              <li>Pre-booking amounts are non-refundable unless the product launch is cancelled by the manufacturer.</li>
              <li>Pre-booked products will be delivered on a first-come, first-served basis on launch day.</li>
              <li>Apex Digital reserves the right to limit pre-booking quantities per customer.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Data Transfer Services</h2>
            <p>Apex Digital offers complimentary data transfer services for customers purchasing a new device. While we take utmost care during the process, Apex Digital is not liable for any data loss during the transfer. Customers are advised to maintain their own backups.</p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>Apex Digital Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from the use of products purchased from our store. Our total liability shall not exceed the purchase price of the product in question.</p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law</h2>
            <p>These terms shall be governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Eluru, Andhra Pradesh.</p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Us</h2>
            <p>For any questions or concerns regarding these Terms of Service, please reach out to us:</p>
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

export default TermsOfService;
