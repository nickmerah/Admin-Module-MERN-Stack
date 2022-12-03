import React from "react";
import Select from "react-select";

const SelectBox = (props) => {
  return <Select options={props.options} name={props.name} required />;
};

export default SelectBox;
