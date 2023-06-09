import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
