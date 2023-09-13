import React from "react";
import SkillSingleComponent from "./SkillSingleComponent";
import data from "../Data/SkillsData.json";

// import axios from "../api/axios";
// import { useState, useEffect } from "react";

export default function Skills() {
    // const url = "SkillsData.json";
    // const [data, setData] = useState([]);
    // const fetchData = async (url) => {
    //     await axios
    //     .get(url)
    //     .then((response) => {
    //         setData(response.data['data']);
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching data:", error);
    //     });
    // };

    // useEffect(() => {
    //     fetchData(url);
    // }, []);
  return (
    <div id="skills" className="skills-main container">
      <h1 className="white-color">My Skills</h1>
      <p className="para-color">
        I'm a crazy full stack software developer who wants to explore every
        technolgies.Here are my skills...
      </p>
      <div className="skills">
      {data['data'].map(item=>(
        <SkillSingleComponent key={item.id} icon={item.logo} skillName={item.skillName} />
      ))}
      </div>
    </div>
  );
}
