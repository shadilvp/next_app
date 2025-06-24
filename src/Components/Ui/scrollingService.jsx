"use client";
import { InfiniteSlider } from "../../../components/motion-primitives/infinite-slider";

export function InfiniteSliderBasic2() {
  return (
    <div className="relative flex flex-col items-center md:mt-15">
      <div
        className="absolute left-40 bottom-2 h-full z-10   shadow-2xl shadow-amber-300"
        style={{
          boxShadow: "40px 0 100px 130px rgba(0, 0, 0, 0.8)", 
        }}
      />

      <div
        className="absolute right-40 bottom-2 h-full  z-10 shadow-2xl shadow-amber-300"
        style={{
          boxShadow: "-40px 0 100px 130px rgba(0, 0, 0, 60)",
        }}
      />

      <div className="w-8/12 max-w-6xl pr-10">
        <InfiniteSlider className="h-[40px]" gap={32}>
          {[
            "UI/UX Design",
            "Graphic design",
            "Logo design",
            "Branding",
            "Animation",
          ].map((service, index) => (
            <div
              key={index}
              className="w-[150px] flex items-center justify-center bg-[#141414] rounded-lg border border-[#414141] p-3 text-sm"
            >
              {service}
            </div>
          ))}
        </InfiniteSlider>
      </div>

      <div className="w-8/12 max-w-6xl pl-10 mt-6">
        <InfiniteSlider className="" gap={32} reverse>
          {[
            "UI/UX Design",
            "Graphic design",
            "Logo design",
            "Branding",
            "Animation",
          ].map((service, index) => (
            <div
              key={index}
              className="w-[150px] flex items-center justify-center bg-[#141414] rounded-lg border border-[#414141] p-2 text-sm"
            >
              {service}
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
