import React from "react";
//stylesheet imports
import './Layout.scss';

//component imports
import Routes from "../Routes";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="layout">
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
