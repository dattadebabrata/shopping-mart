import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductType } from "../../components/productCard/productCard.component";
import { StyledContainer } from "../home/home.component";
import { Typography, Grid, Box, Button } from "@mui/material";
import ProductCard from "../../components/productCard/productCard.component";
import { Link } from "react-router-dom";
const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((store: any) => store.wishlist);
  console.log(wishlist);
  return (
    <div>
      <StyledContainer>
        <Typography
          variant="h5"
          align="left"
          sx={{ textDecoration: "underline", margin: "20px 0" }}
        >
          Wishlist : {wishlist.length}
        </Typography>
        {wishlist.length > 0 ? (
          <Grid container spacing={2}>
            {wishlist.map((product: ProductType) => {
              return (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard {...product} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Typography variant="h5" align="center" fontWeight="bold" mb={2}>
              The Wishlist is Empty
            </Typography>
            <Link to="/">
              <Button variant="contained">Continue Shopping</Button>
            </Link>
          </Box>
        )}
      </StyledContainer>
    </div>
  );
};
export default Wishlist;
