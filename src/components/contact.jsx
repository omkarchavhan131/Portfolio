import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l48cvsn',      // Replace with your EmailJS service ID
      'template_budeiek',     // Replace with your EmailJS template ID
      e.target,
      'Ztcr2TQMx88uAmk9w'       // Replace with your EmailJS public key
    ).then((result) => {
      alert('✅ Thank You For Connecting..!');
    }, (error) => {
      alert('❌ Error in Data Filling..!');
      console.log(error.text);
    });

    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="newlinediv"></div>

      {/* <div className="contact-options">
        <div className="contact-option">
          <i className="fa-solid fa-phone icons"></i>
          <p><strong>Contact No</strong></p>
          <p>+91 8080085552</p>
        </div>

        <div className="contact-option">
          <a href="mailto:ochavhan02@gmail.com" style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-regular fa-envelope icons"></i>
          </a>
          <p><strong>Mail</strong></p>
          <p>ochavhan02@gmail.com</p>
        </div>

        <div className="contact-option">
          <a
            href="https://www.linkedin.com/in/omkar-chavhan-0627a2258"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <i className="fa-brands fa-linkedin icons"></i>
          </a>
          <p><strong>LinkedIn</strong></p>
          <p>Omkar Chavhan</p>
        </div>
      </div> */}

      <div className="question">
        <h3>For Contact Me:</h3>
        <button onClick={() => setShowForm(!showForm)}>Click here</button>
      </div>

      {showForm && (
        <form className="query-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Description..." required></textarea>
          <button type="submit">Send</button>
        </form>
      )}

      <div className="find">
        <p>Find me on</p>
        <a href="https://www.instagram.com/omkar_chavhan_131" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{ marginRight: '15px', color: 'black' }} />
        </a>
        <a href="https://github.com/omkarchavhan131" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ marginRight: '15px', color: 'black' }} />
        </a>
        <a href="https://www.linkedin.com/in/omkar-chavhan-0627a2258" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ marginRight: '15px', color: 'black' }} />
        </a>
        <a href="https://wa.me/918080085552" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} style={{ marginRight: '15px', color: 'black' }} />
        </a>
        <a href="https://twitter.com/omkar_chavhan_" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} style={{ color: 'black' }} />
        </a>
      </div>

      <p className="copyright">
        Copyright &copy; 2025 All rights reserved | Made with ♥ by Omkar Chavhan//ochavhan02@gmail.com
      </p>
    </div>
  );
};

export default Contact;
