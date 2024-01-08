import React from "react";
import Button from "../../Button/Button";

const TitleImage = ({ heading, url, content }) => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/Aboutusbanner.webp")`,
      }}
      className="w-full bg-cover bg-center h-[400px] flex justify-center items-center max-sm:p-5 " 
    >
      <p className=" text-white text-6xl max-sm:text-4xl">{heading}</p>
    </div>
  );
};

export default TitleImage;
