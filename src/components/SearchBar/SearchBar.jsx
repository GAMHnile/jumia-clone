import React from "react";
//stylesheet import
import "./SearchBar.scss";
//import proptypes  for prop typechecking
import propTypes from "prop-types";
//component imports
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ReactComponent as SearchIcon } from "../../img/svg/search.svg";
import { ReactComponent as CancelIcon } from "../../img/svg/close.svg";

const SearchBar = ({ onSubmit }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <form className="searchbar" onSubmit={submitHandler}>
      <div className="searchbar__input-container mr-sm">
        <SearchIcon className="searchbar__input-icon searchbar__input-icon--start" />
        <input className="searchbar__input" placeholder="Search products" />
        <CancelIcon className="searchbar__input-icon searchbar__input-icon--end" />
      </div>
      <PrimaryButton>search</PrimaryButton>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: propTypes.func,
};

export default SearchBar;
