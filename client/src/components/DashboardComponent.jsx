import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function DashboardComponent() {
    const data_one = { currency: "BTC" };
    const data_two = { currency: "ETH" };

    return (
        <div>
            <div>
                <div>
                    <a href="/new">new dashboard</a>
                </div>

                <div>
                    <div>Search</div>
                    <input
                        type="text"
                        placeholder="Search Dashboard"
                    />
                </div>

                <div>
                    <select
                        name="filters"
                        id="filter list"
                    >
                        <option value="all">ALL</option>
                        <option value="btc">BTC</option>
                        <option value="eth">ETH</option>
                    </select>
                </div>
            </div>

            <div className="list-none">
                <h1>List of Dashboards</h1>
                <div>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_two}
                    >
                        <Dashboard data={data_two} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_two}
                    >
                        <Dashboard data={data_two} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;
