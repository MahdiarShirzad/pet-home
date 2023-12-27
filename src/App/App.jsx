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
import axios from "axios";
import SignUp from "../screens/Login/SignUp";
import ProductDetail from "../screens/ProductDetail/ProductDetail";
import ProductDesc from "../screens/ProductDetail/ProductDesc";
import ProductComments from "../screens/ProductDetail/ProductComments";

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
  const [items, setItems] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(
          "http://localhost:3000/products"
        );
        setItems(productsResponse.data);

        // Fetch blogs
        const blogsResponse = await axios.get("http://localhost:3000/blogs");
        setBlogs(blogsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing items={items} blogs={blogs} />} />
          <Route path="/products" element={<Products items={items} />} />
          <Route path="product-detail" element={<ProductDetail />}>
            <Route index path="product-description" element={<ProductDesc />} />
            <Route path="product-comments" element={<ProductComments />} />
          </Route>
          <Route path="/blog" element={<Blog blogs={blogs} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
