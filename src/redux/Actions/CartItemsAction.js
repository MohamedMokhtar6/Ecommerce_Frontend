import {
  CREATE_Cart_Item,
  Delete_Cart_Item,
  GET_ERROR,
  Get_Cart_Item,
  Update_Cart_Item,
} from "./../type";
import useGetData from "../../Hooks/useGetData";
import useDeleteData from "./../../Hooks/useDeleteData";
import { useInsertData } from "../../Hooks/useInsertData";
import useUpdateData from "../../Hooks/useUpdateData";

export const createCartItem = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/CartItems", formData);

    dispatch({
      type: CREATE_Cart_Item,
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

export const getCartItem = (cartId) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/CartItems/cartId?cartId=${cartId}`);

    dispatch({
      type: Get_Cart_Item,
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

export const deleteCartItem = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/CartItems?id=${id}`);

    dispatch({
      type: Delete_Cart_Item,
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

export const updateCartItem = (id, quantity) => async (dispatch) => {
  try {
    const response = await useUpdateData(
      `/api/CartItems?cartId=${id}&quantity=${quantity}`
    );

    dispatch({
      type: Update_Cart_Item,
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
