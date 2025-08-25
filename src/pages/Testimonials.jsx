import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Counter component for animated numbers
const CounterNumber = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (endValue - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <h3 className="display-4 fw-bold text-dark" ref={counterRef}>
      {prefix}{count}{suffix}
    </h3>
  );
};

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Homeowner',
      project: 'Complete Kitchen Renovation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b367?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Outstanding work from start to finish! The team transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.',
      fullReview: 'We hired this company for a complete kitchen renovation, and we couldn\'t be happier with the results. From the initial consultation to the final walkthrough, every aspect was handled professionally. The team was punctual, respectful of our home, and delivered exactly what they promised. The quality of workmanship is exceptional, and they stayed within our budget and timeline. I would highly recommend them to anyone looking for renovation services.',
      projectValue: '$25,000',
      location: 'Downtown Condo',
      date: 'January 2024',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1556909010-4ce34dd1d2ba?w=400&h=300&fit=crop'
      }
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Business Owner',
      project: 'Office Space Renovation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Professional, efficient, and delivered on time. Our office renovation was completed without disrupting our business operations. Highly recommended!',
      fullReview: 'As a business owner, I needed a renovation company that could work around our schedule and minimize disruption. This team delivered exactly that. They completed our office renovation in phases, allowing us to continue operations. The final result is a modern, functional workspace that has improved our team\'s productivity and client impressions. Their project management was excellent.',
      projectValue: '$45,000',
      location: 'Business District',
      date: 'March 2024',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop'
      }
    },
    {
      id: 3,
      name: 'Emily Chen',
      title: 'Interior Designer',
      project: 'Luxury Bathroom Remodel',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      testimonial: 'As a designer, I work with many contractors. This team stands out for their craftsmanship and ability to execute complex designs flawlessly.',
      fullReview: 'I\'ve worked with many contractors in my career as an interior designer, and this team is among the best. They understood my vision perfectly and executed it with precision. The bathroom renovation involved complex tile work and custom installations, all done to perfection. Their expertise in both technical execution and design aesthetics is impressive. I will definitely work with them again.',
      projectValue: '$18,000',
      location: 'Suburban Home',
      date: 'February 2024',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop'
      }
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Property Manager',
      project: 'Apartment Complex Repairs',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Reliable, honest, and fair pricing. They\'ve become our go-to contractor for all maintenance and renovation needs across our properties.',
      fullReview: 'Managing multiple properties means I need contractors I can trust completely. This team has proven themselves time and again with quality work, fair pricing, and reliable service. They handle everything from emergency repairs to planned renovations with the same level of professionalism. Their transparency in pricing and timelines has made my job much easier.',
      projectValue: '$75,000',
      location: 'Multiple Properties',
      date: 'Ongoing',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
      }
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      title: 'Homeowner',
      project: 'Basement Finishing',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      testimonial: 'They turned our unused basement into a beautiful family room. The kids love their new play area, and we have the perfect space for entertaining.',
      fullReview: 'Our basement was just storage space until this amazing team transformed it into a functional family area. They handled all the moisture issues, added proper insulation, and created a warm, inviting space. The attention to detail in the finishing work is remarkable. Now it\'s our favorite room in the house! The project was completed on time and within budget.',
      projectValue: '$22,000',
      location: 'Family Home',
      date: 'December 2023',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
      }
    },
    {
      id: 6,
      name: 'Robert Kim',
      title: 'Restaurateur',
      project: 'Restaurant Renovation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Fast, efficient, and understood the unique needs of a restaurant renovation. They worked around our schedule and delivered exceptional results.',
      fullReview: 'Renovating a restaurant while maintaining operations is incredibly challenging, but this team made it look easy. They worked during our closed hours and completed the renovation in record time without compromising quality. The new space has improved our customer experience and operational efficiency. Their understanding of commercial requirements and regulations was evident throughout the project.',
      projectValue: '$35,000',
      location: 'Restaurant District',
      date: 'November 2023',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop'
      }
    }
  ];

  const stats = [
    { number: 98, suffix: '%', label: 'Customer Satisfaction' },
    { number: 150, suffix: '+', label: 'Happy Clients' },
    { number: 49, suffix: '', prefix: '4.', label: 'Average Rating' },
    { number: 100, suffix: '%', label: 'Projects Completed' }
  ];

  const handleShowTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTestimonial(null);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`bi bi-star${index < rating ? '-fill' : ''} text-warning`}
      ></i>
    ));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section hero-testimonials" style={{minHeight: '60vh'}}>
        <Container>
          <Row className="align-items-center h-100">
            <Col lg={8} className="mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-4 text-white">Client Testimonials</h1>
              <p className="lead text-white">
                Don't just take our word for it. Here's what our satisfied clients say about 
                our renovation and repair services.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding section-white">
        <Container>
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="stat-card">
                  <CounterNumber 
                    end={stat.number} 
                    suffix={stat.suffix || ''} 
                    prefix={stat.prefix || ''} 
                  />
                  <p className="text-muted">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Real reviews from real clients who experienced our exceptional service
              </p>
            </Col>
          </Row>

          <Row>
            {testimonials.map((testimonial) => (
              <Col lg={4} md={6} className="mb-4" key={testimonial.id}>
                <Card className="testimonial-card h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="testimonial-header mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="testimonial-avatar me-3"
                          style={{
                            width: '60px', 
                            height: '60px', 
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                        />
                        <div>
                          <h6 className="mb-0">{testimonial.name}</h6>
                          <small className="text-muted">{testimonial.title}</small>
                        </div>
                      </div>
                      <div className="rating mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    <blockquote className="blockquote mb-3">
                      <p className="mb-0">"{testimonial.testimonial}"</p>
                    </blockquote>

                    <div className="testimonial-meta mb-3">
                      <Badge bg="success" className="mb-2">
                        {testimonial.project}
                      </Badge>
                      <br />
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {testimonial.location}
                      </small>
                      <br />
                      <small className="text-muted">
                        <i className="bi bi-calendar me-1"></i>
                        {testimonial.date}
                      </small>
                    </div>

                    <div className="mt-auto">
                      <Button 
                        variant="outline-primary" 
                        size="sm"
                        onClick={() => handleShowTestimonial(testimonial)}
                      >
                        Read Full Review
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonial Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedTestimonial && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Client Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={4} className="text-center mb-3">
                  <img 
                    src={selectedTestimonial.image} 
                    alt={selectedTestimonial.name}
                    className="img-fluid rounded-circle mb-3"
                    style={{width: '120px', height: '120px', objectFit: 'cover'}}
                  />
                  <h5>{selectedTestimonial.name}</h5>
                  <p className="text-muted">{selectedTestimonial.title}</p>
                  <div className="rating mb-2">
                    {renderStars(selectedTestimonial.rating)}
                  </div>
                </Col>
                <Col md={8}>
                  <h6 className="text-dark mb-3">Project Details</h6>
                  <ul className="list-unstyled mb-3">
                    <li><strong>Project:</strong> {selectedTestimonial.project}</li>
                    <li><strong>Location:</strong> {selectedTestimonial.location}</li>
                    <li><strong>Completed:</strong> {selectedTestimonial.date}</li>
                  </ul>
                  
                  <h6 className="text-dark mb-3">Full Review</h6>
                  <p>{selectedTestimonial.fullReview}</p>
                </Col>
              </Row>
              
              {selectedTestimonial.beforeAfter && (
                <>
                  <hr />
                  <h6 className="text-dark mb-3">Before & After</h6>
                  <Row>
                    <Col md={6}>
                      <div className="text-center">
                        <h6>Before</h6>
                        <img 
                          src={selectedTestimonial.beforeAfter.before}
                          alt="Before"
                          className="img-fluid rounded"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="text-center">
                        <h6>After</h6>
                        <img 
                          src={selectedTestimonial.beforeAfter.after}
                          alt="After"
                          className="img-fluid rounded"
                        />
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Review Form CTA */}
      <section className="section-padding section-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">Share Your Experience</h2>
              <p className="section-subtitle mb-4">
                Are you a past client? We'd love to hear about your experience and 
                share your story with future clients.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a 
                  href="https://www.google.com/search?q=your+business+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="bi bi-google me-2"></i>
                  Leave Google Review
                </a>
                <Link to="/contact" className="btn btn-outline-primary">
                  <i className="bi bi-envelope me-2"></i>
                  Contact Us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-4">
              <h2 className="section-title">Why Clients Trust Us</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="text-center mb-4">
              <div className="trust-indicator">
                <i className="bi bi-shield-check display-4 text-dark mb-3"></i>
                <h5>Licensed & Insured</h5>
                <p className="text-muted">Fully licensed and insured for your peace of mind</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center mb-4">
              <div className="trust-indicator">
                <i className="bi bi-award display-4 text-dark mb-3"></i>
                <h5>Quality Guarantee</h5>
                <p className="text-muted">We stand behind our work with comprehensive warranties</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center mb-4">
              <div className="trust-indicator">
                <i className="bi bi-clock display-4 text-dark mb-3"></i>
                <h5>On-Time Delivery</h5>
                <p className="text-muted">Projects completed on schedule, every time</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center mb-4">
              <div className="trust-indicator">
                <i className="bi bi-chat-dots display-4 text-dark mb-3"></i>
                <h5>Clear Communication</h5>
                <p className="text-muted">Regular updates and transparent communication</p>
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
                Join Our Happy Clients
              </h2>
              <p className="lead mb-4">
                Experience the same exceptional service and quality that our clients rave about. 
                Contact us today for your free consultation.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-calendar-check me-2"></i>
                Get Your Free Quote
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
