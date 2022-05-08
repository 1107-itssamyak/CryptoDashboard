import React from 'react'
import DashboardComponent from '../components/DashboardComponent';
import MostVisitedDashboard from '../components/MostVisitedDashboard';
import ProfileStat from '../components/ProfileStat';
import RecentDashboard from '../components/RecentDashboard';

function HomePage() {
    return (
        <div>
            <div className="container flex flex-wrap justify-between items-center my-4">
                <a href="/" className="flex items-center pl-4">
                    <span className="self-center text-xl whitespace-nowrap italic font-bold dark:text-white">CryptoBoard</span>
                </a>

                <div className='flex flex-row mx-8'>
                    <a href="/login" className="login mx-4 py-2 px-6 rounded border-2 hover:bg-indigo-400 hover:text-white transition-all cursor-pointer">
                        <div>login</div>
                    </a>
                    <a href="/register" className="login mx-4 py-2 px-4 rounded border-2 hover:bg-indigo-400 hover:text-white transition-all cursor-pointer capitalize">
                        <div>register</div>
                    </a>
                    <div className="user mx-2 pr-4 flex items-center">
                        <div className="font-bold">Name</div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div style={{ "height": "75vh", "width": "22vw" }} className='flex flex-col pt-8'>
                    <MostVisitedDashboard />
                    <RecentDashboard />
                    <ProfileStat />
                </div>
                <DashboardComponent />
            </div>
        </div >
    )
}

export default HomePage;