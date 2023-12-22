import React, { useState } from "react";
import MultiCarousel from "../MultiCarousel/MultiCarousel";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../common/ProductCard/ProductCard";

const CustomDot = ({ onClick, active }) => (
  <button
    className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-opacity duration-500 ${
      active
        ? "bg-[#febf0f] w-[25px] transition-opacity duration-500"
        : "bg-gray-300 transition-opacity duration-500"
    }`}
    onClick={onClick}
  />
);

const NewProducts = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling
    });
  };

  return (
    <div className="bg-[#EBEBEB] py-10">
      <div className="container max-w-[1200px] mx-auto">
        <div className="px-10">
          <div className="flex justify-between items-center my-3 ">
            <h2 className="text-[#343a40] text-[37px] font-yekanExtraBold">
              محصولات جدید
            </h2>
            <NavLink onClick={scrollToTop} to="/products">
              <button className="flex text-white items-center gap-2 bg-[#343a40] hover:bg-[#ffaa00] px-5 py-3 rounded-full font-yekanReg">
                <p>همه محصولات</p>
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8019 6.17453H2.56566C2.00285 6.17453 1.53613 5.70782 1.53613 5.14501C1.53613 4.5822 2.00285 4.11548 2.56566 4.11548H10.8019C11.3647 4.11548 11.8314 4.5822 11.8314 5.14501C11.8314 5.70782 11.3647 6.17453 10.8019 6.17453Z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M5.31096 10.2918C5.05014 10.2918 4.78933 10.1958 4.58342 9.98985L0.465311 5.87174C0.067227 5.47366 0.067227 4.81476 0.465311 4.41667L4.58342 0.298563C4.98151 -0.099521 5.64041 -0.099521 6.03849 0.298563C6.43657 0.696647 6.43657 1.35554 6.03849 1.75363L2.64791 5.14421L6.03849 8.53479C6.43657 8.93287 6.43657 9.59177 6.03849 9.98985C5.83258 10.1958 5.57177 10.2918 5.31096 10.2918Z"
                    fill="#fff"
                  ></path>
                </svg>
              </button>
            </NavLink>
          </div>
          <p className="font-yekanReg mb-5  ">
            انواع محصولات باکیفیت برای پت های دوست داشتنی شما
          </p>
        </div>
        <div className="mt-8  mb-8">
          {/* <MultiCarousel items={items} /> */}
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style "
            focusOnSelect={true}
            rtl={true}
          >
            {items.slice(-8).map((item, i) => (
              <ProductCard posts={item} key={i} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
