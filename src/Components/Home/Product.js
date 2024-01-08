import React from "react";
import ProductsCard from "../template/ProductsCard";
import Button from "../../Button/Button";

const Product = (props) => {
  return (
    <div className="my-10 bg-[#ECF2F6] h-full w-full flex justify-center items-center p-3    ">
      
      <div className="flex flex-col gap-16  mt-2 py-10 z-50  relative">
        <div className="flex   justify-between">
          <div className="flex flex-col  items-start  gap-4">
            <h1 className="title">OUR PRODUCTS</h1>
            <h1 className=" heading">Some of your finest work</h1>
          </div>

          <div className="border-[1px] -z-50 h-[466px] w-[466px] border-[#757575] rounded-full absolute top-10 right-[20%] flex justify-center max-xl:hidden">
        <img
          src="/images/Ellipse 3.webp"
          alt="#img"
          className="h-[121px] w-[121px] mt-10"
        />
      </div>
          <div className="max-xl:hidden">
            <Button
              btnName={"View All"}
              Btnstyle={"[#5956E9]"}
              text={"white"}
            />
          </div>
        </div>
        <ProductsCard />
        <div className="hidden max-xl:block">
          <Button btnName={"View All"} Btnstyle={"[#5956E9]"} text={"white"} />
        </div>
      </div>
    </div>
  );
};

export default Product;
