import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogCategory from "../Blog/BlogCategory";
import LastBlogCard from "../Blog/LastBlogCard";
import BlogDetailPoster from "./BlogDetailPoster";
import BlogText from "./BlogText";
import BlogComments from "./BlogComments";
import { useProducts } from "../../context/ProductContext";

const BlogDetail = ({}) => {
  const { blogs } = useProducts();

  const { id } = useParams();
  const [blog, setBlog] = useState(blogs);
  const selectedBlog = blogs.find((blog) => blog.id === id);

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
  //   console.log(id);

  return (
    <div className="container flex max-w-[1200px] mx-auto justify-between my-16">
      <div className="w-3/4 px-10">
        <BlogDetailPoster blog={selectedBlog} />
        <BlogText />
        <BlogComments />
      </div>
      <div className="w-1/4">
        <BlogCategory
          categories={blogCategories}
          handleCategoryToggle={handleCategoryToggle}
        />
        <LastBlogCard blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogDetail;
