import React from "react";
import loginImg from "../../assets/img/login_pic.png";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container max-w-[1200px] mx-auto my-16 flex items-center justify-between">
      <div className="w-1/2">
        <div className="">
          <div className="flex gap-3 items-center">
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2658 0.97876C28.7008 0.97876 30.6746 4.67863 30.6746 7.81348C30.6746 10.9483 28.7008 13.489 26.2658 13.489C23.8307 13.489 21.8569 10.9479 21.8569 7.81348C21.8569 4.6791 23.8307 0.97876 26.2658 0.97876Z"
                fill="#FFAA00"
              ></path>
              <path
                d="M13.7387 0.97876C16.1737 0.97876 18.1475 4.67863 18.1475 7.81348C18.1475 10.9483 16.1737 13.489 13.7387 13.489C11.3036 13.489 9.32983 10.9479 9.32983 7.81348C9.32983 4.6791 11.3036 0.97876 13.7387 0.97876Z"
                fill="#FFAA00"
              ></path>
              <path
                d="M0.534818 17.5109C-0.500563 14.9255 -0.0464077 11.2055 2.01777 10.3819C4.08194 9.55835 6.97583 11.9425 8.01027 14.5283C9.04471 17.1142 8.20934 19.8781 6.1447 20.7017C4.08005 21.5252 1.56879 20.0967 0.534818 17.5109Z"
                fill="#FFAA00"
              ></path>
              <path
                d="M39.4698 17.5109C38.4344 20.0963 35.9241 21.5253 33.8599 20.7017C31.7957 19.8782 30.9604 17.1142 31.9943 14.5284C33.0283 11.9426 35.9227 9.55745 37.9868 10.3819C40.051 11.2064 40.5037 14.9251 39.4698 17.5109Z"
                fill="#FFAA00"
              ></path>
              <path
                d="M35.776 31.7942C35.3054 29.679 34.1759 27.7667 32.9292 25.9965C30.0075 21.85 25.329 17.6627 20.0025 17.6627C14.698 17.6627 9.99787 21.8491 7.07574 25.9965C5.82905 27.7667 4.7019 29.6766 4.22892 31.7942C3.75593 33.9119 4.01478 36.2805 5.3283 37.9991C6.64182 39.7176 9.13097 40.5816 11.0756 39.649C12.2324 39.0953 13.169 37.9789 14.4448 37.8712C15.6167 37.773 16.6521 38.5608 17.6291 39.2198C18.335 39.696 19.1869 40.1294 20.0025 40.135C20.8181 40.1294 21.6694 39.696 22.3758 39.2198C23.3529 38.5617 24.3882 37.773 25.5601 37.8712C26.836 37.9789 27.7721 39.0934 28.9293 39.649C30.874 40.5816 33.3631 39.7214 34.6766 38.001C35.9902 36.2805 36.249 33.9123 35.776 31.7942ZM24.6424 29.2432C24.0414 30.3403 23.0931 31.3063 22.2921 32.0579C21.8629 32.4609 21.4108 32.8388 20.9381 33.1899H20.9353C20.6648 33.3882 20.338 33.4951 20.0025 33.4951C19.6669 33.4951 19.3402 33.3882 19.0697 33.1899H19.0669C18.5941 32.8388 18.142 32.4609 17.7129 32.0579C16.9128 31.3058 15.9635 30.3403 15.3626 29.2432C14.866 28.3374 14.6067 27.3423 14.8637 26.3053C15.1103 25.3116 15.8953 24.4387 16.8582 24.3169C17.9717 24.1759 19.2683 24.9586 20.0025 25.8573C20.7366 24.9586 22.0332 24.1764 23.1467 24.3174C24.1096 24.4392 24.8946 25.3121 25.1413 26.3058C25.3982 27.3423 25.1389 28.3374 24.6424 29.2432Z"
                fill="#FFAA00"
              ></path>
            </svg>
            <p className="font-yekanExtraBold text-[37px] text-[#343a40]">
              ثبت نام
            </p>
          </div>
        </div>
        <form
          className="bg-white py-10 w-full mt-6 rounded-3xl flex flex-wrap flex-row gap-8 px-10"
          action=""
        >
          <input
            className="bg-gray-200 rounded-2xl py-3 px-4 max-w-[260px] font-yekanReg text-gray-700 focus:outline-none focus:placeholder:opacity-0 focus:outline-black"
            type="text"
            name="name"
            id=""
            placeholder="نام"
          />
          <input
            className="bg-gray-200 rounded-2xl py-3 px-4 max-w-[260px] font-yekanReg text-gray-700 focus:outline-none focus:placeholder:opacity-0 focus:outline-black"
            type="text"
            name="lastname"
            id=""
            placeholder="نام خانوادگی"
          />
          <input
            className="bg-gray-200 rounded-2xl py-3 px-4 max-w-[260px] font-yekanReg text-gray-700 focus:outline-none focus:placeholder:opacity-0 focus:outline-black"
            type="text"
            name="phonenumber"
            id=""
            placeholder="شماره موبایل"
          />{" "}
          <input
            className="bg-gray-200 rounded-2xl py-3 px-4 max-w-[260px] font-yekanReg text-gray-700 focus:outline-none focus:placeholder:opacity-0 focus:outline-black"
            type="email"
            name="email"
            id=""
            placeholder="پست الکترونیکی"
          />
          <input
            className="bg-gray-200 rounded-2xl py-3 px-4  max-w-[260px] font-yekanReg text-gray-700 focus:outline-none focus:placeholder:opacity-0 focus:outline-black"
            type="password"
            name="password"
            id=""
            placeholder="رمزعبور"
          />
          <input
            className="bg-gray-200 rounded-2xl py-3 px-4  max-w-[260px] font-yekanReg text-gray-700 focus:outline-none focus:placeholder:opacity-0 focus:outline-black"
            type="password"
            name="password2th"
            id=""
            placeholder="تکرار رمزعبور"
          />
          <div className="flex items-center justify-between w-full font-yekanReg">
            <button className="py-3  px-5 gap-1 mx-2 rounded-full flex justify-center items-center  text-white bg-gray-800 hover:bg-[#FFAA00] cursor-pointer transition-colors duration-400  font-yekanReg text-[14px]">
              ورود
            </button>
            <div className="text-sm flex items-center gap-1">
              <p>قبلا ثبت نام کرده اید؟</p>
              <NavLink to="/login">
                <p className="hover:text-[#febf0f] text-sm">وارد شوید</p>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/3">
        <img src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
