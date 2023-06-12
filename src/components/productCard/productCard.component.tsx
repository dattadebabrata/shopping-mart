import React from "react";
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
} from "@mui/material";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import styled from "styled-components";
import { calculateDiscount } from "../../utils/discountCalculator";

interface ProductType {
  id: number;
  title: string;
  image_url: string;
  price: number;
  mrp: number;
  tags: string[];
  exclusive?: string | undefined;
}

const ProductCard: React.FC<ProductType> = ({
  id,
  title,
  image_url,
  price,
  mrp,
  tags,
  exclusive,
}) => {
  const alreadyCart = true;
  const alreadyWishlist = false;
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <CardMedia sx={{ height: 330 }} image={image_url} title="Product">
        {exclusive && <TagChip label={exclusive} color="success" />}
      </CardMedia>
      <Divider />
      <StyledCardContent>
        <Typography
            noWrap
          sx={{ fontSize: 16 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ display: "flex", overflow: "scroll", gap: "0 5px" }}>
            {tags.map((tag) => {
              return <StyledChip label={tag} size="small" variant="outlined" />;
            })}
          </Box>
          <IconButton aria-label="add to favorites">
            {alreadyWishlist ? (
              <BsHeartFill color="red" />
            ) : (
              <BsHeart color="red" />
            )}
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
                variant="contained"
                sx={{
                  fontSize: 10,
                  marginRight: "3px",
                  // padding: "2px",
                  minWidth: "30px",
                    height:"100%"
                }}
              >
                -
              </Button>
              <span>9</span>
              <Button
                variant="contained"
                sx={{
                  fontSize: 10,
                  marginLeft: "3px",
                  // padding: "2px",
                  minWidth: "30px",
                    height:"100%"
                }}
              >
                +
              </Button>
            </AlreadyInCart>
          ) : (
            <Button variant="contained" sx={{ fontSize: 10,marginLeft:"0 !important",padding:"6px" }}>
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

const AlreadyInCart = styled(Stack)`
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
