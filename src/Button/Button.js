import React from "react";

const Button = ({ btnName, Btnstyle, text, handleClick }) => {
  return (
    <div>
      <div>
        <button
          className={` bg-${Btnstyle}  rounded-xl px-6 py-2 max-sm:py-2 max-sm:px-5 text-${text} flex justify-center items-center gap-2 hover:bg-opacity-90`}
          type="submit"
          onClick={handleClick}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Button;
