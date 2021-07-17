import React from 'react';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar';
//stylesheet import
import './Header.scss';

//slides import 
import {slides} from './slides';

const Header = () => {
    return ( 
    <section className="header">
        <HeaderSidebar className="header__sidebar"/>
        <Carousel className="header__carousel" slides={slides} />
        <Banner className="header__banner header__banner--1"/>
        <Banner className="header__banner header__banner--2"/>
    </section> 
    );
}
 
export default Header;