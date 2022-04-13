import React from 'react'
import DashboardComponent from '../components/DashboardComponent';
import MostVisitedDashboard from '../components/MostVisitedDashboard';
import ProfileStat from '../components/ProfileStat';
import RecentDashboard from '../components/RecentDashboard';

function HomePage() {
    return (
        <>
            <div className="login">
                <a href="login">login</a>
            </div>
            <div className="register">
                <a href="/register">register</a>
            </div>

            <div className="user">
                <div className="font-bold">Name</div>
            </div>

            <br />
            <MostVisitedDashboard />

            <br />
            <RecentDashboard />

            <br />
            <ProfileStat />

            <br />
            <DashboardComponent />
        </>
    )
}

export default HomePage;