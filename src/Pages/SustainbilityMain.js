import React from "react";
import { Banner, TitleImage } from "../Components/Index";
import SustainImages from "../Components/Sustainability/SustainImages";
import Blog from "../Components/Home/Blog";
import { SustainableBlogsData, sustainablilityData } from "../assets/Data2";
import ProcessTemplate from "../Components/template/ProcessTemplate";
import { useState } from "react";
import Slider from "../Components/template/SLider";

const SustainbilityMain = (props) => {
  const [chnage, setChange] = useState(true);

  return (
    <section className="sustainbilty">
      <div>
        <TitleImage
          heading={"Sustainbilty"}
          url={"../images/Aboutusbanner.webp"}
        />
      </div>
      <div className="p-3">
        <div className="flex justify-center max-xl:flex-col-reverse max-xl:items-center gap-6  my-36">
          <div className="w-[564px] max-xl:w-full ">
            <h1 className="heading max-xl:w-full ">
              Sustainability for a Better Tomorrow
            </h1>
            <p className="para text-[#757575] my-6  max-xl:w-full">
              The growing trend of towards global environmentalism and
              sustainability has been embraced by master batch manufacturer and
              at Speckle Technologies we are in forefront of innovation to help
              make this objective possible. Sustainability means different
              things to different people ranging from partial recyclability
              through to ensuring that every stage and process minimises
              environmental effect. For master batch to be considered
              sustainable both polymer source and end use of the product needs
              to be considered. Speckle Technologies Pvt ltd has long been a
              leading exponent of sustainability in Master batch technology. The
              Speckle Technologies Pvt ltd range of laboratory and pilot Melt
              Spinning extrusion lines is ideally suited for both process and
              end product development of sustainable materials, enabling
              customers to undertake process development in-house. All systems
              are designed to be material efficient, can be bespoke designed and
              offer both flexibility and a high level of processing capability.
              They are supplied as self-contained units for ease of installation
              in a laboratory or small scale process evaluation environment.
            </p>
          </div>
          <div>
            <SustainImages />
          </div>
        </div>

        <div className="flex flex-col gap-8  items-center  ">
          <div className="flex gap-8 justify-center flex-col ">
            <div className="flex items-start">
              <h1 className="heading w-[1054px] max-xl:w-full ">
                Sustainable fibre applications and market sectors served by
                Speckle technologies Pvt Ltd include
              </h1>
            </div>

            <div className=" flex justify-start">
              <div className="flex   border-[#5956E9] bg-[#5956E9]  border w-fit rounded-2xl">
                <div
                  className={` py-4 px-8  rounded-l-2xl transition duration-200 ease-out ${
                    chnage == true ? " text-white" : "bg-white text-[#5956E9]"
                  }`}
                  onClick={() => {
                    setChange(true);
                  }}
                >
                  <span>Textiles</span>
                </div>
                <div
                  className={` py-4 px-8 rounded-r-2xl  ${
                    chnage == false
                      ? "bg-[#5956E9] text-white"
                      : "bg-white text-[#5956E9]"
                  }`}
                  onClick={() => {
                    setChange(false);
                  }}
                >
                  <span className=" ">Manufacturing</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center ">
              <ProcessTemplate
                templatedata={sustainablilityData.slice(0, 4)}
                num={"-"}
              />
            </div>
          </div>
        </div>

        <div className="my-20">
          <Blog
            name={""}
            heading={"Making Change Happen"}
            blogsData={SustainableBlogsData}
          />
        </div>
        {/* <Slider /> */}
      </div>
      <Banner />
    </section>
  );
};

export default SustainbilityMain;
