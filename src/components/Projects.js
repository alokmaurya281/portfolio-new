import React from "react";
import SingleProjectsCard from "./ProjectSingleComponent";
// import axios from "../api/axios";
// import { useState, useEffect } from "react";
import data from "../Data/ProjectsData.json";

export default function Projects() {
//   const url = "ProjectsData.json";
//   const [data, setData] = useState([]);
//   const fetchData = async (url) => {
//     await axios
//       .get(url)
//       .then((response) => {
//         setData(response.data["data"]);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   useEffect(() => {
//     fetchData(url);
//   }, []);
  return (
    <div id="projects" className="container projects-section">
      <h1 className="white-color">Projects</h1>
      <div className="project-cards">
        {data['data'].slice(0, 12).map((item) => (
          <SingleProjectsCard
            key={item.id}
            projectName={item.projectName}
            projectDesc={item.description}
            projectLink={item.liveProjectLink}
            projectGithubLink={item.githubProjectLink}
          />
        ))}

        {data['data'].length > 12 ? (
          <a
            href="https://github.com/alokmaurya281"
            rel="noreferrer"
            target="_blank"
          >
            <button className="button-btn">View More on Github</button>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
