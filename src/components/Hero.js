import React from "react";
import SocialLink from "./SocialLink";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div id="hero" className="container hero-section">
      <div className="hero-left-side">
            <h1 className="white-color">&#128075; <TypeAnimation
       sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hi I\'m Alok Maurya',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack Developer',
        1000,
        'Passionate Developer',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
     /></h1>
            <p className="para-color">
            A passionate Full Stack Software developer having experience with
            building Web using HTML, CSS, JavaScript and ReactJs as well as
            android using Flutter and I have also experience with building backend
            using Laravel and Python. I have also knowledge of some Cool libraries
            and Frameworks.
            </p>
            <h3 className="para-color">Full Stack Software Developer</h3>
            <div className="social-links">
                <SocialLink link="https://github.com/alokmaurya281" icon="fa-brands fa-github" />
                <SocialLink link="https://www.linkedin.com/in/alok-maurya-1437481b3/" icon="fa-brands fa-linkedin" />
                <SocialLink link="https://www.twitter.com/its_alok__m" icon="fa-brands fa-twitter" />
                <SocialLink link="https://www.facebook.com/its_alok__m" icon="fa-brands fa-facebook" />
                <SocialLink link="https://www.instagram.com/its_alok__m" icon="fa-brands fa-instagram" />
                <SocialLink link="mailto:snmaurya10275@gmail.com" icon="fa-solid fa-envelope"></SocialLink>
         </div>
      </div>
      <div className="hero-middle">
        <img src="assets/images/hero-image.png" alt="" />
      </div>
      <div className="hero-right-side">
        <a href="assets/documents/resume.pdf" target="_blank"><button className="button-btn">View CV <i className="fa-solid fa-download"></i></button></a>
      </div>

      
    </div>
  );
}
