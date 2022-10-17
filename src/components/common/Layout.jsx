import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
