import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterCategory, setFilterCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Renovation',
      category: 'renovation',
      location: 'Downtown Condo',
      completion: '2024',
      duration: '6 weeks',
      budget: '$25,000',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909010-4ce34dd1d2ba?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop'
      ],
      description: 'Complete kitchen transformation featuring custom cabinetry, quartz countertops, and modern appliances. The open-concept design maximizes space while maintaining functionality.',
      services: ['Kitchen Remodeling', 'Custom Cabinetry', 'Countertop Installation'],
      client: 'The Johnson Family',
      testimonial: 'Absolutely amazing work! Our kitchen is now the heart of our home.',
      challenges: 'Working within a compact space while maximizing storage and functionality.',
      solution: 'Custom-designed storage solutions and space-efficient layout planning.'
    },
    {
      id: 2,
      title: 'Luxury Bathroom Remodel',
      category: 'renovation',
      location: 'Suburban Home',
      completion: '2024',
      duration: '4 weeks',
      budget: '$18,000',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
      ],
      description: 'Spa-like bathroom renovation with marble tiles, rainfall shower, and modern fixtures. Elegant design meets practical functionality.',
      services: ['Bathroom Renovation', 'Tile Installation', 'Plumbing'],
      client: 'The Smith Family',
      testimonial: 'It feels like having a spa in our own home!',
      challenges: 'Outdated plumbing system and water damage repair.',
      solution: 'Complete plumbing upgrade and moisture-resistant materials.'
    },
    {
      id: 3,
      title: 'Exterior House Painting',
      category: 'painting',
      location: 'Historic District',
      completion: '2024',
      duration: '2 weeks',
      budget: '$8,500',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&h=600&fit=crop'
      ],
      description: 'Complete exterior painting project preserving the historic character while updating the color scheme for modern appeal.',
      services: ['Exterior Painting', 'Surface Preparation', 'Color Consultation'],
      client: 'Heritage Properties LLC',
      testimonial: 'Professional work that respects the historic nature of our property.',
      challenges: 'Working with historic materials and meeting preservation guidelines.',
      solution: 'Specialized primers and period-appropriate color selection.'
    },
    {
      id: 4,
      title: 'Ceramic Tile Backsplash',
      category: 'tiling',
      location: 'Modern Apartment',
      completion: '2024',
      duration: '1 week',
      budget: '$3,200',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop'
      ],
      description: 'Custom ceramic tile backsplash installation with intricate pattern design, adding elegance and functionality to the kitchen space.',
      services: ['Tile Installation', 'Custom Pattern Design', 'Grouting'],
      client: 'Urban Living Co.',
      testimonial: 'The attention to detail in the tile work is incredible!',
      challenges: 'Complex geometric pattern requiring precise measurements.',
      solution: 'Digital templating and careful planning for pattern alignment.'
    },
    {
      id: 5,
      title: 'Office Space Renovation',
      category: 'renovation',
      location: 'Business District',
      completion: '2024',
      duration: '8 weeks',
      budget: '$45,000',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop'
      ],
      description: 'Modern office renovation creating an open, collaborative workspace with private meeting rooms and updated technology infrastructure.',
      services: ['Office Renovation', 'Electrical Work', 'Flooring'],
      client: 'Tech Solutions Inc.',
      testimonial: 'Our team productivity has increased significantly in the new space.',
      challenges: 'Maintaining business operations during renovation.',
      solution: 'Phased renovation approach to minimize disruption.'
    },
    {
      id: 6,
      title: 'Basement Finishing',
      category: 'renovation',
      location: 'Family Home',
      completion: '2024',
      duration: '5 weeks',
      budget: '$22,000',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
      ],
      description: 'Transforming an unused basement into a functional family entertainment area with proper insulation and moisture control.',
      services: ['Basement Finishing', 'Insulation', 'Waterproofing'],
      client: 'The Martinez Family',
      testimonial: 'Now we have the perfect space for family movie nights!',
      challenges: 'Moisture issues and low ceiling height.',
      solution: 'Advanced waterproofing and creative ceiling design solutions.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'renovation', label: 'Renovations' },
    { value: 'painting', label: 'Painting' },
    { value: 'tiling', label: 'Tile Work' },
    { value: 'repair', label: 'Repairs' }
  ];

  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  const handleShowProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section hero-projects" style={{minHeight: '60vh'}}>
        <Container>
          <Row className="align-items-center h-100">
            <Col lg={8} className="mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-4">Our Projects</h1>
              <p className="lead">
                Explore our portfolio of completed renovation, repair, and construction projects. 
                See the quality and craftsmanship that sets us apart.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Stats */}
      <section className="section-padding section-white">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={3} md={6} className="mb-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-dark">150+</h3>
                <p className="text-muted">Projects Completed</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-dark">100%</h3>
                <p className="text-muted">Client Satisfaction</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-dark">8+</h3>
                <p className="text-muted">Years Experience</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-3">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-dark">24/7</h3>
                <p className="text-muted">Support Available</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Filter and Gallery */}
      <section className="section-padding section-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Browse our recent work and see the transformation we can achieve
              </p>
            </Col>
          </Row>

          {/* Filter Buttons */}
          <Row className="mb-4">
            <Col lg={12} className="text-center">
              <div className="project-filters">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={filterCategory === category.value ? 'primary' : 'outline-primary'}
                    className="me-2 mb-2"
                    onClick={() => setFilterCategory(category.value)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Projects Grid */}
          <Row>
            {filteredProjects.map((project) => (
              <Col lg={4} md={6} className="mb-4" key={project.id}>
                <Card className="project-card h-100">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      style={{height: '250px', objectFit: 'cover'}}
                    />
                    <div className="project-overlay">
                      <Button 
                        variant="light" 
                        size="sm"
                        onClick={() => handleShowProject(project)}
                      >
                        <i className="bi bi-eye me-2"></i>
                        View Details
                      </Button>
                    </div>
                    <Badge 
                      bg="success" 
                      className="position-absolute top-0 start-0 m-3"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-description text-muted">{project.description}</p>
                    
                    <div className="project-meta mb-3">
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {project.location}
                      </small>
                      <br />
                      <small className="text-muted">
                        <i className="bi bi-calendar me-1"></i>
                        Completed {project.completion}
                      </small>
                    </div>

                    <div className="mt-auto">
                      <div className="d-flex justify-content-end align-items-center">
                        <Button 
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleShowProject(project)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Project Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <img 
                    src={selectedProject.gallery[0]} 
                    alt={selectedProject.title}
                    className="img-fluid rounded mb-3"
                  />
                  <div className="project-gallery d-flex gap-2">
                    {selectedProject.gallery.slice(1).map((img, index) => (
                      <img 
                        key={index}
                        src={img} 
                        alt={`${selectedProject.title} ${index + 2}`}
                        className="img-thumbnail"
                        style={{width: '80px', height: '60px', objectFit: 'cover'}}
                      />
                    ))}
                  </div>
                </Col>
                <Col md={6}>
                  <h6 className="text-dark mb-3">Project Details</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Client:</strong> {selectedProject.client}
                    </li>
                    <li className="mb-2">
                      <strong>Location:</strong> {selectedProject.location}
                    </li>
                    <li className="mb-2">
                      <strong>Duration:</strong> {selectedProject.duration}
                    </li>
                    <li className="mb-2">
                      <strong>Completion:</strong> {selectedProject.completion}
                    </li>
                  </ul>

                  <h6 className="text-dark mb-2">Services Provided</h6>
                  <div className="mb-3">
                    {selectedProject.services.map((service, index) => (
                      <Badge key={index} bg="light" text="dark" className="me-2 mb-1">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <h6 className="text-dark mb-2">Challenge</h6>
                  <p className="small">{selectedProject.challenges}</p>

                  <h6 className="text-dark mb-2">Our Solution</h6>
                  <p className="small">{selectedProject.solution}</p>
                </Col>
              </Row>
              
              <hr />
              
              <div className="text-center">
                <h6 className="text-dark mb-2">Client Testimonial</h6>
                <blockquote className="blockquote">
                  <p className="mb-0">"{selectedProject.testimonial}"</p>
                  <footer className="blockquote-footer mt-2">
                    {selectedProject.client}
                  </footer>
                </blockquote>
              </div>
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

      {/* CTA Section */}
      <section className="section-padding bg-light-green">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-4 cta-title">
                Ready to Start Your Project?
              </h2>
              <p className="lead mb-4 cta-text">
                Join our satisfied clients and transform your space with our expert craftsmanship. 
                Contact us today for a free consultation and detailed quote.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/projects" className="btn btn-outline-dark btn-lg">
                  <i className="bi bi-images me-2"></i>
                  View Our Projects
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
