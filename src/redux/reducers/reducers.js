//Types will live here
import {
  PROF_FETCH_DATA_START,
  PROF_FETCH_DATA_SUCCESS,
  PROF_FETCH_DATA_FAILURE,
  PROF_LOGGED_START,
  PROF_LOGGED_SUCCESS,
  PROF_LOGGED_FAILURE
} from "../actions/actions";

//initial state => Before it changes when getting a promise from the API.
export const initialState = {
  professor: [],
  isFetching: false
};

//main root reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //starts the login for Professor
    case PROF_LOGGED_START:
      return {
        ...state
      };

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
    default:
      return state;
  }
};
