import React from 'react'
import Dashboard from './Dashboard';

function DashboardComponent() {
    return (
        <>
            <div className="new">
                <a href="new">new dashboard</a>
            </div>
            <div className="inputSearch">
                <div>Search</div>
                <input type="text" placeholder='Search Dashboard' />
            </div>
            <br />

            <select name="cars" id="cars">
                <option value="all">ALL</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
            </select>

            <h1>List of Dashboards</h1>

            {/* send props to dashboard component. */}
            <Dashboard />
            <Dashboard />
        </>
    )
}

export default DashboardComponent;