import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function MostVisitedDashboard() {
    const data_one = { "currency": "ETH" };
    return (
        <>
            <div>
                <h3>Most Visited dashboard</h3>
            </div>
            <div>
                <Link to="/dashboard" state={data_one}>
                    <Dashboard data={data_one} />
                </Link>
            </div>
        </>
    )
}

export default MostVisitedDashboard;