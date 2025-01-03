import React, { useRef, useEffect } from "react";
import Menuhero from "../components/Menuhero/Menuhero";
import AOS from "aos";
import "aos/dist/aos.css";
import './manufacturing.css'

export default function Manufacturing() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300, // Adjust the value based on the card width
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300, // Adjust the value based on the card width
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensure animation happens only once
    });

    const options = {
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const animateNumbers = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = sectionRef.current.querySelectorAll(".section-5-number");
          counters.forEach((counter) => {
            const target = +counter.parentElement.getAttribute("data-target");
            let current = 0;
            const increment = Math.ceil(target / 100); // Adjust speed

            const updateCounter = () => {
              current += increment;
              if (current > target) {
                counter.textContent = `${target}+`;
              } else {
                counter.textContent = `${current}+`;
                requestAnimationFrame(updateCounter);
              }
            };
            updateCounter();
          });
          observer.disconnect(); // Stop observing once animation starts
        }
      });
    };

    const observer = new IntersectionObserver(animateNumbers, options);
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="relative z-[-999999]">
        <Menuhero />
      </div>

      <div className="section-4-main-container" data-aos="fade-up">
  <div className="section-4-center">
    <div className="section-4-text-area" data-aos="fade-right">
      <h1 className="section-4-head">Third Party Manufacturing</h1>
      <p className="section-4-para">
        Aislin offers contract manufacturing to clients for a wide range of
        products that include nutraceuticals tablets, capsules, sachets, and
        also herbal formulations...
      </p>
    </div>
    <div className="section-4-slider-container" data-aos="fade-left">
      <button className="arrow left" onClick={scrollLeft}>
        ←
      </button>
      <div className="slider" ref={sliderRef}>
        {[...Array(6)].map((_, i) => (
          <div className="vertical-boxes" key={i} data-aos="zoom-in">
            <h1 className="vb-head">Innovative Solutions</h1>
            <p className="vb-para">
              Driving innovation to meet modern healthcare challenges.
            </p>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        →
      </button>
    </div>
  </div>
</div>


      {/* Section 5 */}
      <div
        className="section-5-number-main-container"
        ref={sectionRef}
        data-aos="fade-up"
      >
        <h1 className="section-5-head">Aislin at a glance</h1>
        <div className="section-5-number-colums">
          {[148, 200, 350, 1000, 202].map((number, i) => (
            <div
              className="section-5-cols"
              data-target={number}
              key={i}
              data-aos="fade-in"
            >
              <h1 className="section-5-number">0</h1>
              <p className="section-5-number-text">Medicines</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
