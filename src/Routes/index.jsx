import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Categories";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import AboutUs from "../pages/Policy/AboutUs";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword";
import ComingSoon from "../pages/Policy/ComingSoon";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product/" element={<ProductDetails />} />
      <Route path="/my-cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default AppRoutes;
