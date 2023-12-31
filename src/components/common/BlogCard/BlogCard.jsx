import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id } = blog;

  return (
    <div className="bg-white w-[280px] h-[] group  rounded-3xl p-4 cursor-pointer transition-all duration-300 transform-gpu hover:-translate-y-2">
      <img className="rounded-tr-3xl rounded-tl-3xl" src={blog.img} alt="" />
      <div className="relative mt-10">
        <p className="absolute top-[-60px] text-[13px] flex items-center justify-center gap-1 font-yekanSemiBold text-[#FFAA00] right-0 left-0 mx-14 bg-white z-20 shadow-lg shadow-gray-300 rounded-xl px-3 py-2">
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.8039 15.6948C1.24392 9.80154 9.09212 3.185 14.3589 7.05897C16.8651 8.90645 18.684 13.8152 16.0989 16.3071C15.9496 16.4463 15.7836 16.5665 15.6048 16.6651C13.4566 17.8717 11.9063 15.4514 9.87622 15.1685C8.02159 14.9358 5.03555 18.5162 3.8039 15.6948Z"
              fill="#2F3134"
            ></path>
            <path
              d="M2.78714 5.10761C3.04712 5.22186 3.27512 5.39813 3.45114 5.62098C3.62717 5.84382 3.74586 6.10644 3.79681 6.38581C4.18349 8.35144 1.4266 10.4961 0.24507 8.176C-0.610641 6.51112 0.90386 4.25906 2.78714 5.10761Z"
              fill="#2F3134"
            ></path>
            <path
              d="M7.68856 1.26948C7.86855 1.53867 7.97938 1.8481 8.01123 2.17035C8.04308 2.49261 7.99497 2.81774 7.87116 3.11696C7.02977 5.24013 3.06986 5.60174 3.35988 2.65509C3.55322 0.524762 6.38888 -0.703308 7.68856 1.26948Z"
              fill="#2F3134"
            ></path>
            <path
              d="M14.7562 2.40443C14.7276 2.72709 14.6199 3.03771 14.4425 3.30876C14.2651 3.57981 14.0236 3.80292 13.7394 3.95831C11.7559 5.08971 8.44045 2.8842 10.5171 0.775354C12.0065 -0.749889 14.9854 0.0700197 14.7562 2.40443Z"
              fill="#2F3134"
            ></path>
            <path
              d="M19.3928 6.34287C19.2264 6.57342 19.0057 6.75937 18.7503 6.88427C18.4949 7.00918 18.2126 7.06917 17.9285 7.05895C15.9234 7.01241 14.4197 3.86167 16.9367 3.20288C18.752 2.72311 20.6245 4.68516 19.3928 6.34287Z"
              fill="#2F3134"
            ></path>
          </svg>
          <p> {blog.category}</p>
        </p>
        <h4 className="text-[#2b2626] font-yekanBold text-lg my-3">
          {blog.title}
        </h4>
        <p className="font-yekanReg text-[#333] text-sm leading-9">
          {blog.summary}
        </p>
        <Link to={`${id}`}>
          <button className="flex group-hover:bg-[#FEBF0F1A] my-3 py-2 mb-3 mr-2 px-2 rounded-xl items-center font-yekanReg gap-1 text-[#2b2626] text-sm">
            <p>ادامه مطلب</p>
            <svg
              width="12"
              height="11"
              viewBox="0 0 12 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8019 6.17453H2.56566C2.00285 6.17453 1.53613 5.70782 1.53613 5.14501C1.53613 4.5822 2.00285 4.11548 2.56566 4.11548H10.8019C11.3647 4.11548 11.8314 4.5822 11.8314 5.14501C11.8314 5.70782 11.3647 6.17453 10.8019 6.17453Z"
                fill="#FFAA00"
              ></path>
              <path
                d="M5.31096 10.2918C5.05014 10.2918 4.78933 10.1958 4.58342 9.98985L0.465311 5.87174C0.067227 5.47366 0.067227 4.81476 0.465311 4.41667L4.58342 0.298563C4.98151 -0.099521 5.64041 -0.099521 6.03849 0.298563C6.43657 0.696647 6.43657 1.35554 6.03849 1.75363L2.64791 5.14421L6.03849 8.53479C6.43657 8.93287 6.43657 9.59177 6.03849 9.98985C5.83258 10.1958 5.57177 10.2918 5.31096 10.2918Z"
                fill="#FFAA00"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
