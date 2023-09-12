import React from "react";
import SingleCertficateCard from "./SingleCertificateComponent";
import axios from "../api/axios";
import { useState, useEffect } from "react";
export default function Certficates() {
    const url = "CertificatesData.json";
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
    return(
        <div id="certificates" className="container certificates-section">
        <h1 className="white-color">
            Certificates
        </h1>
            <div className="certificates-cards">
            {data.slice(0,3).map(item=>(
                <SingleCertficateCard key={item.id} certificateImage={item.certificateImage} certificateName={item.certificateName} courseBy={item.courseBy} certificateDesc={item.description} certificateUrl={item.certificateUrl}/>
            ))}
                
            </div>
            
        </div>
    );
}