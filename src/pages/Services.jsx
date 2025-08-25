import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'bi-house-gear',
      title: 'Complete Renovation',
      description: 'Transform your space with our comprehensive renovation services, bringing modern design and functionality to every corner of your home or office.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovation', 
        'Room Extensions',
        'Complete Home Makeovers',
        'Office Renovations',
        'Basement Finishing'
      ],
      price: 'Starting from $5,000',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-tools',
      title: 'Professional Repairs',
      description: 'Expert repair services for all your maintenance needs, from emergency fixes to planned improvements and regular maintenance.',
      features: [
        'Emergency Repairs',
        'Electrical Work',
        'Plumbing Services',
        'Structural Repairs',
        'Drywall Repair',
        'Window & Door Repair'
      ],
      price: 'Starting from $150',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-palette',
      title: 'Premium Painting',
      description: 'Professional painting services with premium materials and expert techniques for stunning, long-lasting results both inside and outside.',
      features: [
        'Interior Painting',
        'Exterior Painting',
        'Decorative Finishes',
        'Color Consultation',
        'Wallpaper Installation',
        'Texture Application'
      ],
      price: 'Starting from $500',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-brush-fill',
      title: 'Whitewashing Services',
      description: 'Traditional and modern whitewashing techniques for fresh, clean, and protective surface treatments with eco-friendly materials.',
      features: [
        'Wall Whitewashing',
        'Ceiling Treatment',
        'Moisture Protection',
        'Eco-friendly Options',
        'Lime Wash Application',
        'Heritage Restoration'
      ],
      price: 'Starting from $300',
      image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-grid-3x3-gap',
      title: 'Ceramic & Tile Work',
      description: 'Expert ceramic and tile installation with precision and artistic flair for beautiful, lasting results in kitchens, bathrooms, and beyond.',
      features: [
        'Floor Tiling',
        'Wall Tiles',
        'Bathroom Renovation',
        'Kitchen Backsplashes',
        'Custom Patterns',
        'Natural Stone Work'
      ],
      price: 'Starting from $800',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-building',
      title: 'General Contracting',
      description: 'Complete project management and contracting services for seamless execution of your vision from concept to completion.',
      features: [
        'Project Management',
        'Permit Assistance',
        'Quality Control',
        'Timeline Management',
        'Budget Planning',
        'Vendor Coordination'
      ],
      price: 'Custom Quote',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-flower1',
      title: 'All Kinds Of Gardening',
      description: 'Complete garden design and maintenance services to create and maintain beautiful outdoor spaces throughout all seasons.',
      features: [
        'Garden Design & Planning',
        'Seasonal Planting',
        'Lawn Care & Maintenance',
        'Tree & Shrub Pruning',
        'Landscape Installation',
        'Garden Cleanup Services'
      ],
      price: 'Starting from $200',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-house-heart',
      title: 'Home Care And Cleaning',
      description: 'Professional home care and deep cleaning services to keep your living space healthy, organized, and sparkling clean.',
      features: [
        'Deep House Cleaning',
        'Regular Maintenance',
        'Move-in/Move-out Cleaning',
        'Post-Construction Cleanup',
        'Window & Carpet Cleaning',
        'Sanitization Services'
      ],
      price: 'Starting from $100',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      icon: 'bi-calendar-check',
      title: 'Monthly Routine Care And Cleaning',
      description: 'Scheduled monthly maintenance and cleaning programs to keep your property in perfect condition year-round.',
      features: [
        'Monthly Deep Cleaning',
        'Preventive Maintenance',
        'HVAC Filter Replacement',
        'Gutter Cleaning',
        'Seasonal Inspections',
        'Priority Service Booking'
      ],
      price: 'Starting from $250/month',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We start with a comprehensive consultation to understand your needs, vision, and budget requirements.'
    },
    {
      step: '2', 
      title: 'Design & Planning',
      description: 'Our team creates detailed plans and designs, with accurate cost estimates and project timelines.'
    },
    {
      step: '3',
      title: 'Material Selection',
      description: 'We help you choose the best materials within your budget, focusing on quality and sustainability.'
    },
    {
      step: '4',
      title: 'Professional Execution',
      description: 'Our skilled craftsmen bring your vision to life with precision, quality, and attention to detail.'
    },
    {
      step: '5',
      title: 'Quality Inspection',
      description: 'Thorough inspection and quality control ensure everything meets our high standards.'
    },
    {
      step: '6',
      title: 'Final Walkthrough',
      description: 'We conduct a final walkthrough with you to ensure complete satisfaction before project completion.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section hero-services" style={{minHeight: '60vh'}}>
        <Container>
          <Row className="align-items-center h-100">
            <Col lg={8} className="mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-4 text-white">Our Services</h1>
              <p className="lead text-white">
                Professional renovation and construction services tailored to your specific needs. 
                From complete renovations to specialized repairs, we've got you covered.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding section-white">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">What We Offer</h2>
              <p className="section-subtitle">
                Comprehensive renovation and repair services with guaranteed quality
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="service-card h-100">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={service.image} 
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="service-icon position-absolute top-0 end-0 m-3">
                      <i className={service.icon}></i>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <h5 className="service-title">{service.title}</h5>
                    <p className="service-description">{service.description}</p>
                    
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="bi bi-check-circle-fill text-dark me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Link to="/contact" className="btn btn-primary w-100">
                        Get Quote <i className="bi bi-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Our Process */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle">
                Simple, transparent steps to transform your space
              </p>
            </Col>
          </Row>
          <Row>
            {process.map((step, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div className="service-card text-center">
                  <div className="service-icon">
                    <span className="fw-bold fs-3">{step.step}</span>
                  </div>
                  <h5 className="service-title">{step.title}</h5>
                  <p className="service-description">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="section-padding section-white">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <h2 className="section-title">Service Areas</h2>
              <p className="section-subtitle">
                We proudly serve residential and commercial clients throughout the region
              </p>
              
              <Row>
                <Col md={6}>
                  <h6 className="text-dark fw-bold mb-3">Residential Services</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-house text-dark me-2"></i>
                      Single Family Homes
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-building text-dark me-2"></i>
                      Apartments & Condos
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-house-door text-dark me-2"></i>
                      Townhouses
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-house-heart text-dark me-2"></i>
                      Vacation Homes
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6 className="text-dark fw-bold mb-3">Commercial Services</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-shop text-dark me-2"></i>
                      Retail Spaces
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-building text-dark me-2"></i>
                      Office Buildings
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-cup text-dark me-2"></i>
                      Restaurants & Cafes
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-hospital text-dark me-2"></i>
                      Medical Facilities
                    </li>
                  </ul>
                </Col>
              </Row>
              
              <div className="mt-4">
                <Link to="/contact" className="btn btn-primary me-3">
                  <i className="bi bi-geo-alt me-2"></i>
                  Check Service Area
                </Link>
                <Link to="/projects" className="btn btn-outline-primary">
                  <i className="bi bi-images me-2"></i>
                  View Our Work
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" 
                alt="Service Areas" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Emergency Services */}
      <section className="section-padding" style={{background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)'}}>
        <Container>
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-4">
                <i className="bi bi-exclamation-triangle me-3"></i>
                Emergency Services Available 24/7
              </h2>
              <p className="lead mb-4">
                Don't let emergency repairs wait! Our emergency response team is available 
                24/7 for urgent repairs and damage control.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="tel:+15551234567" className="btn btn-light btn-lg">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Call Emergency Line
                </a>
                <a href="https://wa.me/15551234567" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp Emergency
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)'}}>
        <Container>
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="lead mb-4">
                Contact us today for a free consultation and detailed quote. 
                Let's discuss how we can bring your renovation dreams to life.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-calendar-check me-2"></i>
                Schedule Free Consultation
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
