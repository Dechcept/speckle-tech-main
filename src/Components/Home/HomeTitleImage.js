import Button from "../../Button/Button";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  // EffectFade,
} from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./HomeTitle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeTitleImage = (props) => {
  const imagedata = [
    {
      id: 1,
      img: "/images/Rectangle11.webp",
    },
    {
      id: 2,
      img: "/images/Rectangle11.webp",
    },
    {
      id: 3,
      img: "/images/Rectangle11.webp",
    },
  ];

  const swiper = useSwiper();

  return (
    <div className="relative">
      <Swiper
        modules={[
          Navigation,
          Autoplay,
          // EffectFade,
          Pagination,
          Scrollbar,
          A11y,
        ]}
        spaceBetween={0}
        // effect={"fade"}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          duration: 500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".review-swipper-button-next",
          prevEl: ".review-swipper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="h-[600px] max-sm:h-[400px]"
      >
        {imagedata.map((item) => {
          return (
            <SwiperSlide
              className="lazy-load bg-center bg-cover  bg-no-repeat w-full h-[600px]   "
              style={{ backgroundImage: `url("${item.img}")` }}
            >
              <div className="flex items-center h-full  ml-20 max-sm:ml-5">
                <div className="flex flex-col gap-8 ">
                  <div className="flex flex-col gap-8 max-sm:gap-3 ">
                    <h1 className="font-serif text-white text-[56px] font-bold leading-[120%] max-sm:leading-8 tracking-[2.8px] max-md:text-[38px] max-sm:text-2xl ">
                      Colors to make <br /> your life colorfull
                    </h1>
                    <Button
                      btnName={"View Products"}
                      Btnstyle={"white"}
                      text={"black"}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
      <div className=" absolute bottom-[19%] ml-20 max-sm:ml-5 h-fit w-fit flex items-center z-10  ">
        <div className="flex gap-6 ">
          <div
            className="review-swipper-button-prev"
          
          >
            <img src="/images/arrow-circle-left-white.webp" alt="#img" />
          </div>
          <div
            className="review-swipper-button-next"
         
          >
            <img src="/images/arrow-circle-right-white.webp" alt="#img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTitleImage;
