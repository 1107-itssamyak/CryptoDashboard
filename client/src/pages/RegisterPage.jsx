import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import avatar from '../svg/avatar.svg';
import key from '../svg/key.svg';

function RegisterPage() {
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    function handleChange(e, setInput) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // The register function is to be registered here
        navigate('/');
    }

    return (
        <>
            <a href="/">home</a>

            <h1>Register to CryptoDashboard</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input_email">
                    <label htmlFor="email">User Email ID</label>
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
                    <a href="/login">Already a user ?</a>
                </div>
                <div className="submit_section">
                    <button type="submit">Register</button>
                </div>
            </form>
        </>
    )
}

export default RegisterPage;