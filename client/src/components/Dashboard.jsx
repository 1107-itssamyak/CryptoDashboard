import React from 'react'
import { useLocation } from 'react-router';

function Dashboard(props) {
    const location = useLocation();
    let currency;
    if (location.state)
        currency = location.state.currency;

    return (
        <div className='p-4 m-1 w-64 h-36 flex flex-col justify-around bg-pink-100 rounded drop-shadow-md'>
            <h3> DashboardComponent Name </h3>
            <ul>
                {currency !== undefined && <li className='font-bold'>{currency}</li>}
                {props.data && <li className='pt-4 italic font-semibold'>{props.data.currency}</li>}
            </ul>
        </div >
    )
}

export default Dashboard;