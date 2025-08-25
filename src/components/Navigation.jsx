import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold">
            <i className="bi bi-house-heart me-2"></i>
            S.T.C Limited
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="interactive-element" onClick={handleNavClick}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="interactive-element" onClick={handleNavClick}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="interactive-element" onClick={handleNavClick}>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="interactive-element" onClick={handleNavClick}>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/testimonials">
              <Nav.Link className="interactive-element" onClick={handleNavClick}>Reviews</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="btn btn-outline-light ms-2 px-3 interactive-element" onClick={handleNavClick}>
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
