import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetailes from "./pages/ProductDetailes";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
//
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes basename="/Comfy-sotre">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetailes />} />
      </Routes>
    </>
  );
}

export default App;
