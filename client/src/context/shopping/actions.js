import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_TO_CART = "DELETE_TO_CART";
export const SET_FILTER = "SET_FILTER";
export const APPLY_FILTER = "APPLY_FILTER";

export const asyncGetProducts = async () => {
  try {
    let items = JSON.parse(sessionStorage.getItem("shopping"));
    if (items) {
      return { type: GET_PRODUCTS, payload: items };
    }
    let { data } = await axios("/products");
    sessionStorage.setItem("shopping", JSON.stringify(data));
    return { type: GET_PRODUCTS, payload: data };
  } catch (error) {
    console.error(error.message);
    return { type: GET_PRODUCTS, payload: [] };
  }
};

export const addToCart = (id, quantity) => ({
  type: ADD_TO_CART,
  payload: { id, quantity },
});
export const deleteToCart = (id) => ({ type: DELETE_TO_CART, payload: id });

export const setFilter = (value) => ({ type: SET_FILTER, payload: value });
export const applyFilter = () => ({ type: APPLY_FILTER });
