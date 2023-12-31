import React from "react";

const Button = ({ children, type, onClick, classes }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type='button'
        className='text-yellow-100 bg-transparent mt-6 p-2 border rounded-lg uppercase font-semibold hover:shadow-sm'
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type='button'
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:scale-105 cursor-pointer active:scale-100  tablet:first:ml-0 ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
