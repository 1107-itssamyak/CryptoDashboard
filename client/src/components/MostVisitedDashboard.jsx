import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function MostVisitedDashboard() {
    const data_one = { "currency": "ETH" };
    return (
        <>
            <div className='m-1 p-2 mx-4 inline-block rounded border-2 bg-gray-300'>
                <h3 className='font-bold text-center'>Most Visited dashboard</h3>
            </div>
            <div className='mb-4'>
                <Link to="/dashboard" state={data_one} className='m-2 p-1 inline-block'>
                    <Dashboard data={data_one} />
                </Link>
            </div>
        </>
    )
}

export default MostVisitedDashboard;