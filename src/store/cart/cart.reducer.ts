import { AnyAction } from "redux";
import { cartTypes } from "./cart.types";
const INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cart: payload,
      };
    case cartTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload,
      };
    case cartTypes.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        cart: payload,
      };
    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
