import React from "react";

export default function ExperienceSingleComponent(props) {
  return (
    <div className="experience-card">
      <div className="white-color comp-name">
        <h1>{props.companyName}</h1>
      </div>
      <div className="comp-logo">
        <img src={props.companyLogo} alt="" />
      </div>
      <div className="experience-text">
        <h3 className="white-color">{props.role}</h3>
        <p><b>{props.duration}</b></p>
        <p>
            {props.description.substring(0,250)}
        </p>
      </div>
      
    </div>
  );
}
