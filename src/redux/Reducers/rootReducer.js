import { combineReducers } from "redux";

import productsReducer from "./ProductReducer";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import cartItemsReducer from "./cartItemsReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  allproducts: productsReducer,
  allCategory: categoryReducer,
  // allBrand: brandReducer,
  authReducer: authReducer,
  cartReducer: cartReducer,
  cartItemsReducer: cartItemsReducer,
  orderReducer: orderReducer,
});
