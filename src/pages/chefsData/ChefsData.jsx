/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import DisplayChefsData from '../DisplayChefsData/DisplayChefsData';

const ChefsData = ({ chefsData }) => {
    console.log(chefsData);

    return (
        <div className='md:w-[75%] my-6 mx-auto'>
            <div className='mt-9 mb-12 text-center '>
                <h1 className='text-4xl font-bold  my-5 '>Introduce Our Awasome Chef</h1>
                <p className='w-[70%] mx-auto'>
                    Introducing our talented and passionate chef, who brings creativity and expertise to every dish. With years of experience and a commitment to using only the freshest ingredients, our chef creates unforgettable culinary experiences that delight the senses and leave a lasting impression.</p>
            </div>
               
            <div className='grid md:grid-cols-3 gap-6 px-5 md:px-0'>
                {
                    chefsData && chefsData.map(chef => <DisplayChefsData key={chef.id} chefdata={chef} ></DisplayChefsData>)
                }
            </div>
           
        </div>
    );
};

export default ChefsData;