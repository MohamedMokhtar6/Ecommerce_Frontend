import {
  GET_ALL_PRODUCT_PAGE,
  GET_ALL_ProductS,
  GET_ERROR,
  GET_Product_DETAILS,
  GET_Product_Like,
} from "./../type";
import useGetData from "../../Hooks/useGetData";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/Products`);

    dispatch({
      type: GET_ALL_ProductS,
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
export const getProductsPage = (pageresult, pageNumber) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/Products?pageresult=${pageresult}&pageNumber=${pageNumber}`
    );

    dispatch({
      type: GET_ALL_PRODUCT_PAGE,
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

export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/Products/id?id=${id}`);

    await dispatch({
      type: GET_Product_DETAILS,
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

export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/Products/GetByCategoryId?CategoryId=${id}`
    );

    dispatch({
      type: GET_Product_Like,
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

export const getAllProductPage = (page, limit) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/Products?pageresult=${limit}&pageNumber=${page}`
    );
    dispatch({
      type: GET_ALL_ProductS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getAllProductSearch = (queryStraing) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/Products/search?productName=${queryStraing}`
    );
    dispatch({
      type: GET_ALL_ProductS,
      payload: res,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
