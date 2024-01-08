import React from "react";
import Button from "../../Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../../Redux/jobDetailFormSlice";
import DropUploader from "./DropZone";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const JobDetailsForm = () => {
  const [selectedFile, setSelectedFile] = useState([null]);
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    portfolioLink: "",
  });

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    portfolioLink: "",
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

    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/\S*)?$/i;

    if (!urlPattern.test(formData.portfolioLink)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        portfolioLink: "Enter a valid portfolio link",
      }));
      formIsValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, portfolioLink: "" }));
    }

    if (formIsValid) {
      alert("Form submitted:", formData);
      dispatch(getUserData([formData]));
    }
  };
  return (
    <div className="flex justify-center p-4 max-sm:p-1 my-10 ">
      <div
        className="inline-flex px-24  py-10 max-sm:px-5 max-sm:py-5 flex-col items-center gap-2 max-sm:gap-14
                      shadow border-[0.5px] bg-[#FFF] shadow-[#CECECE] rounded-2xl   "
      >
        <div className="flex flex-col items-start max-md:items-center  gap-10 my-10 ">
          <h1 className="text-4xl max-sm:text-3xl font-sans  font-bold leading-[120%] tracking-[2px]">
            Quick Apply
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid  grid-cols-2 max-xl:grid-cols-1 gap-5 w-full">
              <div className="">
                <label htmlFor="" className="text-bold text-base ">
                  {" "}
                  Name * <br />
                </label>
                <input
                  placeholder="Enter your full Name"
                  className={`h-12 p-2 my-1 w-[466px] max-xl:w-full  rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-sm  focus:outline-none focus:shadow-outline ${
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
                  className={`h-12 p-2 my-1 w-[466px] max-xl:w-full  rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-smfocus:outline-none focus:shadow-outline ${
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
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
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
                  className={`h-12 p-2 my-1 w-[466px] max-xl:w-full rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-sm focus:outline-none focus:shadow-outline ${
                    errors.mobile && "border-red-500"
                  }`}
                  placeholder="Enter your Mobile number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />{" "}
                {errors.mobile && (
                  <p className="text-red-500 text-xs italic">{errors.mobile}</p>
                )}
              </div>
              <div className="">
                <label htmlFor="" className="text-bold text-base ">
                  Portfolio Link * <br />
                </label>
                <input
                  className={`h-12 p-2 my-1 w-[466px] max-xl:w-full rounded-lg border-[0.5px] border-solid bg placeholder:w-[174px] placeholder:text-[#78709E] placeholder:text-smfocus:outline-none focus:shadow-outline ${
                    errors.portfolioLink && "border-red-500"
                  }`}
                  id="portfolioLink"
                  type="text"
                  placeholder="e.g. Ajay/linkedin.com"
                  name="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={handleChange}
                />{" "}
              </div>{" "}
            </div>
            <div>
              <div
                {...getRootProps()}
                className={`bg-[#EFEFEF] border-2 border-dashed p-10 text-center flex justify-center items-center gap-3 w-full xl:w-[955px]  px-10 py-10 y ${
                  isDragActive ? "border-green-500" : "border-gray-300"
                } `}
              >
                <input
                  {...getInputProps()}

                  // value={selectedFile}

                  // onChange={handleFileChange}
                />

                {isDragActive ? (
                  <h1
                    className={`text-base text-[#afafaf] ${
                      isDragActive ? "border-green-500" : "border-gray-300"
                    } font-sans font-bold leading-[100%] tracking-[2px] text-green-500`}
                  >
                    DROP TO UPLOAD YOUR RESUME{" "}
                    <span className="text-base   font-sans font-bold leading-[100%] tracking-[2px] text-black ">
                      {" "}
                      OR BROWSE
                    </span>
                  </h1>
                ) : (
                  <h1
                    className={`text-base text-[#afafaf] ${
                      isDragActive ? "border-green-500" : "border-gray-300"
                    } font-sans font-bold leading-[100%] tracking-[2px]`}
                  >
                    DROP TO UPLOAD YOUR RESUME{" "}
                    <span className="text-base  font-sans font-bold leading-[100%] tracking-[2px] text-black ">
                      {" "}
                      OR BROWSE
                    </span>
                  </h1>
                )}
              </div>
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
  );
};

export default JobDetailsForm;
