import React from "react";

import Routes from "./Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/NavBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default Layout;
