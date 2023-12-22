import React from "react";
import bg from "../../assets/img/vector_back1.png";
import CommentsCarousel from "./CommentsCarousel";

const CustomersComments = () => {
  return (
    <div className="bg-[#febf0f1a]">
      <div className="container max-w-[1500px] bg-[url('assets/img/vector_back1.png')] bg-cover mx-auto py-14">
        <h4 className="text-center text-[37px] text-[#333] font-yekanExtraBold">
          نظرات مشتریان
        </h4>
        <p className="text-center font-yekanReg mt-5 text-[#333]">
          همواره در تلاشیم تا رضایت شمارو جلب کنیم،شما لایق بهترین ها هستید.
        </p>
        <div>
          <CommentsCarousel />
        </div>
      </div>
    </div>
  );
};

export default CustomersComments;
