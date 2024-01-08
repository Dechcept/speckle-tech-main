import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HomeblogsData } from "../../assets/Data2";
import { Link } from "react-router-dom";

const SLider = ({ blogsData }) => {
  return (
    <div className="flex justify-center p-10">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        navigation={{
          nextEl: ".review-swipper-button-next",
          prevEl: ".review-swipper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <div className="flex max-xl:flex-col">
          {blogsData.map((item, index) => {
            return (
              <SwiperSlide className="">
                <div className="flex justify-center">
                  <div
                    key={index}
                    className="flex items-center max-lg:flex-col  gap-6 border-[1px] shadow-[#d0e7f7]  shadow-xl w-fit rounded-3xl"
                  >
                    <img
                      src={`/images/Blog${item.id}.webp`}
                      alt="#img"
                      className="rounded-l-3xl max-lg:rounded-l-none max-lg:rounded-b-none h-full w-full"
                    />
                    <div className="p-3 flex flex-col gap-2">
                      <Link
                        to="/SustainbilityMain/SustainDetailPage"
                        className="w-[270px]  text-xl font-bold leading-[120%] tracking-[1px] mb-6"
                      >
                        {item.title}
                      </Link>
                      <p className="w-[280px]  text-[#757575] text-base max-sm:text-sm font-normal leading-[150%] tracking-[0.8px] mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </p>
                      <span className="text-sm font-bold leading-[100%] tracking-[0.7px] p-2">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default SLider;
