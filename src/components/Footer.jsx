import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5>
              <i className="bi bi-house-heart me-2"></i>
              RenovationPro
            </h5>
            <p className="mb-3">
              Your trusted partner for all renovation, repair, painting, whitewashing, 
              and tiling needs. Quality workmanship guaranteed with eco-friendly solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="/services">Complete Renovation</a></li>
              <li><a href="/services">Professional Repairs</a></li>
              <li><a href="/services">Premium Painting</a></li>
              <li><a href="/services">Whitewashing</a></li>
              <li><a href="/services">Tile Work</a></li>
              <li><a href="/services">General Contracting</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Our Projects</a></li>
              <li><a href="/testimonials">Customer Reviews</a></li>
              <li><a href="/contact">Get Free Quote</a></li>
              <li><a href="#">Emergency Service</a></li>
              <li><a href="#">Insurance Claims</a></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <h5>Contact Info</h5>
            <div className="contact-details">
              <div className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:info@renovationpro.com">info@renovationpro.com</a>
              </div>
              <div className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="mb-2">
                <i className="bi bi-whatsapp me-2"></i>
                <a href="https://wa.me/15551234567">WhatsApp Chat</a>
              </div>
              <div className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                <span>123 Construction St, City, State 12345</span>
              </div>
              <div className="mb-2">
                <i className="bi bi-clock me-2"></i>
                <span>Mon-Sat: 9AM-6PM | Sun: Closed</span>
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" style={{borderColor: 'rgba(255,255,255,0.2)'}} />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-muted">
              © 2025 RenovationPro. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex gap-3 justify-content-md-end justify-content-start mt-3 mt-md-0">
              <a href="#" className="text-muted text-decoration-none">Privacy Policy</a>
              <a href="#" className="text-muted text-decoration-none">Terms of Service</a>
              <a href="#" className="text-muted text-decoration-none">Sitemap</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
