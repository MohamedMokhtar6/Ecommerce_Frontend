import { combineReducers } from "redux";

import productsReducer from "./ProductReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  allproducts: productsReducer,
  allCategory: categoryReducer,
});
