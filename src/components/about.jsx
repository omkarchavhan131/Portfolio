
import React from 'react';

const About = () => (
  <div className="about" id="about">
    <div className="linediv"></div>
    {/* <div className="abt-img">
      <img src="/images/Om_02.jpg" className="myabt-img" alt="Omkar" />
    </div> */}
    <div className="abt-name">
      <p><strong>Name :</strong> Omkar Chavhan</p>
      <p><strong>Degree :</strong> Artificial Intelligence and Data Science</p>
      <p><strong>College :</strong> G.S. Moze, College Of Engineering, Balewadi, Pune.</p>
      <p><strong>Address :</strong> Balewadi, Pune, Maharashtra.</p>
    </div>
    <div className="abt-info">
      <h1>About me</h1>
      <p>
        "I am a passionate Artificial Intelligence and Data Science Engineering student, graduating in 2026, with a strong foundation in C++, DSA, and Frontend Development. I enjoy solving complex problems, building efficient solutions, and creating interactive web experiences!"
      </p>
      <ul className="abt-profile">
        <li><span id="span1">Profile:</span><span className="span2">FullStack Developer.</span></li>
        <li><span id="span1">Domain:</span><span className="span2">Website , MERN Stack,Frontend.</span></li>
        <li><span id="span1">Education:</span><span className="span2">BE. Artificial Intelligence and Data Science</span></li>
        <li><span id="span1">Language:</span><span className="span2">Marathi, English, German</span></li>
        <li><span id="span1">Other skills:</span><span className="span2">Communication, Frontend, DSA in C++, Python, Git & GitHub, Project Management.</span></li>
        <li><span id="span1">Hobbies:</span><span className="span2">Horse Riding, Travelling.</span></li>
      </ul>
    </div>
  </div>
);

export default About;
