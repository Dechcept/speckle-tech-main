import React, { useState } from "react";
import { jobPositiondata } from "../../assets/Data2";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getjobData } from "../../Redux/JobDetailSlice";

const JobPosition = (props) => {
  const dispacth = useDispatch();
  return (
    <div className="flex flex-col gap-4  mb-20">
      {jobPositiondata.map((item,index) => {
        return (
          <div key={index} className="w-full">
            <div className="flex  justify-between w-full  border-b-[1px] p-5 max-sm:p-3 ">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-[18px] max-lg:w-full">
                  {item.jobPositon}
                </h1>
                <div className="flex justify-center gap-1 ">
                  <div className="max-sm:text-xs">{item.location} |</div>{" "}
                  <div className="max-sm:text-xs">{item.time} |</div>{" "}
                  <div className="max-sm:text-xs">{item.Experience}</div>
                </div>
              </div>
              <Link to={"/jobDetails"}>
                <div
                  onClick={() => {
                    dispacth(getjobData(item));
                  }}
                  className="h-[64px] max-sm:h-10 w-[64px] max-sm:w-10 bg-[#5956E9] rounded-full flex justify-center items-center "
                >
                  <img
                    src="/images/arrow-right.webp"
                    className="w-6 h-6"
                    alt="#img"
                  />
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobPosition;
