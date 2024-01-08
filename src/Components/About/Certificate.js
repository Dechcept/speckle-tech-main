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

const Certificate = ({ heading, para1, para2, Name, Post, url, para3 }) => {
  const swiper = useSwiper();
  return (
    <div>
      <div className="my-20 max-sm:my-10 p-10 max-sm:p-3 ">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".review-swipper-button-next",
            prevEl: ".review-swipper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="h-fit"
        >
          <SwiperSlide>
            <div className="flex max-lg:flex-col items-center justify-center  gap-8 max-sm:gap-0 ">
              <div className="flex flex-col gap-4 ">
                <h1 className="title">{heading}</h1>
                <p className="heading">{para1}</p>
                <p className="font-bold text-xl">{para3}</p>
                <p className="para text-[#757575]">{para2}</p>
              </div>
              <div>
                <div className="flex flex-col items-center gap-2 max-lg:hidden">
                  <div className="h-[466px] w-[400px] flex items-center">
                    <img src={`${url}`} alt="#img" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex max-lg:flex-col items-center justify-center  gap-8 max-sm: ">
              <div className="flex flex-col gap-4 ">
                <h1 className="title">{heading}</h1>
                <p className="heading">{para1}</p>
                <p className="font-bold  max-sm:text-sm text-xl">{para3}</p>
                <p className="para text-[#757575]">{para2}</p>
              </div>
              <div>
                <div className="flex flex-col items-center gap-2 max-lg:hidden">
                  <div className="h-[466px] w-[400px] flex items-center">
                    <img src={`${url}`} alt="#img" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="flex   gap-6 ">
          <div className="review-swipper-button-next">
            <img src="/images/arrow-circle-left.webp" alt="#img" />
          </div>
          <div className="review-swipper-button-next">
            <img src="/images/arrow-circle-right.webp" alt="#img" />
          </div>
        </div>
        </Swiper>
        
      </div>
    </div>
  );
};

export default Certificate;
