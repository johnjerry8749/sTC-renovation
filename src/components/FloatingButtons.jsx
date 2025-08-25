import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a 
        href="https://wa.me/5488893365" 
        className="floating-btn whatsapp-btn" 
        title="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a 
        href="tel:+5488893365" 
        className="floating-btn phone-btn" 
        title="Call Now"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;
