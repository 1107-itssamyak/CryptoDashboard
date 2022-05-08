import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import wave_vector from '../svg/wave-vector.svg';

function LoginPage() {
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    function handleChange(e, setInput) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (inputEmail === "sam" && inputPassword === "123") {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } else {
            return;
        }
    }

    return (
        <div className='flex items-center justify-center flex-col h-screen'>
            <NavLink to={"/"} className='absolute top-4 left-4 capitalize mx-4 py-2 px-6 rounded border-2 hover:bg-indigo-400  hover:text-white transition-all cursor-pointer'>home</NavLink>
            <div className='border-2 py-8 px-12 mb-16 rounded-xl'>
                <h1 className='font-bold text-xl m-2 mb-8'>Login to CryptoDashboard</h1>
                <form
                    onSubmit={(e) => handleSubmit(e)}>
                    <div className="input_email">
                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input
                            className='border-2 my-2 w-full p-1 pl-2'
                            type="text"
                            id="email"
                            value={inputEmail}
                            onChange={(e) => handleChange(e, setInputEmail)} />
                    </div>

                    <div className="input_password">
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input
                            className='border-2 my-2 w-full p-1 pl-2'
                            type="password"
                            id="password"
                            value={inputPassword}
                            onChange={(e) => handleChange(e, setInputPassword)} />
                    </div>

                    <div className="not_a_user flex justify-end font-semibold w-full my-8">
                        <a href="/register" className='italic text-blue-500 underline'>Not a user ?</a>
                    </div>

                    <div className='submit_section flex justify-center align-middle bg-green-400 text-black-500 my-4 p-2 rounded-md capitalize font-semibold'>
                        <button type="submit" className='font-semibold'>Login</button>
                    </div>

                    <div className="login_with_google flex justify-center align-middle bg-green-400 text-black-500 my-4 p-2 rounded-md capitalize font-semibold">
                        <button className='font-semibold'>Login with Google</button>
                    </div>

                    <div className='absolute bottom-0 left-0 w-full'>
                        <img src={wave_vector} alt="waves" className='w-full h-3/4' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;