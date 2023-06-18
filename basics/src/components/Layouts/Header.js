import React from "react";
import { PropTypes } from "prop-types";

const Header = ({ title, subTitle}) => { 

    return (
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
    );

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
};

export default Header;
