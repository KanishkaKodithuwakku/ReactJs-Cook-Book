import React from "react";
import LabelInput from "./LabelInput";

const SearchBar = ({ value, handleOnchangeSearch }) => {
  return (
    <LabelInput
      placeholder="Search..."
      onChange={handleOnchangeSearch}
      value={value}
    />
  );
};

export default SearchBar;
