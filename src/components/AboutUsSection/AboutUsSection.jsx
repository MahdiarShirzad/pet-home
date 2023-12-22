import React from "react";
import managerAvatar from "../../assets/img/profile.jpg";
import aboutUS from "../../assets/img/about-us.png";
import { NavLink } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <div className="container max-w-[1200px] flex items-center justify-between mx-auto py-16">
      <div className="w-[55%]">
        <p className="text-[39px] font-yekanExtraBold text-[#343a40] mb-3">
          درباره ما
        </p>
        <p className="font-yekanReg text-[#343a40] mb-6">
          پت هوم، سرزمین حیوانات خانگی با محصولات باکیفیت برای پت های شما
        </p>
        <h4 className="text-[#febf0f] font-yekanExtraBold text-2xl">
          سرزمین حیوانات خانگی
        </h4>
        <p className="font-yekanReg mt-8 text-[#343a40] leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <div className="flex justify-between items-center mt-8">
          <div className="w-[210px] h-[90px] flex items-center justify-between">
            <img className="w-1/3 rounded-full" src={managerAvatar} alt="" />
            <div className="flex flex-col gap-2 ">
              <p className="text-[#343a40] font-yekanBold"> امین محمدی</p>
              <p className="text-[#febf0f] font-yekanReg"> مدیریت Pet Home </p>
            </div>
          </div>
          <NavLink to="/about-us">
            <button className="flex text-white items-center gap-2 bg-[#343a40] hover:bg-[#ffaa00] px-5 py-3 rounded-full font-yekanReg">
              <p>بیشتر بخوانید</p>
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
      </div>
      <div className="w-[38%]">
        <img className="w-full" src={aboutUS} alt="" />
      </div>
    </div>
  );
};

export default AboutUsSection;
