import React from "react";

const Spinner = ({ showSpinner, styles, type }) => {
  return (
    showSpinner && (
      <div className={`spinner-${type} ${styles}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  );
};

export default Spinner;
