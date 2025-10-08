import React from "react";
import SocialLink from "./SocialLink";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div id="hero" className="container hero-section">
      <div className="hero-left-side">
        <h1 className="white-color">&#128075; <TypeAnimation
          sequence={[
            "Hi, I'm Alok Maurya",
            1000,
            "Senior Flutter Developer",
            1000,
            "Building Android & iOS Apps",
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        /></h1>

        <p className="para-color">
          I am a passionate <strong>Flutter Mobile Developer</strong> with experience building high-performance cross-platform apps for Android and iOS. Currently contributing to <strong>uCertify Learn</strong> (15K+ users) and previously developed <strong>Kivo.ai HRMS</strong> (1K+ users). Skilled in Dart, Flutter, Firebase, Node.js, REST APIs, and delivering responsive, user-friendly applications.
        </p>

        <h3 className="para-color">Senior Flutter Developer | Mobile Apps | Dart & Flutter</h3>

        <div className="social-links">
          <SocialLink link="https://github.com/alokmaurya281" icon="fa-brands fa-github" />
          <SocialLink link="https://www.linkedin.com/in/alok-maurya-1437481b3/" icon="fa-brands fa-linkedin" />
          <SocialLink link="https://www.twitter.com/its_alok__m" icon="fa-brands fa-twitter" />
          <SocialLink link="https://www.facebook.com/its_alok__m" icon="fa-brands fa-facebook" />
          <SocialLink link="https://www.instagram.com/its_alok__m" icon="fa-brands fa-instagram" />
          <SocialLink link="mailto:snmaurya10275@gmail.com" icon="fa-solid fa-envelope" />
        </div>
      </div>

      <div className="hero-middle">
        <img src="assets/images/hero-image.png" alt="Alok Maurya - Flutter Developer" />
      </div>

      <div className="hero-right-side">
        <a href="assets/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="button-btn">
            View CV <i className="fa-solid fa-download"></i>
          </button>
        </a>
      </div>
    </div>
  );
}
