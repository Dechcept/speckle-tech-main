import React from "react";
import { Link } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BlogsTemplate = ({ blogsData }) => {
  return (
    <div className=" ">
      <div className="flex gap-6 flex-wrap  justify-center p-3  ">
        {blogsData.slice(0, 2).map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center max-lg:flex-col  gap-6  shadow-[#d0e7f7] shadow-lg rounded-3xl"
            >
              <img
                src={`/images/Blog${item.id}.webp`}
                alt="#img"
                className="rounded-l-3xl max-lg:rounded-l-none max-lg:rounded-b-none w-full h-full"
              />
              <div className="p-3 flex flex-col gap-2">
                <Link
                  to="/SustainbilityMain/SustainDetailPage"
                  className="w-[270px]  text-xl font-bold leading-[120%] tracking-[1px] mb-6"
                >
                  {item.title}
                </Link>
                <p className="w-[270px] text-[#757575] text-base font-normal leading-[150%] tracking-[0.8px] mb-5 p-1 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <span className="text-sm font-bold leading-[100%] tracking-[0.7px] p-2">
                  Learn More
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsTemplate;
