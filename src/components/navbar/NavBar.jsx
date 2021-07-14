import React from "react";
//Stylesheet impoet
import "./NavBar.scss";

//component imports
import HeaderCartButton from "../NavBarCartButton/HeaderCartButton";
import HeaderDropdownButton from "../HeaderDropdownButton/HeaderDropdownButton";
import SearchBar from "../SearchBar/SearchBar";
import HeaderLogo from "../Logo/HeaderLogo";

const Header = ({}) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <HeaderLogo />
        <SearchBar />
        <HeaderDropdownButton icon="Account" data="" />
        <HeaderDropdownButton icon="Help" data="" />
        <HeaderCartButton />
      </div>
    </div>
  );
};

export default Header;
