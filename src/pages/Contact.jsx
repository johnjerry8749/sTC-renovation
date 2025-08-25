import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    address: '',
    preferredContact: 'email'
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const services = [
    'Complete Renovation',
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Painting Services',
    'Whitewashing',
    'Ceramic & Tile Work',
    'Emergency Repairs',
    'General Contracting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000+',
    'Not Sure'
  ];

  const timelineOptions = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
      return;
    }

    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    setAlertMessage('Thank you for your inquiry! We will contact you within 24 hours.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
      address: '',
      preferredContact: 'email'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section hero-contact" style={{minHeight: '60vh'}}>
        <Container>
          <Row className="align-items-center h-100">
            <Col lg={8} className="mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead">
                Ready to transform your space? Get in touch for a free consultation 
                and detailed quote tailored to your needs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding section-white">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Multiple ways to reach us - choose what's most convenient for you
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="contact-card text-center h-100">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="bi bi-telephone display-4 text-dark"></i>
                  </div>
                  <h5>Call Us</h5>
                  <p className="text-muted mb-3">Speak directly with our team</p>
                  <a href="tel:+15551234567" className="btn btn-outline-success">
                    (555) 123-4567
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="contact-card text-center h-100">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="bi bi-whatsapp display-4 text-dark"></i>
                  </div>
                  <h5>WhatsApp</h5>
                  <p className="text-muted mb-3">Quick messaging and photos</p>
                  <a href="https://wa.me/15551234567" className="btn btn-outline-success">
                    Message Us
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="contact-card text-center h-100">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="bi bi-envelope display-4 text-dark"></i>
                  </div>
                  <h5>Email Us</h5>
                  <p className="text-muted mb-3">Detailed project discussions</p>
                  <a href="mailto:info@renovationcompany.com" className="btn btn-outline-success">
                    Send Email
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="contact-card text-center h-100">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="bi bi-exclamation-triangle display-4 text-danger"></i>
                  </div>
                  <h5>Emergency</h5>
                  <p className="text-muted mb-3">24/7 urgent repairs</p>
                  <a href="tel:+15551234999" className="btn btn-outline-danger">
                    Emergency Line
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={8} className="mb-4">
              <Card className="contact-form-card">
                <Card.Header className="bg-dark text-white">
                  <h4 className="mb-0">
                    <i className="bi bi-form me-2"></i>
                    Request Free Consultation
                  </h4>
                </Card.Header>
                <Card.Body>
                  {showAlert && (
                    <Alert 
                      variant={alertMessage.includes('Thank you') ? 'success' : 'danger'}
                      onClose={() => setShowAlert(false)} 
                      dismissible
                    >
                      {alertMessage}
                    </Alert>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number *</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(555) 123-4567"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Preferred Contact Method</Form.Label>
                          <Form.Select
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleInputChange}
                          >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="whatsapp">WhatsApp</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Service Needed</Form.Label>
                          <Form.Select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Project Type</Form.Label>
                          <Form.Select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                          >
                            <option value="">Select project type</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="emergency">Emergency Repair</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Budget Range</Form.Label>
                          <Form.Select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>{range}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Timeline</Form.Label>
                          <Form.Select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option, index) => (
                              <option key={index} value={option}>{option}</option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Project Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter project address (optional)"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Project Description *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your project in detail..."
                        required
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="success" size="lg" type="submit">
                        <i className="bi bi-send me-2"></i>
                        Send Request
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              {/* Business Hours */}
              <Card className="mb-4">
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">
                    <i className="bi bi-clock me-2"></i>
                    Business Hours
                  </h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex justify-content-between mb-2">
                      <span>Monday - Friday:</span>
                      <span>7:00 AM - 6:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between mb-2">
                      <span>Saturday:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between mb-2">
                      <span>Sunday:</span>
                      <span>Emergency Only</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Emergency:</span>
                      <span className="text-dark">24/7</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              {/* Service Areas */}
              <Card className="mb-4">
                <Card.Header className="bg-info text-white">
                  <h5 className="mb-0">
                    <i className="bi bi-geo-alt me-2"></i>
                    Service Areas
                  </h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-dark me-2"></i>
                      Downtown Area
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-dark me-2"></i>
                      Suburban Districts
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-dark me-2"></i>
                      Business District
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle text-dark me-2"></i>
                      Historic District
                    </li>
                    <li>
                      <i className="bi bi-check-circle text-dark me-2"></i>
                      Surrounding Areas
                    </li>
                  </ul>
                  <hr />
                  <small className="text-muted">
                    <i className="bi bi-info-circle me-1"></i>
                    Contact us to confirm service availability in your area
                  </small>
                </Card.Body>
              </Card>

              {/* Quick Facts */}
              <Card>
                <Card.Header className="bg-dark text-white">
                  <h5 className="mb-0">
                    <i className="bi bi-award me-2"></i>
                    Why Choose Us
                  </h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <i className="bi bi-shield-check text-dark me-2"></i>
                      Licensed & Insured
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-star text-warning me-2"></i>
                      4.9/5 Customer Rating
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-clock text-info me-2"></i>
                      24/7 Emergency Service
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-currency-dollar text-dark me-2"></i>
                      Free Estimates
                    </li>
                    <li>
                      <i className="bi bi-award text-primary me-2"></i>
                      Quality Guarantee
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding section-white">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title text-center mb-4">Find Us</h2>
              <div className="map-placeholder bg-light rounded p-5 text-center">
                <i className="bi bi-geo-alt display-4 text-dark mb-3"></i>
                <h4>Interactive Map Coming Soon</h4>
                <p className="text-muted">
                  We serve the entire metropolitan area and surrounding regions. 
                  Contact us to confirm service availability in your specific location.
                </p>
                <div className="mt-3">
                  <strong>Main Office Address:</strong><br />
                  123 Renovation Street<br />
                  City, State 12345
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
              <div className="faq-section">
                <Card className="mb-3">
                  <Card.Header>
                    <h6 className="mb-0">How quickly can you start my project?</h6>
                  </Card.Header>
                  <Card.Body>
                    Most projects can begin within 1-2 weeks of approval. Emergency repairs 
                    are available 24/7 and can often be addressed the same day.
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Header>
                    <h6 className="mb-0">Do you provide free estimates?</h6>
                  </Card.Header>
                  <Card.Body>
                    Yes! We provide detailed, written estimates at no cost. Our estimates 
                    include materials, labor, timeline, and any additional services needed.
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Header>
                    <h6 className="mb-0">Are you licensed and insured?</h6>
                  </Card.Header>
                  <Card.Body>
                    Absolutely. We are fully licensed, bonded, and insured. We can provide 
                    proof of insurance and licensing upon request.
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Header>
                    <h6 className="mb-0">What is your payment schedule?</h6>
                  </Card.Header>
                  <Card.Body>
                    We typically require a small deposit to begin work, with progress payments 
                    based on project milestones. Final payment is due upon project completion 
                    and your satisfaction.
                  </Card.Body>
                </Card>
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
                Don't wait to transform your space. Contact us today and let's discuss 
                how we can bring your renovation dreams to life.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="tel:+15551234567" className="btn btn-light btn-lg">
                  <i className="bi bi-telephone me-2"></i>
                  Call Now
                </a>
                <a href="https://wa.me/15551234567" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
