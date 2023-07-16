import { Create_Order, GET_ERROR } from "../type";

const inital = {
  order: [],
  loading: true,
};
const orderReducer = (state = inital, action) => {
  switch (action.type) {
    case Create_Order:
      return {
        ...state,
        order: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        order: action.payload,
      };

    default:
      return state;
  }
};
export default orderReducer;
