/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from '../../shearedPages/Header/Header';
import HomeBannar from '../../pages/HomeBannar/HomeBannar';
import { useLoaderData } from 'react-router-dom';
import ChefsData from '../../pages/chefsData/ChefsData';
import LazyLoad from 'react-lazy-load';
import FoodData from '../../pages/FoodData/FoodData';
import Carusole from '../../pages/Carusole/Carusole';
import OurInfo from '../../pages/OurInfo/OurInfo';
import Testimonal from '../../pages/Testimonal/Testimonal';


const Home = () => {
    const chefsData=useLoaderData()
    return (
        <div className=''>
            <HomeBannar></HomeBannar> 
            <LazyLoad><ChefsData chefsData={chefsData}></ChefsData></LazyLoad> 
            <FoodData></FoodData>
            <OurInfo></OurInfo>
            <Carusole></Carusole>
            <Testimonal></Testimonal>
        </div>
    );
};

export default Home;