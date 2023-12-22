import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";

const HeaderNav = () => {
  return (
    <div className="w-[40%] h-full hidden md:block text-[14px] max-[940px]:text-[12px] max-[900px]:text-[13px] ">
      <NavItems />
    </div>
  );
};

export default HeaderNav;
