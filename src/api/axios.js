import axios from "axios";

export default axios.create({
    baseURL: "https://portfolio-alokm.netlify.com/Data",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "https://portfolio-alokm.netlify.com",
      'Origin': 'https://portfolio-alokm.netlify.com'
    },
   
  });