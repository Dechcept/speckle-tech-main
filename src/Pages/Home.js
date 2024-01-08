import React from "react";
import {
  About,
  Banner,
  Blog,
  HomeTitleImage,
  Process,
  Product,
  Sustainability,
} from "../Components/Index";
import Button from "../Button/Button";
import { HomeblogsData } from "../assets/Data2";
import Blank from "../Components/Footer/Blank";
import { useEffect } from "react";
import { useState } from "react";

const Home = (props) => {
  return (
    <section>
      <HomeTitleImage />
      <About img={"/images/Aboutimage.webp"} />
      <Product />
      <Sustainability />
      <Process />
      <Blog
        TitleName={"Blogs"}
        heading={" Latest News & Blogs"}
        blogsData={HomeblogsData}
      />
      <Banner />
    </section>
  );
};

export default Home;
