import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function DashboardComponent() {
    const data_one = { "currency": "BTC crypto" };
    const data_two = { "currency": "ETH crypto" };
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

            <select name="filters" id="filter list">
                <option value="all">ALL</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
            </select>

            <h1>List of Dashboards</h1>
            <Link to="/dashboard" state={data_one}>
                <Dashboard data={data_one} />
            </Link>
            <Link to="/dashboard" state={data_two}>
                <Dashboard data={data_two} />
            </Link>
            <Dashboard />
        </>
    )
}

export default DashboardComponent;