import React from "react";
import propTypes from 'prop-types';

import './PrimaryButton.scss';

const PrimaryButton = (props) => {
  const { icon } = props;
  return (
    <button className="primary-button">
      {icon && <icon />}
      <span>{props.children}</span>
    </button>
  );
};

PrimaryButton.propTypes = {
    children: propTypes.string,
};



export default PrimaryButton;
