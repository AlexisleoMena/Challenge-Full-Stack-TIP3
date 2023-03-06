import { ADD_TO_CART, DELETE_TO_CART, GET_PRODUCTS } from "./actions";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        allProducts: [...payload]
      };
    case ADD_TO_CART:
      let { id, quantity } = payload;
      return {
        ...state,
        productsInCart: { ...state.productsInCart, [id]: quantity },
      };
    case DELETE_TO_CART:
      let { [payload]: removedProperty, ...remainingObject } = state.productsInCart;
      return {
        ...state,
        productsInCart: remainingObject,
      };
    default:
      return state;
  }
};

export default reducer;