import React from "react";
import Image from "next/image";

import benifit1 from "../../../public/benifits/benefits1-Cbxg5-_c.png.png";
import benifit2 from "../../../public/benifits/benefits2-CSNz231D.png.png";
import benifit3 from "../../../public/benifits/benefits3-BCFyD-SG.png.png";
import benifit4 from "../../../public/benifits/benefits4-D4KR8jeb.png.png";
import benifit5 from "../../../public/benifits/benefits5-BpgSICQ-.png.png";
import benifit6 from "../../../public/benifits/benefits6-6zv3TJ0F.png.png";

const cards = [
  {
    id: 1,
    title: "Fast turnaround",
    content:
      "Expect the first draft within 48-72 hours, from Monday to Saturday.",
    image: benifit2,
  },
  {
    id: 2,
    title: "Unlimited requests",
    content:
      "Enjoy the freedom of unlimited designs, tailored to meet your every need.",
    image: benifit6,
  },
  {
    id: 3,
    title: "Always in sync",
    content:
      "Stay in sync with real-time updates and seamless communication, all via Slack.",
    image: benifit3,
  },
  {
    id: 4,
    title: "Pause or cancel anytime",
    content:
      "Flexibility at your fingertips—pause or cancel your subscription anytime.",
    image: benifit5,
  },
  {
    id: 5,
    title: "Trello task management",
    content:
      "Expertise in crafting designs that not only captivate but also drive results.",
    image: benifit1,
  },
  {
    id: 6,
    title: "Worry free pricing",
    content: "Get all your design needs covered for just 2,150/month.",
    image: benifit4,
  },
];

const Section5 = () => {
  return (
    <section className="flex flex-col items-center w-full mt-20 text-[#f3f3f3]">
      <div className="w-11/12 md:w-10/12 flex flex-col gap-6 items-center">
        <div className="p-2 text-xs border border-primary rounded-3xl bg-[#f0b60819] text-center text-primary w-fit">
          Benefits
        </div>
        <div className="flex justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-extralight w-full md:w-8/12">
            Unlock a world of design potential with us
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-10/12 mt-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="rounded-3xl overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-start pt-4">
              <h4 className="text-white font-extralight text-lg">
                {card.title}
              </h4>
              <p className="text-xs text-[#6b6b6b] mt-1">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
