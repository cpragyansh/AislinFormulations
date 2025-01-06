"use client"

import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Footer () {
  return (
    <div>

<div className="footer-main-container">
<div className="footer-col-1">
    <img src="assets/aisilin-footer-white.png" alt="" className="footer-aislin-logo" />

    <h1 className="aislin-row-1-text-head">"Empowering Wellness, Inspiring Innovation."</h1>
    <p className="aislin-row-1-text">At Aislin Formulations, we are dedicated to crafting high-quality healthcare solutions that prioritize your well-being. From innovative nutraceuticals to herbal formulations, our commitment to excellence drives us to deliver products that enhance lives and foster healthier communities. Together, let’s build a future where wellness knows no bounds.</p>

    <div className="aislin-footer-social-media">

{/* <img src="assets/facebook-white.png" alt="" className="footer-social-icons" />
<img src="assets/twitter-white.png" alt="" className="footer-social-icons" />
<img src="assets/linkedin-white.png" alt="" className="footer-social-icons" /> */}

    </div>
</div>
<div className="footer-text-section">
<div className="footer-col-2">
    <h1 className="footer-col-2-head">Products</h1>
    <div className="footer-col-2-list-section">
     <Link to="capsules"><p className="footer-col-2-list">Capsules</p></Link>
     <Link to="syrups"><p className="footer-col-2-list">Syrups</p></Link>
     <Link to="sachets"><p className="footer-col-2-list">Sachets</p></Link>
     <Link to=""><p className="footer-col-2-list">Ayurvedic</p></Link>
     </div>
</div>
<div className="footer-col-2">
    <h1 className="footer-col-2-head">Quick Links</h1>
    <div className="footer-col-2-list-section">
     <Link to="manufacturing"><p className="footer-col-2-list">Manufacturing</p></Link>
     <Link to="aboutUs"><p className="footer-col-2-list">About Us</p></Link>
     <Link to="contact"><p className="footer-col-2-list">Contact Us</p></Link>
     <Link to="ourPolicy"><p className="footer-col-2-list">Our Policy</p></Link>
     </div>
</div>

<div className="footer-col-3">
<h1 className="footer-col-3-head">Contact Us</h1>
<div className="footer-col-3-list-items">
<p className="footer-col-3-para"><p className="footer-call-text">Call:</p> <a href=" tel:+91 9696969696">+91 969696969696</a></p>
<p className="footer-col-3-para"><a href="mailto: info@aislinformulation.com" className='footer-email-text'><p className="footer-call-text">Email:</p> info@aislinformulation.com</a></p>
<p className="footer-col-3-para"><p className="footer-address-main-head-heading">Address:</p>  HSIDC Road Rai, Sector 14, Sonipat-131001, Haryana, India</p>
</div>
</div>

</div>
</div>

    </div>
  )
}
