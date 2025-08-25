import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Counter component for animated numbers
const CounterNumber = ({ end, duration = 2000, suffix = "" }) => {
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
    <h2 className="stat-number" ref={counterRef}>
      {count}{suffix}
    </h2>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Project Manager",
      experience: "12+ Years",
      specialty: "Residential Renovation"
    },
    {
      name: "Maria Garcia",
      position: "Lead Designer",
      experience: "8+ Years", 
      specialty: "Interior Design"
    },
    {
      name: "David Johnson",
      position: "Master Craftsman",
      experience: "15+ Years",
      specialty: "Tile & Ceramic Work"
    }
  ];

  const values = [
    {
      icon: "bi-heart",
      title: "Customer First",
      description: "Your satisfaction is our top priority. We listen, understand, and deliver exactly what you envision."
    },
    {
      icon: "bi-award",
      title: "Quality Excellence",
      description: "We use only premium materials and employ skilled craftsmen to ensure lasting results."
    },
    {
      icon: "bi-shield-check",
      title: "Trust & Reliability",
      description: "Built on years of trust and proven track record of successful projects and satisfied clients."
    },
    {
      icon: "bi-clock",
      title: "Timely Service",
      description: "We respect your time and always deliver projects on schedule without compromising quality."
    },
    {
      icon: "bi-lightbulb",
      title: "Innovation",
      description: "We bring creative solutions and modern techniques to every renovation project."
    },
    {
      icon: "bi-people",
      title: "Team Work",
      description: "Our collaborative approach ensures seamless project execution from start to finish."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header hero-about">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title text-white">About Us</h1>
              <p className="page-subtitle text-white">
                Learn more about our company, values, and the team behind your project
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Content */}
      <section className="section-padding section-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="about-content">
                <h2 className="section-title">Our Story</h2>
                <p className="section-subtitle">
                  Founded with a passion for transforming spaces and exceeding expectations
                </p>
                <p>
                  With over a decade of experience in the renovation and construction industry, we have built a reputation for delivering high-quality work that stands the test of time. Our team of skilled professionals brings creativity, expertise, and dedication to every project, whether it's a simple repair or a complete home transformation.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    <span>Licensed Professionals</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    <span>Quality Materials</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    <span>Competitive Pricing</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle text-primary me-2"></i>
                    <span>Warranty & Guarantee</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-video text-center">
                <div className="video-container position-relative">
                  <video 
                    className="img-fluid rounded shadow-lg"
                    style={{maxHeight: '400px', width: '100%', objectFit: 'cover'}}
                    controls
                    poster="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&h=400&fit=crop&q=80"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4" />
                    <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-placeholder text-center" style={{display: 'none'}}>
                    <div className="p-4 bg-light rounded shadow-lg">
                      <i className="bi bi-tools display-1 text-primary mb-3"></i>
                      <h5 className="text-dark">Our Workshop in Action</h5>
                      <p className="text-muted">
                        Experience our comprehensive services: Professional painting & whitewashing, 
                        expert tile work, beautiful gardening, reliable home care, and thorough cleaning services.
                      </p>
                      <div className="services-highlights mt-3">
                        <div className="row text-start">
                          <div className="col-6">
                            <small className="text-primary">🎨 Painting & Whitewashing</small><br/>
                            <small className="text-primary">🏠 Tile & Ceramic Work</small><br/>
                            <small className="text-primary">🌿 Gardening Services</small>
                          </div>
                          <div className="col-6">
                            <small className="text-primary">🧹 Home Care Services</small><br/>
                            <small className="text-primary">✨ Cleaning Services</small><br/>
                            <small className="text-primary">🔧 General Repairs</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mission-vision-icon mb-3">
                    <i className="bi bi-bullseye fs-1 text-primary"></i>
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To provide exceptional renovation and repair services that transform spaces into beautiful, functional environments while building lasting relationships with our clients through trust, quality, and reliability.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="mission-vision-icon mb-3">
                    <i className="bi bi-eye fs-1 text-primary"></i>
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    To be the leading renovation company in the region, known for our innovation, craftsmanship, and commitment to bringing our clients' dreams to life through professional excellence and outstanding service.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle">
                The principles that guide everything we do
              </p>
            </Col>
          </Row>
          <Row>
            {values.map((value, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <div className="value-card text-center fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="value-icon">
                    <i className={`${value.icon} text-primary`}></i>
                  </div>
                  <h5 className="value-title">{value.title}</h5>
                  <p className="value-description">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle">
                Experienced professionals dedicated to your project's success
              </p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="team-card border-0 shadow-sm h-100">
                  <Card.Body className="text-center p-4">
                    <div className="team-avatar mb-3">
                      <i className="bi bi-person-circle fs-1 text-muted"></i>
                    </div>
                    <h5 className="team-name">{member.name}</h5>
                    <p className="team-position text-primary">{member.position}</p>
                    <p className="team-experience">
                      <strong>Experience:</strong> {member.experience}
                    </p>
                    <p className="team-specialty">
                      <strong>Specialty:</strong> {member.specialty}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="stat-item">
                <CounterNumber end={500} suffix="+" />
                <p className="stat-label">Projects Completed</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="stat-item">
                <CounterNumber end={150} suffix="+" />
                <p className="stat-label">Happy Clients</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="stat-item">
                <CounterNumber end={10} suffix="+" />
                <p className="stat-label">Years in Business</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="stat-item">
                <h2 className="stat-number">24/7</h2>
                <p className="stat-label">Support Available</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="cta-title">Ready to Work With Us?</h2>
              <p className="cta-subtitle">
                Let's discuss your project and bring your vision to life
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg me-3">
                  <i className="bi bi-envelope me-2"></i>
                  Get In Touch
                </Link>
                <Link to="/projects" className="btn btn-outline-primary btn-lg">
                  <i className="bi bi-images me-2"></i>
                  View Our Work
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
