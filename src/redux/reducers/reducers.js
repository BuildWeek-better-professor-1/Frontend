//Types will live here

import {
  PROF_REGISTER,
  PROF_LOGIN,
  PROF_FETCH_DATA,
  PROF_FETCH_DATA_LOGGED,
  PROF_LOGGEDOUT
} from "../actions/actions";

//init state
export const initialState = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  }
};

//main root reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROF_REGISTER:
      return {
        ...state,
        ...state.user,
        user: action.payload
      };
    case PROF_LOGIN:
      return {
        ...state,
        ...state.user,
        user: action.payload
      };
    case PROF_FETCH_DATA:
      return state;
    case PROF_FETCH_DATA_LOGGED:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          username: action.payload.username,
          password: action.payload.password
        }
      };
    case PROF_LOGGEDOUT:
      return state;
    default:
      return state;
  }
};
