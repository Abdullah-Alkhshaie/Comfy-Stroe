import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  const { id, image, title, price } = data;
  return (
    <Link to={`/products/${id}`} key={id}>
      <div className="  shadow-lg hover:shadow-2xl rounded-xl cursor-pointer duration-300 w-[250px] h-[400px]  lg:max-w-[300px] mb-10 md:mr-5 flex justify-center items-center flex-col p-5">
        <img src={image} className="rounded-3xl h-[200px]" alt="" />
        <div className="mt-10 flex flex-col items-center ">
          <h4 className="text-md lg:text-lg text-gray-600 font-semibold">
            {title}
          </h4>
          <p className="text-gray-500 mt-2 ">${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
