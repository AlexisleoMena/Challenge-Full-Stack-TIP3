import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  allProducts: [],
  products: [],
}

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => (
  <ShoppingContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ShoppingContext.Provider>
);

const useStore = () => useContext(ShoppingContext)[0];
const useDispatch = () => useContext(ShoppingContext)[1];

export { ShoppingContext, useStore, useDispatch };
export default ShoppingProvider;
