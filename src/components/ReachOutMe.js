import React from "react";
import SocialLink from "./SocialLink";
export default function ReachOutMe() {
  return (
    <div id="contact" className="container reach-out">
      <div className="contact-left">
            <h1 className="white-color">Reach Out to me!</h1>
            <p className="para-color uppercase">
            You want to have some discussion with me or want any help or to
            discuss any project just reach out to me.
            </p>
            <div className="social-links">
              <SocialLink link="https://github.com/alokmaurya281" icon="fa-brands fa-github" />
                <SocialLink link="https://www.linkedin.com/in/alok-maurya-1437481b3/" icon="fa-brands fa-linkedin" />
                <SocialLink link="https://www.twitter.com/its_alok__m" icon="fa-brands fa-twitter" />
                <SocialLink link="https://www.facebook.com/its_alok__m" icon="fa-brands fa-facebook" />
                <SocialLink link="https://www.instagram.com/its_alok__m" icon="fa-brands fa-instagram" />
                <SocialLink link="mailto:snmaurya10275@gmail.com" icon="fa-solid fa-envelope"></SocialLink>
            </div>
            <div className="contact-address">
                <p><i className="fa-solid fa-location-dot"></i>  New Delhi, India</p>
            </div>
        </div>
        <div className="profile-image">
          <img src="assets/images/profile-image.jpg" alt="" />
        </div>
      </div>
    
  );
}
