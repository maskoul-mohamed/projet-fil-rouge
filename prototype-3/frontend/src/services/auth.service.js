import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/";
const register = (name, email, password) => {
  
     
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
  }, { 
    xsrfHeaderName: "X-XSRF-TOKEN", // change the name of the header to "X-XSRF-TOKEN" and it should works
    withCredentials: true
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    },
    { 
      xsrfHeaderName: "X-XSRF-TOKEN", // change the name of the header to "X-XSRF-TOKEN" and it should works
      withCredentials: true
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;
