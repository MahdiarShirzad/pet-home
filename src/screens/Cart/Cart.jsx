import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="container mx-auto max-w-[1200px] my-10 flex items-start justify-between">
      <div className=" w-3/5 bg-white px-10 py-8 rounded-3xl">
        <div className="flex items-center justify-between font-yekanSemiBold text-lg px-10  mb-8">
          <p>محصول:</p>
          <p>قیمت واحد</p>
          <p>تعداد</p>
          <p>قیمت کل:</p>
          <p>حذف</p>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="w-1/4 bg-white text-sm font-yekanReg px-5 py-3 rounded-3xl">
        <div className="flex items-center justify-between bg-[#FEBF0F1A] px-3 py-3 rounded-2xl">
          <p>قیمت کالا ها(3 عدد):</p>
          <p>800.000 تومان</p>
        </div>
        <div className="flex items-center justify-between mt-4 px-3 py-3 ">
          <p>سود شما از خرید: </p>
          <p>200.000 تومان</p>
        </div>
        <div className="flex items-center justify-between bg-[#FEBF0F1A] px-3 py-3 mt-4 rounded-2xl">
          <p>قیمت نهایی</p>
          <p>800.000 تومان</p>
        </div>
        <div className="flex items-center justify-between mt-4 px-3 py-3 leading-7">
          هزینه این سفارش هنوز پرداخـت نشده و در صورت اتمــام موجــودی کالا ها
          از سبد خرید شما حدف می شوند.
        </div>
        <div class="py-3  px-5 gap-1 mx-2 rounded-full flex justify-center items-center  text-white bg-gray-800 hover:bg-[#FFAA00] cursor-pointer transition-colors duration-400  font-yekanReg text-[14px] mt-5 mb-4">
          ثبت سفارش و پرداخت
        </div>
      </div>
    </div>
  );
};

export default Cart;
