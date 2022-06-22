import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:8000/api/";
const addResume = (resume) => {
  console.log(resume)
     
  return axios.post(API_URL + "resume", {
    ...resume
  }, { 
    headers: {... authHeader(), "Content-Type": "application/json" },
    xsrfHeaderName: "X-XSRF-TOKEN",
    withCredentials: true
  });
};

const resumeService = {
  addResume,
};
export default resumeService;
