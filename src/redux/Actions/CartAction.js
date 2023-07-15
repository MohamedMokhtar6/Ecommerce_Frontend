import { CREATE_Cart, Get_Cart, GET_ERROR } from "./../type";
import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";

export const getCart = (userId) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/Cart/id?userId=${userId}`);

    dispatch({
      type: Get_Cart,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createCart = (Data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/Cart", Data);
    // console.log(response.status)
    dispatch({
      type: CREATE_Cart,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error from catch " + e,
    });
  }
};
