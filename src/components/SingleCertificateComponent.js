import React from "react";
export default function SingleCertficateCard(props) {
  return (
    <div className="certificate-card">
      <div className="certificate-image">
        <img src={props.certificateImage} alt="" />
      </div>

      <h1 className="white-color">{props.certificateName}</h1>
      <p className="subtitle">Course By - {props.courseBy}</p>
      <p>
        {props.certificateDesc.substring(0,180)}
      </p>
      <a href={props.certificateUrl} target="_blank" rel="noreferrer"><button className="button-btn">View Certificate</button></a>
    </div>
  );
}
