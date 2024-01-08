import React from "react";
import ProcessTemplate from "../template/ProcessTemplate";
import { useSelector } from "react-redux";

const ProductFeature = () => {
  const { ProductFeature } = useSelector((state) => state.Product);
  return (
    <div className="flex flex-col  items-center gap-7 ">
      <div className="flex flex-col gap-5 ">
        <h3 className="title text-center">FEATURES</h3>
        <h1 className="heading text-center">Product Features</h1>
      </div>
      <div>
        <ProcessTemplate templatedata={ProductFeature} num={"-"} />
      </div>
    </div>
  );
};

export default ProductFeature;
