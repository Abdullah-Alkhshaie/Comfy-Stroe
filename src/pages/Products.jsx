import React, { useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

function Products() {
  const { product } = useContext(ProductContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filteredProducts, setFilteredProducts] = useState(product);

  const uniqueCategories = Array.from(
    new Set(product.map((item) => item.category))
  );

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Apply filters based on the current state
    const updatedProducts = product.filter(
      (item) =>
        item.title &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "All" || item.category === selectedCategory) &&
        parseFloat(item.price) >= priceRange[0] &&
        parseFloat(item.price) <= priceRange[1]
    );

    // Update the state with the filtered products
    setFilteredProducts(updatedProducts);
  };

  if (!uniqueCategories) {
    return (
      <div className=" relative w-full h-[100vh]">
        <div className="absolute  top-[50%] left-[50%] translate-x-[50%] translate-y-[50%]">
          <ImSpinner className=" animate-spin" size={50} />
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 ">
      <form
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 py-4 md:gap-x-5 bg-gray-200 my-16 rounded-lg"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col">
          <label>Search Product</label>
          <input
            className="rounded-lg mt-3 p-2 focus:outline-gray-400"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className=" flex flex-col">
          <label className="label">
            <span className="label-text capitalize">Select category</span>
          </label>
          <select
            className="rounded-lg mt-3 p-[10px] focus:outline-gray-400"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option
              className="rounded-lg mt-3 p-2 focus:outline-gray-400"
              value="All"
            >
              All
            </option>
            {uniqueCategories.map((category) => (
              <option
                className="rounded-lg mt-3 p-2 focus:outline-gray-400"
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mt-5">
          <label>Select Price </label>
          <input
            type="range"
            className="my-2 "
            value={priceRange[1]}
            min={0}
            max={1000}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseFloat(e.target.value)])
            }
          />
          <div className="flex justify-between">
            <span>$0</span>
            <span>{`Max Price: $${priceRange[1]}`}</span>
          </div>
        </div>
        <button
          type="submit"
          className="mt-10 w-full h-10 bg-blue-500 text-white  rounded-lg"
        >
          Search
        </button>
      </form>
      <div className="mt-10 text-left py-5 px-4 shadow-lg">
        <p className="text-3xl text-cyan-900">
          {" "}
          {filteredProducts.length}{" "}
          {filteredProducts.length < 2 ? "Product" : "Products"}
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
