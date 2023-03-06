import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const asyncGetProducts = async () => {
  try {
    let items = JSON.parse(sessionStorage.getItem('shopping'));
    if (items) {
      return ({ type: GET_PRODUCTS, payload: items });
    }
    let { data } = await axios("/products");
    sessionStorage.setItem('shopping', JSON.stringify(data))
    return { type: GET_PRODUCTS, payload: data };
  } catch (error) {
    console.error(error.message);
    return { type: GET_PRODUCTS, payload: [] };
  }
};