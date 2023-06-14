import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, Stack, IconButton, Box } from "@mui/material";
import { AlreadyInCart } from "../productCard/productCard.component";
import { ProductType } from "../productCard/productCard.component";
import { removeSelectedItem } from "../../store/cart/cart.action";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

interface ContainerProps {
  open: boolean;
}
const CartDropdown: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const { cart } = useSelector((store: any) => store.cart);
  const dispatch = useDispatch();
  const handleAddToCart = (item: ProductType) => {
    dispatch(addItemToCart(cart, item));
  };
  const handleRemoveFromCart = (item: ProductType) => {
    dispatch(removeItemFromCart(cart, item));
  };
  const handleRemoveSelectedItem = (item: ProductType) => {
    dispatch(removeSelectedItem(cart, item));
  };
  return (
    <Container open={isOpen}>
      {cart.length > 0 ? (
        <>
          <Box sx={{ overflow: "scroll", maxHeight: "350px" }}>
            {cart.map((item: any) => {
              return (
                <ProductItem key={item.id}>
                  <ImageContainer>
                    <ProductImage src={item.image_url} alt={item.title} />
                  </ImageContainer>
                  <Content>
                    <Typography sx={{ fontSize: 14 }} noWrap color="primary">
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="primary">
                      Rs.{item.price} x {item.quantity}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <AlreadyInCart direction="row" alignItems="center">
                        <Button
                          onClick={() => handleRemoveFromCart(item)}
                          variant="contained"
                          sx={{
                            fontSize: 10,
                            marginRight: "3px",
                            // padding: "2px",
                            minWidth: "30px",
                            height: "100%",
                          }}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          onClick={() => handleAddToCart(item)}
                          variant="contained"
                          sx={{
                            fontSize: 10,
                            marginLeft: "3px",
                            // padding: "2px",
                            minWidth: "30px",
                            height: "100%",
                          }}
                        >
                          +
                        </Button>
                      </AlreadyInCart>
                      <IconButton
                        onClick={() => handleRemoveSelectedItem(item)}
                      >
                        <DeleteButton fontSize={"25px"} />
                      </IconButton>
                    </Stack>
                  </Content>
                </ProductItem>
              );
            })}
          </Box>
          <Link to="/cart">
            <Button variant="contained" sx={{ width: "100%" }}>
              Checkout
            </Button>
          </Link>
        </>
      ) : (
        <Typography noWrap color="primary">
          Cart is empty
        </Typography>
      )}
    </Container>
  );
};

export default CartDropdown;

const Container = styled.div<ContainerProps>`
  position: absolute;
  padding: 3px;
  top: 44px;
  left: 50%;
  transform: translate(-50%, 0);
  //width: 250px;
  width: ${({ open }) => (open ? "250px" : "0")};
  height: auto;
  z-index: 1;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  overflow: hidden;
  transition: 0.5s ease-in-out;
`;

const ProductItem = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 50px;
  //border: 1px solid black;
`;

const ProductImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const Content = styled.div`
  width: calc(244px - 60px);
  padding: 2px;
  text-align: left;
`;

const DeleteButton = styled(MdDelete)`
  && {
    cursor: pointer;
    color: red;
    //height: 100%;
  }
`;
