import React from "react";

const Section3 = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center text-[#ddd8d8]">
      <div className="flex flex-col items-center md:w-8/12 gap-5">
        <button className="p-2 text-xs  border border-[#e6b2087f] rounded-3xl md:w-1/6 bg-[#f0b60819]">
          How it works ?
        </button>
        <h2 className="text-5xl font-[50] w-7/13 text-center">
          Pay and get started the same day
        </h2>
        <p className="text-sm text-[#adacac] w-6/12 text-center">
          No unnecessary bureaucracy. We focus on getting your ideas and
          problems solved.
        </p>
      </div>
      <div className="flex justify-beween gap-8 w-9/12 md:pt-20">
        <div className="bg-[#141414] rounded-2xl border border-[#414141] p-5 flex flex-col gap-2 w-1/3 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="border border-[#e6b2087f] bg-[#f0b60819] w-fit h-fit px-4 py-2 rounded-4xl ">
            1
          </div>
          <h4 className="font-extralight text-2xl md:pt-6">
            Subscribe to a plan
          </h4>
          <p className="text-[#8e8c8c] font-extralight ">
            Select a plan thats fits your needs and jump on a onboarding call
          </p>
        </div>
        <div className="bg-[#141414] rounded-2xl border border-[#414141] p-5 flex flex-col gap-2 w-1/3 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="border border-[#e6b2087f] bg-[#f0b60819] w-fit h-fit px-4 py-2 rounded-4xl">
            2
          </div>
          <h4 className="font-extralight text-2xl md:pt-6">
            Add a task
          </h4>
          <p className="text-[#8e8c8c] font-extralight ">
            Receive your completed tasks in 2-4 business days.
          </p>
        </div>
        <div className="bg-[#141414] rounded-2xl border border-[#414141] p-5 flex flex-col gap-2 w-1/3 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="border border-[#e6b2087f] bg-[#f0b60819] w-fit h-fit px-4 py-2 rounded-4xl">
            3
          </div>
          <h4 className="font-extralight text-2xl md:pt-6">
            Enjoy results
          </h4>
          <p className="text-[#8e8c8c] font-extralight ">
            List your first task on our shared Trello board by specifying the
            requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
