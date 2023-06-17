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
import OurBlog from '../../pages/OurBlog/OurBlog';
import Offer from '../../pages/Offer/Offer';
import Discount from '../../pages/Discount/Discount';
import Comment from '../../pages/Comment/Comment';


const Home = () => {
    const chefsData=useLoaderData()
    return (
        <div className=''>
            <HomeBannar></HomeBannar> 
            <LazyLoad><ChefsData chefsData={chefsData}></ChefsData></LazyLoad> 
            <Offer></Offer>
            <FoodData></FoodData>
            <OurInfo></OurInfo>
            <Carusole></Carusole>
            <Discount></Discount>
            <OurBlog></OurBlog>
            <Testimonal></Testimonal>
            <Comment></Comment>
        </div>
    );
};

export default Home;