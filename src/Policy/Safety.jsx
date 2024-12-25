import React, { useRef, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Mainpage from '../components/Mainpage/mainpage';

// Import the local image
import aboutBackground from '../2.png';

export default function Safety() {
      const sliderRef = useRef(null);
      const sectionRef = useRef(null);  
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
        <Mainpage
        title="SAFETY POLICY"
        backgroundImage={aboutBackground} // Pass the local image as a prop
      />
        <div className="about-us-main-container">
                <div className="section-2-collage-images">
                    {/* <img
                        src="assets/section-2-1.jpeg"
                        alt="First Image"
                        className=" about-us-first-image"
                    />
                    <img
                        src="assets/section-2-2.png"
                        alt="Second Image"
                        className="about-us-second-image"
                    /> */}


                    <img src="assets/safety.png" alt="" className="about-page-main-section-1-image" />
                </div>

                <div className="about-us-text-section">
                    <h1 className="about-us-heading-green-color">Aislin Formulations Safety Policy</h1>
                    <h1 className="about-us-paara-heading">Promoting Safety and Innovation at Aislin Formulations, Your Commitment to Excellence and Well-being</h1>
                    <p className="about-us-paragraph">

                    Aislin Formulations Private Limited, established in 2009, is committed to maintaining the highest safety standards in all operations. Under the leadership of Managing Director Mr. Vishal Singla, we ensure employee, product, and environmental safety while adhering to international quality standards.
                    </p>
                    <p className="about-us-paragraph">                
                        
                    <ul className="section-1-right-side-text-area-list" typeof="">
            <li className="section-1-text-area-right-side-list-items">Employee Safety:
            We provide a safe work environment with regular safety training and the use of personal protective equipment (PPE).</li>
            <li className="section-1-text-area-right-side-list-items">Product Safety:
            Our products undergo strict quality checks to ensure safety for human use</li>
            <li className="section-1-text-area-right-side-list-items">Compliance with Standards:
            We follow all local and international safety regulations, ensuring regular audits and certifications.</li>
          </ul>

                                        </p>
                    <button className="about-us-getintouchbtn">Get in touch -</button>
                </div>
            </div> 
            <div className="section-5-number-main-container" ref={sectionRef} data-aos="fade-in">
        <h1 className="section-5-head" data-aos="flip-up">Aislin at a glance</h1>
        <div className="section-5-number-colums" data-aos="fade-up">
          {[148, 200, 350, 1000, 202].map((number, i) => (
            <div className="section-5-cols" data-target={number} key={i} data-aos="fade-right">
              <h1 className="section-5-number" data-aos="fade-left">0</h1>
              <p className="section-5-number-text" data-aos="fade-left">Medicines</p>
            </div>
          ))}
        </div>
      </div>
      <div className="partners-section">
                {/* <img src="partners-section-bg.jpg" alt="" className="partners-section-bg" /> */}
                <div className="partners-section-text">
                    <div className="partners-section-bg-image-div-box">
                        <img src="assets/sliderf-bg.png" alt="" className="partners-section-hands-img" />
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
    </div>
  )
}
