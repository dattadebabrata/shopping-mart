import React from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Badge,
  ListItemIcon,
} from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { BsHeartHalf } from "react-icons/bs";
import { MdManageAccounts, MdEmojiEvents } from "react-icons/md";
import { SiGravatar } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const token = true;

  return (
    <>
      <StyledNavbar>
        <StyledToolbar>
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuBar />
          </StyledIconButton>
          <Link to={"/"}>
            <StyledBox>
              <img
                src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
                alt="logo"
              />
            </StyledBox>
          </Link>
          <RowLinks>
            <Link to={"/"}>
              <StyledButton color="inherit">Home</StyledButton>
            </Link>
            <Link to={"/allproducts"}>
              <StyledButton color="inherit">All Products</StyledButton>
            </Link>
            <Link to={"/wishlist"}>
              <StyledButton color="inherit">Wish List</StyledButton>
            </Link>
            <Link to={"/account"}>
              <StyledButton color="inherit">Account</StyledButton>
            </Link>
          </RowLinks>
          <RowLinks>
            <Link to={"/cart"}>
              <Badge
                sx={{ marginRight: "10px" }}
                badgeContent={60}
                max={9}
                color="primary"
              >
                <ShoppingCart />
              </Badge>
            </Link>
            <StyledButton color="inherit">Debabrata Datta</StyledButton>
            <StyledButton color="inherit">Logout</StyledButton>
          </RowLinks>
        </StyledToolbar>
      </StyledNavbar>
      {/*Drawer for small screen*/}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <DrawerList>
          <>
            <StyledLink to={"/"}>
              <ListItem button>
                <ListItemIcon>
                  <AiFillHome />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </StyledLink>

            <StyledLink to={"/allproducts"}>
              <ListItem button>
                <ListItemIcon>
                  <GiClothes />
                </ListItemIcon>
                <ListItemText primary="All Products" />
              </ListItem>
            </StyledLink>

            <StyledLink to={"/wishlist"}>
              <ListItem button>
                <ListItemIcon>
                  <BsHeartHalf />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItem>
            </StyledLink>

            <StyledLink to={"/account"}>
              <ListItem button>
                <ListItemIcon>
                  <MdManageAccounts />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItem>
            </StyledLink>

            <StyledLink to={"/events"}>
              <ListItem button>
                <ListItemIcon>
                  <MdEmojiEvents />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItem>
            </StyledLink>

            <Divider />

            <StyledLink to={""}>
              <ListItem button>
                <ListItemIcon>
                  <FaShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
            </StyledLink>

            <ListItem button>
              <ListItemIcon>
                <SiGravatar />
              </ListItemIcon>
              <ListItemText primary="Debabrata Datta" />
            </ListItem>

            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <BiLogOut />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        </DrawerList>
      </Drawer>
    </>
  );
};

const StyledNavbar = styled(AppBar)`
  && {
    background-color: #1e90ff;
    color: white;
    position: static;
    box-shadow: none;
  }
`;

const StyledBox = styled(Box)`
  && {
    justify-self: left;
    width: 60px;
    cursor: pointer;
    & > img {
      width: 100%;
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const DrawerList = styled(List)`
  && {
    width: 350px;
    padding: 0;
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    justify-content: space-between;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
`;

const RowLinks = styled.div`
  && {
    @media (max-width: 768px) {
      display: none;
    }
  }
  > a {
    color: white !important;
  }
`;

const StyledLink = styled(Link)`
  && {
    text-decoration: none;
    color: black !important;
    & :hover {
      transition: 0.3s;
      letter-spacing: 1px;
    }
  }
`;

const ShoppingCart = styled(FaShoppingCart)`
  && {
    width: 25px;
    height: auto;
  }
`;

const MenuBar = styled(HiMenuAlt2)`
  && {
    width: 40px;
    margin-right: 10px;
    height: auto;
  }
`;

export default Navbar;
