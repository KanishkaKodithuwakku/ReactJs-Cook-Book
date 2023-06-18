import React from "react";

const LabelInput = ({ label, value, onChange, placeholder, name, size }) => {
  return (
    <div
      className="input-group input-group-sm"
      style={{padding: "10px" }}
    >
      <label>{label} </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`form-control ${size}`}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

LabelInput.defaultProps = {
  size: 'sm'
};

export default LabelInput;
