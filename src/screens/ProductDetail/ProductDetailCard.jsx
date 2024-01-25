import React, { useState } from "react";

const ProductDetailCard = ({ selectedProduct }) => {
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
  console.log(selectedProduct);

  return (
    <div className="flex justify-between px-28 bg-white py-10  rounded-3xl font-yekanReg">
      <div className="w-1/4">
        <img className="w-full" src={selectedProduct.img} alt="" />
      </div>
      <div>
        <h1 className="text-xl font-yekanBold border-b-2 pb-4">
          {selectedProduct.title}
        </h1>
        <p className="flex items-center gap-1 mt-6">
          <svg
            class="w-[18px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#fcc419"
            stroke="#fcc419"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span>{selectedProduct.score}</span>
        </p>
        <p className="flex my-4 items-center gap-1">
          <span className="text-gray-400">موجودی:</span>
          <span>{selectedProduct.stock}</span>
          <span>عدد در انبار</span>
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">توضیحات محصول:</p>
          <p>
            غذای خشک ۴ کیلویی تیدا مناسب برای سگ های بالغ (کربوهیدرات بیشتر و
            پروتئین کمتر)
          </p>
          <div className="flex items-center gap-2">
            <p className="text-gray-400">قیمت واحد:</p>
            <p className="font-yekanBold text-[#FFAA00]">
              {formatPrice(selectedProduct.price)}
            </p>
            <p className="text-[#FFAA00]">تومان</p>
          </div>
        </div>
        <div className="flex justify-between items-end mt-6">
          <div className="flex gap-4">
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
          <button className="py-3  px-5 gap-1 mx-2 rounded-full flex justify-center items-center  text-white bg-gray-800 hover:bg-[#FFAA00] cursor-pointer transition-colors duration-400  font-yekanReg text-[14px]">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
