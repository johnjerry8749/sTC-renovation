import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a 
        href="https://wa.me/905488893365" 
        className="floating-btn whatsapp-btn" 
        title="WhatsApp +905488893365"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a 
        href="tel:+905488893365" 
        className="floating-btn phone-btn" 
        title="Call +905488893365"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;
