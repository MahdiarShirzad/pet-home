import React from "react";
import banner from "../../assets/img/banner-pet.png";

const ProductBanner = () => {
  return (
    <div className="mt-8 rounded-3xl">
      <img className="rounded-3xl w-full h-full" src={banner} alt="" />
    </div>
  );
};

export default ProductBanner;
