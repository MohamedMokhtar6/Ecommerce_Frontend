import { GET_ERROR, GET_Product_DETAILS } from "../type";
import { GET_ALL_ProductS, GET_Product_Like } from "./../type";

const inital = {
  products: [],
  loading: true,
  allProducts: [],
  oneProduct: [],
  oneProductLike: [],
};
const productsReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ERROR:
      return {
        loading: true,
        products: action.payload,
      };
    case GET_ALL_ProductS:
      return {
        ...state,
        loading: true,
        allProducts: action.payload,
      };
    case GET_Product_DETAILS:
      return {
        loading: true,
        oneProduct: action.payload,
      };
    case GET_Product_Like:
      return {
        ...state,
        loading: true,
        oneProductLike: action.payload,
      };

    default:
      return state;
  }
};
export default productsReducer;
