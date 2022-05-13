import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
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

        // checking from the database whether the user login is authenticated or not
        navigate("/");
    }

    return (
        <StyledWrapper>
            <NavLink to="/" className="back-button">home</NavLink>
            <StyledContainer>
                <h1 className='text-xl font-bold italic'>Register to CryptoDashboard</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input_email pt-8">
                        <label
                            className='font-semibold'
                            htmlFor="email">
                            Email
                        </label>
                    </div>
                    <input
                        type="text"
                        id="email"
                        value={inputEmail}
                        onChange={(e) => handleChange(e, setInputEmail)}
                    />

                    <div className="input_password pt-4">
                        <label
                            className='font-semibold'
                            htmlFor="password">
                            Password
                        </label>
                    </div>

                    <input
                        type="password"
                        id="password"
                        value={inputPassword}
                        onChange={(e) => handleChange(e, setInputPassword)}
                    />

                    <StyledButtonContainer>
                        <NavLink to="/login">already registered?</NavLink>
                    </StyledButtonContainer>

                    <StyledButtonContainer><button type="submit">Register</button></StyledButtonContainer>
                </form>
            </StyledContainer>
            <img src={wave_vector} alt="waves" style={{ "position": "absolute", "bottom": "0" }} />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    .back-button{
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        cursor: pointer;
        text-transform: capitalize;
        border-radius: .5rem;
        padding: .25rem 1.5rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        &:hover{
            background-color: #e0e0e0;
            color: black;
        }
    }
`;

const StyledContainer = styled.div`
    margin: 1rem;
    margin-top: 10vh;
    align-self: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #e0e0e0;
    border-radius: .5rem;

    div {
        padding-left: .25rem;
        margin-bottom: .5rem;
    }

    input{
        width: 18rem;
        border: 2px solid #e0e0e0;
        border-radius: .25rem;
        padding: .25rem .5rem;

        &:nth-child(2n){
            margin-bottom: 1rem;
        }
    }

    a{
        font-size: 90%;
        width: 100%;
        text-transform: capitalize;
        text-align: right;
        font-style: italic;
        text-decoration: underline;
    }

    button{
        text-transform: capitalize;
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        margin: 1rem 0 0 0;
        color: darkslateblue;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        &:hover{
            background-color: #e0e0e0;
            color: black;
        }
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        cursor: pointer;
        text-transform: capitalize;
        border-radius: .5rem;
        padding: .5rem 1.5rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        &:hover{
            background-color: #e0e0e0;
            color: black;
        }
    }
    
    &:last-child{
        margin-bottom: 2rem;
    }
`;

export default LoginPage;
