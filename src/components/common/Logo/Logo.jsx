import React from "react";
import logo from "../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <div>
        <img src={logo} alt="" />
      </div>
    </NavLink>
  );
};

export default Logo;
