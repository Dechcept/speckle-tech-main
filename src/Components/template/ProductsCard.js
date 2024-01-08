import React from "react";
import { productData } from "../../assets/Data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductAdd } from "../../Redux/ProductSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductsCard = ({ details }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center  ">
      <div className="grid grid-cols-2 gap-8  max-xl:grid-cols-1 my-5  ">
        {productData.map((item) => {
          return (
            <div className="w-full">
              <img
                className="h-[400px] w-[564px] rounded-t-[24px] max-md:h-[260px] max-md:w-[366px] max-sm:w-full "
                src={item.img}
                alt="#img"
              />
              <div className="h-[116px] max-sm:h-[80px] rounded-b-[24px] bg-white flex items-center  px-8 py-5">
                <Link
                  to="/productmain/Productdetail"
                  className=" w-[500px] max-md:w-[301px]  text-center font-sans text-[28px] font-bold leading-[28px] max-sm:leading-[100%] tracking-[1.4px] max-sm:tracking-[1px] max-md:text-[20px] max-sm:w-full "
                  onClick={() => {
                    dispatch(ProductAdd(item));
                  }}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCard;
