import React, { useContext, useEffect, useState } from "react";
import DashboardComponent from "../components/DashboardComponent";
import MostVisitedDashboard from "../components/MostVisitedDashboard";
import ProfileStat from "../components/ProfileStat";
import RecentDashboard from "../components/RecentDashboard";

import axios from 'axios';

import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Context from "../Context";

function HomePage() {
    const [amount, setAmount] = useState(0);
    const [mode, setMode] = useState(false);
    const [Name, setName] = useState("Guest User")

    const [dashboardList, setdashboardList] = useState([]);

    const api_endpoint = process.env.REACT_APP_API_ENDPOINT;
    const myContext = useContext(Context);

    useEffect(() => {
        if (myContext.userObject === null) return;

        axios
            .get(api_endpoint + `/home/${myContext.userObject}`, {
                withCredentials: false,
            })
            .then((response) => {
                console.log(response.data);

                // setting user Variables after getting data
                setAmount(response.data.amount);
                setMode(response.data.metricData.mode);
                setName(response.data.username);

                setdashboardList(response.data.dashboardList);
            });
    }, [myContext.userObject, api_endpoint]);

    return (
        <div className='flex flex-col'>
            <div>
                <NavbarStyled>
                    <NavLink to="/" className="navbar__title">CryptoBoard</NavLink>

                    <div className="navbar__list">
                        <li>
                            <NavLink to="/login">login</NavLink>
                        </li>

                        <li>
                            <NavLink to="/register">register</NavLink>
                        </li>

                        <li className="font-bold italic">{Name}</li>
                    </div>
                </NavbarStyled>
            </div>

            <div className='flex flex-row'>
                <StyledLeftSide>
                    <MostVisitedDashboard />
                    <RecentDashboard />
                    <ProfileStat mode={mode} amount={amount} />
                </StyledLeftSide>
                <DashboardComponent dashboardList={dashboardList} />
            </div>
        </div>
    );
}

const NavbarStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: .5rem;
    margin: 1rem 2rem;
    padding: 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

    .navbar__title{
        font-size: 1.5rem;
        text-decoration: underline;
        text-transform: uppercase;
        font-style: italic;
        padding: 0 2rem;
    }

    .navbar__list{
        display: flex;
        flex-direction: row;

        li{
            padding: 0 1rem;
            a{
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
                margin-right: 4rem;
            }
        }
    }
`

const StyledLeftSide = styled.div`
    flex: 0.2;
`;

export default HomePage;
