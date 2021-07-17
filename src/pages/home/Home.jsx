import React from 'react';
//component imports
import Header from '../../components/Header/Header';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import { homeCategoriesData } from '../../components/HomeCategories/homeCategoriesData';

//data imports


const Home = () => {
    return ( 
    <div>
        <Header className="mb-xl"  />
        <HomeCategories className="mb-xl" data={homeCategoriesData} />
    </div> 
    );
}
 
export default Home;