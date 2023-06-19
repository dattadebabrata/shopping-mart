import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./components/navbar/navbar.components";
import WishList from "./routes/wishlist/wishlist.component";
import Signup from "./routes/signup/signup.component";
import Login from "./routes/login/login.component";
import Account from "./routes/account/account.component";
import PrivateRoute from "./routes/private-route/private-route.component";
import Mens from "./routes/mens/Mens.component";
import Womens from "./routes/womens/womens.component";
import Kids from "./routes/kids/kids.component";
import ProductDetails from "./routes/product-details/product-details.component";
import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import Cart from "./routes/cart/cart.component";
import Checkout from "./routes/checkout/checkout.component";

function App() {
  const { currentUser, error } = useSelector((store: any) => store.user);
  const [toastMessage, setToastMessage] = React.useState("");
  useEffect(() => {
    if (currentUser) {
      setToastMessage(`Welcome ${currentUser.displayName} 🙂`);
    } else if (error) {
      setToastMessage(error.code);
    }
  }, [currentUser, error]);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToastMessage("");
  };
  return (
    <div className="App">
      <NavBar />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={toastMessage !== ""}
        onClose={handleClose}
        message={toastMessage}
        key={"top" + "center"}
        autoHideDuration={2000}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/product/:category/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
