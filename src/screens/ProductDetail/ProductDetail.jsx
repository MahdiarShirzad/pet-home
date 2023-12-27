import React, { useState } from "react";
import ProductDetailCard from "./ProductDetailCard";
import ProductWarranty from "./ProductWarranty";
import { NavLink, Outlet } from "react-router-dom";
import ProductDesc from "./ProductDesc";
import ProductComments from "./ProductComments";

const activeClass = (isActive) => {
  isActive ? "text-orange-300" : "";
};

const ProductDetail = () => {
  const [showDescription, setShowDescription] = useState(true);

  const handleDescriptionClick = () => {
    setShowDescription(true);
  };

  const handleCommentsClick = () => {
    setShowDescription(false);
  };

  return (
    <div className="container max-w-[1200px] mx-auto py-16 roun3">
      <ProductDetailCard />
      <ProductWarranty />
      <div className="bg-white mt-8 py-10 rounded-3xl">
        <div className="flex items-center justify-center gap-3 font-yekanReg text-lg ">
          <NavLink>
            <p onClick={handleDescriptionClick}>توضیحات</p>
          </NavLink>
          <NavLink>
            <p onClick={handleCommentsClick}>نظرات</p>
          </NavLink>
        </div>
        {showDescription ? <ProductDesc /> : <ProductComments />}
      </div>
    </div>
  );
};

export default ProductDetail;
