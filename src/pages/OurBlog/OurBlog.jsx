// import React from 'react';
import { FaTag, FaThumbsUp, FaUserAlt } from 'react-icons/fa';
import img1 from '../../assets/blog1.jpg';
import img2 from '../../assets/blog2.jpg';
import img3 from '../../assets/blog3.jpg';

const OurBlog = () => {
    return (
        <div className='md:w-3/4 md:mx-auto my-10 mx-6 '>
            <div className='mb-12 text-center'>
                <h1 className='text-4xl font-bold my-5'>Latest news updates & articles</h1>
                <p className='w-3/4 mx-auto'>
                    An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula
                </p>
            </div>
            <div className='md:grid md:grid-cols-1 lg:grid-cols-3 gap-6 space-y-6 md:space-y-0'>
                <div>
                    <img className='mx-auto rounded-md' src={img2} alt='' />
                    <div className='relative'>
                        <div className='absolute bottom-0 right-0 bg-white shadow-lg w-full md:w-10/12 mx-auto flex items-center justify-center bg-opacity-50'>
                            <div className='w-4/5 md:w-1/2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <FaTag />
                                    <span>Apple</span>
                                    <span>||</span>
                                    <FaUserAlt />
                                    <span>by admin</span>
                                </div>
                                <hr />
                                <div>
                                    <h1 className='text-2xl text-black underline font-bold'>Luctus sit amet eu nibh tempus turpis</h1>
                                </div>
                                <hr className='my-2' />
                                <div className='flex justify-between items-center'>
                                    <p className='link'>See More</p>
                                    <div>
                                        <FaThumbsUp className='text-blue-700' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='mx-auto rounded-md' src={img3} alt='' />
                    <div className='relative'>
                        <div className='absolute bottom-0 right-0 bg-white shadow-lg w-full md:w-10/12 mx-auto flex items-center justify-center bg-opacity-50'>
                            <div className='w-4/5 md:w-1/2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <FaTag />
                                    <span>Nuts</span>
                                    <span>||</span>
                                    <FaUserAlt />
                                    <span>by Nokib</span>
                                </div>
                                <hr />
                                <div>
                                    <h1 className='text-2xl text-black underline font-bold'>Luctus sit amet eu nibh tempus turpis</h1>
                                </div>
                                <hr className='my-2' />
                                <div className='flex justify-between items-center'>
                                    <p className='link'>See More</p>
                                    <div>
                                        <FaThumbsUp className='text-blue-700' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='mx-auto rounded-md' src={img1} alt='' />
                    <div className='relative'>
                        <div className='absolute bottom-0 right-0 bg-white shadow-lg w-full md:w-10/12 mx-auto flex items-center justify-center bg-opacity-50'>
                            <div className='w-4/5 md:w-1/2 my-2'>
                                <div className='flex items-center gap-3'>
                                    <FaTag />
                                    <span>Burger</span>
                                    <span>||</span>
                                    <FaUserAlt />
                                    <span>by Nokib</span>
                                </div>
                                <hr />
                                <div>
                                    <h1 className='text-2xl text-black underline font-bold'>Luctus sit amet eu nibh tempus turpis</h1>
                                </div>
                                <hr className='my-2' />
                                <div className='flex justify-between items-center'>
                                    <p className='link'>See More</p>
                                    <div>
                                        <FaThumbsUp className='text-blue-700' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;
