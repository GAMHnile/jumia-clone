import React from 'react';
import propTypes from 'prop-types';
//component imports
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar';
//stylesheet import
import './Header.scss';

//slides import 
import {slides} from './slides';

const Header = ({className}) => {
    return ( 
    <section className={`header ${className}`}>
        <HeaderSidebar className="header__sidebar"/>
        <Carousel className="header__carousel" slides={slides} />
        <Banner className="header__banner header__banner--1"/>
        <Banner className="header__banner header__banner--2"/>
    </section> 
    );
}

Header.propTypes = {
    className: propTypes.string
}
 
export default Header;