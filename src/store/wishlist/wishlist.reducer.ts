import { AnyAction } from "redux";
import { wishlistTypes } from "./wishlist.types";
const INITIAL_STATE = {
  wishlist: [],
};

export const wishlistReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case wishlistTypes.ADD_REMOVE_WISHLIST:
      return {
        ...state,
        wishlist: payload,
      };
    default:
      return state;
  }
};
