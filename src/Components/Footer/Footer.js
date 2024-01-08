import React, { useState } from "react";
import axios from "axios";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  // const validateEmail = (input) => {};

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const Submit = async () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
    if (isValid) {
      setEmail("");
    }

    try {
      // Make a registration API request
      await axios.post("http://localhost:3001/register", { email });

      // Registration successful, you can show a success message or redirect the user
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="bg-[#27272E] h-[420px] max-lg:h-full  flex  justify-center items-center px-20 max-sm:px-5 -mt-1  ">
      <div className="my-10 ">
        <div className="grid grid-cols-2 gap-32 max-md:grid-cols-1 max-lg:gap-20 max-sm:gap-10  ">
          <div className="text-white">
            <h1 className="  font-sans text-[40px] max-sm:text-3xl font-bold leading-[40px] tracking-[2px]">
              Get in touch{" "}
            </h1>
            <p className="w-[466px] max-lg:w-[366px] max-sm:w-full font-sans text-[16px] font-normal leading-[24px] tracking-[0.8px] mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dol
            </p>

            <div className="flex max-sm:flex-col max-sm:justify-center items-start  gap-2 mt-10">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`w-[311px] max-lg:w-[211px] max-sm:w-full h-[48px] p-7 bg-transparent rounded-xl border-[0.5px] placeholder:text-white ${
                  isValid ? "border-gray-300" : "border-red-500 "
                } font-sans text-[14px] max-sm:text-[12px] font-normal leading-[14px] tracking-[0.7px]`}
                value={email}
                onChange={handleEmailChange}
              />

              <button
                className="bg-[#5956E9] rounded-xl px-8 py-4 text-white flex justify-center items-center gap-2 hover:cursor-pointer"
                onClick={Submit}
              >
                Subscribe
              </button>
            </div>

            {!isValid && (
              <p className="text-red-500 text-sm mt-2">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className="flex justify-around text-white">
            <div className="">
              <h1 className="text-white text-center  font-sans text-[16px] font-bold leading-[16px] tracking-[0.8px]">
                Quick
              </h1>
              <ul className="flex flex-col  gap-4 mt-8 text-white  font-sans text-[14px] font-normal leading-[14px] tracking-[0.7px]">
                <li className="leading-2 hover:underline ">About Us</li>
                <li className="leading-2 hover:underline ">Blogs</li>
                <li className="leading-2 hover:underline ">FAQs</li>
              </ul>
            </div>
            <div className="w-fit">
              <h1 className="text-white  font-sans text-[16px] font-bold leading-[16px] tracking-[0.8px]">
                Support
              </h1>
              <ul className="mt-8 flex flex-col gap-4  text-white  font-sans text-[14px] font-normal leading-[14px] tracking-[0.7px]">
                <li className="leading-2 hover:underline ">Contact us</li>
                <li className="leading-2 hover:underline ">Career</li>
                <li className="leading-2 hover:underline ">Privacy</li>
                <li className="leading-2 hover:underline ">Term Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <span className="text-white   text-[12px] font-normal leading-[18px] tracking-[1.2px]">
          ©2023 SpeckleTechnologies | All right reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
