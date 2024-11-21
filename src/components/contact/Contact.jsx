import React from 'react'
import './contact.css'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Form data being sent:', {
      service_id: 'service_iuvywz8',
      template_id: 'template_lj39opq',
      user_id: '_Upoqexq51U6FxOfr',
      form_data: form.current,
    });

    emailjs.sendForm('service_iuvywz8', 'template_lj39opq', form.current, '_Upoqexq51U6FxOfr')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Message sent successfully');
        },
        (error) => {
          console.error('Failed to send email...', error);
          alert('Failed to send the message. Please try again later.');
        }
      )
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };


  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAttachEmail />
            <h4>Email</h4>
            <h5>zane.waynexx@gmail.com</h5>
            <a href="mailto:zane.waynexx@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp />
            <h4>WhatsApp</h4>
            <h5>Zane</h5>
            <a href="https://api.whatsapp.com/send?phone+61431734875" target="_blank">Send a Message</a>
          </article>
        </div>
        {/*====break====*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact;
