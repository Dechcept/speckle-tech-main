import { TitleImage } from "../Index";
import About from "../Home/About";
import { useSelector } from "react-redux";
import ProductFeature from "./ProductFeature";
import Banner from "../Home/Banner";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Productdetail = () => {
  const { Detail, display,img } = useSelector((state) => state.Product);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section>
      <div className="">
        <TitleImage
          heading={`${Detail.title}`}
          url={img}
          content={display}
        />
        <About />
        <ProductFeature />
      </div>
      <Banner />
    </section>
  );
};

export default Productdetail;
