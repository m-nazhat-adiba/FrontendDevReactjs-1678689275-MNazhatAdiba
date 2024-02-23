import React from "react";

const VARIANTS = {
  primary: " bg-blue-900 text-white hover:bg-blue-800",
  outlined: "border-[1px] border-gray-500 text-gray-800 hover:bg-gray-50",
};

const Button = ({ children = "Button", variant = "primary", action }) => {
  return (
    <button
      onClick={action}
      className={`px-6 py-2 w-full text-sm ${VARIANTS[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
