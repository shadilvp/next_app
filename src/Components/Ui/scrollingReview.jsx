"use client";
import Image from "next/image";

import user from "../../../public/reviews/Border.png";
import user1 from "../../../public/reviews/user3-orzXQQ_S.png (1).png";
import user2 from "../../../public/reviews/user3-orzXQQ_S.png.png";
import user3 from "../../../public/reviews/user4-FAqwh1rE.png.png";
import user4 from "../../../public/reviews/user6-MSjVO7YG.png.png";

import logo1 from "../../../public/reviews/Clip path group.png";
import logo2 from "../../../public/reviews/Clip path group (1).png";
import { InfiniteSlider1 } from "../../../components/motion-primitives/infinite-slider copy";

const reviews = [
  {
    id: 1,
    name: "Milos Vidic",
    profile: user,
    position: "CEO @goatmarketing",
    writing:
      "Thanks to Handmade, we experienced a significant boost in website traffic, conversion rate, and website loading time. We also increased our website accessibility score and decreased the bounce rate...",
    company: logo1,
  },
  {
    id: 2,
    name: "Rasesh Seth",
    profile: user1,
    position: "CEO @nextyn",
    writing:
      "Vas was extremely easy to work with. He's a pro at Webflow and always open to hearing you out and executing exactly how you want. I'd definitely work with him again.",
    company: logo2,
  },
  {
    id: 3,
    name: "Goran Markovic",
    profile: user2,
    position: "Founder @viziya",
    writing:
      "Working with Handmade on our website design was an exceptional experience. As an architect, I needed a site that showcased our projects beautifully and reflected our unique design philosophy...",
    company: logo1,
  },
  {
    id: 4,
    name: "Chris Hjort",
    profile: user3,
    position: "PM @host",
    writing:
      "I highly recommend Vasilije. He is hardworking, creative, flexible, and fast. I'm happy I found his profile and will definitely hire him again!",
    company: logo2,
  },
  {
    id: 5,
    name: "Borgar Erlendsson",
    profile: user4,
    position: "CEO @kozmoz",
    writing:
      "True professional capable of delivering quality work within very tight time constraints. I enjoyed receiving constructive feedback and new ideas during the design phase...",
    company: logo1,
  },
];

export function InfiniteSliderBasic3() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-6">
        {[...Array(3)].map((_, i) => (
          <InfiniteSlider1
            key={i}
            direction="vertical"
            className="h-[500px]"
            gap={70 + i * 70}
          >
            {reviews.map((review) => (
              <div
                key={`${review.id}-${i}`}
                className="bg-[#141414] border border-[#414141] p-4 text-white rounded-lg w-[300px]"
              >
                <div className="flex justify-between mb-2">
                  <Image
                    src={review.profile}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="text-right">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.position}</p>
                  </div>
                </div>
                <p className="text-sm mb-3">{review.writing}</p>
                <div className="flex justify-end">
                  <Image
                    src={review.company}
                    alt="Company Logo"
                    width={60}
                    height={30}
                  />
                </div>
              </div>
            ))}
          </InfiniteSlider1>
        ))}
      </div>

      <div
        className="w-full mt-1  z-10"
        style={{
          boxShadow: "0px -40px 40px 100px rgba(0, 0, 0, 0.6)",
        }}
      />
    </div>
  );
}
