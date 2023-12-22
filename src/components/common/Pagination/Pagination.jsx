import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds smooth scrolling
    });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    scrollToTop();
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container flex font-yekanReg flex-col items-center mx-auto mt-10">
      <ul className="flex gap-2 mt-7">
        <li className="border-1 px-1 bg-[#FEBF0F26] flex items-center justify-center rounded-xl">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            قبلی
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            className={`border-1 px-1 flex items-center justify-center rounded-xl cursor-pointer ${
              currentPage === number ? "bg-[#FFAA00]" : "bg-[#FEBF0F26]"
            }`}
            key={number}
          >
            <button
              className="w-full h-full block p-3"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="border-1 px-1 bg-[#FEBF0F26] flex items-center justify-center rounded-xl">
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
          >
            بعدی
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
