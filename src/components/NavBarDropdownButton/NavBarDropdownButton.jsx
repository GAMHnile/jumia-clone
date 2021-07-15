import React, { useState } from "react";
import propTypes from "prop-types";
//stylesheet import
import "./NavBarDropdownButton.scss";

import { ReactComponent as ChevronDown } from "../../img/svg/chevron-down.svg";
import { ReactComponent as ChevronUp } from "../../img/svg/chevron-up.svg";

const NavBarDropdownButton = ({ icon, children, className, data, onClick }) => {
  const [active, setActive] = useState(false);
  const Icon = icon;

  const clickHandler = () => {
    if (!data) {
      return onClick();
    }

    setActive((prevActive) => {
      return !prevActive;
    });
  };

  return (
    <button
      className={`navbar-dropdown-btn ${
        active ? "navbar-dropdown-btn--active" : ""
      } ${className ? className : ""}`}
      onClick={clickHandler}
    >
      {icon && <Icon className="navbar-dropdown-btn__icon mr-sm" />}
      {children}
      {data ? (
        active ? (
          <ChevronUp className="navbar-dropdown-btn__chv" />
        ) : (
          <ChevronDown className="navbar-dropdown-btn__chv" />
        )
      ) : null}
    </button>
  );
};

NavBarDropdownButton.propTypes = {
  children: propTypes.string,
  icon: propTypes.element,
  className: propTypes.string,
  onClick: propTypes.func,
};

export default NavBarDropdownButton;
