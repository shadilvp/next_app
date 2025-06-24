"use client";
import Image from "next/image";
import { InfiniteSlider } from "../../../components/motion-primitives/infinite-slider";

import dribble from "../../../public/achivments/dribble.png";
import awards from "../../../public/achivments/awards.png";
import css from "../../../public/achivments/cssdesign.png";
import behance from "../../../public/achivments/behance.png";

export function InfiniteSliderBasic() {
  return (
    <div className="relative w-8/12 max-w-6xl mx-auto py-6 ">
      <div
        className="absolute left-0 bottom-2 h-full z-10  shadow-2xl shadow-amber-300"
        style={{
          boxShadow: "40px 0 150px 90px rgba(0, 0, 0, 0.8)",
        }}
      />

      <div
        className="absolute right-0 bottom-2 h-full  z-10 shadow-2xl shadow-amber-300"
        style={{
          boxShadow: "-40px 0 150px 90px rgba(0, 0, 0, 60)",
        }}
      />
      <InfiniteSlider className="h-[120px]" gap={32}>
        {[dribble, awards, css, behance].map((logo, index) => (
          <div
            key={index}
            className="w-[120px] h-[120px] flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`logo-${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
