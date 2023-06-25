import React from "react";

const Footer = ({ footerText}) => { 
    return (
      <footer className="bg-dark text-light text-center py-3">
        <p>{footerText}</p>
      </footer>
    );
}

export default Footer;
