import {
  CREATE_Cart_Item,
  Delete_Cart_Item,
  GET_ERROR,
  Get_Cart_Item,
  Update_Cart_Item,
} from "../type";

const inital = {
  cartItem: [],
  updateCartItem: [],
  deleteCartItem: [],
  loading: true,
};
const cartItemsReducer = (state = inital, action) => {
  switch (action.type) {
    case Get_Cart_Item:
      return {
        ...state,
        cartItem: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        cart: action.payload,
      };
    case CREATE_Cart_Item:
      return {
        loading: true,
        cartItem: action.payload,
      };
    case Update_Cart_Item:
      return {
        loading: true,
        updateCartItem: action.payload,
      };
    case Delete_Cart_Item:
      return {
        loading: true,
        deleteCartItem: action.payload,
      };
    default:
      return state;
  }
};
export default cartItemsReducer;
