import React from "react";
import SingleProjectsCard from "./ProjectSingleComponent";
import axios from "../api/axios";
import { useState, useEffect } from "react";
export default function Projects() {
  const url = "ProjectsData.json";
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        setData(response.data["data"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div id="projects" className="container projects-section">
      <h1 className="white-color">Projects</h1>
      <div className="project-cards">
        {data.slice(0, 6).map((item) => (
          <SingleProjectsCard
            key={item.id}
            projectName={item.projectName}
            projectDesc={item.description}
            projectLink={item.liveProjectLink}
            projectGithubLink={item.githubProjectLink}
          />
        ))}

        {data.length > 6 ? (
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
