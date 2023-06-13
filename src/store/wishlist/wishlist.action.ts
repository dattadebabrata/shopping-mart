import { wishlistTypes } from "./wishlist.types";

const makeWishList = (wishlist: any, itemToAdd: any) => {
  const isExist = wishlist.find((item: any) => {
    return item.id === itemToAdd.id;
  });
  if (isExist) {
    return wishlist.filter((item: any) => {
      return item.id !== itemToAdd.id;
    });
  }
  return [...wishlist, itemToAdd];
};

export const addRemoveToWishList = (wishList: any, itemToAdd: any) => {
  const newWishList = makeWishList(wishList, itemToAdd);
  return {
    type: wishlistTypes.ADD_REMOVE_WISHLIST,
    payload: newWishList,
  };
};
