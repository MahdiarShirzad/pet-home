import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const ProductCard = ({ posts, index, currentPosts }) => {
  const { id } = posts;
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div
      className="w-[270px] h-[422px] px-1 block text-center rounded-3xl items-center bg-white cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{}}
    >
      <Link to={`${id}`}>
        <img
          src={posts.img}
          alt={posts.title}
          className="w-6/7 mx-auto mt-3 h-auto rounded-full mb-2 transform-gpu duration-300"
          style={{
            transition: "transform 0.3s",
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          }}
        />
      </Link>
      <p className="font-yekanSemiBold text-[18px] mt-3 text-right px-6">
        {posts.title}
      </p>
      <div>
        <div className="flex items-center justify-between gap-1 my-6 px-6 text-[#FFAA00]">
          <div className="flex gap-1">
            <span className="font-yekanBold text-[18px]">
              {formatPrice(posts.price)}
            </span>
            <span className="font-yekanReg">تومان</span>
          </div>
          <div className="flex items-center gap-1 font-yekanSemiBold">
            <span className="text-black text-lg">{posts.score}</span>
            <span>
              <svg
                className="w-[18px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#fcc419"
                stroke="#fcc419"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="mb-5 w-full px-4 flex items-center justify-between">
        <button className="flex items-center p-3 rounded-2xl  bg-[#FEBF0F26] ">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 21.25C15.9665 21.25 16.75 20.4665 16.75 19.5C16.75 18.5335 15.9665 17.75 15 17.75C14.0335 17.75 13.25 18.5335 13.25 19.5C13.25 20.4665 14.0335 21.25 15 21.25Z"
              fill="#FFAA00"
            ></path>
            <path
              d="M7 21.25C7.9665 21.25 8.75 20.4665 8.75 19.5C8.75 18.5335 7.9665 17.75 7 17.75C6.0335 17.75 5.25 18.5335 5.25 19.5C5.25 20.4665 6.0335 21.25 7 21.25Z"
              fill="#FFAA00"
            ></path>
            <path
              d="M3.59 2.69L3.39 5.14C3.35 5.61 3.72 6 4.19 6H19.5C19.92 6 20.27 5.68 20.3 5.26C20.43 3.49 19.08 2.05 17.31 2.05H5.02C4.92 1.61 4.72 1.19 4.41 0.84C3.91 0.31 3.21 0 2.49 0H0.75C0.34 0 0 0.34 0 0.75C0 1.16 0.34 1.5 0.75 1.5H2.49C2.8 1.5 3.09 1.63 3.3 1.85C3.51 2.08 3.61 2.38 3.59 2.69Z"
              fill="#FFAA00"
            ></path>
            <path
              d="M19.2601 7.5H3.92005C3.50005 7.5 3.16005 7.82 3.12005 8.23L2.76005 12.58C2.62005 14.29 3.96005 15.75 5.67005 15.75H16.7901C18.2901 15.75 19.6101 14.52 19.7201 13.02L20.0501 8.35C20.0901 7.89 19.7301 7.5 19.2601 7.5Z"
              fill="#FFAA00"
            ></path>
          </svg>
        </button>

        <div className="flex gap-1 items-center font-yekanBold">
          <button
            className="px-2  rounded-full bg-[#FEBF0F26]"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <input
            type="number"
            className="w-12 text-center rounded-2xl bg-[#FEBF0F26]"
            value={quantity}
            readOnly
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
            }}
          />
          <button
            className="px-2 font-yekanBold rounded-full bg-[#FEBF0F26]"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
