import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});
