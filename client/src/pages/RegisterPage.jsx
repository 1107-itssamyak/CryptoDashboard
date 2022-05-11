import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import wave_vector from "../svg/wave-vector.svg";

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
        navigate("/");
    }

    return (
        <div>
            <NavLink to={"/"}>home</NavLink>

            <div className="border-2 py-8 px-12 mb-16 rounded-xl">
                <h1 className="font-bold text-xl m-2 mb-8">
                    Register to CryptoDashboard
                </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input_email">
                        <label htmlFor="email" className="font-semibold">
                            User Email ID
                        </label>
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
                        <a href="/register" className="italic text-blue-500 underline">
                            Already a user ?
                        </a>
                    </div>

                    <div>
                        <button type="submit" className="font-semibold">
                            Register
                        </button>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full">
                        <img src={wave_vector} alt="waves" className="w-full h-3/4" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
