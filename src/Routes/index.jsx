import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Categories";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import AboutUs from "../pages/Policy/AboutUs";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product/" element={<ProductDetails />} />
      <Route path="/my-cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default AppRoutes;
