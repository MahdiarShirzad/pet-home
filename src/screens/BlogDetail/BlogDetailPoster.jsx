import React from "react";

const BlogDetailPoster = ({ blog }) => {
  return (
    <div className=" h-[450px] ">
      <img className="h-full w-full rounded-3xl " src={blog.img} alt="" />
      <div className="flex text-white font-yekanExtraBold text-2xl justify-between px-12 mt-[-60px]">
        <p className="">{blog.title}</p>
        <div className="flex justify-center items-center gap-1">
          <p>300</p>
          <svg
            width="25"
            height="25"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1766 14C18.1766 16.31 16.3099 18.1766 13.9999 18.1766C11.6899 18.1766 9.82324 16.31 9.82324 14C9.82324 11.69 11.6899 9.8233 13.9999 9.8233C16.3099 9.8233 18.1766 11.69 18.1766 14Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.9998 23.6484C18.1182 23.6484 21.9565 21.2217 24.6282 17.0217C25.6782 15.3767 25.6782 12.6117 24.6282 10.9667C21.9565 6.76669 18.1182 4.34003 13.9998 4.34003C9.88148 4.34003 6.04315 6.76669 3.37148 10.9667C2.32148 12.6117 2.32148 15.3767 3.37148 17.0217C6.04315 21.2217 9.88148 23.6484 13.9998 23.6484Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPoster;
