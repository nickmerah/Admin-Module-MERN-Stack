import React from "react";

const TextBox = (props) => {
  return (
    <input
      className="form-control form-control-lg"
      type={props.type || "text"}
      id={props.name || ""}
      placeholder={props.placeholder || ""}
      defaultValue={props.value || ""}
      ref={props.ref || ""}
      required
      autoComplete="off"
    />
  );
};

export default TextBox;
