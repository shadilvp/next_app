"use client";

import React from "react";
import Image from "next/image";
import videoImg from "../../../public/videoImg.jpg";
import VideoPlayerButton from "../Ui/videoPlayerButton";
import Design from "../../../public/design.png";
import { InfiniteSliderBasic } from "../Ui/scrollingachivment";

const Section2 = () => {
  return (
    <div>
      <section className="flex flex-col w-11/12 md:w-9/12 items-center mx-auto my-20 text-[#bebdbd]">
        <div className="flex flex-wrap justify-between w-full gap-4">
          <div className="shadow-md w-full md:w-[48%] rounded-3xl bg-amber-300 overflow-hidden">
            <div className="relative">
              <Image
                src={videoImg}
                alt="video"
                className="object-cover w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <VideoPlayerButton />
              </div>
            </div>
          </div>

          <div className="bg-[#141414] shadow-md w-full md:w-[48%] flex flex-wrap md:flex-nowrap justify-between items-center rounded-3xl p-6 md:p-10 text-xs text-[#bebdbd] border border-[#414141]">
            <div className="hidden md:block">
              <Image src={Design} alt="design" className="rotate-y-180" />
            </div>
            <div className="flex flex-col items-center p-5 w-full">
              <p className="text-center">
                An absolute professional who consistently delivers exceptional
                work, even under the most demanding deadlines. I appreciated the
                insightful feedback and innovative ideas introduced throughout
                the design process, which greatly enhanced the final product..
              </p>
              <div className="flex gap-6 flex-wrap justify-center">
                <p className="text-[#6e6e6e] pt-3">Murshid Pulkkada</p>
                <p className="text-[#6e6e6e] pt-3">Founder @Progbiz</p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src={Design} alt="design" />
            </div>
          </div>
        </div>

        <div className="bg-[#141414] p-6 md:p-10 shadow-md w-full mt-6 rounded-3xl border border-[#414141] flex flex-wrap md:flex-nowrap justify-between gap-6">
          <div className="font-extralight text-2xl md:text-4xl flex justify-start w-full md:w-1/2">
            <h2 className="w-full md:w-7/12">
              Your dedicated in-house design team
            </h2>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <div className="text-sm">
              We are a global collective of diverse designers and developers,
              partnering with brands of all scales. What distinguishes us is our
              dedication to crafting memorable, user-friendly, and captivating
              experiences — it's what we excel at. The projects we deliver
              combine creative vision with practical execution, resulting in
              solutions that are both distinctive and impactful.
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center pt-6 md:pt-12 gap-4">
              <div className="p-3 border-l border-[#414141] w-full md:w-11/12">
                <p>Murshid</p>
                <p className="text-[#6e6e6e]">Founder and CEO</p>
              </div>
              <Image
                src={Design}
                alt="design"
                width={30}
                className="rotate-15"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-30 gap-10 items-center">
          <div className="text-xs">As seen and loved on :</div>
          <InfiniteSliderBasic />
        </div>
      </section>
    </div>
  );
};

export default Section2;
