import React from "react";
import db from "../../db.json";
import { StyledContainer } from "../home/home.component";
import { Typography, Grid } from "@mui/material";
import ProductCard from "../../components/productCard/productCard.component";
const Womens: React.FC = () => {
  const { women } = db;
  return (
    <div>
      <StyledContainer>
        <Typography
          variant="h5"
          align="left"
          sx={{ textDecoration: "underline", margin: "20px 0" }}
        >
          Womens
        </Typography>
        <Grid container spacing={2}>
          {women.map((product) => {
            return (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard {...product} />
              </Grid>
            );
          })}
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default Womens;
