
import React from 'react';

const Resume = () => (
  <div className="resume" id="resume">
    <div className="resume-heading">
      <h1>Resume</h1><br />
      <p className="resume-subtext">AI Engineer || GSM COE || Python || C++ & DSA || HTML,CSS,JS || React.js || Git & GitHub</p>
    </div>
    <div className="linediv2"></div>
    <div className="education">
      <h2>Academics</h2>
    </div>
    <div className="edu-cards">
      <div className="edu-card">
        <h3>2023-2026</h3>
        <p><strong>Bachelor of Engineering</strong></p>
        <p>Genba Sopanrao Moze College of Engineering, Balewadi, Pune.</p>
        <p><strong>Grade:</strong> 8.65 CGPA</p>
        {/* <p><strong>Grade:</strong> 8.65 CGPA</p>
        <p><strong>Grade:</strong> 8.65 CGPA</p> */}
      </div>
      <div className="edu-card">
        <h3>2021-2022</h3>
        <p><strong>Higher Secondary School</strong></p>
        <p>Vidya Vikas Mandir, Awasari Bk, Pune</p>
        <p><strong>Grade:</strong> 67.83%</p>
      </div>
      <div className="edu-card">
        <h3>2019-2020</h3>
        <p><strong>Secondary School</strong></p>
        <p>Shri Sangmeshwar Vidhyalay, Pargaon(Shingave), Pune</p>
        <p><strong>Grade:</strong> 89.80%</p>
      </div>
    </div>
    <div className="download-cv">
      <button>
        <a href="https://drive.google.com/file/d/10WSjFa0roo3aZGV_Bbalvm6einJ9E6Om/view?usp=sharing" style={{ color: "white" }}>
          Download CV
        </a>
      </button>
    </div>
  </div>
);

export default Resume;
