import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import project1 from "../../../public/works/project1-DyFZYTNM.jpg.png";
import project2 from "../../../public/works/project2-8g0cod9l.jpg.png";
import project3 from "../../../public/works/project3-IgW1Pkkw.jpg.png";
import project4 from "../../../public/works/project4-BhR40iZf.jpg.png";
import project5 from "../../../public/works/project5-DSLPbhiU.jpg.png";
import project6 from "../../../public/works/project6-C2twDe5Z.jpg.png";

const cards = [
  {
    id: 1,
    title: "Slipery moneys - e-commerce platform for high risk industries",
    image: project2,
  },
  {
    id: 2,
    title: "Hybrid capital - digital currency",
    image: project6,
  },
  {
    id: 3,
    title: "Betero - sports betting platform",
    image: project3,
  },
  {
    id: 4,
    title: "Exec - employees financial wellness saas",
    image: project5,
  },
  {
    id: 5,
    title: "Voltoge - accessible clean energy startup",
    image: project1,
  },
  {
    id: 6,
    title: "Hyperbolic - a decentralized data transmission startup",
    image: project4,
  },
];

const Section4 = () => {
  return (
    <section className="flex flex-col items-center w-11/12 md:w-10/12 mx-auto mt-20 gap-10">
      <div className="w-full flex flex-col gap-6">
        <div className="p-2 text-xs border border-[#e6b2087f] rounded-3xl w-fit bg-[#f0b60819] text-center">
          Portfolio
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-extralight md:w-5/12">
            Exceptional work you deserve
          </h2>
          <p className="font-extralight text-sm md:w-4/12 md:pt-6">
            From tech startups to healthcare giants, e-commerce pioneers to
            edtech, we've left our mark on diverse domains
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative bg-[#141414] rounded-3xl border border-[#414141] overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex pb-10 justify-center items-end">
              <h4 className="text-white text-lg font-extralight px-4 text-center">
                {card.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 flex gap-2 rounded-4xl bg-primary text-black py-2 px-4 text-sm items-center font-medium">
        See all works <ChevronRight width={18} />
      </button>
    </section>
  );
};

export default Section4;
