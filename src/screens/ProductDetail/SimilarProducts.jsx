import React, { useState } from "react";
import ProductCard from "../../components/common/ProductCard/ProductCard";

const SimilarProducts = ({ items }) => {
  return (
    <div className="mt-8 bg-gray-100 py-10 px-8 rounded-3xl">
      <h2 className="font-yekanExtraBold text-2xl">محصولات مشابه</h2>
      <div className="flex flex-wrap justify-between my-6">
        {items.slice(-4).map((item, i) => (
          <ProductCard posts={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
