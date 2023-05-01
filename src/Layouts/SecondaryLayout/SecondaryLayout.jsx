/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../shearedPages/Header/Header';

const SecondaryLayout = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default SecondaryLayout;