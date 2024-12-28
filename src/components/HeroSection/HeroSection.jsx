import React, { useState, useEffect } from 'react';
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Correct import for WhatsApp icon
import { faEnvelope, faSms, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function HeroSection() {

  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactMenu = () => {
    setIsContactOpen(!isContactOpen);
  };
  const images = [
    {
      src: 'assets/edited.png',
      alt: 'Background 1',
      heading1: 'Welcome to',
      heading2: 'Aislin Formulations',
      description:
        'Aislin Formulations is one of the leading manufacturers of Herbals, Nutraceutical and Food & dietary supplements products...',
    },
    {
      src: '/assets/edited-4.png',
      alt: 'Background 3',
      heading1: 'Innovating Healthier',
      heading2: 'Healthier Living',
      description:
        'Our mission is to improve health and wellness through innovation and sustainability...',
    },
    {
      src: '/assets/edited-5.png',
      alt: 'Background 3',
      heading1: 'Innovating for a',
      heading2: 'Healthier  Living',
      description:
        'Our mission is to improve health and wellness through innovation and sustainability...',
    },
    {
      src: '/assets/edited-6.png',
      alt: 'Background 3',
      heading1: 'Innovating for a',
      heading2: 'Healthier Living',
      description:
        'Our mission is to improve health and wellness through innovation and sustainability...',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimateText(true);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-main-box">
      <div className={`overlay-text-hero ${animateText ? 'fade-in' : ''}`}>
        <h1 className="hero-welcome-text">{images[currentImageIndex].heading1}</h1>
        <h2 className="hero-aislin-head">{images[currentImageIndex].heading2}</h2>
        <button className="hero-section-know-more-btn">KNOW MORE</button>
      </div>
      <div
        className="hero-main-2"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="images-hero-cont-test">
            <img
              src={image.src}
              alt={image.alt}
              className="images-slider-main"
            />
          </div>
        ))}
      </div>
      {/* Download Catalog Section */}
      <div className="download-catalog">
        <a href="/path-to-your-catalog.docx" download="Catalog_Aislin_Formulations.docx">
          <button className="download-btn">CATALOG</button>
        </a>
      </div>

      <div className={`contact-button ${isContactOpen ? 'open' : ''}`}>
        <button onClick={toggleContactMenu} className="main-contact-btn">
          {isContactOpen ? 'X' :  <FontAwesomeIcon icon={faPhone} />}
        </button>
        {isContactOpen && (
                  <div className="contact-options">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} /> {/* WhatsApp Icon */}
                  </a>
                  <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} /> {/* Email Icon */}
                  </a>
                  <a href="sms:+1234567890" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSms} /> {/* SMS Icon */}
                  </a>
                  <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPhone} /> {/* Phone Icon */}
                  </a>
                </div>
        
        )}
      </div>
    </div>
  );
}
