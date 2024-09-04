import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Exclusive</h3>
        <p>Get the top trends and exclusive offers straight to your inbox.</p>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <p>FAQs</p>
        <p>Contact Us</p>
      </div>
      <div className="footer-section">
        <h3>Account</h3>
        <p>Sign In</p>
        <p>Order Status</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <p>New Arrivals</p>
        <p>Best Sellers</p>
      </div>
      <div className="footer-section">
        <h3>Download App</h3>
        <img src="qr-code.jpg" alt="QR Code" />
      </div>
    </footer>
  );
}

export default Footer;
