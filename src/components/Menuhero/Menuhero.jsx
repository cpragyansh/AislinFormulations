import React, { useState, useEffect } from 'react';
import './menu-hero.css';

export default function Menuhero() {
  // Predefined array of local image paths with text
  const images = [
    {
      src: 'assets/menu-1.jpg',
      alt: 'Background 1',
      // heading1: 'Welcome to the',
      // heading2: 'Aislin',
      subheading: 'Manufacturing',
      description:
        'We are a leading third-party manufacturer of WHO-GMP certified herbal and nutraceutical products in Sonipat, Haryana. Known for our quality, quick delivery, and adherence to international standards, we help clients reduce the stress of bulk production and meet deadlines. Trust us to supply quality herbal products and support your business.',
    },
   
    {
      src: '/assets/menu-2.jpg',
      alt: 'Background 3',
      // heading1: 'Innovating for a',
      // heading2: 'Healthier', 
      subheading: ' Living',
      description:
        'Our mission is to improve health and wellness through innovation and sustainability...',
    },
    {
      src: '/assets/menu-3.jpg',
      alt: 'Background 3',
      // heading1: 'Innovating for a',
      // heading2: 'Healthier',
      subheading: ' Living',
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
      }, 1500); // Match this to the CSS animation duration
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-main-box">
      {/* Text overlay container */}
      <div className={`overlay-text-hero-menuhero ${animateText ? 'fade-in' : ''}`}>
        <h1 className="hero-welcome-text-menuhero">{images[currentImageIndex].heading1}</h1>
        <h2 className="hero-aislin-head-menuhero">{images[currentImageIndex].heading2}</h2>
        <h3 className="hero-formu-head-menuhero">{images[currentImageIndex].subheading}</h3>
        <p className="hero-text-para-menuhero">{images[currentImageIndex].description}</p>
      </div>

      {/* Container with a full-screen height */}
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
    </div>
  );
}
