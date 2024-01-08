// src/components/Dropdown.js
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

function Dropdown() {
  return (
    <div className=" absolute z-50  w-full p-10  bg-white  shadow-lg">
      <ul className="flex flex-col gap-3 ">
        <Link to="/home" className=" hover:bg-gray-200 cursor-pointer">
          Home
        </Link>
        <Link to="/aboutMain" className=" hover:bg-gray-200 cursor-pointer">
          About
        </Link>
        <Link to="/productmain" className=" hover:bg-gray-200 cursor-pointer">
          Products
        </Link>
        <Link
          to="/SustainbilityMain"
          className=" hover:bg-gray-200 cursor-pointer"
        >
          Sustainability
        </Link>
        <Link to="/Blogs" className=" hover:bg-gray-200">
          Blogs
        </Link>
        <Link to="/career" className=" hover:bg-gray-200 ">
          {" "}
          Career
        </Link>
        <Link to="/Contact">
          <Button btnName={"Lets Talk"} Btnstyle={"[#5956E9]"} text={"white"} />
        </Link>
      </ul>
    </div>
  );
}

export default Dropdown;
