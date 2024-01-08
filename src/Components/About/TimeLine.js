import React, { useState } from "react";
import { Timelinedata } from "./TimelineData";
const TimeLine = () => {
  const [year, setYear] = useState("");
  console.log(year);

  return (
    <section className="my-20 bg-slate-100 p-10 max-lg:overflow-x-auto">
      <div className=" flex flex-col gap-10 ">
        <div className="flex flex-col items-center gap-4 mt-10 ">
          <h2 className="title">History</h2>
          <p className="heading text-center ">How we came here</p>
        </div>

        <div className=" ">
          <ul className="flex justify-around px-1 py-2 ">
            {Timelinedata.map((item) => {
              return (
                <li className="w-[211px] h-[250px]  ">
                  <div
                    style={{
                      backgroundImage: "url('/images/TimeLineTemplate.webp')",
                    }}
                    className={` ${
                      year == item.year
                        ? "block transition duration-700 ease-out"
                        : "hidden"
                    }  w-[211px] h-[243px] bg-slate-100   transition duration-300 ease-in-out `}
                  >
                    <p className="para p-4 w-fit">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="h-1 bg-[#d9d9d9] rounded-2xl ">
            <ul className="flex justify-around relative  -top-[3px] h-2 mb-2 w-full">
              {Timelinedata.map((item) => {
                return (
                  <li className="h-2 ">
                    <img
                      src="/images/pointer.webp"
                      alt="#img"
                      className={`${year == item.year ? "block" : "hidden"}`}
                    />
                  </li>
                );
              })}
            </ul>
            <ul className="flex justify-around w-full  hover:cursor-pointer">
              {Timelinedata.map((item) => {
                return (
                  <li
                    onClick={() => {
                      setYear(item.year);
                    }}
                  >
                    {item.year}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
