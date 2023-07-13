import { GET_ALL_CATEGORY, GET_ERROR, GET_ONE_CATEGORY } from "./../type";
import useGetData from "../../Hooks/useGetData";

export const getAllCategory = () => async (dispatch) => {
  try {
    const res = await useGetData(`/api/Categorys`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/Categorys/id?id=${id}`);

    dispatch({
      type: GET_ONE_CATEGORY,
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
