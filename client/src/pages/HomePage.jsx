import React from "react";
import DashboardComponent from "../components/DashboardComponent";
import MostVisitedDashboard from "../components/MostVisitedDashboard";
import ProfileStat from "../components/ProfileStat";
import RecentDashboard from "../components/RecentDashboard";

function HomePage() {
    return (
        <div>
            <div>
                <a href="/">
                    <span>CryptoBoard</span>
                </a>

                <div>
                    <a href="/login">
                        <div>login</div>
                    </a>
                    <a href="/register">
                        <div>register</div>
                    </a>
                    <div>
                        <div>Name</div>
                    </div>
                </div>
            </div>

            <div>
                <div style={{ height: "75vh", width: "22vw" }}>
                    <MostVisitedDashboard />
                    <RecentDashboard />
                    <ProfileStat />
                </div>
                <DashboardComponent />
            </div>
        </div>
    );
}

export default HomePage;
