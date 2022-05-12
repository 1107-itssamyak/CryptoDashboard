import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

import styled from 'styled-components';

function MostVisitedDashboard() {
    const data_one = ["ETH"];
    return (
        <>
            <StyledTitle>
                <h3>Most Visited Dashboard</h3>
            </StyledTitle>
            <StyledContent>
                <Link to="/dashboard" state={data_one}>
                    <Dashboard data={data_one} />
                </Link>
            </StyledContent>
        </>
    )
}

const StyledTitle = styled.div`
    padding: 1rem 2rem;
    text-align: center;
    h3{
        border-radius: .5rem;
        padding: .25rem 1rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        font-weight: 700;
    }
`;

const StyledContent = styled.div`
    text-align: center;
    padding: 0rem 2rem;
    margin-bottom: .5rem;
`;

export default MostVisitedDashboard;