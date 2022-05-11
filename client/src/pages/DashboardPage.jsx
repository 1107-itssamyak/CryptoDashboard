import React from 'react'
import { useLocation } from 'react-router';

function DashboardPage(props) {
    const location = useLocation();
    let currency;
    if (location.state)
        currency = location.state.currency;

    return (
        <div>
            <h3> DashboardComponent Name </h3>
            This is new Dashboard page
            <ul>
                {currency !== undefined && <li className='font-bold'>{currency}</li>}
                {props.data && <li>{props.data.currency}</li>}
            </ul>

            <div>Graphs 1</div>
            <div>Graphs 2</div>
        </div >
    )
}

export default DashboardPage;