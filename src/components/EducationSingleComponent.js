import React from "react";
export default function EducationSingleComponent(props) {
  return (
    <div className="card">
      <div className="card-logo">
        <img src={props.logo} alt="" />
      </div>
      <div className="card-text">
        <h1>{props.collegeName}</h1>
        <h3>{props.specialization}</h3>
        <p>{props.duration}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
