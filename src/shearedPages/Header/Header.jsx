/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
const Header = () => {
    const username='towhid'
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-yellow-800 bg-opacity-90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className=" text-white">
                            <h1 className='text-3xl font-bold font-mono'>Cuisine Chemistry</h1>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex sm:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                {isOpen ? (
                                    <FaTimes className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex items-center">
                                <Link
                                    to="/"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                                >
                                    Blog
                                </Link>
                                <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={username}
                                    data-tooltip-place="bottom"
                                >
                                <div className="avatar ml-4">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://www.blexar.com/avatar.png" />
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Tooltip id="my-tooltip" />
            </div>
            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <div className="avatar ml-4">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://www.blexar.com/avatar.png" />
                            </div>
                        </div>
                        <Link
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
                        >
                            Home
                        </Link>
                        <Link
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                        >
                            Blog
                        </Link>
                
                       
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;