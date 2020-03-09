// import axios from "axios";

//uncomment when using Auth. Since server gives me an 404 I can't test real data.
import { axiosWithAuth } from "../../components/axiosWithAuth";

//reducer types professor data
export const PROF_FETCH_DATA_START = "PROF_FETCH_DATA";
export const PROF_FETCH_DATA_SUCCESS = "PROF_FETCH_DATA_SUCCESS";
export const PROF_FETCH_DATA_FAILURE = "PROF_FETCH_DATA_FAILURE";

//reducer types fetch students
export const FETCH_STUDENTS_START = "FETCH_STUDENTS_START";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";

//reducer types professor
export const PROF_LOGGED_START = "PROF_LOGGED_START";
export const PROF_LOGGED_SUCCESS = "PROF_LOGGED_SUCCESS";
export const PROF_LOGGED_FAILURE = "PROF_LOGGED_FAILURE";

//reducer types reminder to student *WIP*
export const PROF_REMINDERS_ADD_START = "PROF_REMINDERS_ADD_START";
export const PROF_REMINDERS_ADD_SUCCESS = "PROF_REMINDERS_ADD_SUCCESS";
export const PROF_REMINDERS_ADD_FAILURE = "PROF_REMINDERS_ADD_FAILURE";

//reducer types add new students
export const CREATE_NEW_STUDENT_START = "CREATE_NEW_STUDENT_START";
export const CREATE_NEW_STUDENT_SUCCESS = "CREATE_NEW_STUDENT_SUCCESS";
export const CREATE_NEW_STUDENT_FAILURE = "CREATE_NEW_STUDENT_FAILURE";

//reducer types delete new students
export const DELETE_STUDENT_START = "DELETE_STUDENT_START";
export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
export const DELETE_STUDENT_FAILURE = "DELETE_STUDENT_FAILURE";

//reducer types edit professor account
export const EDIT_PROFESSOR_START = "EDIT_PROFESSOR_START";
export const EDIT_PROFESSOR_SUCCESS = "EDIT_PROFESSOR_SUCCESS";
export const EDIT_PROFESSOR_FAILURE = "EDIT_PROFESSOR_FAILURE";

//--------------------- PROFESSORS ACTIONS ONLY -------------------------//

//dispatches an action to get request to get data from a unique professor.
export const getProfessors = id => dispatch => {
  dispatch({ type: PROF_FETCH_DATA_START });
  axiosWithAuth()
    // axios
    .get(`/api/users/professor/${id}`)
    .then(response => {
      // console.log("Name of User Using Dashboard: ", response.data.data.user);
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

export const addReminders = id => dispatch => {
  dispatch({ type: PROF_REMINDERS_ADD_START });
  axiosWithAuth()
    .post(`/api/projects/${id}/reminder`)
    .then(response => {
      //logs the data returned...
      console.log(response.data.data);
      dispatch({
        type: PROF_REMINDERS_ADD_SUCCESS,
        payload: [response.data.data.reminder]
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: PROF_REMINDERS_ADD_FAILURE, payload: error });
    });
};

export const editProfessor = (subject, edit) => dispatch => {
  dispatch({ type: EDIT_PROFESSOR_START });
  axiosWithAuth()
    // axios
    .put(`/api/users/professor/${subject}`, edit)
    .then(response => {
      // console.log("Name of User Using Dashboard: ", response.data.data.user);
      //attempt to get token... It might work when login page works again.

      dispatch({
        type: EDIT_PROFESSOR_SUCCESS,

        //specifying the data I want.
        payload: response.data.data.user
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: EDIT_PROFESSOR_FAILURE, payload: error });
    });
};

//-------------------- [END] PROFESSORS ACTIONS ONLY -----------------------//

//--------------------- STUDENTS ACTIONS ONLY -------------------------//

export const getStudents = id => dispatch => {
  dispatch({ type: FETCH_STUDENTS_START });
  axiosWithAuth()
    .get(`/api/users/professor/${id}/students/`)
    .then(response => {
      // console.log("get Reminders", response.data.data.students);
      dispatch({
        type: FETCH_STUDENTS_SUCCESS,
        payload: response.data.data.students
      });
    })
    .catch(error => {
      dispatch({ type: PROF_FETCH_DATA_FAILURE, payload: error });
    });
};

export const addNewStudent = (subject, adding) => dispatch => {
  console.log(subject);
  dispatch({ type: CREATE_NEW_STUDENT_START });
  axiosWithAuth()
    .post(`/api/users/professor/${subject}/students`, adding)
    .then(response => {
      dispatch({
        type: CREATE_NEW_STUDENT_SUCCESS,
        payload: response.data.data.students
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_NEW_STUDENT_FAILURE,
        payload: error
      });
    });
};

export const deleteProfessor = (subject, deleting) => dispatch => {
  console.log(subject);
  dispatch({ type: DELETE_STUDENT_START });
  axiosWithAuth()
    .delete(`/api/users/professor/${subject}`, deleting)
    .then(response => {
      dispatch({
        type: DELETE_STUDENT_SUCCESS,
        payload: response.data.data.user
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_STUDENT_FAILURE,
        payload: error
      });
    });
};

//-------------------- [END] STUDENTS ACTIONS ONLY -----------------------//
