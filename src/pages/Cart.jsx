import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Cart() {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    getTotalPrice,
  } = useContext(CartContext);

  return (
    <div className="my-10 px-10">
      <h1 className="text-cyan-800 text-3xl  py-5 px-4">Shopping Cart</h1>
      <div className="lg:flex justify-between gap-x-10  ">
        <div className="flex-1">
          {cart.map((item) => {
            const { id, title, image, price, category } = item;
            return (
              <div
                key={id}
                className="my-5 border-t md:flex gap-x-6 items-center justify-between"
              >
                <img src={image} className="w-[140px] mt-10" alt="" />
                <div className="mt-5 max-w-[300px]">
                  <h1 className="text-2xl my-2 text-cyan-900">{title}</h1>
                  <h2 className="text-xl text-gray-400">{category}</h2>
                </div>
                <div className="mt-5">
                  <h1 className="text-lg my-2 text-cyan-900">Amount</h1>
                  <div className="flex justify-between items-center w-[90px] ">
                    <FaMinus
                      className="bg-red-500 text-white w-6 h-6 cursor-pointer rounded"
                      onClick={() => decreaseQuantity(id)}
                    />
                    <p>{item.quantity}</p>
                    <FaPlus
                      className="bg-blue-500 text-white w-6 h-6 cursor-pointer rounded"
                      onClick={() => increaseQuantity(id)}
                    />
                  </div>
                  <h1
                    className="mt-5 text-blue-500 cursor-pointer"
                    onClick={() => removeFromCart(id)}
                  >
                    remove
                  </h1>
                </div>
                <div className="mt-5">
                  <p>${price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 border-t  flex-2 h-20 bg-gray-300 px-4 py-2 rounded flex lg:flex-col  items-center justify-between">
          <h1 className="text-lg my-2 text-cyan-900">Overall Total Price:</h1>
          <p>${getTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
