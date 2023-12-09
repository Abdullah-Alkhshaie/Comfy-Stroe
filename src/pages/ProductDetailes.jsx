import React from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import { ImSpinner } from "react-icons/im";

function ProductDetailes() {
  const { product } = useContext(ProductContext);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const products = product.find((product) => product.id === parseInt(id));

  if (!products) {
    return (
      <div className=" relative w-full h-[100vh]">
        <div className="absolute  top-[50%] left-[50%] translate-x-[50%] translate-y-[50%]">
          <ImSpinner className=" animate-spin" size={50} />
        </div>
      </div>
    );
  }

  // const { image, title, description, price, category } = products;

  return (
    <div className="px-10 lg:px-32 xl:px-60 mt-24">
      <div className="flex  text-xl gap-2">
        <Link to="/">Home</Link>
        <span className="text-gray-400">{`>`}</span>
        <Link to="/products">Products</Link>
      </div>
      <div className="my-20 lg:flex relative gap-20">
        <div className="flex-1">
          <img className="rounded-lg lg:w-[100%]" src={products.image} alt="" />
        </div>

        <div className="mt-20 flex-1 ">
          <h1 className="text-4xl lg:text-6xl font-semibold text-cyan-900 mb-5">
            {products.title}
          </h1>
          <h2 className="my-5 text-2xl text-gray-300 font-bold">
            {products.category}
          </h2>
          <span className="text-xl lg:text-4xl">${products.price}</span>
          <p className="mt-5 le leading-7  text-lg lg:text-2xl text-gray-500 lg:leading-10">
            {products.description}
          </p>
          <button
            onClick={() => addToCart(products, id)}
            className="bg-blue-600 hover:bg-blue-700 duration-200 px-7 py-4 text-white rounded-lg mt-10"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailes;
