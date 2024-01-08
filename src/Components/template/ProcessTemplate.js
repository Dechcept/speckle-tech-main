import React from "react";

const ProcessTemplate = ({ templatedata, num }) => {
  return (
    <div className="h-full my-10">
      <div className="grid grid-cols-4 gap-6  max-xl:grid-cols-2 max-lg:grid-cols-1 max-sm:w-[300px] h-full">
        {templatedata.map((item) => {
          return (
            <div className="flex items-start gap-2 p-[24px]  rounded-xl bg-gradient-to-b from-[#3F3F50] from-0% to-[#27272E] to-[99%] ">
              <div className="flex flex-col items-start gap-10">
                <div className=" text-white text-center bg-[#3F3F50]] border-white font-[Poppins] text-[96px] font-bold leading-[96px] tracking-[4.8px]">
                  {num}
                  {item.id}
                </div>
                <div className="flex flex-col items-start gap-4">
                  <div className=" text-white w-[222px] font-[Poppins] text-[24px] font-bold leading-[36px] tracking-[1.2px] max-xl:w-fit max-sm:w-fit">
                    {item.headline}
                  </div>
                  <div className=" text-white w-[222px]  font-[Poppins] text-[16px] font-normal leading-[24px] tracking-[0.8px] max-lg:w-fit">
                    {item.description}
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

export default ProcessTemplate;
