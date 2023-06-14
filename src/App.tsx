import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./components/navbar/navbar.components";
import WishList from "./routes/wishlist/wishlist.component";
import Signup from "./routes/signup/signup.component";
import Login from "./routes/login/login.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
