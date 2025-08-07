import React from 'react';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

const PriceSection = () => {
  return (
    <>
      <div className="max-w-[470px]">
        <div className="flex flex-col bg-white rounded-lg my-6 mx-2 p-6 text-gray-600 shadow-xl">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            <div className="flex flex-col">
              <p className="font-semibold mb-2">Current Price</p>
              <div className="flex items-center gap-4">
                <p className="text-black text-xl font-bold">₹ 26,670.25</p>
                <div className="flex items-center text-[#059669]">
                  <IoMdTrendingUp className="mr-1" />
                  <p>0.04%</p>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row gap-2">
              <button className="flex items-center rounded-xl px-3 py-2 h-10 text-white bg-[#5F00D9] hover:bg-purple-700">
                <FaPlusCircle className="mr-1" />
                <p className="hidden md:block">Buy</p>
              </button>
              <button className="flex items-center rounded-xl px-3 py-2 h-10 text-white bg-[#5F00D9] hover:bg-purple-700">
                <FaMinusCircle className="mr-1" />
                <p className="hidden md:block">Sell</p>
              </button>
            </div>
          </div>

          <div className="mt-4">
            <p>Hi</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default PriceSection;
