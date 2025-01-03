import React from 'react'
import Mainpage from '../components/Mainpage/mainpage';
import aboutBackground from '../2.png';
export default function Policy() {
  return (
    <div>
  <Mainpage
        title="OUR POLICY"
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
        



    </div>
  )
}
