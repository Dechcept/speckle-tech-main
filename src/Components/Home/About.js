import React from "react";

const About = ({ img }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center  my-24 max-sm:my-10 p-10 max-sm:p-3  ">
      <div className=" flex gap-6 max-xl:items-center max-xl:flex-col relative ">
        <div className="w-[600px] max-sm:w-[300px]">
          <img src={img} alt="#img" />
        </div>
        <img
          src="/images/AboutCircle2.webp"
          className="h-[55px] w-[55px] flex-shrink-0 absolute  left-[45%] top-36  max-xl:hidden"
        />

        <img
          src="/images/Ellipse 1.webp"
          className="h-[121px] w-[121px] flex-shrink-0 absolute -top-10 -left-24 max-xl:hidden"
        />
        <div className="flex flex-col  gap-5">
          <h1 className="title">ABOUT US</h1>

          <h1 className="heading ">We are focused on your ultimate goal</h1>

          <p className="para max-sm:text-sm  ">
            Speckle Technologies pvt ltd established in 2019 is the fastest{" "}
            master batch/ Mono manufacturing company. Situated strategically at
            Silvassa 150kms from Mumbai and 100kms from Surat which is the hub
            for polyester and polymer end use. Speckle technologies is engaged
            in manufacturing of master batches/ Mono for Polyester (PES),
            Polypropylene (PP), Polyethylene (PE), Polyamide (PA) and Nylon.
            Speckle has been supplying Master-batch/ Mono to almost all renowned
            manufacturers of the above mentioned polymers in India. These master
            batch manufactured by Speckle Technologies are used in applications
            Viz Yarn Industries, Automotive, Home furnishing, Plastics and many
            more to go ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
