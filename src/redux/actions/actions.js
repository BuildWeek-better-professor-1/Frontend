import axios from "axios";

//uncomment when using Auth. Since server gives me an 404 I can't test real data.
import { axiosWithAuth } from "../../components/axiosWithAuth";

//reducer types professor data
export const PROF_FETCH_DATA_START = "PROF_FETCH_DATA";
export const PROF_FETCH_DATA_SUCCESS = "PROF_FETCH_DATA_SUCCESS";
export const PROF_FETCH_DATA_FAILURE = "PROF_FETCH_DATA_FAILURE";

//reducer types professor
export const PROF_LOGGED_START = "PROF_LOGGED_START";
export const PROF_LOGGED_SUCCESS = "PROF_LOGGED_SUCCESS";
export const PROF_LOGGED_FAILURE = "PROF_LOGGED_FAILURE";

//dispatches a get request to get all data from a professor.
//using another API because I get 404 on API from backend.
export const getProfessors = () => dispatch => {
  dispatch({ type: PROF_FETCH_DATA_START });
  // axiosWithAuth()
  axios
    .get("https://randomuser.me/api/")
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization: localStorage.getItem("token")
    // })
    .then(response => {
      //attempt to get token... It might work when login page works again.

      dispatch({
        type: PROF_FETCH_DATA_SUCCESS,

        //specifying the data I want.
        payload: [response.data.results[0].name.first]
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: PROF_FETCH_DATA_FAILURE, payload: error });
    });
};
