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
        <div className="left-side-image-section-section-1">
          <img src="assets/2010.png" alt="" className="section-1-left-side-image-direct" />
        </div>
        <div className="right-side-text-area-section-1">
          <h1 className="text-area-right-side-heading">Complete solutions in one place...</h1>
          <p className="text-area-right-side-paragraph">With a focus on quality, Aislin Formulations manufactures
            premium herbal, nutraceutical, food, and dietary
            supplement products.</p>

          <ul className="section-1-right-side-text-area-list" typeof="">
            <li className="section-1-text-area-right-side-list-items">Quality Control System , 100% Satisfaction Guarantee</li>
            <li className="section-1-text-area-right-side-list-items">Unrivalled Workmanship, Professional and Qualified</li>
            <li className="section-1-text-area-right-side-list-items">Environmental Sensitivity, Personalised Solutions</li>
          </ul>
          <p className="section-1-text-area-right-side-below-para">
            Aislin Group, founded by Mr. Vishal in 2010, is a trusted producer of high-quality herbal products, using modern technology and international standards for unmatched quality and personalized solutions.
          </p>
          <button className="section-1-right-side-text-area-get-in-touch-btn">GET IN TOUCH</button>
        </div>
      </div>




      {/* Section 2 */}
      {/* <div className="section-2-main-container" data-aos="fade-up">
  <div className="section-2-collage-images">
    <img
      src="assets/section-2-1.jpeg"
      alt="First Image"
      className="collageimages first-image"
    />
    <img
      src="assets/section-2-2.png"
      alt="Second Image"
      className="collageimages second-image"
    />
  </div>

  <div className="section-2-text-section" data-aos="fade-up">
    <h1 className="section-2-heading">Complete Solutions in One Place</h1>
    <p className="section-2-paragraph">

    Aislin Group, founded by Mr. Vishal in 2010, is a leader in premium herbal products, blending traditional wisdom with modern technology to deliver unmatched quality. Committed to international standards, the company crafts natural, effective solutions tailored to diverse health and wellness needs. Renowned for trust and innovation, Aislin Group continues to set benchmarks in the herbal industry, promoting wellness through excellence and sustainability.    </p>
    <button className="section-2-getintouchbtn" data-aos="zoom-in">Get in touch -</button>
  </div>
</div> */}

      <div className="section-2-text-margin-block">
        <div className="section-2-main-container">

          <div className="left-side-text-area-section-2container">
            <h1 className="section-2-party-manu-heading">Third Party Manufacturing</h1>
            <h1 className="section-2-text-area-heading">
              Contract Manufacturing Or Third Party manufacturing of AYUSH products
            </h1>
            <p className="section-2-text-area-paragraph">
              Aislin offers contract manufacturing for a wide range of products, including nutraceutical tablets, capsules, sachets, and herbal formulations. Since 2010, we've provided high-quality products to promote good health. Our goal is to deliver standardized, researched, and top-quality products. Partnering with Aislin guarantees competitive MOQ and quality-approved pharma medicines and contract manufacturing services. Contact us today!
            </p>
            <button className="section-2-text-area-contactu-us-btn">CONTACT US</button>
          </div>

          <div className="right-side-boxes-area-section-2-container">

            <div className="green-color-big-box-container">
              <div className="section-2-boxes-main-container">
                <div className="section-2-text-boxes">
                  <h1 className="section-2-box-main-heading">Cost Efficiency</h1>
                  <p className="section-2-box-paragraph">Space Healthcare providing high
                    quality, affordable and
                    innovative healthcare products.</p>
                  <hr className="section-2-horizontal-line-boxes" />
                </div>
                <div className="section-2-text-boxes">  <h1 className="section-2-box-main-heading">Cost Efficiency</h1>
                  <p className="section-2-box-paragraph">Space Healthcare providing high
                    quality, affordable and
                    innovative healthcare products.</p> <hr className="section-2-horizontal-line-boxes" /></div>
                <div className="section-2-text-boxes">  <h1 className="section-2-box-main-heading">Cost Efficiency</h1>
                  <p className="section-2-box-paragraph">Space Healthcare providing high
                    quality, affordable and
                    innovative healthcare products.</p> <hr className="section-2-horizontal-line-boxes" /></div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* mid Section imported section */}

      <div className="importrd-section-3-main-container">

        <div className="imported-section-3-left-side-image-container">
          <img src="assets/section-3-imported-image.png" alt="" className="imported-section-3-main-image-left" />
        </div>
        <div className="imported-section-3-right-side-text-container">
          <h1 className="imported-section-3-right-side-main-heading">What We do...</h1>

          <p className="imported-section-3-right-side-main-paragraph-1">
            We specialize in third-party manufacturing of a diverse range of herbal and nutraceutical products. As one of the top manufacturers of herbal products in northern India, we operate state-of-the-art facilities accredited with GMP and ISO certifications. Committed to fostering strong partnerships with our clients, we provide comprehensive third-party manufacturing services across India.
          </p>
          <p className="imported-section-3-right-side-main-paragraph-2">Our advanced infrastructure enables us to deliver large-scale production for various product categories, including tablets, capsules, syrups, juices, shampoos, ointments, and more.</p>
       
       <div className="imported-section-3-right-side-two-blocks">
        <div className="imported-section-3-block">
          <div className="imported-section-3-flex-head-img-container">
          <img src="assets/imp-1-sym-1.png" alt="" className="imported-section-3-block-image" />
          <h1 className="imported-section-3-block-main-heading">Our Vision</h1>
          </div>
          <p className="imported-section-3-block-main-para">To provide prompt and affordable
          Healthcare Medicines worldwide.</p>
        </div>
        <div className="imported-section-3-block">
          <div className="imported-section-3-flex-head-img-container">
          <img src="assets/imp-3-sym-2.png" alt="" className="imported-section-3-block-image" />
          <h1 className="imported-section-3-block-main-heading">Our Vision</h1>
          </div>
          <p className="imported-section-3-block-main-para">To provide prompt and affordable
          Healthcare Medicines worldwide.</p>
        </div>
       </div>
       
        </div>
      </div>

      {/* end  */}


      {/* Section 3 */}
      <div className="section-3-main-container" data-aos="fade-in">
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
      </div>




      {/* Section 4 */}
     <div className="partners-section">
                {/* <img src="partners-section-bg.jpg" alt="" className="partners-section-bg" /> */}
                <div className="partners-section-text">
                    <div className="partners-section-bg-image-div-box">
                        <img src="assets/sliderf-bg.png" alt="" className="partners-section-hands-img" />
                    </div>
                    <div className="partners-images-text-div">
                        <div className="partners-section-text-box">
                            <h1 className="partners-section-heading"><img src="assets/partner.svg" alt="" className='partners-section-heading-svg' /> Our Products</h1>
                            {/* <hr className="hr-below-section-4-heading" /> */}
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
