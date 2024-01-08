import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const CustomSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.custom-next-button',
        prevEl: '.custom-prev-button',
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const goNext = () => {
    const swiper = document.querySelector('.swiper-container').swiper;
    swiper.slideNext();
  };

  const goPrev = () => {
    const swiper = document.querySelector('.swiper-container').swiper;
    swiper.slidePrev();
  };

  return (
    <div className="relative h-screen">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {/* Your slide content goes here */}
            <img
              className="w-full h-full object-cover"
              src="/images/Aboutusbanner.webp"
              alt="Slide 1"
            />
          </div>
          <div className="swiper-slide">
            {/* Your slide content goes here */}
            <img
              className="w-full h-full object-cover"
              src="/images/Aboutusbanner.webp"

              alt="Slide 2"
            />
          </div>
          {/* Add more slides as needed */}
        </div>
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            className="custom-prev-button text-white font-bold text-lg px-3 py-2 bg-blue-500 rounded"
            onClick={goPrev}
          >
            Previous
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            className="custom-next-button text-white font-bold text-lg px-3 py-2 bg-blue-500 rounded"
            onClick={goNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
