import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold">
            <i className="bi bi-house-heart me-2"></i>
            RenovationPro
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="interactive-element">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="interactive-element">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="interactive-element">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="interactive-element">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/testimonials">
              <Nav.Link className="interactive-element">Reviews</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="btn btn-outline-light ms-2 px-3 interactive-element">
                Contact Now
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
