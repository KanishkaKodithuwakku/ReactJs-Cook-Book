import React from "react";

const Button = ({ children, type, onRemoveUser ,userId }) => {
  return (
    <button className={`btn btn-${type}`} onClick={() => onRemoveUser(userId)}>
      {children}
    </button>
  );
};

export default Button;
