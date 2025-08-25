import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      fallback: "https://via.placeholder.com/800x500/28a745/ffffff?text=Modern+Kitchen+Renovation",
      alt: "Modern Kitchen Renovation",
      title: "Modern Kitchen Renovation"
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      fallback: "https://via.placeholder.com/800x500/20c997/ffffff?text=Living+Room+Interior+Design",
      alt: "Living Room Interior Design",
      title: "Living Room Interior Design"
    },
    {
      src: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      fallback: "https://via.placeholder.com/800x500/5cb85c/ffffff?text=Bedroom+Interior+Design",
      alt: "Bedroom Interior Design",
      title: "Bedroom Interior Design"
    },
    {
      src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      fallback: "https://via.placeholder.com/800x500/155724/ffffff?text=Complete+Home+Renovation",
      alt: "Complete Home Renovation",
      title: "Complete Home Renovation"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: 'bi-check-circle' },
    { number: '150+', label: 'Happy Clients', icon: 'bi-people' },
    { number: '10+', label: 'Years Experience', icon: 'bi-award' },
    { number: '24/7', label: 'Support Available', icon: 'bi-headset' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section hero-home">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <h1 className="hero-title">
                Professional Renovation &
                <span className="d-block text-white">Repair Services</span>
              </h1>
              <p className="hero-subtitle">
                Quality and durability for a comfortable life. We specialize in complete renovations, 
                professional repairs, premium painting, whitewashing, and expert ceramic & tile work.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-light btn-lg me-3 hover-lift pulse-on-hover">
                  <i className="bi bi-telephone me-2"></i>
                  Get Free Quote
                </Link>
                <Link to="/services" className="btn btn-outline-light btn-lg hover-lift">
                  <i className="bi bi-arrow-right me-2"></i>
                  Our Services
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image">
                <i className="bi bi-tools display-1 text-white opacity-75"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Stats Section */}
      <section className="section-padding bg-light-green">
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="stats-card">
                  <div className="stats-icon">
                    <i className={`${stat.icon} text-dark`}></i>
                  </div>
                  <div className="stats-number">{stat.number}</div>
                  <div className="stats-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quick Services Preview */}
      <section className="section-padding section-white">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Our Main Services</h2>
              <p className="section-subtitle">
                Professional renovation and construction services tailored to your needs
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-card hover-lift">
                <div className="service-icon">
                  <i className="bi bi-house-gear"></i>
                </div>
                <h4 className="service-title">Complete Renovation</h4>
                <p className="service-description">
                  Transform your space with our comprehensive renovation services, 
                  bringing modern design and functionality to every corner.
                </p>
                <Link to="/services" className="btn btn-outline-primary hover-lift">
                  Learn More <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-card hover-lift">
                <div className="service-icon">
                  <i className="bi bi-palette"></i>
                </div>
                <h4 className="service-title">Premium Painting</h4>
                <p className="service-description">
                  Professional painting services including whitewashing and decorative finishes 
                  with premium quality materials and expert craftsmanship.
                </p>
                <Link to="/services" className="btn btn-outline-primary hover-lift">
                  Learn More <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-card hover-lift">
                <div className="service-icon">
                  <i className="bi bi-tools"></i>
                </div>
                <h4 className="service-title">Professional Repair</h4>
                <p className="service-description">
                  Quick and reliable repair services for all types of damages and maintenance needs 
                  with guaranteed quality workmanship.
                </p>
                <Link to="/services" className="btn btn-outline-primary hover-lift">
                  Learn More <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding bg-light-green">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-text">
                Get in touch with us today for a free consultation and quote
              </p>
              
              {/* Sliding Thumbnail Gallery */}
              <div className="sliding-gallery mb-4">
                <div className="gallery-container">
                  <div className="gallery-wrapper">
                    <div 
                      className="gallery-slides"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                      }}
                    >
                      {galleryImages.map((image, index) => (
                        <div key={index} className="gallery-slide">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="gallery-image"
                            onError={(e) => {
                              e.target.src = image.fallback;
                            }}
                            loading="lazy"
                          />
                          <div className="gallery-overlay">
                            <h5 className="gallery-title">{image.title}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation buttons */}
                  <button 
                    className="gallery-nav gallery-nav-prev" 
                    onClick={prevSlide}
                    aria-label="Previous image"
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button 
                    className="gallery-nav gallery-nav-next" 
                    onClick={nextSlide}
                    aria-label="Next image"
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="gallery-dots">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        className={`gallery-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="cta-buttons">
                <Link to="/projects" className="btn btn-outline-dark btn-lg">
                  <i className="bi bi-images me-2"></i>
                  View Our Projects
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light-green">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">
                Professional service that exceeds expectations
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h5 className="feature-title">Quality Assurance</h5>
                <p className="feature-description">
                  We guarantee the highest quality standards in all our work with premium materials and expert craftsmanship.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon">
                  <i className="bi bi-clock"></i>
                </div>
                <h5 className="feature-title">Timely Delivery</h5>
                <p className="feature-description">
                  We respect your time and always deliver projects on schedule without compromising on quality.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon">
                  <i className="bi bi-people"></i>
                </div>
                <h5 className="feature-title">Expert Team</h5>
                <p className="feature-description">
                  Our skilled professionals have years of experience in renovation, repair, and construction work.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="feature-box text-center">
                <div className="feature-icon">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <h5 className="feature-title">Fair Pricing</h5>
                <p className="feature-description">
                  Transparent and competitive pricing with no hidden costs. Get the best value for your investment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Preview Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="section-title">Ready to Get Started?</h2>
              <p className="section-subtitle mb-4">
                Contact us today for a free consultation and detailed quote for your project
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  Free Consultation
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  Detailed Quote
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  Quick Response
                </li>
              </ul>
            </Col>
            <Col lg={6} className="text-center">
              <div className="contact-preview">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <i className="bi bi-envelope me-2"></i>
                  Get In Touch
                </Link>
                <p className="mt-3 text-muted">
                  <i className="bi bi-telephone me-2"></i>
                  Call Us: +971 XX XXX XXXX
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
