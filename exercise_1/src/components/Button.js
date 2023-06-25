import React from "react";

const Button = ({
  handleOnClick,
  handleSubmit,
  children,
  btnType,
  style,
  dataId,
  type,
  disabled,
}) => {
  const handleClick = () => {
    if (handleOnClick) {
      handleOnClick(dataId);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (handleSubmit) {
      handleSubmit();
    }
  };

  const buttonProps = {
    "data-user-id": dataId,
    className: `btn btn-${btnType} mt-3`,
    style,
    disabled,
  };

  if (handleOnClick) {
    buttonProps.onClick = handleClick;
  }

  if (handleSubmit) {
    buttonProps.type = type || "submit";
    buttonProps.onClick = handleSubmitForm;
  }

  return <button {...buttonProps}>{children}</button>;
};

Button.defaultProps = {
  btnType: "primary"
};

export default Button;
