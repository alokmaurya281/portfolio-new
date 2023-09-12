import axios from "axios";

export default axios.create({
    baseURL: "http://portfolio-alokm.netlify.com/Data",
    headers: {
      "Content-type": "application/json"
    }
  });