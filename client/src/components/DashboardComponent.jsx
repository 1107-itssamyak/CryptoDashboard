import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function DashboardComponent() {
    const data_one = { currency: "BTC" };
    const data_two = { currency: "ETH" };

    return (
        <div className="flex flex-col w-full p-4">
            <div className="flex w-full flex-row justify-around px-2 mb-8">
                <div className="flex items-center justify-center">
                    <a href="/new" className="new flex items-center py-2 px-4 capitalize rounded border-2 hover:bg-indigo-400 hover:text-white transition-all cursor-pointer">new dashboard</a>
                </div>

                <div className="inputSearch w-1/2 flex flex-row justify-around p-2 items-center">
                    <div className="px-2 font-bold">Search</div>
                    <input
                        type="text"
                        className="px-2 py-2 w-full border-2 "
                        placeholder="Search Dashboard"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <select
                        className="border-2 font-bold h-12 w-32 px-2"
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
                <h1 className="font-bold px-4 text-lg">List of Dashboards</h1>
                <div className="flex flex-wrap overflow-x-auto max-h-100">
                    <Link
                        to="/dashboard"
                        state={data_one}
                        className="m-2 p-1 inline-block"
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_two}
                        className="m-2 p-1 inline-block"
                    >
                        <Dashboard data={data_two} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                        className="m-2 p-1 inline-block"
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                        className="m-2 p-1 inline-block"
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_one}
                        className="m-2 p-1 inline-block"
                    >
                        <Dashboard data={data_one} />
                    </Link>
                    <Link
                        to="/dashboard"
                        state={data_two}
                        className="m-2 p-1 inline-block"
                    >
                        <Dashboard data={data_two} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;
