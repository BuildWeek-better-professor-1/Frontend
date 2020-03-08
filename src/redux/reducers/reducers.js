//Types will live here
import {
  PROF_FETCH_DATA_START,
  PROF_FETCH_DATA_SUCCESS,
  PROF_FETCH_DATA_FAILURE,
  // PROF_LOGGED_START,
  // PROF_LOGGED_SUCCESS,
  // PROF_LOGGED_FAILURE
  FETCH_STUDENTS_START,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  PROF_REMINDERS_ADD_START,
  PROF_REMINDERS_ADD_SUCCESS,
  PROF_REMINDERS_ADD_FAILURE,
  CREATE_NEW_STUDENT_START,
  CREATE_NEW_STUDENT_SUCCESS,
  CREATE_NEW_STUDENT_FAILURE,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE
} from "../actions/actions";

//initial state => Before it changes when getting a promise from the API.
export const initialState = {
  //professor state
  professor: [],

  //students state
  students: [],

  //prof to student reminder state
  reminder: [],

  //sees if data is fetch initial state: false
  isFetching: false
};

//main root reducer ---> Will make it more readable in later update...
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //starts the login for Professor
    // case PROF_LOGGED_START:
    //   return {
    //     ...state
    //   };

    //starts the request for data of professor
    case PROF_FETCH_DATA_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    // if data is returned successfully it will give the
    //action.payload
    case PROF_FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: true,
        professor: action.payload
      };
    //if promise call fails then return an error inside this type/action.
    case PROF_FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FETCH_STUDENTS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: true,
        students: action.payload
      };
    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        error: "",
        isFetching: false
      };
    case PROF_REMINDERS_ADD_START:
      return {
        //simply returns copied state
        ...state,
        error: "",
        isFetching: true
      };
    case PROF_REMINDERS_ADD_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: "",
        //will load copied state into the action payload...
        reminder: action.payload
      };
    case PROF_REMINDERS_ADD_FAILURE:
      return {
        ...state,
        error: "",
        isFetching: false
      };

    case CREATE_NEW_STUDENT_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case CREATE_NEW_STUDENT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: true,
        student: action.payload
      };
    case CREATE_NEW_STUDENT_FAILURE:
      return {
        ...state,
        error: "",
        isFetching: false
      };
    case DELETE_STUDENT_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: true,
        professor: action.payload
      };
    case DELETE_STUDENT_FAILURE:
      return {
        ...state,
        error: "",
        isFetching: false
      };
    default:
      return state;
  }
};
