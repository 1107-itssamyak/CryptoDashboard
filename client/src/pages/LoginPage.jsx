import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import wave_vector from "../svg/wave-vector.svg";

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
                navigate("/");
            }, 3000);
        } else {
            return;
        }
    }

    return (
        <div>
            <NavLink to={"/"}>home</NavLink>
            <div>
                <h1>Login to CryptoDashboard</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input_email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={inputEmail}
                            onChange={(e) => handleChange(e, setInputEmail)}
                        />
                    </div>

                    <div className="input_password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={inputPassword}
                            onChange={(e) => handleChange(e, setInputPassword)}
                        />
                    </div>

                    <div>
                        <a href="/register" >Not a user ?</a>
                    </div>

                    <div>
                        <button type="submit">Login</button>
                    </div>

                    <div>
                        <button>Login with Google</button>
                    </div>

                    <div>
                        <img src={wave_vector} alt="waves" className="w-full h-3/4" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
