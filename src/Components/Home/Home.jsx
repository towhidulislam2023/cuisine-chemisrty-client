/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../shearedPages/Header/Header';
import HomeBannar from '../../pages/HomeBannar/HomeBannar';
import { useLoaderData } from 'react-router-dom';
import ChefsData from '../../pages/chifs/ChefsData';

const Home = () => {
    const chefsData=useLoaderData()
    return (
        <div className=''>
            <HomeBannar></HomeBannar>
            <ChefsData chefsData={chefsData}></ChefsData>
        </div>
    );
};

export default Home;