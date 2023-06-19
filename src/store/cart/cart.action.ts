import { cartTypes } from "./cart.types";

const addCartItem = (cartItems: any, itemToAdd: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem: any) => {
      if (cartItem.id === existingCartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: any, itemToRemove: any) => {
  const existingCartItem = cartItems.find(
    (cartItem: any) => cartItem.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem: any) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((cartItem: any) => {
    if (cartItem.id === existingCartItem.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    }
    return cartItem;
  });
};

const selectedItemToRemove = (cartItems: any, itemToRemove: any) => {
  return cartItems.filter((cartItem: any) => cartItem.id !== itemToRemove.id);
};

export const addItemToCart = (cartItems: any, itemToAdd: any) => {
  const newCartItem = addCartItem(cartItems, itemToAdd);
  return {
    type: cartTypes.ADD_TO_CART,
    payload: newCartItem,
  };
};

export const removeItemFromCart = (cartItems: any, itemToRemove: any) => {
  const newCartItem = removeCartItem(cartItems, itemToRemove);
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: newCartItem,
  };
};

export const removeSelectedItem = (cartItems: any, itemToRemove: any) => {
  const newCartItem = selectedItemToRemove(cartItems, itemToRemove);
  return {
    type: cartTypes.REMOVE_SELECTED_ITEM,
    payload: newCartItem,
  };
};

export const makeCartEmpty = () => {
  return {
    type: cartTypes.CLEAR_CART,
  };
};
