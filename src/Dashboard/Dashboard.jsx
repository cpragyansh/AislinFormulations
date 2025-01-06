import React, { useRef, useEffect } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import "./dashboard.css";
// import Menuhero from "../components/Menuhero/Menuhero";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Dashboard() {
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
        <HeroSection />
        {/* <Menuhero/> */}
      </div>




      <div className="section-1-main-container">
      <div className="left-side-image-section-section-1" data-aos="zoom-in-up">
        <img src="assets/2010.png" alt="" className="section-1-left-side-image-direct" />
      </div>
      <div className="right-side-text-area-section-1">
        <h1 className="text-area-right-side-heading" data-aos="fade-up">
          Complete solutions in one place...
        </h1>
        <p className="text-area-right-side-paragraph" data-aos="fade-up" data-aos-delay="200">
          At Aislin Formulations, we are dedicated to excellence, crafting premium-quality herbal remedies, nutraceuticals, food supplements, and dietary solutions. Rooted in innovation and guided by nature, our products embody purity, health, and trust—delivering wellness in every formulation.
        </p>

        <ul className="section-1-right-side-text-area-list" data-aos="fade-up" data-aos-delay="400">
          <li className="section-1-text-area-right-side-list-items">Quality Control System, 100% Satisfaction Guarantee</li>
          <li className="section-1-text-area-right-side-list-items">Unrivalled Workmanship, Professional and Qualified</li>
          <li className="section-1-text-area-right-side-list-items">Environmental Sensitivity, Personalised Solutions</li>
        </ul>

        <p className="section-1-text-area-right-side-below-para" data-aos="fade-up" data-aos-delay="600">
          Aislin Group, founded by Mr. Vishal in 2010, is a trusted producer of high-quality herbal products, using modern technology and international standards for unmatched quality and personalized solutions.
        </p>

        <button className="section-1-right-side-text-area-get-in-touch-btn" data-aos="zoom-in" data-aos-delay="800">
          GET IN TOUCH
        </button>
      </div>
    </div>





      

    <div className="section-2-text-margin-block">
      <div className="section-2-main-container">

        {/* Left Text Area */}
        <div className="left-side-text-area-section-2container" data-aos="fade-right">
          <h1 className="section-2-party-manu-heading" data-aos="fade-up">Third Party Manufacturing</h1>
          <h1 className="section-2-text-area-heading" data-aos="fade-up" data-aos-delay="200">
            Contract Manufacturing Or Third Party manufacturing of AYUSH products
          </h1>
          <p className="section-2-text-area-paragraph" data-aos="fade-up" data-aos-delay="400">
            Aislin offers contract manufacturing to clients for a wide range of products that include nutraceuticals tablets, capsules, sachets, and also Herbal formulation. We have been providing the best quality products since 2010 to ensure good health. The main aim of our company is to provide standardized, researched, and best quality products to our clients. If you associate with Aislin Formulation for the Pharma third party facility, we guarantee you success. So, get in contact with us for the most competitive MOQ (Minimum Order Quantity) in the Pharma Industry. Get our quality-approved range of Pharma medicines and products along with contract manufacturing services.
          </p>
          <button className="section-2-text-area-contactu-us-btn" data-aos="zoom-in" data-aos-delay="600">CONTACT US</button>
        </div>

        {/* Right Boxes Area */}
        <div className="right-side-boxes-area-section-2-container">
          <div className="green-color-big-box-container">
            <div className="section-2-boxes-main-container">

              {/* Cost Efficiency Box */}
              <div className="section-2-text-boxes" data-aos="fade-up" data-aos-delay="300">
                <h1 className="section-2-box-main-heading">Cost Efficiency</h1>
                <p className="section-2-box-paragraph">
                  Space Healthcare provides high quality, affordable, and innovative healthcare products.
                </p>
                <hr className="section-2-horizontal-line-boxes" />
              </div>

              {/* Highly Qualified Team Box */}
              <div className="section-2-text-boxes" data-aos="fade-up" data-aos-delay="500">
                <h1 className="section-2-box-main-heading">Highly Qualified Team</h1>
                <p className="section-2-box-paragraph">
                  A dedicated and committed team of professionals. We combine a high level of teamwork with a skilled staff.
                </p>
                <hr className="section-2-horizontal-line-boxes" />
              </div>

              {/* Timely Delivery Box */}
              <div className="section-2-text-boxes" data-aos="fade-up" data-aos-delay="700">
                <h1 className="section-2-box-main-heading">Timely Delivery</h1>
                <p className="section-2-box-paragraph">
                  We ensure timely delivery of quality products to the clients as quickly as possible.
                </p>
                <hr className="section-2-horizontal-line-boxes" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

      {/* mid Section imported section */}

      <div className="importrd-section-3-main-container">

      {/* Left Image Section */}
      <div className="imported-section-3-left-side-image-container" data-aos="fade-right">
        <img src="assets/section-3-imported-image.png" alt="" className="imported-section-3-main-image-left" />
      </div>

      {/* Right Text Section */}
      <div className="imported-section-3-right-side-text-container">
        <h1 className="imported-section-3-right-side-main-heading" data-aos="fade-up">What We Do</h1>

        <p className="imported-section-3-right-side-main-paragraph-1" data-aos="fade-up" data-aos-delay="200">
          We specialize in third-party manufacturing of a diverse range of herbal and nutraceutical products. As one of the top manufacturers of herbal products in northern India, we operate state-of-the-art facilities accredited with GMP and ISO certifications. Committed to fostering strong partnerships with our clients, we provide comprehensive third-party manufacturing services across India.
        </p>
        <p className="imported-section-3-right-side-main-paragraph-2" data-aos="fade-up" data-aos-delay="400">
          Our advanced infrastructure enables us to deliver large-scale production for various product categories, including tablets, capsules, syrups, juices, shampoos, ointments, and more.
        </p>

        {/* Two Blocks */}
        <div className="imported-section-3-right-side-two-blocks">
          
          {/* First Block */}
          <div className="imported-section-3-block" data-aos="fade-up" data-aos-delay="600">
            <div className="imported-section-3-flex-head-img-container">
              <img src="assets/imp-1-sym-1.png" alt="" className="imported-section-3-block-image" />
              <h1 className="imported-section-3-block-main-heading">Our Vision</h1>
            </div>
            <p className="imported-section-3-block-main-para">
              To provide prompt and affordable Healthcare Medicines worldwide.
            </p>
          </div>

          {/* Second Block */}
          <div className="imported-section-3-block" data-aos="fade-up" data-aos-delay="800">
            <div className="imported-section-3-flex-head-img-container">
              <img src="assets/imp-3-sym-2.png" alt="" className="imported-section-3-block-image" />
              <h1 className="imported-section-3-block-main-heading">Our Mission</h1>
            </div>
            <p className="imported-section-3-block-main-para">
              To provide prompt and affordable Healthcare Medicines worldwide.
            </p>
          </div>

        </div>
      </div>

    </div>

      {/* end  */}


      {/* Section 3 */}
      <div className="section-3-main-container" data-aos="fade-in">
        <h1 className="section-3-heading" data-aos="fade-in">WHY CHOOSE AISLIN FORMULATIONS FOR THE THIRD PARTY MANUFACTURING</h1>
        <div className="about-main-text-box">
        

        </div>
        <div className="boxes-main" data-aos="flip-up">
          <div className="section-3-boxes" data-aos="fade-right">
            {[
              { image: "assets/People.png", text: "Nature of Business Manufacturer" },
              { image: "assets/People (1).png", text: "Quality Assurance" },
              { image: "assets/Symbol (1).png", text: "Global Reach" },
              { image: "assets/Symbol (2).png", text: "Cost-Effective Solutions" },
              { image: "assets/Symbol (3).png", text: "Technological Advancement" },
              { image: "assets/Symbol (4).png", text: "*GST No.:06AAHCA7836L1ZA" },
            ].map((item, i) => (
              <div className="section-3-box" key={i} data-aos="fade-left">
                <img src={item.image} alt={`Box ${i + 1}`} className="section-3-boxes-image" />
                <p className="section-3-box-para" >{item.text} </p>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* Section 4 */}
      <div className="partners-section">
      {/* Background Image (Optional) */}
      {/* <img src="partners-section-bg.jpg" alt="" className="partners-section-bg" /> */}

      <div className="partners-section-text">
        <div className="partners-section-bg-image-div-box" data-aos="fade-right">
          {/* <img src="assets/ourProducts.webp" alt="" className="partners-section-hands-img" /> */}
        </div>

        <div className="partners-images-text-div">
          {/* Text Box */}
          <div className="partners-section-text-box" data-aos="fade-up">
            <h1 className="partners-section-heading">
              <img src="assets/partner.svg" alt="" className='partners-section-heading-svg' />
              Our Products
            </h1>
            {/* <hr className="hr-below-section-4-heading" /> */}
            <p className="partners-section-para">
              Aislin Formulations is a leading manufacturer of Ayurvedic and nutritional products, committed to delivering high-quality solutions for both human and veterinary needs. Established in 2009, the company offers a diverse range of products, including Ayurvedic juices, syrups, creams, ointments, and nutritional dietary supplements. Each product is carefully formulated using natural ingredients, ensuring safety, efficacy, and adherence to international quality standards. Aislin Formulations is dedicated to enhancing health and well-being through innovative, research-backed products that support overall wellness and promote optimal health. The company’s commitment to quality and customer satisfaction is at the core of its operations.
            </p>
          </div>

          {/* Slider Section */}
          <div className="slider" data-aos="fade-up" data-aos-delay="300">
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


    </div>
  );
}
