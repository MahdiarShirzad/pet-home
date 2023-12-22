import React from "react";
import { NavLink } from "react-router-dom";

const activeClass = ({ isActive }) =>
  isActive
    ? "text-[#ffaa00] border-b-2 border-b-[#ffaa00] pb-1"
    : "hover:text-[#FFAA00] border-b-2 border-b-transparent pb-1 ";

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row w-full xl:gap-10 max-[1045px]:gap-7 gap-5 items-center h-full justify-between text-black font-yekanReg">
      <NavLink className={activeClass} to="/">
        <li>صفحه اصلی</li>
      </NavLink>
      <NavLink className={activeClass} to="/products">
        <li>محصولات</li>
      </NavLink>
      <NavLink className={activeClass} to="/blog">
        <li>وبلاگ</li>
      </NavLink>
      <NavLink className={activeClass} to="/about-us">
        <li>درباره ما</li>
      </NavLink>
      <NavLink className={activeClass} to="contact-us">
        <li>تماس با ما</li>
      </NavLink>
    </ul>
  );
};

export default NavItems;
