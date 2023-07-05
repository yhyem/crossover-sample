import React from "react";

const Input = ({ placeholder, inputId, inputType, register }) => {
  return (
    <input
      placeholder={placeholder}
      id={inputId}
      type={inputType}
      {...register(inputId)}
    />
  );
};

export default Input;
