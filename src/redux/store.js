import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/rootReducer";
const initailState = {};

const meddleware = [thunk];

const store = createStore(
  rootReducer,
  initailState,
  composeWithDevTools(applyMiddleware(...meddleware))
);

export default store;
