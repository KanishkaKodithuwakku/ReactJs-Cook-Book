import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        <div className="flex-grow-1">
          <div className="container-fluid">
            <div className="row">
              <Sidebar/>
              <main className="col-md-10">{children}</main>
            </div>
          </div>
        </div>
        <Footer footerText="Copyright 2023"/>
      </div>
    </>
  );
};

export default Layout;
