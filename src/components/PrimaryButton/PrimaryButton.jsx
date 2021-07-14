import React from "react";
import propTypes from 'prop-types';

const PrimaryButton = (props) => {
  const { icon } = props;
  return (
    <button className="primary-button">
      {icon && <div>{icon}</div>}
      <span>{props.children}</span>
    </button>
  );
};

PrimaryButton.propTypes = {
    children: propTypes.string,
};



export default PrimaryButton;
