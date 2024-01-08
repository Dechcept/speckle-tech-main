// SwiperSlider.js
import React, { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

const SwiperSlider = () => {

    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ];
  const swiperRef = useRef(null);

  // const goNext = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev();
  //   }
  // };

  return (
    <div>
      <Swiper ref={swiperRef} navigation={{nextEl:"goPrev",prevEl:"goNext"}}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center h-96 w-full flex items-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* Your content here */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-4">
        <button
          
          className="goPrev bg-blue-500 text-white px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          
          className="goNext bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SwiperSlider;
