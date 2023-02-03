import React from "react";
import cha1 from "../assets/cha-1.jpeg";
import cha2 from "../assets/cha-2.jpg";
import cha3 from "../assets/cha-3.jpeg";
import cha4 from "../assets/cha-4.jpg";
import cha5 from "../assets/cha-5.jpeg";
import cha6 from "../assets/cha-6.jpeg";
import cha7 from "../assets/cha-7.jpeg";
import cha9 from "../assets/cha-9.jpeg";

const Boards = () => {
  const boards = [
    {
      id: 1,
      src: cha1,
    },
    {
      id: 2,
      src: cha2,
    },
    {
      id: 3,
      src: cha3,
    },
    {
      id: 4,
      src: cha4,
    },
    {
      id: 5,
      src: cha5,
    },
    {
      id: 6,
      src: cha6,
    },
    {
      id: 7,
      src: cha7,
    },
    {
      id: 9,
      src: cha9,
    },
  ];
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={cha1} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#3da18c] font-bold"> Option 1</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {" "}
            Small Board{" "}
          </h1>
          <p className=""> lorem</p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#3da18c]">
            Want this one?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boards;
