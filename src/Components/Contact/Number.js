import React from "react";
import { Num } from "../../assets/Data";
import { useState } from "react";
import { useEffect } from "react";

const Counters = () => {
  const targetNumbers = [5, 500, 200, 15];
  const [counts, setCounts] = useState(Array(targetNumbers.length).fill(0));
  console.log(window.scrollY > 0);
  const handle = () => {
    if (window.scroll > 0) {
      const duration = 3000;
      const interval = 70;

      const steps = Math.ceil(duration / interval);

      const counters = targetNumbers.map((target, index) => {
        const stepValue = target / steps;
        let currentStep = 0;

        const counterInterval = setInterval(() => {
          currentStep++;
          setCounts((prevCounts) =>
            prevCounts.map((prevCount, i) =>
              i === index ? Math.min(prevCount + stepValue, target) : prevCount
            )
          );

          if (currentStep === steps) {
            clearInterval(counterInterval);
          }
        }, interval);

        return counterInterval;
      });

      return () =>
        counters.forEach((counterInterval) => clearInterval(counterInterval));
    }
  };

  return (
    <div className="flex justify-center  ">
      <div className="inline-flex  items-start gap-[24px] max-xl:flex-col">
        <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1 ">
          {Num.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-[24px]"
              >
                <div className="num text-[#5956E9] font-sans text-[64px] font-normal leading-[64px] tracking-[3.2px]">
                  {Math.round(counts[index])}+
                </div>
                <span className="num text-center w-[270px]  text-white  font-sans text-[20px] font-normal leading-[20px] tracking-[1px]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counters;
