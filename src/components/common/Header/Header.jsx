import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import HeaderNav from "./HeaderNav";
import HeaderLeft from "./HeaderLeft";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <div className="h-[94px] flex items-center justify-between border-t-[8px] border-t-[#febf0f] border-b-[1px] border-b-gray-300 bg-white">
        <nav className="container max-w-[1200px] mx-auto  h-full my-auto flex items-center max-lg:gap-7 lg:justify-between px-5  mb-10 rounded-lg ">
          <MobileNav />
          <Logo />
          <HeaderNav />
          <HeaderLeft />
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
