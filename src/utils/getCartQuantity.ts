export const getCartQuantity = (cartItems: any) => {
  return cartItems.reduce((quantity: any, cartItem: any) => {
    return quantity + cartItem.quantity;
  }, 0);
};
