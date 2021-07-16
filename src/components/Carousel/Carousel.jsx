import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

//stylesheet import
import "./Carousel.scss";

//component imports
import { ReactComponent as NextIcon } from "../../img/svg/chevron-right.svg";
import { ReactComponent as PrevIcon } from "../../img/svg/chevron-left.svg";

const Carousel = ({ className, slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextClickHandler = () => {
    if (!slides || !Array.isArray(slides)) {
      return;
    }
    if (activeIndex === slides.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((currActiveIndex) => {
        return currActiveIndex + 1;
      });
    }
  };

  const prevClickHandler = () => {
    if (!slides || !Array.isArray(slides)) {
      return;
    }
    if (activeIndex < 1) {
      setActiveIndex(slides.length - 1);
    } else {
      setActiveIndex((currActiveIndex) => {
        return currActiveIndex - 1;
      });
    }
  };

  const counterIconClickHandler = (idx) => {
    setActiveIndex(idx);
  };

  useEffect(() => {

    const scrollerIntervalRef = setInterval(nextClickHandler, 5000);
    return () => {
      clearInterval(scrollerIntervalRef);
    };
  });

  

  return (
    <div className={`carousel ${className ? className : ""}`}>
      <div
        className="carousel__side carousel__side--prev"
        onClick={prevClickHandler}
      >
        <button className="carousel__btn ">
          <PrevIcon className="carousel__btn-icon" />
        </button>
      </div>
      {slides && Array.isArray(slides)
        ? slides.map((data, idx) => (
            <div
              key={data.source}
              className={`carousel__img-container ${
                activeIndex === idx ? "carousel__img-container--active" : ""
              } `}
            >
              <img
                className="carousel__img"
                src={data.source}
                alt={data.alt ? data.alt : ""}
              />
            </div>
          ))
        : null}
      <div
        className="carousel__side carousel__side--next"
        onClick={nextClickHandler}
      >
        <button className="carousel__btn">
          <NextIcon className="carousel__btn-icon" />
        </button>
      </div>
      <div className="carousel__counter">
        {
          //active slide indicator
          slides && Array.isArray(slides)
            ? slides.map((data, idx) => (
                <button
                  className={`carousel__counter-btn ${
                    activeIndex === idx ? "carousel__counter-btn--active" : ""
                  }`}
                  key={data.source}
                  onClick={() => counterIconClickHandler(idx)}
                />
              ))
            : null
        }
      </div>
    </div>
  );
};

Carousel.propTypes = {
  className: propTypes.string,
  slides: propTypes.arrayOf(
    propTypes.shape({
      source: propTypes.string.isRequired,
      alt: propTypes.string,
    })
  ),
};

export default Carousel;
