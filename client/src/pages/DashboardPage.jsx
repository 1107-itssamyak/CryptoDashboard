import React from 'react'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

function DashboardPage(props) {
    const location = useLocation();
    // let currency;
    // if (location.state)
    //     currency = location.state.currency;

    return (
        <div>
            <NavLink to="/" className="back-button">home</NavLink>
            <h3> DashboardComponent Name </h3>
            This is new Dashboard page

            <ul>
                {location.state && location.state.id}
            </ul>

            <div>Graphs 1</div>
            <div>Graphs 2</div>
        </div >
    )
}

export default DashboardPage;