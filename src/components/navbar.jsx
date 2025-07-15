
import React from 'react';

const Header = () => (
  <div className="sticky-nav">
    <div className="logo">
      <h2>Omkar Chavhan</h2>
      <div className="menu-icon" onClick={() => {
        document.querySelector('.nav-list').classList.toggle('active');
      }}>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
      </div>
    </div>
    <ul className="nav-list">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
);

export default Header;
