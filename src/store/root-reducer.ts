import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  user: userReducer,
});
