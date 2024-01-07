import React, { useState } from "react";
import ProductDetailCard from "./ProductDetailCard";
import ProductWarranty from "./ProductWarranty";
import { NavLink, Outlet, useParams } from "react-router-dom";
import ProductDesc from "./ProductDesc";
import ProductComments from "./ProductComments";
import SimilarProducts from "./SimilarProducts";
import { useProducts } from "../../context/ProductContext";

const activeClass = ({ isActive }) => (isActive ? "text-[#ffaa00]" : "");

const ProductDetail = () => {
  const { items } = useProducts();

  const { id } = useParams();
  const selectedProduct = items.find((item) => item.id === id);
  const [showDescription, setShowDescription] = useState(true);

  const handleDescriptionClick = () => {
    setShowDescription(true);
  };

  const handleCommentsClick = () => {
    setShowDescription(false);
  };

  return (
    <div className="container max-w-[1200px] mx-auto py-16 rounded-3xl">
      <ProductDetailCard selectedProduct={selectedProduct} />
      <ProductWarranty />
      <div className="bg-white mt-8 py-10 rounded-3xl">
        <div className="flex items-center justify-center gap-3 font-yekanReg text-lg ">
          <NavLink className={showDescription && activeClass}>
            <p onClick={handleDescriptionClick}>توضیحات</p>
          </NavLink>
          <NavLink className={!showDescription && activeClass}>
            <p onClick={handleCommentsClick}>نظرات</p>
          </NavLink>
        </div>
        {showDescription ? <ProductDesc /> : <ProductComments />}
      </div>
      <div>
        <SimilarProducts items={items} />
      </div>
    </div>
  );
};

export default ProductDetail;
