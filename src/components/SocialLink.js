import React from "react";
export default function SocialLink(props) {
  return (
    <li className="social-link">
      <a href={props.link} target="_blank" rel="noreferrer">
        <i className={props.icon}></i>
      </a>
    </li>
  );
}
