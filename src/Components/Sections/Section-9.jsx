import React from "react";
import { InfiniteSliderBasic3 } from "../Ui/scrollingReview";





const Section9 = () => {
  return (
    <section className="flex flex-col items-center w-full mt-50 mb-30">
      <div className="w-11/14 flex flex-col gap-6 items-center mb-10">
        <div className="p-3 text-xs  border border-primary rounded-3xl w-30 bg-[#f0b60819] text-center text-primary">
          Testimonals
        </div>
        <div className="flex h-30 justify-center text-center ">
          <h4 className="text-5xl font-[10] w-9/14">
            Read what our clients are saying about us
          </h4>
        </div>
      </div>
      <InfiniteSliderBasic3/>
    </section>
  );
};

export default Section9;
