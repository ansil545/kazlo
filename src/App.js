import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import SignUp from "./pages/Signup.jsx";
import Home from "./pages/Home";
import ProductCard from "./section/ProductCard";
import ProductDetails from "./pages/ProductDetails";
import AddToCart from "./pages/AddToCart.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/productdetails/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
    </>
  );
}

export default App;
