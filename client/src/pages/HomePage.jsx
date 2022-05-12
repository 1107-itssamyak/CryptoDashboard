import React from "react";
import DashboardComponent from "../components/DashboardComponent";
import MostVisitedDashboard from "../components/MostVisitedDashboard";
import ProfileStat from "../components/ProfileStat";
import RecentDashboard from "../components/RecentDashboard";

import styled from 'styled-components';

function HomePage() {
    return (
        <div className='flex flex-col'>
            <div>
                <NavbarStyled>
                    <a href="/" className="navbar__title"><span>CryptoBoard</span></a>

                    <div className="navbar__list">
                        <li><a href="/login">login</a></li>

                        <li><a href="/register">register</a></li>

                        <li>Name</li>
                    </div>
                </NavbarStyled>
            </div>

            <div className='flex flex-row'>
                <StyledLeftSide>
                    <MostVisitedDashboard />
                    <RecentDashboard />
                    <ProfileStat />
                </StyledLeftSide>
                <DashboardComponent />
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
