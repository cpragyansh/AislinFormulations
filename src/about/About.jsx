import React, { useEffect,useRef } from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            <h1 className="about-us-textsection-head">About Us</h1>
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


                    <img src="assets/about-page-first-img.png" alt="" className="about-page-main-section-1-image" />
                </div>

                <div className="about-us-text-section">
                    <h1 className="about-us-heading-green-color">Welcome to Aislin Formulations ...</h1>
                    <h1 className="about-us-paara-heading">Enhancing Knowledge and Innovation Through Aislin Formulations, Your Path to Excellence.</h1>
                    <p className="about-us-paragraph">

                        Aislin Formulations Private Limited, established in 2009, is a prominent manufacturer of Ayurvedic and nutritional products based in Delhi, India.

                        Under the leadership of Managing Director Mr. Vishal Singla, the company has grown to operate a manufacturing unit in Rai, Haryana, adhering to international quality standards.

                    </p>
                    <p className="about-us-paragraph">                         Aislin Formulations offers a diverse range of products, including Ayurvedic juices, syrups, creams, ointments, and nutritional dietary supplements, serving both human and veterinary needs. The company is committed to delivering high-quality, research-backed products to promote health and well-being. Their registered address is C-5/2A, Rana Pratap Bagh, Delhi, and the manufacturing facility is located at 1296, HSIIDC, Industrial Estate, Rai, Haryana 131029.
                    </p>
                    <button className="about-us-getintouchbtn">Get in touch -</button>
                </div>
            </div>

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

            <div className="mistion-main-head-container">
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
        </div>
    );
}
