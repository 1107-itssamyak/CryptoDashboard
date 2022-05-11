import React from 'react'

function ProfileStat() {
    return (
        <div>
            <div>Profile Stat</div>
            <div className="worth">
                <span>Net worth: </span>
                <span className="worth_value"> &#36;1000</span>
            </div>
            <div className="curreny">Currency: <span>USD</span>
            </div>

            {/* //? theme toggle can added here, if need is required over here (connect context api first)
                <div className="theme-toggle">
                Light / Dark Mode
                // add toggle button and con
            </div> */}
        </div>
    )
}

export default ProfileStat;