import React from 'react'

function ProfileStat() {
    return (
        <div className='m-1 p-2 py-4 mx-4 inline-block rounded border-2 bg-gray-300'>
            <div className='font-bold mb-4'>Profile Stat</div>
            <div className="worth">
                <span>Net worth: </span>
                <span className="worth_value"> &#36;1000</span>
            </div>
            <div className="curreny">Currency: <span className='italic font-bold'>USD</span>
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