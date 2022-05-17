import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./Dashboard";

function DashboardComponent({ dashboardList }) {
    // const data_one = ["ETH", "BTC"];
    // const data_two = ["BTC", "ETH"];

    return (
        <StyledContainer>
            <StyledHeader>
                <div>
                    <a href="/new">new dashboard</a>
                </div>

                <div>
                    <label htmlFor="search" className="mr-2">Search</label>
                    <input
                        type="text"
                        id="search"
                        placeholder="Search Dashboard"
                        className='border-2 p-1 px-2'
                    />
                </div>

                <div>
                    <select
                        className='w-72 border-2 pl-4 py-1 rounded'
                        name="filters"
                        id="filter list"
                    >
                        <option value="all">ALL</option>
                        <option value="btc">BTC</option>
                        <option value="eth">ETH</option>
                    </select>
                </div>
            </StyledHeader>

            <div className="list-none">
                <h2 className='font-bold text-lg pl-16 mt-4 my-4'>List of Dashboards</h2>
                <StyledDashboardContainer>
                    {
                        dashboardList.map((d) => {
                            return (
                                <Link to="/dashboard" className="inline-block" state={d.id}>
                                    <Dashboard data={d.currencyList} id={d.id} />
                                </Link>
                            )
                        })
                    }
                    {/* <Link
                        className="inline-block"
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_two}
                    >
                        <Dashboard data={data_two} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_two}
                    >
                        <Dashboard data={data_two} />
                    </Link> */}
                </StyledDashboardContainer>
            </div>
        </StyledContainer>
    );
}

const StyledHeader = styled.div`
    width: 90%;
    align-self: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: .5rem;

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

    div{
        flex: 0.3;
        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-child(2n){
            justify-content: space-evenly;
        }
    }
`;

const StyledContainer = styled.div`
    flex: 0.8;
    display: flex;
    flex-direction: column;
`;

const StyledDashboardContainer = styled.div`
    max-height: 60vh;
    overflow-y: scroll;
    display: grid;
    place-items: center;
    gap: 1rem;
    padding: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media only screen and (max-width: 968px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media only screen and (max-width: 860px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

export default DashboardComponent;
