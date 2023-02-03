import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="  flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white
    "
    >
      <h1
        className=" w-full text-3xl font-bold text-[#3da18c] m-4
      "
      >
        "Cha" "Cha" Cuterie & More!
      </h1>

      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Boards</li>
        <li className="p-4">Order</li>
        <li className="p-4">Questions</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#3da18c] m-4">
          "Cha" "Cha"
        </h1>
        <ul className="uppercase p-4 ">
          <li className="p-4 border-b bborder-gray-600">Home</li>
          <li className="p-4 border-b bborder-gray-600">Company</li>
          <li className="p-4 border-b bborder-gray-600">Boards</li>
          <li className="p-4 border-b bborder-gray-600">Order</li>
          <li className="p-4">Questions</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
