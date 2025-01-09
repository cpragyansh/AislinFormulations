import React, { useEffect,useRef } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mainpage from '../components/Mainpage/mainpage';
import aboutBackground from '../2.png';

export default function About() {
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



    // const animateNumbers = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       const counters = sectionRef.current.querySelectorAll(".section-5-number");
    //       counters.forEach((counter) => {
    //         const target = +counter.parentElement.getAttribute("data-target");
    //         let current = 0;
    //         const increment = Math.ceil(target / 100); // Adjust speed

    //         const updateCounter = () => {
    //           current += increment;
    //           if (current > target) {
    //             counter.textContent = `${target}+`;
    //           } else {
    //             counter.textContent = `${current}+`;
    //             requestAnimationFrame(updateCounter);
    //           }
    //         };
    //         updateCounter();
    //       });
    //       observer.disconnect(); // Stop observing once animation starts
    //     }
    //   });
    // };

    // const observer = new IntersectionObserver(animateNumbers, options);
    // observer.observe(sectionRef.current);

    // return () => {
    //   observer.disconnect();
    // };
  }, []);

    return (
        <div>
          <Mainpage
        title="ABOUT US"
        backgroundImage={aboutBackground} // Pass the local image as a prop
      />
      
            {/* <h1 className="about-us-textsection-head">About Us</h1> */}
            <div className="about-us-main-container">
                <div className="section-2-collage-images">
                 


                    <img src="assets/about-page-first-img.png" alt="" className="about-page-main-section-1-image" />
                </div>

                <div className="about-us-text-section">
                    <h1 className="about-us-heading-green-color">Company Overview</h1>
                    <h1 className="about-us-paara-heading">Enhancing Knowledge and Innovation Through Aislin Formulations, Your Path to Excellence.</h1>
                    <p className="about-us-paragraph">

                    Welcome to Aislin Formulations, a dynamic pharmaceutical company established in 2010. Specializing in the manufacturing of nutraceuticals, and ayurvedic products, we take pride in our cutting-edge third-party manufacturing unit. At Aislin, we blend innovation with tradition, harnessing the latest technologies and the wisdom of ancient practices to create products that promote health and wellness.

                    </p>
                    <p className="about-us-paragraph">       With a strong commitment to quality and safety, every product bearing the Aislin name undergoes rigorous testing and adheres to the highest industry standards. Our dedicated team of experts ensures that each formulation is crafted with precision and care, catering to the diverse needs of our customers worldwide. Whether you’re a healthcare professional, distributor, or consumer, trust Aislin to deliver excellence in every product, empowering you to live a healthier, happier life.          </p>
                    <button className="about-us-getintouchbtn">Get in touch -</button>
                </div>
            </div>

            {/* <div className="section-3-main-container" data-aos="fade-in">
        <h1 className="section-3-heading">WHY CHOOSE AISLIN FORMULATIONS FOR THE THIRD PARTY MANUFACTURING</h1>
        <div className="about-main-text-box">
        

        </div>
        <div className="boxes-main" data-aos="flip-up">
          <div className="section-3-boxes" data-aos="fade-right">
            {[
              { image: "assets/People.png", text: "Nature of Business Manufacturer" },
              { image: "assets/People (1).png", text: "Number of Employees 400-500 people" },
              { image: "assets/Symbol (1).png", text: "12+ years of experience" },
              { image: "assets/Symbol (2).png", text: "4 Speciality Divisions" },
              { image: "assets/Symbol (3).png", text: "Rs 100 -125 crore annual turnover" },
              { image: "assets/Symbol (4).png", text: "*GST No.:06AAHCA7836L1ZA" },
            ].map((item, i) => (
              <div className="section-3-box" key={i} data-aos="fade-left">
                <img src={item.image} alt={`Box ${i + 1}`} className="section-3-boxes-image" />
                <p className="section-3-box-para" >{item.text} </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

            {/* <div className="mistion-main-head-container">
                <h1 className="mission-vision-heading">MISSION, VISION & VALUES</h1>
                <div className="mission-vision-boexes-main-container">
                    <div className="mission-box-1">
                        <h1 className="mission-box-head">Mission</h1>
                        <img src="assets/Industry-blue-1.png" alt="" className="mission-box-image" />
                        <p className="mission-box-para">
                        At Aislin Formulations, our mission is to enhance wellness by creating premium herbal products that blend nature and technology. We strive to deliver sustainable, innovative solutions that inspire healthier lifestyles and prioritize customer satisfaction.
                        </p>
                    </div>
                    <div className="mission-box-1">
                        <h1 className="mission-box-head">Vision</h1>
                        <img src="assets/Industry-blue-1.png" alt="" className="mission-box-image" />
                        <p className="mission-box-para">
                        We aim to be a global leader in herbal healthcare, setting benchmarks for quality and trust. By 2030, we envision becoming a household name, promoting harmony with nature and holistic well-being worldwide.
                        </p>
                    </div>
                    <div className="mission-box-1">
                        <h1 className="mission-box-head">Values</h1>
                        <img src="assets/Industry-blue-1.png" alt="" className="mission-box-image" />
                        <p className="mission-box-para">
                     innovation, sustainability, and excellence drive Aislin Formulations to deliver unmatched quality and empower wellness. We prioritize customer satisfaction and long-lasting relationships while staying committed to environmental responsibility.
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <div className="section-5-number-main-container" ref={sectionRef} data-aos="fade-in">
        <h1 className="section-5-head" data-aos="flip-up">Aislin at a glance</h1>
        <div className="section-5-number-colums" data-aos="fade-up">
          {[148, 200, 350, 1000, 202].map((number, i) => (
            <div className="section-5-cols" data-target={number} key={i} data-aos="fade-right">
              <h1 className="section-5-number" data-aos="fade-left">0</h1>
              <p className="section-5-number-text" data-aos="fade-left">Medicines</p>
            </div>
          ))}
        </div>
      </div> */}
      {/* <div className="partners-section">
                <div className="partners-section-text">
                    <div className="partners-section-bg-image-div-box">
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
            </div> */}
            {/* <div className="about-us-main-container override-image-why-aislin">
                <div className="section-2-collage-images">
                 


                    <img src="assets/about-page-first-img.png" alt="" className="about-page-main-section-1-image" />
                </div>

                <div className="about-us-text-section override-why-aislin-text">
                    <h1 className="about-us-heading-green-color">Why Aislin</h1>
                    <h1 className="about-us-paara-heading override-company-overview-head">"Why Aislin? Your Trusted Partner in Formulations and Contract Manufacturing – Delivering Precision, Quality, and Innovation in Every Dose."</h1>
                    <p className="about-us-paragraph override-why-aislin-text">

                    At Aislin Formulations, we pride ourselves on delivering unparalleled expertise in the art and science of pharmaceutical formulations. With a strong focus on innovation, quality, and compliance, we ensure that every product we create meets the highest industry standards. Our team of skilled professionals leverages advanced technology and state-of-the-art facilities to craft solutions tailored to your needs. Whether it's developing complex formulations or ensuring the efficacy and safety of medicines, Aislin is committed to transforming ideas into reliable, effective products.

                    </p>
                    <p className="about-us-paragraph override-why-aislin-text">                        Aislin Formulations stands as a reliable partner in contract manufacturing, providing end-to-end solutions for pharmaceutical companies worldwide. From research and development to large-scale production, we handle every step with precision and care. Our streamlined processes and robust quality control systems ensure timely delivery of high-quality medicines, customized to your specifications. By choosing Aislin, you gain access to a partner who values transparency, efficiency, and a shared vision for advancing healthcare through superior formulations.               </p>
                    <button className="about-us-getintouchbtn">Get in touch -</button>
                </div>
            </div> */}
            {/* <div className="about-us-main-container">
                <div className="section-2-collage-images">
                 


                    <img src="assets/about-page-first-img.png" alt="" className="about-page-main-section-1-image" />
                </div>

                <div className="about-us-text-section">
                    <h1 className="about-us-heading-green-color">Management</h1>
                    <h1 className="about-us-paara-heading">"Guided by Vision, Driven by Expertise – The Pillars of Aislin's Success."</h1>
                    <p className="about-us-paragraph">
                    At Aislin Formulations, our management team is the cornerstone of our success, blending visionary thinking with unmatched expertise. Each leader brings a wealth of knowledge and a commitment to excellence, ensuring that our mission of delivering innovative and high-quality pharmaceutical solutions is realized. Their strategic foresight and dedication to fostering a culture of collaboration empower every team member to excel, driving Aislin forward in the ever-evolving healthcare landscape.


                    </p>
                    <p className="about-us-paragraph">                    The management at Aislin Formulations is more than just a team; it’s a dynamic force that bridges innovation with execution. With a focus on operational efficiency, compliance, and customer satisfaction, our leaders ensure that every decision aligns with our core values. Their unwavering commitment to quality and progress not only inspires trust among our partners but also positions Aislin as a trusted name in formulations and contract manufacturing. Together, they guide us toward a future of growth, excellence, and impactful solutions.        </p>
                    <button className="about-us-getintouchbtn">Get in touch -</button>
                </div>
            </div> */}
        </div>
    );
}
