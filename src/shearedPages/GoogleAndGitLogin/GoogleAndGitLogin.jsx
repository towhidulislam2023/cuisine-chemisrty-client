/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleAndGitLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.pathname || "/"
    const { handelGoogleLogin, handelGithubLogin } = useContext(AuthProviderContext)
    const handelLoginByGoogle = () => {
        handelGoogleLogin()
            .then(result => {
                console.log(result.user);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handelLoginByGit = () => {
        handelGithubLogin()
            .then(result => {
                console.log(result.user);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='w-[25%] mx-auto'>
            <>
                <hr className='border my-5 border-gray-400  mx-auto' />
                <button onClick={handelLoginByGoogle} className='btn flex w-[100%] mx-auto bg-transparent mt-5 text-black hover:bg-transparent'>
                    <span className=''><FaGoogle className='text-blue-600 text-2xl '></FaGoogle></span>  <span className='flex-grow'>Continue with Google </span>
                </button>
                <button onClick={handelLoginByGit} className='btn w-[100%] mb-10 mx-auto btn-black bg-transparent mt-5 text-black hover:bg-transparent'>
                    <span className=''><FaGithub className='text-black text-2xl '></FaGithub></span>  <span className='flex-grow'>Continue with GitHub </span>
                </button>
            </>
        </div>
    );
};

export default GoogleAndGitLogin;