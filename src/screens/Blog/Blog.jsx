import React, { useState, useEffect } from "react";
import BlogCard from "../../components/common/BlogCard/BlogCard";
import BlogCategory from "./BlogCategory";
import LastBlogCard from "./LastBlogCard";
import BlogNavbar from "./BlogNavbar";
import Loading from "../../components/common/Loading/Loading";
import { useProducts } from "../../context/ProductContext";

const Blog = () => {
  const { blogs } = useProducts();

  const [blog, setBlog] = useState(blogs);
  const blogCategories = [...new Set(blogs.map((blog) => blog.category))];

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
      const filteredItems = blogs.filter((blog) =>
        selectedCategory.includes(blog.category)
      );
      setBlog(filteredItems);
    } else {
      setBlog(blogs);
    }
  }, [selectedCategory, blogs]);

  const [visibleBlogs, setVisibleBlogs] = useState(15);
  const [loading, setLoading] = useState(false);

  const loadMoreBlogs = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 15);
      setLoading(false);
    }, 2000);
  };

  const handleScroll = () => {
    const footerTopPosition = document
      .querySelector("footer")
      .getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTopPosition < windowHeight && !loading) {
      loadMoreBlogs();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleBlogs, loading]);

  return (
    <div className="container  max-w-[1200px] mx-auto my-10">
      <BlogNavbar blogs={blogs} />
      <div className="flex w-full mt-8">
        {" "}
        <div className="w-3/4">
          <div className="flex  flex-wrap gap-4">
            {blog.slice(0, visibleBlogs).map((blog, i) => (
              <BlogCard blog={blog} key={i} />
            ))}
          </div>
          {loading && <Loading />}
        </div>
        <div className="w-1/4">
          <BlogCategory
            categories={blogCategories}
            handleCategoryToggle={handleCategoryToggle}
          />
          <LastBlogCard blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
