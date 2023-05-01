/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const HomeBannar = () => {
    return (
        <div className=' '>
            <div className='w-[76%] mx-auto my-5 set-bg'>
                <div className='md:w-[50%] py-32 px-10'>
                    <h1 className=' text-2xl md:text-3xl font-semibold'>Unlock the secrets of flavor with
                        <br /> <span className='md:text-6xl text-4xl font-bold text-yellow-600'> Cuisine Chemistry.</span></h1>
                    <p className='my-5 text-sm text-black'>Cuisine Chemistry is a fusion of science and cooking, resulting in a unique and unforgettable culinary experience. Our team of chefs and scientists work together to create innovative dishes that challenge traditional notions of taste and texture. Join us to unlock the secrets of flavor and embark on a journey of culinary discovery.</p>
                    <button className="btn btn-warning px-11 font-bold text-lg">Explore
                    <FaArrowAltCircleRight className='ml-5'></FaArrowAltCircleRight>
                    </button>
                </div>
                
               
            </div>
        </div>
    );
};

export default HomeBannar;