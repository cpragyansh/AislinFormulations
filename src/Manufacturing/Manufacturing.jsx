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
      
Aislin offers comprehensive contract manufacturing services with expertise in nutraceuticals, including tablets, capsules, and sachets. The company also specializes in herbal formulations, leveraging natural ingredients to create products aligned with holistic wellness practices. With a strong focus on precision, quality, and adherence to industry standards, Aislin ensures that every product meets the highest benchmarks. Supported by state-of-the-art manufacturing infrastructure, Aislin provides flexible, scalable, and efficient solutions, empowering clients to bring their innovative products to market with confidence.
      </p>
      <p className="section-4-para">
      
      Aislin collaborates closely with clients to deliver customized solutions, handling everything from formulation to packaging with precision and care. With a focus on innovation and sustainability, Aislin leverages advanced technology to produce high-quality products while minimizing environmental impact, ensuring clients succeed in the competitive health and wellness market.      </p>
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
<div className="partners-section">
                {/* <img src="partners-section-bg.jpg" alt="" className="partners-section-bg" /> */}
                <div className="partners-section-text">
                    <div className="partners-section-bg-image-div-box">
                        {/* <img src="assets/ourProducts.webp" alt="" className="partners-section-hands-img" /> */}
                    </div>
                    <div className="partners-images-text-div">
                        <div className="partners-section-text-box">
                            <h1 className="partners-section-heading"><img src="assets/partner.svg" alt="" className='partners-section-heading-svg' /> Our Products</h1>
                            <hr className="hr-below-section-4-heading" />
                            <p className="partners-section-para">Aislin Formulations is a leading manufacturer of Ayurvedic and nutritional products, committed to delivering high-quality solutions for both human and veterinary needs. Established in 2009, the company offers a diverse range of products, including Ayurvedic juices, syrups, creams, ointments, and nutritional dietary supplements. Each product is carefully formulated using natural ingredients, ensuring safety, efficacy, and adherence to international quality standards. Aislin Formulations is dedicated to enhancing health and well-being through innovative, research-backed products that support overall wellness and promote optimal health. The company’s commitment to quality and customer satisfaction is at the core of its operations.</p>
                        </div>
                        <div className="slider">
                            <div className="slide-track">
                                <div className="slide">
                                    <img src="assets/p1.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p2.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p3.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p4.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p5.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p6.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p7.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p8.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p9.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p10.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p11.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p12.jpg" className='slider-images' />
                                </div>
                                <div className="slide">
                                    <img src="assets/p13.jpg" className='slider-images' />
                                </div>
                            </div>
                        </div>
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
