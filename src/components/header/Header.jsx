import React from "react";
//Stylesheet impoet
import "./Header.scss";

//component imports
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import HeaderDropdownButton from "../HeaderDropdownButton/HeaderDropdownButton";
import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

const Header = ({}) => {
  return <div>
      <Logo />
      <SearchBar />
      <HeaderDropdownButton icon="Account" data="" />
      <HeaderDropdownButton icon="Help" data="" />
      <HeaderCartButton />
  </div>;
};

export default Header;
