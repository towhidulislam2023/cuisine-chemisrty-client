/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../shearedPages/Header/Header';

const PrimaryLayout = () => {
    const navigation=useNavigate()
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <div className='flex justify-center items-center h-screen'><progress className="progress w-56 "></progress></div> : <Outlet></Outlet>
            }
        </div>
    );
};

export default PrimaryLayout;