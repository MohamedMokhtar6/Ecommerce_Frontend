import { combineReducers } from "redux";

import productsReducer from "./ProductReducer";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";

export default combineReducers({
  allproducts: productsReducer,
  allCategory: categoryReducer,
  // allBrand: brandReducer,
  authReducer: authReducer,
});
