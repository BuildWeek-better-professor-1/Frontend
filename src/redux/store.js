import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../redux/reducers/reducers";
import thunk from "redux-thunk";

//Redux devtools import
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
