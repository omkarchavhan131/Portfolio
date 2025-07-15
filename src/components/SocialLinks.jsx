// src/components/SocialLinks.js
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => (
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
);

export default SocialLinks;
