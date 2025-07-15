
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['Fullstack developer !', 'AI engineer !'],
      typeSpeed: 90,
      backSpeed: 20,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="hero" id="home">
      <div className="hero-text">
        <h4>Hello!</h4>
        <h1 className="myname">I'm Omkar<br />Chavhan</h1>
        <h3><span id="element"></span></h3>
        <a className="btn btn1" href="https://www.linkedin.com/in/omkar-chavhan-0627a2258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
        <a className="btn" href="https://github.com/omkarchavhan131">Github</a>
        {/* <div className="download-cv">
      <button>
        <a className="btn" href="https://drive.google.com/drive/folders/1QlW38usyip9kCPbYHIfwm4Sb9G3nU3DS" style={{ color: "white" }}>
          Download CV
        </a>
      </button>
    </div> */}
      </div>
      <div className="hero-img">
        <img src="/images/Om_01.png" alt="Omkar" />
      </div>
    </div>
  );
};

export default Hero;
