import React from "react";
import propTypes from "prop-types";
import Paper from "../Paper/Paper";
//stylesheet import

const HeaderSidebar = ({ className }) => {
  return (
    <Paper className={`${className ? className : ""}`}>
      <nav className={`headerSidebar`}>
        HeaderSidebar
      </nav>
    </Paper>
  );
};

HeaderSidebar.propTypes = {
  className: propTypes.string,
};

export default HeaderSidebar;
