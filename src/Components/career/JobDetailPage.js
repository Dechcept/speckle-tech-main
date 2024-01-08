import React from "react";
import Button from "../../Button/Button";
import JobDetailsForm from "./JobDetailsForm";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const JobDetailPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { jobDetails } = useSelector((state) => state.JobDetailpage);
  return (
    <div className="">
      <div
        style={{ backgroundImage: "url('/images/CareerPageTitle.webp')" }}
        className="h-[400px] bg-cover bg-center bg-no-repeat flex items-center p-40 max-md:p-20 max-sm:p-0 "
      >
        <div className="flex flex-col p-3 ">
          <h1 className="heading text-white text-[64px] max-md:text-4xl  w-fit ">
            {jobDetails.jobPositon}
          </h1>
          <div className="flex gap-2 text-white my-6  font-bold tracking-wide w-fit">
            <div>{jobDetails.location}</div> |<div>{jobDetails.time}</div> |
            <div>{jobDetails.Experience}</div>
          </div>
          <div className="mt-10">
            <Button />
          </div>
        </div>
      </div>
      <div className="p-24 max-sm:p-3  ">
        <h1 className="text-2xl font-sans font-bold leading- [120%] tracking-[1.2px]">
          About this position
        </h1>
        <p className="text-md font-sans font-normal leading-[150%] tracking-[0.8px] w-[858px] max-lg:w-fit mt-6 text-[#757575]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="bg-[#ECF2F6] h-[709px] max-lg:h-[1016px] p-20 max-xl:p-10 max-sm:p-5">
        <div className="flex justify-center gap-24 max-xl:gap-10 max-lg:flex-col ">
          <div>
            <h1 className="text-2xl font-bold leading-[100%] tracking-[1.2px]">
              What are you going to do
            </h1>
            <ul className="flex flex-col gap-4 max-sm:gap-2  my-6">
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-[100%] tracking-[1.2px]">
              Eligibility Criteria
            </h1>
            <ul className="flex flex-col gap-4 my-6">
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
              <li className="flex gap-3">
                <img
                  src="/images/RightSign.webp"
                  alt="img"
                  className="h-6 w-6"
                />
                <p className="text-[#757575] text-base">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit ame
                </p>
              </li>
            </ul>
          </div>
        </div>
        <JobDetailsForm />
      </div>
      <div className="bg-white h-[419px] max-xl:h-[540px] max-sm:h-[490px]"></div>
    </div>
  );
};

export default JobDetailPage;
