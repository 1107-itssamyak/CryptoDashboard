import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../svg/avatar.svg';
import key from '../svg/key.svg';

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
        <>
            <a href="/">home</a>

            <h1>Login to CryptoDashboard</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input_email">
                    <label htmlFor="email">Email</label>
                    <img src={avatar} alt="user avatar" />
                    <input
                        type="text"
                        id="email"
                        value={inputEmail}
                        onChange={(e) => handleChange(e, setInputEmail)} />
                </div>
                <div className="input_password">
                    <label htmlFor="password">Password</label>
                    <img src={key} alt="password key" />
                    <input
                        type="password"
                        id="password"
                        value={inputPassword}
                        onChange={(e) => handleChange(e, setInputPassword)} />
                </div>
                <div className="not_a_user">
                    <a href="/register">Not a user ?</a>
                </div>
                <div className="submit_section">
                    <button type="submit">Login</button>
                </div>
                <div className="login_with_google">
                    <button>
                        Login with Google
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginPage;