import React, { useEffect, useState } from "react";
import {
  About,
  Banner,
  Foundernote,
  Global,
  Process,
  TitleImage,
} from "../Components/Index";
import TimeLine from "../Components/About/TimeLine";
import NumberingEffect from "./Number";
import Certificate from "../Components/About/Certificate";
import SLider from "../Components/template/SLider";
import { Slider } from "@mui/material";
import { HomeblogsData } from "../assets/Data2";

const AboutMain = (props) => {
  // Simulate a delay (you can adjust this as needed)
  const targetNumbers = [1000, 500, 1500, 200];

  const para2 =
    " Speckle Technologies pvt ltd established in 2019 is the fastest master batch/ Mono manufacturing company. Situated strategically at Silvassa 150kms from Mumbai and 100kms from Surat which is the hubfor polyester and polymer end use. Speckle technologies is engagedin manufacturing of master batches/ Mono for Polyester (PES),Polypropylene (PP), Polyethylene (PE), Polyamide (PA) and Nylon. Speckle has been supplying Master-batch/ Mono to almost all renowned manufacturers of the above mentioned polymers in India. These masterbatch manufactured by Speckle Technologies are used in applications Viz Yarn Industries, Automotive, Home furnishing, Plastics and many  more to go ahead.";
  return (
    <div className="">
      <TitleImage heading={"About Us"} url={"/images/Aboutusbanner.webp"} />
      <About
        para2={para2}
        para1={" We are focused on your ultimate goal"}
        heading={"ABOUT US"}
        img={"/images/AboutImageBanner.webp"}
      />
      <Process titale={"OUR VALUES"} para1={"Our Core Values"} />
      <Foundernote
        url={"/images/FounderImg.webp"}
        Name={"Founder Name"}
        Post={"Co-founder of SpeckleTechnologies"}
        heading={"FOUNDER NOTE"}
        para1={"Lorem ipsum dolor sit amet, consectetu"}
        para2={para2}
      />
      <Global />

      <Certificate
        url={"/images/CertificateImg.webp"}
        heading={"CERTIFICATION"}
        para1={"We are Certified by"}
        para3={"ISO-Certified"}
        para2={para2}
      />
      {/* <SLider blogsData={HomeblogsData} /> */}
      <TimeLine />
      <Banner />
    </div>
  );
};

export default AboutMain;
