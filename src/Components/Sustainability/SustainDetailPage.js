import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Banner from "../Home/Banner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SustainDetailPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section>
      <div>
        <div
          className="h-[400px]  flex items-center p-20 max-md:p-10"
          style={{ backgroundImage: "url('/images/sustainDetail1.webp')" }}
        >
          <h1 className="text-6xl text-white font-bold leading-normal tracking-[6.4px]">
            Protect our Planet
          </h1>
        </div>
        <div className="p-10 max-sm:p-3">
          <div className="flex flex-col  ">
            <div className="flex justify-center max-xl:flex-col-reverse max-xl:items-center my-20 max-xl:my-10 gap-[122px] max-lg:gap-20 ">
              <div className="w-[564px] max-xl:w-full ">
                <h1 className=" heading text-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </h1>
                <p className="my-5 para ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim venia Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniaLorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniaLorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniaLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim venia
                </p>
              </div>
              <div>
                <img
                  src="/images/sustainDetail2.webp"
                  alt=""
                  className="w-[466px] h-[384px] max-lg:w-full max-lg:h-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex justify-start  mb-10 ">
              <p className="w-[885px]  text-base max-xl:w-full para  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doy
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venia Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniaLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniaLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniaLorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim venia
              </p>
            </div>

            <div className="flex items-center max-xl:flex-col-reverse  my-20">
              <div className="p-3 ">
                <div className="  p-10 max-sm:p-5 bg-white border-[2px] rounded-3xl relative max-lg:bottom-10 left-20 max-xl:left-0 max-xl:bottom-10 ">
                  <p className="  text-black w-[470px] max-md:w-full text-[16px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim venia Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniaLorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniaLorem ipsum
                    dolor sit amet, consectetur adi
                  </p>
                </div>
              </div>
              <div
                className="  flex justify-center items-center  "
                // style={{ backgroundImage: "url('/images/sustainDetail3.png')" }}
              >
                <img
                  src="/images/sustainDetail3.webp"
                  alt=""
                  className="h-[500px] w-[808px] max-lg:h-full  max-xl:w-full bg-no-repeat"
                />
                <div className="h-20 w-20 absolute">
                  <AiOutlinePlayCircle className="text-7xl h-20 w-20 text-[#5956E9] font-thin" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Banner />
      </div>
    </section>
  );
};

export default SustainDetailPage;
