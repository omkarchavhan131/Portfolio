
import React from 'react';

const Projects = () => (
  <div className="projects" id="projects">
    <h1>Projects</h1>
    <div className="linediv2"></div>
    <div className="project">
      <a href="#"><img src="/images/LIB-MNG-SYS.png" className="project-img" alt="Library Management System" /></a>
      <p className="project-title"><a href="#">Library Management System</a></p>
      <p className="project-des">
        A full-stack app to manage library operations such as book inventory, student records, book issuance, and returns. Built using Spring Boot and HTML/CSS with H2 Database.
      </p>
    </div>
    <div className="project">
      <a href="#"><img src="/images/Uber_Auto_Analysis.jpg" className="project-img" alt="Portfolio" /></a>
      <p className="project-title"><a href="#">Uber Rides Analysis</a></p>
      <p className="project-des">
        A responsive portfolio website showcasing my skills, education, and projects. Built with modern frontend technologies and deployed for networking and collaborations.
      </p>
    </div>
    {/* <div className="project">
      <a href="#"><img src="/images/Portfolio_img.png" className="project-img" alt="Portfolio" /></a>
      <p className="project-title"><a href="#">My Portfolio</a></p>
      <p className="project-des">
        A responsive portfolio website showcasing my skills, education, and projects. Built with modern frontend technologies and deployed for networking and collaborations.
      </p>
    </div> */}
    <div className="project">
      <a href="#"><img src="/images/Portfolio_img.png" className="project-img" alt="Portfolio" /></a>
      <p className="project-title"><a href="#">My Portfolio</a></p>
      <p className="project-des">
        A responsive portfolio website showcasing my skills, education, and projects. Built with modern frontend technologies and deployed for networking and collaborations.
      </p>
    </div>
  </div>
);

export default Projects;
