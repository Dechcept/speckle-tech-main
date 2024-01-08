import React from "react";
import { profiledata } from "../../assets/Data";

const TestimonialProfile = () => {
  return (
    <div className="bg-white mx-36 flex justify-center max-md:mx-6 max-sm:mx-4  ">
      <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 ">
        {profiledata.map((item) => {
          return (
            <div className=" p-10 flex justify-center items-start gap-2 shadow-xl rounded-xl ">
              <div className="flex flex-col gap-6">
                <img
                  src="/images/comma.webp"
                  className="w-[42.05px] h-[40px]"
                  alt="#img"
                />
                <div className="flex flex-col items-start gap-8">
                  <p className="w-fit text-base ">{item.description}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img} 
                      alt="#Img"
                      className="w-[64px] h-[64px] rounded-[32px]"
                    />
                    <div className="">
                      <h1 className="font-sans text-[#333] text-[16px] leading-[24px] tracking-[0.8px]">
                        {item.Name}
                      </h1>
                      <h1 className="font-sans text-[#757575] text-[12px] leading-[18px] font-normal tracking-[0.6px]">
                        {item.position}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialProfile;
