import React from 'react'

function ProfileStat() {
    return (
        <div>
            <div className="worth">
                <span>net worth</span>
                <span className="worth_value">1000</span>
            </div>
            <div className="curreny">Currency: USD</div>

            {/* //? theme toggle can added here, if need is required over here (connect context api first)
                <div className="theme-toggle">
                Light / Dark Mode
                // add toggle button and con
            </div> */}
        </div>
    )
}

export default ProfileStat;