import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#3da18c] font-bold p-2">
          {" "}
          Whoever said you've had enough fruit and cheese was seriously
          disturbed.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          {" "}
          Events need cheese, and imodium
        </h1>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold"> words here</p>
        <button className="bg-[#3da18c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Checkout My Boards
        </button>
      </div>
    </div>
  );
};

export default Hero;
