import React from "react";
import NavBar from "./Navbar";
import "../css/global.css";
import "../css/Layout.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container">


      <NavBar />

      { children }

      <Footer />
    </div>
  );
};

export default Layout;
