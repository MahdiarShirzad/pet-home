import React, { useEffect, useState } from "react";
import Landing from "../screens/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../screens/Products/Products";
import Blog from "../screens/Blog/Blog";
import AboutUs from "../screens/AboutUs/AboutUs";
import ContactUs from "../screens/ContactUs/ContactUs";
import Cart from "../screens/Cart/Cart";
import Login from "../screens/Login/Login";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/footer/Footer";
import SignUp from "../screens/Login/SignUp";
import ProductDetail from "../screens/ProductDetail/ProductDetail";
import BlogDetail from "../screens/BlogDetail/BlogDetail";
import { ProductsProvider } from "../context/ProductContext";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<p className="text-4xl">not found</p>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProductsProvider>
  );
};

export default App;
