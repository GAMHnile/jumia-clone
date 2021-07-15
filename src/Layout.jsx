import React from "react";

import Routes from "./Routes";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
};

export default Layout;
