import React from "react";
import TitleImage from "../Components/Header/TitleImage";
import ProductsCard from "../Components/template/ProductsCard";
import Button from "../Button/Button";
import Banner from "../Components/Home/Banner";
import ProductHeading from "../Components/Product/ProductHeading";

const ProductMain = (props) => {
  return (
    <div className="">
      <TitleImage heading={"PRODUCTS"} url={"/images/Aboutusbanner.webp"} />
      <div className="flex flex-col items-center mt-10 p-3">
        <ProductHeading />
        {/* <div className="flex justify-center relative ml-10 my-4 max-lg:hidden">
              <div className="flex   items-center  ">
                 <img src="/images/ProductEllipse1.png" className="h-[121px] ml-16 w-[121px] absolute left-0" alt="" />
                 <img src="/images/ProductEllipse2.png" className="h-[74px] w-[74px] ml-20 " alt="" />
              </div>
         </div> */}
        {/* <img src="/images/ProductEllipse3.png" className="max-lg:hidden h-[55px] w-[55px] absolute right-20 top-0 mt-10 " alt="" /> */}
        <ProductsCard />
        <div className="mt-10 ">
          <Button />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default ProductMain;
