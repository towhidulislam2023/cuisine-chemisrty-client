/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from '../../shearedPages/Header/Header';
import HomeBannar from '../../pages/HomeBannar/HomeBannar';
import { useLoaderData } from 'react-router-dom';
import ChefsData from '../../pages/chefsData/ChefsData';
import LazyLoad from 'react-lazy-load';


const Home = () => {
    const chefsData=useLoaderData()
    return (
        <div className=''>
            <LazyLoad height={772}><HomeBannar></HomeBannar></LazyLoad> 
            <ChefsData chefsData={chefsData}></ChefsData>
        </div>
    );
};

export default Home;