import React, { useState } from "react";
import Button from "../../Button/Button";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "./Droopdown";
import { Link } from "react-router-dom";
import HireMeForm from "../Contact/ContactForm";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [show, setshow] = useState(false);
  const [form, setform] = useState(false);

  const handleform = () => {
    if (!form) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      console.log(form);
      setform(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setform(false);
    }
  };

  return (
    <div className="">
      <div className=" h-[96px] m-auto flex flex-col justify-center bg-[#ECF2F6]  flex-shrink-0 font-sans p-10 max-sm:p-5  ">
        <div className="inline-flex justify-between  items-center ">
          <Link
            to={"home"}
            className="logo w-[172px]  text-white flex justify-center items-center  "
          >
            <span className=" text-[20px] leading-5">
              <img src="/images/logo.webp" alt="#img" />
            </span>
          </Link>
          <div className="flex items-center gap-[38px]  max-lg:hidden ">
            <ul className="flex gap-[40px] max-xl:gap-[20px]  max-lg:flex-row ">
              <Link to={"home"} className="">
                Home
              </Link>
              <Link to={"AboutMain"} className="">
                About
              </Link>
              <Link to={"productmain"} className="">
                Product
              </Link>
              <Link to={"SustainbilityMain"} className="">
                Sustainability
              </Link>
              <li>Blogs</li>
              <Link to="/career">Career</Link>
            </ul>
            <Link to="/Contact">
              <Button
                className="block max-lg:hidden"
                type={"sumit"}
                btnName={"Lets Talk"}
                Btnstyle={"[#5956E9]"}
                text={"white"}
              />
            </Link>
          </div>
          <div className="text-black hidden  max-lg:block ">
            {isOpen ? (
              <RxCross2
                className="text-6xl max-sm:text-4xl"
                onClick={toggleDropdown}
              />
            ) : (
              <HiBars3CenterLeft
                className="text-6xl max-sm:text-4xl"
                onClick={toggleDropdown}
              />
            )}
          </div>
        </div>
      </div>
      <div className="lg:hidden">{isOpen ? <Dropdown /> : ""}</div>
    </div>
  );
};

export default Navbar;
