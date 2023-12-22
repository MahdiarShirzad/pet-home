import React, { useState } from "react";

const SearchBlog = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = blogs.filter((blog) => blog.title.includes(query));

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input
        className="bg-[#F2F2F2] block relative  px-3 py-3 rounded-3xl focus:outline-none placeholder:text-base focus:outline-orange-200 focus:bg-white focus:placeholder:opacity-0"
        type="text"
        placeholder="جستوجوی مقالات"
        value={searchQuery}
        onChange={handleInputChange}
      />
      {searchQuery && (
        <div className="max-h-80 absolute w-96  rounded-2xl overflow-y-auto border border-gray-300 bg-white z-50">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((blog) => (
              <div key={blog.id} className="p-2">
                {blog.title}
              </div>
            ))
          ) : (
            <div className=" h-20 flex my-4 justify-center items-center ">
              مقاله ای یافت نشد!...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBlog;
