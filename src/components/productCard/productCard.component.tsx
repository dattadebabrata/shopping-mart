import React, { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Chip,
  Stack,
  Button,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styled, { keyframes } from "styled-components";
import { calculateDiscount } from "../../utils/discountCalculator";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { addRemoveToWishList } from "../../store/wishlist/wishlist.action";
import { Link } from "react-router-dom";

export interface ProductType {
  id: number;
  title: string;
  image_url: string;
  price: number;
  mrp: number;
  tags: string[];
  exclusive?: string | undefined;
  quantity?: number;
  category?: string;
}

const ProductCard: React.FC<ProductType> = (props) => {
  const { id, title, image_url, price, mrp, tags, exclusive, category } = props;
  const dispatch = useDispatch();
  const { cart } = useSelector((store: any) => store.cart);
  const { wishlist } = useSelector((store: any) => store.wishlist);
  const alreadyCart = cart.find((item: any) => item.id === id);
  const alreadyWishlist = wishlist.find((item: any) => item.id === id);
  const handleAddToCart = () => {
    dispatch(addItemToCart(cart, props));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(cart, props));
  };
  const handleWishlist = () => {
    dispatch(addRemoveToWishList(wishlist, props));
  };
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <Link to={`/product/${category}/${id}`}>
        <CardMedia sx={{ height: 330 }} image={image_url} title="Product">
          {exclusive && <TagChip label={exclusive} color="success" />}
        </CardMedia>
      </Link>
      <Divider />
      <StyledCardContent>
        <Tooltip title={title} followCursor>
          <Typography
            noWrap
            sx={{ fontSize: 16 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
        </Tooltip>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ display: "flex", overflow: "scroll", gap: "0 5px" }}>
            {tags.map((tag) => {
              return (
                <StyledChip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                />
              );
            })}
          </Box>
          <IconButton onClick={handleWishlist} aria-label="add to favorites">
            {alreadyWishlist ? <HeartFill /> : <Heart />}
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          mt={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            position: "relative",
            marginLeft: 0,
          }}
        >
          <Typography sx={{ fontSize: 12, textDecoration: "underline" }}>
            <span>Rs.{price}</span> <LineThrough>(MRP.{mrp})</LineThrough>{" "}
            <span>{calculateDiscount(price, mrp)} %off</span>
          </Typography>
          {alreadyCart ? (
            <AlreadyInCart direction="row" alignItems="center">
              <Button
                onClick={handleRemoveFromCart}
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
              <span>{alreadyCart.quantity}</span>
              <Button
                onClick={handleAddToCart}
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
          ) : (
            <Button
              onClick={handleAddToCart}
              variant="contained"
              sx={{ fontSize: 10, marginLeft: "0 !important", padding: "6px" }}
            >
              Add to Cart
            </Button>
          )}
        </Stack>
      </StyledCardContent>
    </Card>
  );
};
export default ProductCard;

const LineThrough = styled.span`
  text-decoration: line-through;
  color: grey;
`;

const StyledCardContent = styled(CardContent)`
  && {
    text-align: left;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    right: 0;
    top: -20px;
  }
`;

const StyledChip = styled(Chip)`
  && {
    border-radius: 7px;
  }
`;

const TagChip = styled(Chip)`
  && {
    border-radius: 4px;
    float: right;
    margin-top: 10px;
    margin-right: 10px;
  }
`;

export const AlreadyInCart = styled(Stack)`
  && {
    margin-left: 0;
    background-color: #1665c0;
    padding: 1px;
    color: white;
    min-width: 82.4px;
    height: 29.5px;
    border-radius: 4px;
    justify-content: space-between;
  }
`;

const scaleAnimation = keyframes`
  from {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
`;

const Heart = styled(BsHeart)`
  && {
    color: red;
    animation: ${scaleAnimation} 100ms linear;
  }
`;
const HeartFill = styled(BsHeartFill)`
  && {
    color: red;
    animation: ${scaleAnimation} 100ms linear;
  }
`;
