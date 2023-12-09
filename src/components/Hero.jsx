import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import img from "../assests/1702113685897.webp";

function Hero() {
  return (
    <div className="px-10 lg:px-32 xl:px-60  mt-28 mb-28">
      <div className=" flex  gap-20 mb-28">
        <div className="flex-1">
          <h1 className="text-5xl thik font-bold lg:text-7xl text-cyan-900">
            We are changing the way people shop
          </h1>
          <p className="text-xl lg:text-3xl leading-10 mt-20 mb-20 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>

          <Link to="/products">
            <button className="bg-blue-600 rounded-lg text-white text-xl px-6 py-3">
              Our Products
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex flex-1 " style={{}}>
          <img className="w-full" src={img} alt="" />
        </div>
      </div>
      <FeaturedProducts />
    </div>
  );
}

export default Hero;
