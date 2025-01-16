import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);
  const pricePerMonth = 1650;

  const handleIncrement = () => {
    if (count <= 3) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count >= 1) setCount(count - 1);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-3">
        {/* Counter Buttons */}
        <div className="flex space-x-3 items-center rounded bg-gray-200">
          {/* Decrement Button */}
          <button
            type="button"
            onClick={handleDecrement}
            disabled={count <= 1}
            className={`w-10 h-10 rounded bg-green-400 text-white font-bold flex justify-center items-center transition ${
              count <= 1
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-green-600"
            }`}
          >
            -
          </button>

          {/* Count Display */}
          <p className="text-sm px-1 font-medium">{count}</p>

          {/* Increment Button */}
          <button
            type="button"
            onClick={handleIncrement}
            disabled={count >= 3}
            className={`w-10 h-10  rounded bg-green-400 text-white font-bold flex justify-center items-center transition ${
              count >= 3
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-green-600"
            }`}
          >
            +
          </button>
        </div>

        {/* Price Display */}
        <div className="">
          <p className="text-xl font-semibold">
            BDT {pricePerMonth * count} <span className="text-sm">/month</span>
          </p>
        </div>
      </div>
      <Button className="w-full bg-[#1dc468] mt-4 py-3 text-md">Start Now</Button>
    </>
  );
};

export default Count;
