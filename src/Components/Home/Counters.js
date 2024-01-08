import React from "react";
import { Num } from "../../assets/Data";
import { useState } from "react";
import { useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counters = () => {
  const targetNumbers = [5, 500, 200, 15];
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="flex justify-center  ">
      <div className="inline-flex  items-start gap-[24px] max-xl:flex-col">
        <ScrollTrigger
          onEnter={() => {
            setCounterOn(true);
          }}
          onExit={() => {
            setCounterOn(false);
          }}
        >
          <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1 ">
            {Num.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap -[24px]"
                >
                  <div className="num text-[#5956E9] font-sans text-[64px] font-normal leading-[64px] tracking-[3.2px] my-4">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={3}
                        delay={0}
                      />
                    )}
                    +
                  </div>
                  <span className="num text-center w-[270px]  text-white  font-sans text-[20px] font-normal leading-[20px] tracking-[1px]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Counters;
