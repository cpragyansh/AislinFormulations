import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div>

<h1 className='contact-main-heading'>Have a Question? Get In Touch</h1>

<div className="contact-us-main-container">
<div className="contact-us-page-image-section">
<div className="contact-collage-images">
    <img
      src="assets/section-2-1.jpeg"
      alt="First Image"
      className=" contact-first-image"
    />
    <img
      src="assets/section-2-2.png"
      alt="Second Image"
      className=" contact-second-image"
    />
  </div>
</div>


  <div className="contact-us-form">
<form classNames="cf">
    <p className="contact-page-form-text">Fill Out the form below to contact Aislin Formulations and rcieve a call back</p>
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
</div>
    </div>
  )
}
