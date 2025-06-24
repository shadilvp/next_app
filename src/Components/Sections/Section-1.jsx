"use client";

import Image from "next/image";
import React from "react";
import heroImg from "../../../public/hero-bg-BA73wE5O.jpg.png";
import rating from "../../../public/Container.png";
import { ChevronRight } from "lucide-react";

const Section1 = () => {
  return (
    <div>
      <section className="relative h-[80vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Hero"
            className="w-full h-full object-cover rotate-180"
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-20 left-0 w-full h-full flex flex-col items-center justify-center text-gray-200 px-4 z-10">
          {/* Rating Box */}
          <div className="flex items-center gap-3 text-xs border-2 rounded-3xl border-gray-600 px-4 py-2 bg-black/60 mb-6">
            5.0
            <Image src={rating} alt="Rating" width={60} className="" />
            11 reviews
          </div>

          {/* Headings */}
          <div className="text-center">
            <h1 className="font-light text-lg sm:text-2xl md:text-4xl leading-snug">
              Partner with a Full-Service <br />
              Design Team for All Your <br />
              Creative Needs
            </h1>
            <div className="mt-4 text-xs sm:text-sm text-gray-200">
              Skip the hassle of finding the perfect full-time designer or
              studio
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button className="mt-8 sm:mt-10 flex gap-2 rounded-4xl bg-primary text-black py-2 px-4 text-xs sm:text-sm items-center font-medium">
              Connect -us <ChevronRight width={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
