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
} from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
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
            <HiMenuAlt2 />
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
          {!token ? (
            <>
              <ListItem button>
                <Link to={"/"}>
                  <ListItemText primary="Login" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link to={"/register"}>
                  <ListItemText primary="Signup" />
                </Link>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem button>
                <Link to={"/events"}>
                  <ListItemText primary="Events" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link to={"/addevent"}>
                  <ListItemText primary="Add Event" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link to={"/logs"}>
                  <ListItemText primary="Applied Logs" />
                </Link>
              </ListItem>
              <Divider />
              <ListItem onClick={() => {}} button>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          )}
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
    width: 200px;
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

const ShoppingCart = styled(FaShoppingCart)`
  && {
    width: 25px;
    height: auto;
  }
`;

export default Navbar;
