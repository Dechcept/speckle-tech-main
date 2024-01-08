import React from "react";

const Foundernote = ({ heading, para1, para2, Name, Post, url, para3 }) => {
  return (
    <div className="flex max-xl:flex-col items-center justify-center  gap-8 my-20 max-sm:my-10 p-10 max-sm:p-3">
      <div className="flex flex-col gap-4 ">
        <h1 className="title">{heading}</h1>
        <p className="heading">{para1}</p>
        <p className="font-bold text-xl">{para3}</p>
        <p className="para text-[#757575]">{para2}</p>
      </div>
      <div>
        <div className="flex flex-col items-center gap-2">
          <div>
            <img src={`${url}`} alt="#img" className="max-sm:w-full" />
            {/* <div>{Post}</div> */}
          </div>

          <h1 className="font-bold text-2xl ">{Name}</h1>
          <p className="font-semibold text-base leading-[120%] tracking-[0.8px] ">{Post}</p>
        </div>
      </div>
    </div>
  );
};

export default Foundernote;
