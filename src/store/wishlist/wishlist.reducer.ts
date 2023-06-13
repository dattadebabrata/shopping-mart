import { AnyAction } from "redux";
import { wishlistTypes } from "./wishlist.types";
import { ProductType } from "../../components/productCard/productCard.component";
const INITIAL_STATE = {
  wishlist: [] as ProductType[],
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
