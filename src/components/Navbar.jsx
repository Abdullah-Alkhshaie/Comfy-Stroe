import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalQuantity } = useContext(CartContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".navbar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    <div className="relative ">
      <HiMiniBars3CenterLeft size={50} />
      <span className="px-2 py-1 absolute top-[-13px] right-0 text-white bg-blue-500 rounded-full">
        0
      </span>
    </div>;

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const style =
    "py-2 text-lg w-full cursor-pointer duration-300 rounded-lg px-2 hover:px-4 hover:bg-gray-400";

  return (
    <div className="navbar-container bg-gray-200 h-[80px] flex items-center justify-between  px-10 lg:px-32 xl:px-60">
      <Link className="hidden lg:block" to="/">
        <h1 className=" md:block hidden px-5 py-1 hover:bg-blue-600 duration-300 text-white rounded-lg bg-blue-500 text-4xl">
          C
        </h1>
      </Link>
      <div className="relative">
        <div
          onClick={handleClick}
          className={`lg:hidden ${style} cursor-pointer`}
        >
          <HiMiniBars3CenterLeft size={30} />
        </div>
        <div
          className={`${
            isOpen ? "absolute top-[65px] w-[200px] bg-gray-300" : "hidden"
          } lg:flex lg:justify-between md:text-lg  rounded-lg`}
        >
          <Link to="/">
            <p className={style}>Home</p>
          </Link>
          <Link to="/about">
            <p className={style}>About</p>
          </Link>
          <Link to="/products">
            <p className={style}>Products</p>
          </Link>
          <Link to="/cart">
            <p className={style}>Cart</p>
          </Link>
        </div>
      </div>
      <Link to="/cart">
        <div className="relative hover:bg-gray-300 duration-300 rounded-full p-2 ">
          <HiShoppingCart size={40} />
          <span className="px-2 py-1 absolute top-[-13px] right-0 text-white bg-blue-500 rounded-full">
            {getTotalQuantity()}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
