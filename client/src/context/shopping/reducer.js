import { GET_PRODUCTS } from "./actions";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        allProducts: [...payload]
      };
    default:
      return state;
  }
};

export default reducer;