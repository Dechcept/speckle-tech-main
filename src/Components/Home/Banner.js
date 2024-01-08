import React, { useState } from "react";
import Blank from "../Footer/Blank";
import Button from "../../Button/Button";
import HireMeForm from "../Contact/ContactForm";
import { Link } from "react-router-dom";

const Banner = () => {
  const data = JSON.parse(localStorage.getItem("userdata"));
  return (
    <div className="relative">
      <div className="h-[210px] bg-white "></div>
      <div className="flex justify-center ">
        <div className=" absolute -top-8  w-[1152px] max-xl:w-full max-xl:p-5  ">
          <div className="bg-[#5956E9] rounded-3xl  h-[421px] flex justify-center items-center ">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-6 text-white">
                <h1 className=" font-sans text-[64px] font-bold leading-[76.8px] tracking-[3.2px] max-md:text-5xl max-md:text-center">
                  Let’s Work Together
                </h1>
                <p className="w-[588px] max-xl:w-[400px] max-sm:w-full text-center font-sans text-[16px] max-sm:text-xs font-normal leading-[24px] tracking-[0.8px] p-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do <br />
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="flex justify-center">
                <Link to="/Contact">
                  <Button
                    type={"sumit"}
                    btnName={"Lets Talk"}
                    Btnstyle={"white"}
                    text={"black"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#27272E] h-[210px]"></div>
    </div>
  );
};

export default Banner;
