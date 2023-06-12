export const calculateDiscount = (price: number, mrp: number) => {
  const discountPercentage = ((mrp - price) / mrp) * 100;
  const roundDiscountPercentage = discountPercentage.toFixed(0);
  return roundDiscountPercentage;
};
