import React, { useRef } from "react";
import ProductCard from "../common/ProductCard/ProductCard";

const MultiCarousel = ({ items }) => {
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden mt-10">
      <div
        className="flex gap-8"
        ref={carouselRef}
        style={{
          scrollBehavior: "smooth",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: `${270 * items.length}px`, // Fixed width for the card container
        }}
      >
        {items.map((posts, index) => (
          <div key={index} style={{ width: "270px" }}>
            {" "}
            {/* Adjust width here */}
            <ProductCard posts={posts} index={index} />
          </div>
        ))}
      </div>
      <div className="flex mt-10 items-center justify-center gap-4">
        {/* Previous and Next buttons */}
        <button
          className=" z-10 bg-white p-2 rounded-full shadow-md transform -translate-y-1/2 text-gray-600 focus:outline-none"
          onClick={nextSlide}
        >
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          className="  z-10 bg-white p-2 rounded-full shadow-md transform -translate-y-1/2 text-gray-600 focus:outline-none"
          onClick={prevSlide}
        >
          <svg
            className="w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                fill="#000000"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MultiCarousel;
