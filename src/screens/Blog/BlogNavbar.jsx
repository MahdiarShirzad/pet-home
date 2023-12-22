import React from "react";
import { useState } from "react";
import SearchBlog from "./SearchBlog";

const BlogNavbar = ({ blogs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="flex  rounded-3xl justify-between px-10 py-6 bg-[#FEBF0F26]  font-yekanReg">
        <div className="flex items-center w-1/2">
          <SearchBlog blogs={blogs} />
          <button className="p-3 gap-1 mx-2 rounded-3xl flex justify-center items-center  text-white bg-gray-800 hover:bg-[#FFAA00] cursor-pointer transition-colors duration-400  font-yekanReg text-[14px] ">
            <svg
              className="w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="flex w-[40%] justify-between px-20 items-center">
          <p className="font-yekanSemiBold flex items-center gap-1 text-xl">
            {blogs.length}{" "}
            <span className="text-base font-yekanReg">مقاله</span>
          </p>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center gap-2 w-full rounded-md border border-gray-300 shadow-sm bg-gray-800 text-white hover:bg-gray-500 px-4 py-2 text-sm font-medium  focus:outline-none focus:border-blue-300  focus:ring-0"
                id="options-menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                مرتب سازی بر اساس
                <svg
                  className="w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="m12 14.586 6.293-6.293a1 1 0 1 1 1.414 1.414l-6.646 6.647a1.5 1.5 0 0 1-2.122 0L4.293 9.707a1 1 0 0 1 1.414-1.414L12 14.586z"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 text-right w-56 rounded-md shadow-lg bg-gray-800 text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <ul
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <li className="block px-4 py-2 text-sm  hover:bg-gray-500  cursor-pointer  ">
                    پیش فرض
                  </li>
                  <li className="block px-4 py-2 text-sm  hover:bg-gray-500  cursor-pointer">
                    تازه ترین ها
                  </li>
                  <li className="block px-4 py-2 text-sm  hover:bg-gray-500  cursor-pointer">
                    محبوب ترین ها
                  </li>
                  <li className="block px-4 py-2 text-sm  hover:bg-gray-500  cursor-pointer">
                    پر بازدید ترین ها
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNavbar;
