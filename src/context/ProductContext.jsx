import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch("https://fakestoreapi.com/products");
      const data = await respone.json();
      setProduct(data);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
