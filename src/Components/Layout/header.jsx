import React from "react";
import logo from "../../../public/LOGO.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute left-0 w-full z-10 px-28 py-10 flex justify-between items-center my-5">
      <div className="">
        <Image src={logo} alt="Swapify Logo" width={100} />
      </div>
      <div className="flex justify-around gap-8 text-sm ">
        <button className=" cursor-pointer hover:text-amber-300">Home</button>
        <button className=" cursor-pointer hover:text-amber-300">
          Portfolio
        </button>
        <button className=" cursor-pointer hover:text-amber-300">
          Benefits
        </button>
        <button className=" cursor-pointer hover:text-amber-300">
          Services
        </button>
        <button className=" cursor-pointer hover:text-amber-300">
          Pricing
        </button>
        <button className=" cursor-pointer hover:text-amber-300">FAQ</button>
      </div>
      <div>
        <button className="border border-primary px-3 py-1.5 text-sm rounded-4xl flex gap-1 items-center cursor-pointer  hover:shadow-2xl shadow-amber-400">
          Book a demo{" "}
          <span className="font-">
            {" "}
            <ChevronRight width={18} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
