import React from "react";

const Input = ({ ...props }) => {
  console.log(props.richText);
  return props.richText ? (
    <textarea>{props.placeholder}</textarea>
  ) : (
    <input type={props.text} value={props.placeholder} />
  );
};

export default Input;
