import React from "react";
import { Check, Plus } from "lucide-react";

const Section8 = () => {
  return (
    <section className="flex flex-col items-center w-full mt-50 text-[#f3f3f3]">
      <div className="w-11/14 flex flex-col gap-6 items-center">
        <div className="p-3 text-xs  border border-primary rounded-3xl w-30 bg-[#f0b60819] text-center text-primary">
          Insights
        </div>
        <div className="flex h-30 justify-center text-center ">
          <h4 className="text-5xl font-[10] w-9/14">
            Frequently asked questions
          </h4>
        </div>
      </div>
      <div className="w-full">
        <ul className="space-y-4  flex flex-col items-center">
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            Is it really unlimited?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            Why wouldn't I just hire a freelancer?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            Why wouldn't I just hire a full-time designer?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            Can I pause, renew or cancel at any time?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            Are there any contracts?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            How do we communicate?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            What if I only have one design task?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            What is an active task?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            Who are the designers?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            How many designs can be done in a single month?
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
          <li className="bg-[#141414] rounded-lg border border-[#414141] p-4 text-sm flex justify-between items-center  w-9/14 hover:scale-105 transition-transform duration-300 ease-in-out">
            Are there any refunds if I don't like the designs?{" "}
            <span className="text-white text-lg font-bold">
              <Plus />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section8;
