import React, { useEffect } from 'react';
import './about.css';

export default function About() {
    useEffect(() => {
        // Simulate a request every second
        const intervalId = setInterval(() => {
            console.log('Simulated request made at:', new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="about-us-textsection-head">About Us</h1>
            <div className="about-us-main-container">
                <div className="section-2-collage-images">
                    <img
                        src="assets/section-2-1.jpeg"
                        alt="First Image"
                        className=" about-us-first-image"
                    />
                    <img
                        src="assets/section-2-2.png"
                        alt="Second Image"
                        className="about-us-second-image"
                    />
                </div>

                <div className="about-us-text-section">
                    <h1 className="about-us-paara-heading">Complete Solutions in One Place</h1>
                    <p className="about-us-paragraph">
                        Aislin Group, founded by Mr. Vishal in 2010, is a trusted producer of high-quality herbal products, using modern technology and international standards for unmatched quality and personalized solutions.
                    </p>
                    <button className="about-us-getintouchbtn">Get in touch -</button>
                </div>
            </div>

            <div className="about-main-container">
                <h1 className="about-us-heading">About Us</h1>
                <div className="boxes-main">
                    <div className="section-3-boxes">
                        {[
                            { image: "assets/Industry-blue-1.png", text: "Number of Employees: 400-500 people" },
                            { image: "assets/People-blue-2.png", text: "Our Mission: Delivering Excellence" },
                            { image: "assets/Symbol-blue-3.png", text: "Global Presence in over 50 countries" },
                            { image: "assets/Symbol-blue-4.png", text: "Core Values: Integrity and Innovation" },
                            { image: "assets/Symbol-blue-5.png", text: "Awards: Recognized Industry Leader" },
                            { image: "assets/Symbol-blue-6.png", text: "Future Goals: Sustainable Growth" },
                        ].map((item, i) => (
                            <div className="aboutUs-page-section-3-box" key={i}>
                                <img src={item.image} alt={`Box ${i + 1}`} />
                                <p className="about-section-3-box-para">{item.text}</p>
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
                            Our administration and representative workforce are focused on effectively
                            sending our organization's Quality Policy to all parts of our firm-guaranteeing
                            proceeded with great, protected and viable.
                        </p>
                    </div>
                    <div className="mission-box-1">
                        <h1 className="mission-box-head">Mission</h1>
                        <img src="assets/Industry-blue-1.png" alt="" className="mission-box-image" />
                        <p className="mission-box-para">
                            Our administration and representative workforce are focused on effectively
                            sending our organization's Quality Policy to all parts of our firm-guaranteeing
                            proceeded with great, protected and viable.
                        </p>
                    </div>
                    <div className="mission-box-1">
                        <h1 className="mission-box-head">Mission</h1>
                        <img src="assets/Industry-blue-1.png" alt="" className="mission-box-image" />
                        <p className="mission-box-para">
                            Our administration and representative workforce are focused on effectively
                            sending our organization's Quality Policy to all parts of our firm-guaranteeing
                            proceeded with great, protected and viable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
