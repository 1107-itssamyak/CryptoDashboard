import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CurrencyContainer from '../components/CurrencyContainer.jsx';
import Context from '../Context.jsx';

function NewPage() {
    const navigate = useNavigate();
    const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
    const myContext = useContext(Context);

    const [dashboardName, setdashboardName] = useState("");
    const [currencyList, setCurrencyList] = useState([{}]);

    const [currId, setCurrId] = useState("");
    const [amount, setAmount] = useState(0);
    const [toggle, setToggle] = useState(true);

    let checkName = currId ? true : false;

    function handleChange(e, setChange) {
        setChange(e.target.value);
    }

    // console.log(currencyList);
    // console.log(myContext.userObject);
    // myContext.setUserObjectFunc(localStorage.getItem("localuserObject"));
    console.log(myContext.userObject);

    function finalHandleSubmit(e) {
        e.preventDefault();

        let temp = currencyList.shift();
        const obj = {
            "token": myContext.userObject,
            "dashboard": {
                "dashboardID": encodeURIComponent(dashboardName),
                "currencyList": currencyList,
                "value": 0,
                "amount": 0
            }
        }

        console.log(obj);
        axios({
            method: 'POST',
            url: api_endpoint + `/new/`,
            data: {
                token: myContext.userObject,
                dashboard: {
                    dashboardID: encodeURIComponent(dashboardName),
                    currencyList: currencyList,
                    amount: 0,
                    value: 0
                }
            },
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            withCredentials: false,
        }).then((Response) => {
            if (Response.status === 201) navigate("/");
        }).catch((res) => {
            console.log(res);
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (currId === "") return;
        if (amount === 0) return;

        // there should also be a check so that we know the currency is existing or not
        // the currency should also be added to set so we know that we are not calling the same currency again  
        // pushing the currencyName to the array of rendered currency items
        setCurrencyList([...currencyList, {
            currId: currId,
            amount: Number(amount),
            persistence: Boolean(toggle)
        }]);

        setCurrId("");
        setAmount(0);
    }

    return (
        <>
            <div className='flex flex-row justify-between m-4 mt-8 py-4'>
                <div>
                    <h1 className='font-bold pl-8 italic text-lg'>Create New Dashboard</h1>
                </div>

                <div className='flex flex-row'>
                    <StyledButtonContainer>
                        <NavLink to={"/"}>Cancel</NavLink>
                    </StyledButtonContainer>
                    <StyledButtonContainer>
                        <NavLink to={"/"} onClick={finalHandleSubmit}>Done</NavLink>
                    </StyledButtonContainer>
                </div>
            </div>

            <StyledWrapper>
                <StyledContainer className="dashboardname">
                    Name for Dashboard:
                    <input type="text" value={dashboardName} onChange={(e) => handleChange(e, setdashboardName)} />
                </StyledContainer>

                {/* display name of the new dashboard if it exists otherwise not */}
                {dashboardName ? dashboardName : null}

                <StyledContainer>
                    Enter currency:
                    <input type="text" value={currId} onChange={(e) => handleChange(e, setCurrId)} />
                </StyledContainer>

                {/* <div className='mt-4'>
                    List of Currencies:
                    {currencyList.map((currency, i) =>
                        <CurrencyContainer key={i} name={currency.currId} />
                    )}
                </div> */}

                {checkName &&
                    <div className='p-4 border-2 my-4 inline-block font-semibold rounded-l'>
                        <form onSubmit={handleSubmit}>
                            <StyledContainer>
                                Currency Worth:
                                <input type="text" className='ml-1' value={amount} onChange={(e) => handleChange(e, setAmount)} />
                            </StyledContainer>

                            <div className='my-2'>
                                Toggle: Persistance
                                <input type="checkbox" className='ml-2' checked={toggle} onChange={(e) => handleChange(e, setToggle)} />
                            </div>

                            <StyledButtonContainer>
                                <button type="submit">submit</button>
                            </StyledButtonContainer>
                        </form>
                    </div>
                }
            </StyledWrapper>
        </>
    )
}

const StyledButtonContainer = styled.div`
    padding-right: 2rem;
    margin-top: .75rem;
    a, button{
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
`;

const StyledContainer = styled.div`
    margin-top: 1rem;
    input{
        margin-inline: 1rem;
        width: 16rem;
        border: 2px solid #e0e0e0;
        border-radius: .25rem;
        padding: .25rem .5rem;

        &:nth-child(2n){
            margin-bottom: 1rem;
        }
    }
`;

const StyledWrapper = styled.div`
    padding-top: 2rem;
    margin-inline: 2rem;
`;

export default NewPage;