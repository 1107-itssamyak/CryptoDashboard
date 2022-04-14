import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CurrencyContainer from '../components/CurrencyContainer.jsx';

function NewPage() {
    const [currencyList, setCurrencyList] = useState([]);

    const [dashboardName, setdashboardName] = useState("");
    const [currencyName, setCurrencyName] = useState("");
    const [currencyWorth, setCurrencyWorth] = useState(0);
    const [toggle, setToggle] = useState(false);

    let checkName = currencyName ? true : false;

    function handleChange(e, setChange) {
        setChange(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // there should also be a check so that we know the currency is existing or not
        // the currency should also be added to set so we know that we are not calling the same currency again  
        // pushing the currencyName to the array of rendered currency items
        setCurrencyList(list => {
            return [...list, currencyName];
        })

        setCurrencyName("");
        setCurrencyWorth(0);
    }

    return (
        <>
            <div className="home">
                <NavLink to={"/"}>home</NavLink>
                {/* <a href="/">home</a> */}
            </div>

            <br />
            <div className="cancel">
                <NavLink to={"/"}>cancel</NavLink>
                {/* <a href="/">cancel</a> */}
            </div>

            <br />
            <div className="completed">
                <a href="/">done</a>
            </div>

            <div className="dashboardname">
                Name of Dashboard Page
                <input type="text" value={dashboardName} onChange={(e) => handleChange(e, setdashboardName)} />
            </div>

            <br />
            {dashboardName ? dashboardName : null}

            <div className="currencies">
                List of Currencies:
                {currencyList.map((currency, i) =>
                    <CurrencyContainer key={i} name={currency} />
                )}
                <div>
                    Enter currency:
                    <input type="text" value={currencyName} onChange={(e) => handleChange(e, setCurrencyName)} />
                </div>
                <div className="container"></div>
            </div>

            <br />
            {checkName
                && <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            Currency Worth
                            <input type="text" value={currencyWorth} onChange={(e) => handleChange(e, setCurrencyWorth)} />
                        </div>
                        <div>
                            Toggle: Persistance
                            <input type="checkbox" checked={toggle} onChange={(e) => handleChange(e, setToggle)} />
                        </div>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default NewPage;