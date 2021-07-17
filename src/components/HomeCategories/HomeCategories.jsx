import React from "react";
import propTypes from "prop-types";
// stylesheet import
import "./HomeCategories.scss";
//data import
import Paper from "../Paper/Paper";

const HomeCategories = ({ className, data }) => {
  return (
    <section className={`home-categories ${className}`}>
      {data.map((catData) => (
        <Paper className="home-categories__item">
          <div className="home-categories__img-container">
            <img
              className="home-categories__img"
              src={catData.icon}
              alt={`icon for ${catData.name}`}
            />
          </div>
          <p className="home-categories__txt">{catData.name}</p>
        </Paper>
      ))}
    </section>
  );
};

HomeCategories.propTypes = {
  className: propTypes.string,
  data: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      icon: propTypes.string,
      link: propTypes.string,
    })
  ),
};

export default HomeCategories;
