import { ADD_TO_CART, APPLY_FILTER, DELETE_TO_CART, GET_PRODUCTS, SET_FILTER } from "./actions";

function applyFilter(state) {
  let copy = [...state.allProducts];
  switch (state.filter) {
    case "Price asc.":
      return copy.sort((p1, p2) => p1.price - p2.price);
    case "Price desc.":
      return copy.sort((p1, p2) => p2.price - p1.price);
    default:
      return copy;
  }
}

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
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    case APPLY_FILTER:
      return {
        ...state,
        products: applyFilter(state),
      };
    default:
      return state;
  }
};

export default reducer;