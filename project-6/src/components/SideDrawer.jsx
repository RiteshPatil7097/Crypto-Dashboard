import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbXboxXFilled } from "react-icons/tb";

export default function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu className="size-6"/>
        </button>
      </div>

      {/* Overlay and Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
             className="fixed inset-0  bg-opa bg-auto z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="p-4 border-b text-lg font-semibold">Menu</div>
            <ul className="p-4 space-y-3">
              <li className="hover:text-purple-600 cursor-pointer">Dashboard</li>
              <li className="hover:text-purple-600 cursor-pointer">Transactions</li>
              <li className="hover:text-purple-600 cursor-pointer">Support</li>
            </ul>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-8 text-gray-500 hover:text-red-500"
            >
              <TbXboxXFilled className="size-6" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
