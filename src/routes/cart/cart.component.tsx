import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../home/home.component";
import { Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import CartItem from "../../components/cart-item/cart-item.component";
import { ProductType } from "../../components/productCard/productCard.component";
import TotalItemCalcualte from "../../components/total-item-calculate/total-item-calculate.component";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store: any) => store.cart);

  return (
    <StyledContainer>
      <Typography
        variant="h5"
        align="left"
        sx={{ textDecoration: "underline", margin: "20px 0" }}
      >
        Cart : {cart.length}
      </Typography>
      <Container>
        <CartContainer>
          {cart.map((item: ProductType) => (
            <CartItem {...item} />
          ))}
        </CartContainer>
        <TotalContainer>
          <TotalItemCalcualte>
            <Link to="/checkout">
              <Button fullWidth variant="contained">
                Checkout
              </Button>
            </Link>
          </TotalItemCalcualte>
        </TotalContainer>
      </Container>
    </StyledContainer>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CartContainer = styled.div`
  max-height: 700px;
  width: 65%;
  overflow: scroll;
  padding: 5px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const TotalContainer = styled.div`
  width: calc(100% - 65%);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
