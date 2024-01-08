import React from "react";
import TestimonialProfile from "../template/TestimonialProfile";

const Sustainability = () => {
  return (
    <div className="my-36  flex justify-center items-center ">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <h1 className="title">
            TESTIMONIAL
          </h1>
          <p className="heading text-center">
            Here's what our satisfied <br />
            clients are saying
          </p>
        </div>
        <div>
          <TestimonialProfile />
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
