import axios from "axios";
// import { axiosWithAuth } from "../../components/axiosWithAuth";

//reducer types professor
export const PROF_REGISTER = "PROF_REGISTER";
export const PROF_LOGIN = "PROF_LOGIN";
export const PROF_FETCH_DATA = "CHEF_FETCH_DATA";
export const PROF_FETCH_DATA_LOGGED = "PROF_FETCH_DATA_LOGGED";
export const PROF_LOGGEDOUT = "PROF_LOGGEDOUT";

//reducer types student
//WIP

//redux actions => api data starts here
export const profRegister = (data, props) => dispatch => {
  axios
    .post("https://better-professor-app-1.herokuapp.com/api/auth/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      password: data.password
    })
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      data.id = response.data;
      dispatch({ type: PROF_REGISTER, payload: data });
      props.history.push("/professordashboard");
    })
    .catch(error => console.error(error));
};

export const profLogin = (data, props) => dispatch => {
  //user => professor only needs username and password to login --
  //Note: Make sure that these fields are required when creating a login
  //and register form.
  axios
    .post("https://better-professor-app-1.herokuapp.com/api/auth/login", {
      username: data.username,
      password: data.password
    })
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      localStorage.setItem("id", response.data.id);
      dispatch({ type: PROF_LOGIN, payload: response.data });
      props.history.push("/professordashboard");
    })
    .catch(error => console.error(error));
};
