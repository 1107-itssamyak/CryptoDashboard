import "./App.css";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import NewPage from "./pages/NewPage";
import DashboardPage from "./pages/DashboardPage";
import { useState } from "react";
import Context from "./Context";

function App() {
    let localuserObject = localStorage.getItem("localuserObject");
    const [userObject, setUserObject] = useState(localuserObject);

    function setUserObjectFunc(token) {
        setUserObject(token);
        localStorage.setItem("localuserObject", token);
    }

    return (
        <Context.Provider value={{
            userObject,
            setUserObjectFunc: setUserObjectFunc
        }}>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Context.Provider>
    );
}

export default App;
