import "./App.css";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import NewPage from "./pages/NewPage";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
