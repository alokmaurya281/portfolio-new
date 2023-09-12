import React from "react";
export default function SingleProjectsCard(props) {
  return (
    <div className="project-card">
      <h1 className="white-color">{props.projectName}</h1>
      <p>
        {props.projectDesc.substring(0,250)}
      </p>
      <div className="buttons">
        <a href={props.projectLink}><button className="button-btn">View Project</button></a>
       <a href={props.projectGithubLink}><button className="button-btn">View on Github</button></a> 
      </div>
    </div>
  );
}
