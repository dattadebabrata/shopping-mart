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
  ClickAwayListener,
  TextField,
  Input,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getCartQuantity } from "../../utils/getCartQuantity";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CategoryDropdown from "../category-dropdown/category-dropdown.component";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { BsHeartHalf } from "react-icons/bs";
import { MdManageAccounts, MdEmojiEvents } from "react-icons/md";
import { SiGravatar } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import { signOutStart } from "../../store/user/user.action";
import { Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.component";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cart: userCart, user } = useSelector((store: any) => store);
  const { cart } = userCart;
  const { currentUser } = user;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [productMenu, setProductMenu] = React.useState(false);
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

  const [isOpen, setIsOpen] = React.useState(false);
  const handleDropdownMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDropdownProducts = () => {
    setProductMenu((prev) => !prev);
  };

  const handleLogOut = () => {
    dispatch(signOutStart());
  };

  return (
    <>
      <StyledNavbar>
        <StyledToolbar>
          <Link to={"/"}>
            <StyledBox>
              <img
                src="https://bloggytalky.com/wp-content/uploads/2017/07/create-a-free-logo-design-logo-designs-design-a-free-logo-design-a-free-logo-alltech-just-free-logo-design.png"
                alt="logo"
              />
            </StyledBox>
          </Link>
          <RowLinks>
            <SearchBar />
            <Link to={"/"}>
              <StyledButton color="inherit">Home</StyledButton>
            </Link>
            <ClickAwayListener onClickAway={() => setProductMenu(false)}>
              <Box
                sx={{
                  display: "inline",
                  margin: 0,
                  padding: 0,
                  position: "relative",
                }}
              >
                <StyledButton onClick={handleDropdownProducts} color="inherit">
                  All Products
                </StyledButton>
                <CategoryDropdown
                  isOpen={productMenu}
                  onClose={setProductMenu}
                />
              </Box>
            </ClickAwayListener>
            <Link to={"/wishlist"}>
              <StyledButton color="inherit">Wish List</StyledButton>
            </Link>
            {/*<Link to={"/account"}>*/}
            {/*  <StyledButton color="inherit">Account</StyledButton>*/}
            {/*</Link>*/}
          </RowLinks>
          <RowLinks>
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
              <Box
                sx={{
                  position: "relative",
                  display: "inline",
                  minWidth: "25px",
                }}
              >
                <Button
                  onClick={handleDropdownMenu}
                  color="inherit"
                  sx={{ minWidth: "25px" }}
                >
                  <Badge
                    sx={{ marginRight: "10px" }}
                    badgeContent={getCartQuantity(cart) || 0}
                    max={9}
                    color="primary"
                  >
                    <ShoppingCart />
                  </Badge>
                </Button>
                <CartDropdown isOpen={isOpen} />
              </Box>
            </ClickAwayListener>
            {currentUser ? (
              <>
                <Link to="/account">
                  <StyledButton color="inherit">
                    {currentUser.displayName}
                  </StyledButton>
                </Link>
                <StyledButton onClick={handleLogOut} color="inherit">
                  Logout
                </StyledButton>
              </>
            ) : (
              <Link to="/login">
                <StyledButton color="inherit">Login</StyledButton>
              </Link>
            )}
          </RowLinks>
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuBar />
          </StyledIconButton>
        </StyledToolbar>
      </StyledNavbar>
      {/*Drawer for small screen*/}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
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
    position: absolute;
    right: 10px;
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
      justify-content: center;
    }
  }
`;

const RowLinks = styled.div`
  && {
    position: relative;
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
