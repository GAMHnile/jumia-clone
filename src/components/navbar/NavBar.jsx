import React from "react";
//Stylesheet impoet
import "./NavBar.scss";

//component imports
import NavBarDropdownButton from "../NavBarDropdownButton/NavBarDropdownButton";
import SearchBar from "../SearchBar/SearchBar";
import { ReactComponent as NavBarLogo } from "../../img/svg/jumiaLogo.svg";
import { ReactComponent as AccountIcon } from "../../img/svg/account.svg";
import { ReactComponent as HelpIcon } from "../../img/svg/help.svg";
import { ReactComponent as CartIcon } from "../../img/svg/cart.svg";

const NavBar = ({}) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <NavBarLogo class="navbar__logo" />
        <div className="navbar__searchbar mr-sm">
          <SearchBar />
        </div>
        <NavBarDropdownButton className="mr-sm" icon={AccountIcon} data="dfgd">
          Login
        </NavBarDropdownButton>
        <NavBarDropdownButton className="mr-sm" icon={HelpIcon} data="fgdf">
          Help
        </NavBarDropdownButton>
        <NavBarDropdownButton icon={CartIcon}>
        Cart</NavBarDropdownButton>
      </div>
    </div>
  );
};

export default NavBar;
