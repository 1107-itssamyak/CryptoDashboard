import React from 'react'
import styled from 'styled-components';

function ProfileStat() {
    return (
        <StyledDiv>
            <h3>Profile Stat</h3>
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
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    margin: 1rem 2rem;
    padding: 1rem;
    border-radius: .5rem;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    h3{

        border-radius: .5rem;
        padding: .25rem 1rem;
        font-weight: 700;
    }
`

export default ProfileStat;