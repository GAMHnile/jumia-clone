import React from "react";
//stylesheet import
import "./Paper.scss";

const Paper = ({ children, className }) => {
  return (
    <div className={`paper ${className ? className : ""}`}>{children}</div>
  );
};

export default Paper;
