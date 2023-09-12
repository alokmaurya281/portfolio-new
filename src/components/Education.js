import React from "react";
import EducationSingleComponent from "./EducationSingleComponent";
import axios from "../api/axios";
import { useState, useEffect } from "react";
export default function Education() {
    const url = "EducationData.json";
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
        <div id="education" className="education-section container">
            <h1 className="white-color">Education</h1>
            <div className="cards">
            {data.map(item=>(
                <EducationSingleComponent key={item.id} logo={item.logo} collegeName={item.collegeName}  specialization={item.specialization} duration={`${item.from} - ${item.to}`} description={item.extraActivity}/>
            ))}

            </div>
           
        </div>
    );
}