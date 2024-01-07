import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [items, setItems] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(
          "http://localhost:3000/products"
        );
        setItems(productsResponse.data);

        // Fetch blogs
        const blogsResponse = await axios.get("http://localhost:3000/blogs");
        setBlogs(blogsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ProductsContext.Provider
      value={{ addToCart, items, setItems, blogs, setBlogs }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}

export { ProductsProvider, useProducts };
