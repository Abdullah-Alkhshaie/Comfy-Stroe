import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const { product } = useContext(ProductContext);

  return (
    <div className="rounded">
      <h1 className="text-2xl  md:text-5xl text-cyan-900 font-semibold shadow-md py-5 px-2 ">
        Featured Products
      </h1>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center ">
        {product.slice(0, 3).map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
