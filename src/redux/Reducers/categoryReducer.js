import { GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "../type";

const inital = {
  category: [],
  loading: true,
  oneCategory: [],
};
const categoryReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        category: action.payload,
      };
    case GET_ONE_CATEGORY:
      return {
        loading: true,
        oneCategory: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;
