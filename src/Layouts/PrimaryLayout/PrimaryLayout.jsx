import React from 'react';
import { Outlet } from 'react-router-dom';

const PrimaryLayout = () => {
    return (
        <div>
            <h1>This is primary Layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default PrimaryLayout;