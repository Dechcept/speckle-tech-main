import React from "react";
import Button from "../../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getContactDetails, getUserData } from "../../Redux/jobDetailFormSlice";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    Meaasge: "",
    CompanyName: "",
  });

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    Meaasge: "",
    CompanyName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    let formIsValid = true;
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }

    if (!formData.email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "Enter a valid 10-digit mobile number",
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, mobile: "" }));
    }

    if (!formData.CompanyName.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        CompanyName: "Company Name  is required",
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, CompanyName: "" }));
    }

    if (formIsValid) {
      alert("Form submitted:", formData);
      dispatch(getContactDetails([formData]));
    }
  };
  return (
    <div className="relative">
      <div className="h-[410px] bg-[#ECF2F6] "></div>
      <div className="p-20 max-lg:p-10 max-sm:p-3 absolute  w-full -top-8 max-sm:-top-5 flex justify-center">
        <div className="border-[1px] shadow-xl rounded-xl w-[70%] max-xl:w-full bg-white">
          <div className=" px-20 py-5 max-sm:px-3 max-sm:py-3 ">
            <div className="flex flex-col items-center gap-4 my-3">
              <h1 className="heading text-4xl text-center">Get in touch</h1>
              <p className="para w-[564px]  max-sm:text-base text-center max-sm:w-full">
                Our team is happy to address all your queries. Fill out the form
                and we will be in touch with you as soon as we can.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 ">
                <div className="">
                  <label htmlFor="" className="text-bold text-base ">
                    {" "}
                    Name * <br />
                  </label>
                  <input
                    placeholder="Enter your full Name"
                    className={`h-12 p-2 my-1 w-full rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-sm  focus:outline-none focus:shadow-outline ${
                      errors.name && "border-red-500"
                    }`}
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />{" "}
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">{errors.name}</p>
                  )}
                </div>
                <div className="">
                  <label htmlFor="" className="text-bold text-base ">
                    {" "}
                    Email *
                  </label>
                  <br />
                  <input
                    className={`h-12 p-2 my-1 w-full   rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-smfocus:outline-none focus:shadow-outline ${
                      errors.email && "border-red-500"
                    }`}
                    id="email"
                    type="email"
                    placeholder="Enter your full Email id"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />{" "}
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-bold text-base ">
                    {" "}
                    Mobile * <br />
                  </label>
                  <input
                    id="mobile"
                    type="text"
                    className={`h-12 p-2 my-1 w-full  rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-sm focus:outline-none focus:shadow-outline ${
                      errors.mobile && "border-red-500"
                    }`}
                    placeholder="Enter your Mobile number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />{" "}
                  {errors.mobile && (
                    <p className="text-red-500 text-xs italic">
                      {errors.mobile}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-bold text-base ">
                    {" "}
                    Company Name * <br />
                  </label>
                  <input
                    id="CompanyName"
                    type="text"
                    className={`h-12 p-2 my-1 w-full  rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-sm focus:outline-none focus:shadow-outline ${
                      errors.CompanyName && "border-red-500"
                    }`}
                    placeholder="Enter your Company Name"
                    name="CompanyName"
                    value={formData.CompanyName}
                    onChange={handleChange}
                  />{" "}
                  {errors.CompanyName && (
                    <p className="text-red-500 text-xs italic">
                      {errors.CompanyName}
                    </p>
                  )}
                </div>
                <div className="col-span-2 max-lg:col-span-1">
                  <label htmlFor="" className="text-bold text-base ">
                    Message * <br />
                  </label>
                  <textarea
                    rows="5"
                    cols="20"
                    className={`  p-2 my-1 w-full rounded-lg border-[0.5px] border-solid  placeholder:text-[#78709E] placeholder:text-smfocus:outline-none focus:shadow-outline ${
                      errors.Message && "border-red-500"
                    }`}
                    id="Message"
                    type="text"
                    placeholder=""
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                  ></textarea>
                </div>{" "}
              </div>

              <div className="flex justify-start">
                <Button
                  type={"submit"}
                  btnName={"Submit"}
                  Btnstyle={"[#5956E9]"}
                  text={"white"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white h-[410px] max-lg:mb-36"></div>
    </div>
  );
};

export default ContactForm;
