import React from 'react'
import './contact.css'
import Mainpage from '../components/Mainpage/mainpage';
import aboutBackground from '../2.png';
export default function Contact() {
  return (
    <div>
  {/* <Mainpage
        title="CONTACT US"
        backgroundImage={aboutBackground} // Pass the local image as a prop
      /> */}
      
{/* <h1 className='contact-main-heading'>Have a Question? Get In Touch</h1> */}

<div className="contact-us-main-container contact-us-page-image-section">
  <div className="contact-us-form">
<form classNames="cf">
    <p className="contact-page-form-text-1">Contact Us</p>
    <p className="contact-page-form-text">Make An Appoinment</p>
  <div classNames="half left cf">
    <input type="text" id="input-name" placeholder="Name" />
    <input type="email" id="input-email" placeholder="Email address"/>
    <input type="text" id="input-subject" placeholder="Subject"/>
  </div>
  <div classNames="half contact-right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit"/>
</form>
</div>

<div className="conact-page-information-box">
  <div className="contact-page-information-block-row-1">
    <h1 className="contact-page-information-heading">Phone Number</h1>
    <p1 className="contact-page-information-para">123456789</p1>
  </div>
  <div className="contact-page-information-block-row-1">
    <h1 className="contact-page-information-heading">Email Address</h1>
    <p1 className="contact-page-information-para">aislin@gmail.com</p1>
  </div>
  <div className="contact-page-information-block-row-1">
    <h1 className="contact-page-information-heading">Address Info</h1>
    <p1 className="contact-page-information-para">abcdedhar udhar okay</p1>
  </div>
</div>
</div>
    </div>
  )
}
