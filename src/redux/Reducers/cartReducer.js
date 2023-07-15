import { Get_Cart, CREATE_Cart, GET_ERROR } from "../type";

const inital = {
  cart: [],
  loading: true,
};
const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case Get_Cart:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        cart: action.payload,
      };
    case CREATE_Cart:
      return {
        loading: true,
        cart: action.payload,
      };
    default:
      return state;
  }
};
export default cartReducer;
