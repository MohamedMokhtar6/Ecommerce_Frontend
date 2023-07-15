import { useInsertData } from "../../Hooks/useInsertData";
import { CREATE_USER, LOGIN_USER } from "../type";

export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/Auth/Register", data);
    // console.log(response.status)
    dispatch({
      type: CREATE_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_USER,
      payload: e.response,
    });
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/Auth/SignIn`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};
