import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop&q=95",
      fallback: "https://via.placeholder.com/1200x800/28a745/ffffff?text=Professional+Tile+Installation",
      alt: "Professional Man Installing Ceramic Tiles",
      title: "Professional Tile Installation"
    },
    {
      src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop&q=95",
      fallback: "https://via.placeholder.com/1200x800/20c997/ffffff?text=Expert+Wall+Painting",
      alt: "Expert Man Painting Interior Walls",
      title: "Expert Wall Painting Services"
    },
    {
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop&q=95",
      fallback: "https://via.placeholder.com/1200x800/5cb85c/ffffff?text=Professional+House+Cleaning",
      alt: "Professional Man Cleaning Services",
      title: "Professional House Cleaning"
    },
    {
      src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=800&fit=crop&q=95",
      fallback: "https://via.placeholder.com/1200x800/6c757d/ffffff?text=Deep+Cleaning+Services",
      alt: "Man Providing Deep Cleaning Services",
      title: "Deep Cleaning Services"
    }
  ];

  // Auto-swap images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
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
                professional repairs, premium painting, whitewashing, expert ceramic & tile work, 
                and all kinds of gardening, home care and cleaning, plus monthly routine care and cleaning services.
              </p>
              <div className="hero-buttons mt-4">
                <Link to="/contact" className="btn btn-light btn-lg me-4 mb-3 hover-lift pulse-on-hover">
                  <i className="bi bi-telephone me-2"></i>
                  Get Free Quote
                </Link>
                <Link to="/services" className="btn btn-outline-light btn-lg mb-3 hover-lift">
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
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-card hover-lift">
                <div className="service-icon">
                  <i className="bi bi-flower1"></i>
                </div>
                <h4 className="service-title">All Kinds Of Gardening</h4>
                <p className="service-description">
                  Complete gardening services including landscape design, plant care, 
                  lawn maintenance, and seasonal garden preparation for beautiful outdoor spaces.
                </p>
                <Link to="/services" className="btn btn-outline-primary hover-lift">
                  Learn More <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-card hover-lift">
                <div className="service-icon">
                  <i className="bi bi-house-heart"></i>
                </div>
                <h4 className="service-title">Home Care And Cleaning</h4>
                <p className="service-description">
                  Professional home care and deep cleaning services to maintain a 
                  healthy and spotless living environment for you and your family.
                </p>
                <Link to="/services" className="btn btn-outline-primary hover-lift">
                  Learn More <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="service-card hover-lift">
                <div className="service-icon">
                  <i className="bi bi-calendar-check"></i>
                </div>
                <h4 className="service-title">Monthly Routine Care And Cleaning</h4>
                <p className="service-description">
                  Regular monthly maintenance and cleaning packages to keep your home 
                  in perfect condition year-round with scheduled professional care.
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
              
              {/* Center-Focused Project Gallery */}
              <div className="center-gallery mb-4">
                {/* Desktop: Main center image with side thumbnails */}
                <div className="d-none d-lg-block">
                  <Row className="align-items-center">
                    <Col lg={2} className="text-end">
                      <div className="side-thumbnails">
                        {galleryImages.map((image, index) => (
                          <div 
                            key={`left-${index}`}
                            className={`thumbnail-card mb-2 ${index === (currentImageIndex - 1 + galleryImages.length) % galleryImages.length ? 'active' : ''}`}
                          >
                            <img 
                              src={image.src}
                              alt={image.alt}
                              className="thumbnail-image"
                              onError={(e) => {
                                e.target.src = image.fallback;
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="main-image-container">
                        <img 
                          src={galleryImages[currentImageIndex].src}
                          alt={galleryImages[currentImageIndex].alt}
                          className="main-gallery-image img-fluid rounded shadow-lg"
                          onError={(e) => {
                            e.target.src = galleryImages[currentImageIndex].fallback;
                          }}
                        />
                        <div className="main-image-overlay">
                          <h4 className="main-image-title">{galleryImages[currentImageIndex].title}</h4>
                        </div>
                        <div className="hover-text-overlay">
                          {galleryImages[currentImageIndex].type === 'tile' && (
                            <>
                              <h5>Professional Tile Installation</h5>
                              <p>Expert ceramic and porcelain tile installation for bathrooms, kitchens, and floors. Precision cutting, leveling, and grouting with attention to detail.</p>
                              <div className="feature-badges">
                                <span className="badge">✓ Professional</span>
                                <span className="badge">✓ Quality Guaranteed</span>
                                <span className="badge">✓ Experienced Team</span>
                              </div>
                            </>
                          )}
                          {galleryImages[currentImageIndex].type === 'painting' && (
                            <>
                              <h5>Expert Wall Painting Services</h5>
                              <p>Premium interior and exterior painting using high-quality paints and professional techniques. Surface preparation, priming, and flawless finish application.</p>
                              <div className="feature-badges">
                                <span className="badge">✓ Professional</span>
                                <span className="badge">✓ Quality Materials</span>
                                <span className="badge">✓ Clean Finish</span>
                              </div>
                            </>
                          )}
                          {galleryImages[currentImageIndex].type === 'cleaning' && (
                            <>
                              <h5>Professional House Cleaning</h5>
                              <p>Comprehensive residential cleaning services including dusting, vacuuming, mopping, and sanitizing. Regular maintenance and deep cleaning options available.</p>
                              <div className="feature-badges">
                                <span className="badge">✓ Eco-Friendly</span>
                                <span className="badge">✓ Reliable Service</span>
                                <span className="badge">✓ Experienced Staff</span>
                              </div>
                            </>
                          )}
                          {galleryImages[currentImageIndex].type === 'deep-cleaning' && (
                            <>
                              <h5>Deep Cleaning Services</h5>
                              <p>Thorough deep cleaning for move-in/out, post-construction, and seasonal cleaning. Every corner, appliance, and surface cleaned to perfection.</p>
                              <div className="feature-badges">
                                <span className="badge">✓ Thorough</span>
                                <span className="badge">✓ Detail-Oriented</span>
                                <span className="badge">✓ Satisfaction Guaranteed</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className="side-thumbnails">
                        {galleryImages.map((image, index) => (
                          <div 
                            key={`right-${index}`}
                            className={`thumbnail-card mb-2 ${index === (currentImageIndex + 1) % galleryImages.length ? 'active' : ''}`}
                          >
                            <img 
                              src={image.src}
                              alt={image.alt}
                              className="thumbnail-image"
                              onError={(e) => {
                                e.target.src = image.fallback;
                              }}
                            />
                            <div className="thumbnail-hover-text">
                              {image.type === 'tile' && (
                                <>
                                  <h6>Tile Installation</h6>
                                  <p>Professional ceramic & porcelain tile work</p>
                                </>
                              )}
                              {image.type === 'painting' && (
                                <>
                                  <h6>Wall Painting</h6>
                                  <p>Interior & exterior painting services</p>
                                </>
                              )}
                              {image.type === 'cleaning' && (
                                <>
                                  <h6>House Cleaning</h6>
                                  <p>Regular residential cleaning services</p>
                                </>
                              )}
                              {image.type === 'deep-cleaning' && (
                                <>
                                  <h6>Deep Cleaning</h6>
                                  <p>Thorough move-in/out cleaning</p>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* Mobile: Single shuffling image */}
                <div className="d-lg-none">
                  <div className="mobile-gallery">
                    <img 
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].alt}
                      className="mobile-gallery-image img-fluid rounded shadow"
                      onError={(e) => {
                        e.target.src = galleryImages[currentImageIndex].fallback;
                      }}
                    />
                    <div className="mobile-image-overlay">
                      <h5 className="mobile-image-title">{galleryImages[currentImageIndex].title}</h5>
                    </div>
                    <div className="mobile-hover-text-overlay">
                      {galleryImages[currentImageIndex].type === 'tile' && (
                        <>
                          <h6>Professional Tile Installation</h6>
                          <p>Expert ceramic and porcelain tile installation for all surfaces with precision and quality craftsmanship.</p>
                          <div className="feature-badges">
                            <span className="badge">Professional</span>
                            <span className="badge">Quality Guaranteed</span>
                          </div>
                        </>
                      )}
                      {galleryImages[currentImageIndex].type === 'painting' && (
                        <>
                          <h6>Expert Wall Painting</h6>
                          <p>Professional interior and exterior painting services using premium paints and expert application techniques.</p>
                          <div className="feature-badges">
                            <span className="badge">Professional</span>
                            <span className="badge">Quality Materials</span>
                          </div>
                        </>
                      )}
                      {galleryImages[currentImageIndex].type === 'cleaning' && (
                        <>
                          <h6>Professional House Cleaning</h6>
                          <p>Comprehensive residential cleaning services with eco-friendly products and experienced cleaning staff.</p>
                          <div className="feature-badges">
                            <span className="badge">Eco-Friendly</span>
                            <span className="badge">Experienced Team</span>
                          </div>
                        </>
                      )}
                      {galleryImages[currentImageIndex].type === 'deep-cleaning' && (
                        <>
                          <h6>Deep Cleaning Services</h6>
                          <p>Thorough deep cleaning for move-in/out and post-construction with attention to every detail.</p>
                          <div className="feature-badges">
                            <span className="badge">Thorough</span>
                            <span className="badge">Detail-Oriented</span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="mobile-dots mt-3">
                      {galleryImages.map((_, index) => (
                        <span 
                          key={index}
                          className={`mobile-dot ${index === currentImageIndex ? 'active' : ''}`}
                        ></span>
                      ))}
                    </div>
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
                <Link to="/contact" className="btn btn-primary btn-lg mb-3">
                  <i className="bi bi-envelope me-2"></i>
                  Get In Touch
                </Link>
                <div className="contact-buttons d-flex gap-2 justify-content-center">
                  <a href="https://wa.me/905488893365" className="btn btn-success" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp me-2"></i>
                    WhatsApp
                  </a>
                  <a href="tel:+905488893365" className="btn btn-outline-success">
                    <i className="bi bi-telephone me-2"></i>
                    Call Us
                  </a>
                </div>
                <p className="mt-2 text-muted small">+905488893365</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
