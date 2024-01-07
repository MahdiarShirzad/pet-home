import React from "react";
import Header from "../../components/common/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Categories/Category";
import NewProducts from "../../components/NewProducts/NewProducts";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import CustomersComments from "../../components/CustomersComments/CustomersComments";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/common/footer/Footer";
import { useProducts } from "../../context/ProductContext";

const Landing = () => {
  const { items, blogs } = useProducts();

  return (
    <>
      <Carousel />
      <Category />
      <NewProducts items={items} />
      <AboutUsSection />
      <CustomersComments />
      <BlogSection blogs={blogs} />
    </>
  );
};

export default Landing;
