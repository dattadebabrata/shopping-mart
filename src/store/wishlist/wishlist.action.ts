import { wishlistTypes } from "./wishlist.types";
import { ProductType } from "../../components/productCard/productCard.component";

const makeWishList = (wishlist: ProductType[], itemToAdd: ProductType) => {
  const isExist = wishlist.find((item: ProductType) => {
    return item.id === itemToAdd.id;
  });
  if (isExist) {
    return wishlist.filter((item: ProductType) => {
      return item.id !== itemToAdd.id;
    });
  }
  return [...wishlist, itemToAdd];
};

export const addRemoveToWishList = (
  wishList: ProductType[],
  itemToAdd: ProductType
) => {
  const newWishList: ProductType[] = makeWishList(wishList, itemToAdd);
  return {
    type: wishlistTypes.ADD_REMOVE_WISHLIST,
    payload: newWishList,
  };
};
