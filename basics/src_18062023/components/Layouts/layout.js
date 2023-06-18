import React from "react";
const Layout = ({ children, cols }) => {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-md-${cols}`}>{children}</div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
    cols :'6'
}

export default Layout;
