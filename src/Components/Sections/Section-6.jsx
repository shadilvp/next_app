import React from "react";
import { InfiniteSliderBasic2 } from "../Ui/scrollingService";

const Section6 = () => {
  return (
    <section className="flex flex-col items-center w-full mt-20 text-[#f3f3f3]">
      <div className="w-11/12 md:w-10/12 flex flex-col gap-6 items-center">
        <div className="p-2 text-xs border border-primary rounded-3xl bg-[#f0b60819] text-center text-primary w-fit">
          Services
        </div>
        <div className="flex justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-extralight w-full md:w-8/12">
            All you want delivered on time
          </h2>
        </div>
      </div>

      <div className="w-full mt-10">
        <InfiniteSliderBasic2 />
      </div>
    </section>
  );
};

export default Section6;
