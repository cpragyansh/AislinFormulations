import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div>

<h1 className='contact-main-heading'>Have a Question? Get In Touch</h1>

<div className="contact-us-main-container">
<div className="contact-us-page-image-section">



</div>
<div className="contact-us-page-google-map-embedded">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.863759507704!2d77.08439597514233!3d28.932094675502512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab9305555555%3A0x447cafe388f6cfe2!2sAislin%20Formulation%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1734873223563!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='google-map-contact'></iframe>
</div>



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
</div>
    </div>
  )
}
