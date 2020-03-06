// import axios from "axios";

//uncomment when using Auth. Since server gives me an 404 I can't test real data.
import { axiosWithAuth } from "../../components/axiosWithAuth";

//reducer types professor data
export const PROF_FETCH_DATA_START = "PROF_FETCH_DATA";
export const PROF_FETCH_DATA_SUCCESS = "PROF_FETCH_DATA_SUCCESS";
export const PROF_FETCH_DATA_FAILURE = "PROF_FETCH_DATA_FAILURE";

//reducer types fetch reminders
export const FETCH_STUDENTS_START = "FETCH_STUDENTS_START";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";

//reducer types professor
export const PROF_LOGGED_START = "PROF_LOGGED_START";
export const PROF_LOGGED_SUCCESS = "PROF_LOGGED_SUCCESS";
export const PROF_LOGGED_FAILURE = "PROF_LOGGED_FAILURE";

//ADD
export const PROF_REMINDERS_ADD_START = "PROF_REMINDERS_ADD_START";
export const PROF_REMINDERS_ADD_SUCCESS = "PROF_REMINDERS_ADD_SUCCESS";
export const PROF_REMINDERS_ADD_FAILURE = "PROF_REMINDERS_ADD_FAILURE";

//DELETE
export const PROF_REMINDERS_DELETE_START = "PROF_REMINDERS_ADD_START";
export const PROF_REMINDERS_DELETE_SUCCESS = "PROF_REMINDERS_ADD_SUCCESS";
export const PROF_REMINDERS_DELETE_FAILURE = "PROF_REMINDERS_ADD_FAILURE";

//EDIT
export const PROF_REMINDERS_EDIT_START = "PROF_REMINDERS_ADD_START";
export const PROF_REMINDERS_EDIT_SUCCESS = "PROF_REMINDERS_ADD_SUCCESS";
export const PROF_REMINDERS_EDIT_FAILURE = "PROF_REMINDERS_ADD_FAILURE";

//dispatches a get request to get all data from a professor.
//using another API because I get 404 on API from backend.
export const getProfessors = id => dispatch => {
  dispatch({ type: PROF_FETCH_DATA_START });
  axiosWithAuth()
    // axios
    .get(`/api/users/professor/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log("Name of User Using Dashboard: ", [response.data.data.users]);
      //attempt to get token... It might work when login page works again.

      dispatch({
        type: PROF_FETCH_DATA_SUCCESS,

        //specifying the data I want.
        payload: response.data.data.user
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: PROF_FETCH_DATA_FAILURE, payload: error });
    });
};

export const getStudents = id => dispatch => {
  dispatch({ type: FETCH_STUDENTS_START });
  axiosWithAuth()
    .get(`/api/users/professor/${id}/students/?r=true`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log("get Reminders", response.data.data.students);
      dispatch({
        type: FETCH_STUDENTS_SUCCESS,
        payload: response.data.data.students
      });
    })
    .catch(error => {
      dispatch({ type: PROF_FETCH_DATA_FAILURE, payload: error });
    });
};

export const addReminders = () => dispatch => {
  dispatch({ type: PROF_REMINDERS_ADD_START });
  axiosWithAuth()
    .post(`/api/projects/:id/reminder`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
    .then(response => {
      //logs the data returned...
      console.log(response.data.data);
      dispatch({
        type: PROF_REMINDERS_ADD_SUCCESS,
        payload: [response.data.data]
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: PROF_REMINDERS_ADD_FAILURE, payload: error });
    });
};
