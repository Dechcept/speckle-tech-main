import React from "react";
import Counters from "./Counters";
import ProcessTemplate from "../template/ProcessTemplate";
import { Num, ProcesDataTemplate } from "../../assets/Data";
import { useState } from "react";
import { useEffect } from "react";

const Process = (props) => {

  return (
    <div
      className="h-[929px]  flex-shrink bg-[#27272E] justify-center p-6  max-xl:h-full
        "
    >
      <div className=" my-20 relative ">
        <Counters  />
        <img
          src="/images/Ellipse 8.webp"
          className="h-[100px] mt-10 absolute left-0 max-sm:hidden"
        />
        <div className="flex justify-center  ">
          <div className="h-[438px] w-[438px] flex-shrink-0 rounded-[438px] max-sm:h-[300px] max-sm:w-[300px] max border-[#B3B3B3] border-[1px]  flex justify-end p-20 mt-10 ">
            <img
              src="/images/Ellipse 9.webp"
              className="h-[39px] w-[39px] max-sm:w-[30px] max-sm:h-[30px] flex-shrink-0 max-sm:hidden"
              alt="img"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-14 relative bottom-80 max-sm:bottom-64 ">
          <div className="flex flex-col items-center gap-4 ">
            <h1 className=" text-center  text-[#EE2B5A]  font-sans text-[14px] font-bold leading-[16.8px] tracking-[0.7px]">
              OUR PROCESS
            </h1>
            <h1 className=" text-center  text-white  font-sans text-[40px] max-sm:text-3xl font-bold leading-[48px] tracking-[2px]">
              How we work
            </h1>
          </div>
          <div>
            <ProcessTemplate templatedata={ProcesDataTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
