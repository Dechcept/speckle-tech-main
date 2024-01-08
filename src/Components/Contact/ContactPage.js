import React, { useEffect } from "react";
import CarrerTitleImge from "../career/CarrerTitleImge";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Button from "../../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getContactDetails, getUserData } from "../../Redux/jobDetailFormSlice";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ContactForm from "./ContactForm";
import Map from "./Map";
import { Form, useLocation } from "react-router-dom";

const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=" ">
      <div
        style={{
          backgroundImage: `url("/images/ContactImage.webp")`,
        }}
        className="w-full bg-cover bg-center h-[400px] flex justify-center items-center  "
      >
        <h1 className="heading text-4xl text-center text-white">Contact Us</h1>
      </div>
      <div className="bg-[#ECF2F6]">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 p-10 max-sm:p-3  ">
          <div className="flex flex-col gap-4 ">
            {/* <div className="para w-full text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              eligendi molestiae ipsam, quam dolorem aspernatur impedit ut
              ratione doloribus id earum suscipit excepturi laudantium quisquam
              ad sed magnam cupiditate voluptatibus.
            </div> */}
            <div className="flex flex-row items-center gap-4">
              <div className="bg-white w-fit p-1 rounded-full">
                <LocalPhoneRoundedIcon className="text-black" />
              </div>
              <span className="text-lg ">+91 98810 66062</span>
            </div>
            {/* <div className="flex flex-row items-center gap-4">
              <div className="bg-white w-fit p-1 rounded-full">
                <EmailRoundedIcon className="text-black" />
              </div>
              <span className="text-lg">0000000000</span>
            </div> */}
            <div className="text-xl font-bold">
              Office <br />
              <span className="font-normal para text-lg">
                <p>Speckle Technologies Pvt Ltd.</p>
                Plot No. 90 & 91A, Manik Estate,
                Dan Udhyog Industrial Estate,Piparia,<br />
                Silvassa-396230 DNH & DD
              </span>
            </div>
            <div className="text-xl font-bold">
              Email <br />
              <span className="font-normal para text-lg">
                <p>sales.speckle@gmail.com</p>
               
              </span>
            </div>
          </div>
          <div className="max-sm:p-3">
            <Map />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
