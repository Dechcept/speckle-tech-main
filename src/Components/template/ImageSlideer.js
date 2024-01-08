// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperSlider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      
    >
      <SwiperSlide className="h-[600px]"><img src="/images/Aboutusbanner.webp" className="h-[600px] w-full" alt="#img" /></SwiperSlide>
      <SwiperSlide><img src="/images/Aboutusbanner.webp" alt="#img" /></SwiperSlide>
      <SwiperSlide><img src="/images/Aboutusbanner.webp" alt="#img" /></SwiperSlide>
      ...
    </Swiper>
  );
}
