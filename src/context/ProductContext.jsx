import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const BASE_URL = "http://91.107.139.203:8000";

  const [items, setItems] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(`${BASE_URL}/products/`);
        setItems(productsResponse.data);

        // Fetch blogs
        const blogsResponse = await axios.get(`${BASE_URL}/blogs/`);
        setBlogs(blogsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        addToCart,
        items,
        setItems,
        blogs,
        setBlogs,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}

export { ProductsProvider, useProducts };
