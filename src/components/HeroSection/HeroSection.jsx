import React, { useState, useEffect } from 'react';
import './hero.css';

export default function HeroSection() {
  // Predefined array of local image paths with text
  const images = [
    {
      src: 'assets/edited.png',
      alt: 'Background 1',
      heading1: 'Welcome to the',
      heading2: 'Aislin',
      subheading: 'Formulations',
      description:
        'Aislin Formulations is one of the leading manufacturers of Herbals, Nutraceutical and Food & dietary supplements products...',
    },
   
    {
      src: '/assets/edited-4.png',
      alt: 'Background 3',
      heading1: 'Innovating for a',
      heading2: 'Healthier',
      subheading: ' Living',
      description:
        'Our mission is to improve health and wellness through innovation and sustainability...',
    },
    {
      src: '/assets/edited-5.png',
      alt: 'Background 3',
      heading1: 'Innovating for a',
      heading2: 'Healthier',
      subheading: ' Living',
      description:
        'Our mission is to improve health and wellness through innovation and sustainability...',
    },
    {
      src: '/assets/edited-6.png',
      alt: 'Background 3',
      heading1: 'Innovating for a',
      heading2: 'Healthier',
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
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-main-box">
      {/* Text overlay container */}
      <div className={`overlay-text-hero ${animateText ? 'fade-in' : ''}`}>
        <h1 className="hero-welcome-text">{images[currentImageIndex].heading1}</h1>
        <h2 className="hero-aislin-head">{images[currentImageIndex].heading2}</h2>
        <h3 className="hero-formu-head">{images[currentImageIndex].subheading}</h3>
        <p className="hero-text-para">{images[currentImageIndex].description}</p>
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
