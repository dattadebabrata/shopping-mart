import { AiFillHeart, AiOutlineHeart, AiFillDelete } from "react-icons/ai";
import { Typography, Button } from "@mui/material";
import { AlreadyInCart } from "../productCard/productCard.component";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../productCard/productCard.component";
import {
  addItemToCart,
  removeItemFromCart,
  removeSelectedItem,
} from "../../store/cart/cart.action";
import { addRemoveToWishList } from "../../store/wishlist/wishlist.action";

const CartItem: React.FC<ProductType> = (props) => {
  const {
    cart: { cart },
    wishlist: { wishlist },
  } = useSelector((store: any) => store);

  const {
    id,
    title,
    image_url,
    price,
    mrp,
    tags,
    exclusive,
    category,
    quantity,
  } = props;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(cart, props));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(cart, props));
  };

  const handleDeleteCartItem = () => {
    dispatch(removeSelectedItem(cart, props));
  };

  const handleWishlist = () => {
    dispatch(addRemoveToWishList(wishlist, props));
  };

  const alreadyWishlist = wishlist.find((item: any) => item.id === id);

  return (
    <CartItemContainer>
      <ImageContainer>
        <img src={image_url} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <Typography
          align="left"
          sx={{ fontSize: "18px", fontWeight: "bold", paddingRight: "40px" }}
          noWrap
        >
          {title}
        </Typography>
        <Typography align="left">Price: {price}</Typography>
        <Typography align="left">
          Quantity x Price: {quantity ? quantity * price : 0 * price}
        </Typography>
        <AlreadyInCart
          direction="row"
          alignItems="center"
          sx={{ width: "100px" }}
        >
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
          <span>{quantity}</span>
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
        <div>
          <Button
            onClick={handleWishlist}
            variant="contained"
            color="primary"
            endIcon={alreadyWishlist ? <AiFillHeart color='red' /> : <AiOutlineHeart />}
          >
            Save for Later
          </Button>
        </div>
        <DeleteIcon onClick={handleDeleteCartItem} />
      </ContentContainer>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 30%;
  max-width: 180px;
  height: 100%;
  //border: 1px solid blue;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  //border: 1px solid green;
  height: 100%;
  width: calc(100% - 30%);
  padding: 7px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const DeleteIcon = styled(AiFillDelete)`
  color: red;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 30px;
  width: 30px;
`;
