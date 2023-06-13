import React from "react";
import Carousal from "../../components/carousal/carousal.component";
import styled from "styled-components";
import { Container, Typography, Grid } from "@mui/material";
import ProductCard from "../../components/productCard/productCard.component";
import db from "../../db.json";
const Home: React.FC = () => {
  const { sliding_images, best_sellers, deals_of_the_day } = db;
  return (
    <div>
      <StyledContainer>
        <Carousal imageList={sliding_images} intervalTime={5000} />
      </StyledContainer>
      <StyledContainer>
        <Typography
          variant="h5"
          align="left"
          sx={{ textDecoration: "underline", margin: "20px 0" }}
        >
          Best Seller
        </Typography>
        {/*Grid items best sellers*/}
        <Grid container spacing={2}>
          {best_sellers.map((product) => {
            return (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard {...product} />
              </Grid>
            );
          })}
        </Grid>
      </StyledContainer>
      {/*Deals of the day*/}
      <StyledContainer>
        <Typography
          variant="h5"
          align="left"
          sx={{ textDecoration: "underline", margin: "20px 0" }}
        >
          Deals of the Day
        </Typography>
        <Grid container spacing={2}>
          {deals_of_the_day.map((product) => {
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

export default Home;

const StyledContainer = styled(Container)`
  && {
    padding: 5px 10px;
    margin: 20px 0;
    max-width: 100%;
  }
`;
