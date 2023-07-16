import { useInsertData } from "../../Hooks/useInsertData";
import { Create_Order, GET_ERROR } from "../type";

export const createOrder = (cartId, Data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/Order?cartId=${cartId}`, Data);
    // console.log(response.status)
    dispatch({
      type: Create_Order,
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
