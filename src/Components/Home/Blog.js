import React from "react";
import BlogsTemplate from "../template/BlogsTemplate";
import SLider from "../template/SLider";

const Blog = ({ TitleName, heading, blogsData }, props) => {
  console.log(TitleName);
  return (
    <div className="flex justify-center my-20 max-sm:my-10 ">
      <div className="flex flex-col gap-16 ">
        <div className="flex items-center justify-between max-xl:justify-center  ">
          <div className="flex flex-col  gap-4 ">
            <h1 className="text-[#EE2B5A]  font-sans text-[14px] font-bold leading-[16.8px] tracking-[0.7px]">
              {TitleName}
            </h1>
            <p className="w-[564px]  font-sans text-[40px] max-sm:text-[32px] font-bold leading-[48px] max-sm:leading-[36px] tracking-[2px] max-md:w-full ">
              {heading}
            </p>
          </div>
          <div className="flex items-start gap-6 max-lg:hidden">
            <img
              src="/images/arrow-circle-left.webp"
              alt="Img"
              className="h-10 w-10 flex-shrink-0 text-[#000000] review-swipper-button-prev"
            />
            <img
              src="/images/arrow-circle-right.webp"
              alt="Img"
              className="h-10 w-10 flex-shrink-0  text-[#000000] review-swipper-button-next"
            />
          </div>
        </div>
        <div>
          <BlogsTemplate blogsData={blogsData} />
        </div>
        <div className="hidden items-start gap-6 max-lg:flex max-lg:ml-10">
          <img
            src="/images/arrow-circle-left.webp"
            alt="Img"
            className="h-10 w-10 flex-shrink-0 text-[#000000]"
          />
          <img
            alt="Img"
            src="/images/arrow-circle-right.webp"
            className="h-10 w-10 flex-shrink-0  text-[#000000]"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
