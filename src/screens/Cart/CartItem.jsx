import React, { useState } from "react";
import productImg from "../../assets/img/product-1.jpg";

const CartItem = ({ item }) => {
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

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="flex items-center justify-between font-yekanReg  px-6 rounded-2xl py-4 mb-5 bg-[#FEBF0F1A]">
      <div className="flex items-center justify-center flex-col gap-3">
        <img className="w-[140px] rounded-3xl" src={item.img} alt="" />
        <h3 className="mt-2">{item.title}</h3>
      </div>
      <p>
        <span> {formatPrice(item.price)}</span> <span>تومان</span>
      </p>
      <div className="flex items-center justify-center gap-8 border-2 border-gray-300 px-3 py-2 rounded-2xl">
        <button className="" onClick={increaseQuantity}>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41602 1.71582V13.8158"
              stroke="#FFAA00"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.599 7.76782H1.25195"
              stroke="#FFAA00"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <div className="">{quantity}</div>
        <button onClick={decreaseQuantity}>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.599 7.76782H1.25195"
              stroke="#FFAA00"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <div>{quantity * formatPrice(item.price)}</div>
      <button className="border-2 p-3 rounded-2xl border-gray-300">
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7663 7.31201C13.7663 7.31201 13.3343 12.675 13.0833 14.934C13.0768 15.172 13.0227 15.4063 12.9242 15.623C12.8257 15.8398 12.6847 16.0346 12.5097 16.1959C12.3346 16.3573 12.129 16.4819 11.905 16.5625C11.6809 16.6431 11.443 16.6779 11.2053 16.665C9.12829 16.702 7.04829 16.705 4.97129 16.665C4.73834 16.6729 4.50615 16.6345 4.28815 16.552C4.07014 16.4696 3.87065 16.3447 3.70121 16.1847C3.53177 16.0246 3.39575 15.8326 3.30101 15.6196C3.20627 15.4066 3.15471 15.177 3.14929 14.944C2.89729 12.665 2.46729 7.31701 2.46729 7.31701"
            stroke="#FFAA00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.8692 4.74121H1.36621"
            stroke="#FFAA00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12.2663 4.74211C11.9632 4.74202 11.6694 4.63698 11.435 4.44484C11.2006 4.2527 11.0399 3.98531 10.9803 3.68811L10.7873 2.72011C10.7293 2.50318 10.6014 2.31147 10.4232 2.17476C10.2451 2.03805 10.0268 1.964 9.80229 1.96411H6.43128C6.20675 1.964 5.98846 2.03805 5.81034 2.17476C5.63222 2.31147 5.50424 2.50318 5.44629 2.72011L5.25129 3.68711C5.19195 3.98416 5.03166 4.25152 4.79762 4.44382C4.56357 4.63612 4.2702 4.74152 3.96729 4.74211"
            stroke="#FFAA00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
