import React from 'react'
import { useLocation } from 'react-router';

function Dashboard(props) {
    const location = useLocation();
    let currency;
    if (location.state)
        currency = location.state.currency;

    return (
        <div style={{ border: "1px solid black" }}>
            <h3> DashboardComponent Name </h3>
            <ul>
                {currency !== undefined && <li className='font-bold'>{currency}</li>}
                {props.data && <li>{props.data.currency}</li>}
            </ul>
        </div >
    )
}

export default Dashboard;  