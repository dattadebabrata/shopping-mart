import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductType } from "..//productCard/productCard.component";
import { Typography } from "@mui/material";

interface SearchDropdownProps {
  isOpen: boolean;
  items: ProductType[];
}

interface StyledProps {
  open: boolean;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, items }) => {
  return (
    <Container open={isOpen}>
      {items.length>0? items.map((item) => {
        return (
          <StyledLink to={`/product/${item.category}/${item.id}`} key={item.id}>
            <Item>
              <ImageConteiner>
                <img src={item.image_url} alt={item.title} />
              </ImageConteiner>
              <ItemContent>
                <Typography noWrap color="primary" sx={{ fontWeight: "bold" }}>
                  {item.title}
                </Typography>
              </ItemContent>
            </Item>
          </StyledLink>
        );
      }):<Typography color="primary">No Items found</Typography>}
    </Container>
  );
};

export default SearchDropdown;

const Container = styled.div<StyledProps>`
  position: absolute;
  z-index: 1;
  width: 300px;
  top: 51px;
  left: 70px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  padding: 10px;
  max-height: ${({ open }) => (open ? "400px" : 0)};
  //border: 1px solid black;
  transition: 0.3s linear;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  overflow: scroll;
  overflow-x: hidden;
  @media (max-width: 1035px) {
    width: 250px;
  }
  @media (max-width: 980px) {
    width: 200px;
  }
  @media (max-width: 979px) {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: 0.4s linear;
  &:hover {
    border-radius: 7px;
    scale: 1.05;
    background-color: antiquewhite;
  }
`;

const ImageConteiner = styled.div`
  width: 50px;
  & > img {
    width: 50px;
  }
`;

const ItemContent = styled.div`
  overflow-x: hidden;
`;

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
  }
`;
