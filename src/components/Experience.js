import React from "react";
import ExperienceSingleComponent from "./ExperienceSingleComponent";
import { useState,useEffect } from "react";
import axios from "../api/axios";
export default function Experience() {
  const url = "ExperienceData.json";
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
      await axios
      .get(url)
      .then((response) => {
          setData(response.data['data']);
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
      fetchData(url);
  }, []);
  return (
    <div id="experience" className="experience-section container">
      <h1 className="white-color">Work Experience</h1>
      <div className="experience-cards">
        {data.slice(0,3).map(item=>(
          <ExperienceSingleComponent
          key={item.id}
          companyName={item.compName}
          companyLogo={item.compLogo}
          role={item.role}
          duration={`${item.from} - ${item.to}`}
          description={item.description}
        />
        ))}
      </div>
    </div>
  );
}
