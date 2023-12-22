import React, { useEffect, useState } from "react";
import ProductNav from "./ProductNav";
import ProductPriceRange from "./ProductPriceRange";
import ProductBrands from "./ProductBrands";
import ProductCategory from "./ProductCategory";
import ProductBanner from "./ProductBanner";
import ProductCard from "../../components/common/ProductCard/ProductCard";

import Pagination from "../../components/common/Pagination/Pagination";

const Products = ({ items }) => {
  const [posts, setPosts] = useState(items);
  const [defaultPosts, setDefaultPosts] = useState(items);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [sortingOption, setSortingOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const indexOfLastPage = Math.ceil(posts.length / postsPerPage);

  let highestPrice = 0;

  for (let i = 0; i < items.length; i++) {
    const price = parseInt(items[i].price, 10);
    if (price > highestPrice) {
      highestPrice = price;
    }
  }

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(highestPrice);

  const filterByPriceRange = () => {
    const filteredPosts = items.filter((post) => {
      const price = parseInt(post.price, 10);
      return price >= minPrice && price <= maxPrice;
    });
    setPosts(filteredPosts);
  };

  useEffect(() => {
    filterByPriceRange();
  }, [minPrice, maxPrice]);

  const handleMin = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMax = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  // category filter

  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleCategoryToggle = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(
        selectedCategory.filter(
          (selectedCategory) => selectedCategory !== category
        )
      );
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  useEffect(() => {
    if (selectedCategory.length > 0) {
      const filteredItems = items.filter((item) =>
        selectedCategory.includes(item.category)
      );
      setPosts(filteredItems);
    } else {
      setPosts(items);
    }
  }, [selectedCategory, items]);

  //brand filter

  const uniqueBrands = [...new Set(items.map((item) => item.brand))];

  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandToggle = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  useEffect(() => {
    if (selectedBrands.length > 0) {
      const filteredItems = items.filter((item) =>
        selectedBrands.includes(item.brand)
      );
      setPosts(filteredItems);
    } else {
      setPosts(items);
    }
  }, [selectedBrands, items]);

  // sorting options
  const sortPosts = (sortBy) => {
    if (sortBy === "محبوبیت") {
      const sortedPosts = [...posts].sort((a, b) => {
        const scoreA = parseFloat(a.score);
        const scoreB = parseFloat(b.score);
        return scoreB - scoreA;
      });
      setPosts(sortedPosts);
    }
    if (sortBy === "قیمت از ارزان ترین") {
      const sortedPosts = [...posts].sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceA - priceB;
      });
      setPosts(sortedPosts);
    }
    if (sortBy === "قیمت از گران ترین") {
      const sortedPosts = [...posts].sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceB - priceA;
      });
      setPosts(sortedPosts);
    }
    setSortingOption(sortBy);
  };

  const resetTodefault = () => {
    setPosts(defaultPosts);
    setSortingOption("");
    setSelectedOption("");
    setIsOpen(false);
  };

  useEffect(() => {
    setDefaultPosts(items);
    setSortingOption("");
  }, [items]);

  return (
    <div className="py-10  container max-w-[1250px] mx-auto bg-[#F8F8F8] ">
      <ProductNav
        posts={posts}
        sortPosts={sortPosts}
        resetTodefault={resetTodefault}
        sortingOption={sortingOption}
        currentPosts={currentPosts}
        indexOfFirstPost={indexOfFirstPost}
        indexOfLastPost={indexOfLastPost}
        indexOfLastPage={indexOfLastPage}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="w-full flex gap-10">
        <div className="w-1/4 mt-14">
          <ProductPriceRange
            highestPrice={highestPrice}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleMin={handleMin}
            handleMax={handleMax}
            filterByPriceRange={filterByPriceRange}
          />
          <ProductBrands
            brands={uniqueBrands}
            handleBrandToggle={handleBrandToggle}
          />
          <ProductCategory
            handleCategoryToggle={handleCategoryToggle}
            categories={uniqueCategories}
          />
          <ProductBanner />
        </div>
        <div className=" w-3/4 flex flex-wrap gap-6 mt-14  ">
          <>
            {currentPosts.map((posts, index) => (
              <ProductCard posts={posts} key={index} loading={loading} />
            ))}
          </>
          <Pagination
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
