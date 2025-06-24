import React from "react";
import { Check, ChevronRight } from "lucide-react";

const Section7 = () => {
  return (
    <section className="flex flex-col items-center w-full mt-20 text-[#f3f3f3]">
      <div className="w-11/12 flex flex-col gap-6 items-center">
        <div className="p-2 text-xs border border-primary rounded-3xl bg-[#f0b60819] text-center text-primary w-fit">
          Pricing
        </div>
        <div className="flex justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-extralight w-full md:w-8/12">
            Choose the relevant plan to build, grow and fasten your team
          </h2>
        </div>
      </div>

      <div className="w-11/12 flex flex-col lg:flex-row justify-between mt-10 gap-6">
        {/* Standard Plan 1 */}
        <div className="bg-[#141414] rounded-4xl border border-[#414141] p-8 w-full lg:w-1/3">
          <div>
            <p className="text-[#696767]">STANDARD</p>
            <h2 className="text-4xl py-4">
              $2,150 <span>/month</span>
            </h2>
            <p className="py-5 text-sm">One request at a time</p>
          </div>
          <div>
            <p className="text-[#696767] text-sm py-4">What's included:</p>
            <ul className="space-y-2 text-sm">
              {[
                "Unlimited requests",
                "~48 hour delivery",
                "Unlimited brands",
                "Weekly meetings",
                "Pause or cancel any time",
                "Managed via Slack and Trello",
                "All services except Webflow",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-primary mr-2">
                    <Check size={15} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="mt-10 flex gap-2 rounded-4xl bg-primary text-black py-5 px-5 text-sm items-center font-medium w-full justify-center">
              Subscribe <ChevronRight width={20} />
            </button>
            <button className="mt-6 flex gap-2 rounded-4xl bg-[#141414] text-white py-5 px-5 text-sm font-medium w-full border border-[#3c3c3c] justify-center">
              Book a demo <ChevronRight width={20} />
            </button>
          </div>
        </div>

        {/* Standard Plan 2 */}
        <div className="bg-[#141414] rounded-4xl border border-[#414141] p-8 w-full lg:w-1/3">
          <div>
            <p className="text-[#696767]">STANDARD</p>
            <h2 className="text-4xl py-4">
              $2,150 <span>/month</span>
            </h2>
            <p className="py-5 text-sm">One request at a time</p>
          </div>
          <div>
            <p className="text-[#696767] text-sm py-4">What's included:</p>
            <ul className="space-y-2 text-sm">
              {[
                "Unlimited requests",
                "~48 hour delivery",
                "Unlimited brands",
                "Weekly meetings",
                "Pause or cancel any time",
                "Managed via Slack and Trello",
                "All services except Webflow",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-primary mr-2">
                    <Check size={15} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="mt-10 flex gap-2 rounded-4xl bg-primary text-black py-5 px-5 text-sm items-center font-medium w-full justify-center">
              Subscribe <ChevronRight width={20} />
            </button>
            <button className="mt-6 flex gap-2 rounded-4xl bg-[#141414] text-white py-5 px-5 text-sm font-medium w-full border border-[#3c3c3c] justify-center">
              Book a demo <ChevronRight width={20} />
            </button>
          </div>
        </div>

        {/* Project-Based & Refer */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          <div className="bg-[#141414] rounded-4xl border border-[#414141] p-8 h-3/5">
            <div className="flex flex-col gap-3 pb-4">
              <p className="text-[#696767]">PROJECT-BASED</p>
              <p className="text-[#ffffff] text-sm">
                For a custom fee delivered in milestones. Ideal for specific
                goals. Custom project scope.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#696767] text-sm py-4">What's included:</p>
              <ul className="space-y-2 text-sm">
                {["Fixed scope of work", "Delivered in milestones"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary mr-2">
                        <Check size={15} />
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <button className="mt-6 flex gap-2 rounded-4xl bg-[#141414] text-white py-5 px-5 text-sm font-medium w-full border border-[#3c3c3c] justify-center">
              Send mail
            </button>
          </div>

          <div className="bg-[#141414] rounded-4xl border border-[#414141] p-8  h-2/5">
            <h2 className="text-2xl md:text-4xl py-2">Refer & earn</h2>
            <p className="text-[#ffffff] text-sm">
              Receive $150 for each referral!
            </p>
            <button className="mt-6 flex gap-2 rounded-4xl bg-[#141414] text-white py-5 px-5 text-sm font-medium w-full border border-[#3c3c3c] justify-center">
              Join now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
