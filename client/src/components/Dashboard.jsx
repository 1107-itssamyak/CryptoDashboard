import React from 'react'
import { useLocation } from 'react-router';

import styled from 'styled-components';

function Dashboard({ data }) {
    const location = useLocation();
    let currency;
    if (location.state)
        currency = location.state.currency;

    return (
        <StyledDiv>
            <h3>DashboardComponent Name</h3>
            <ul>
                {currency !== undefined && <li className='font-bold'>{currency}</li>}
                {data.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    height: 10.5rem;
    width: 16rem;
    margin: .5rem;
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3{
        font-weight: 700;
    }
    ul {
        display: flex;
        flex-direction: row;
    }
    ul li{
        text-align: center;
        border: 2px solid;
        width: 4rem;
        font-size: 90%;
        border-radius: .25rem;
        margin: .5rem;

        &:hover{
            background-color: #e0e0e0;
        }
    }

`;

export default Dashboard;